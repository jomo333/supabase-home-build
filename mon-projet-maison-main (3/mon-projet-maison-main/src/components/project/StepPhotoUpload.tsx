import { useState, useRef } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Camera, Upload, Loader2, Trash2, X, ImageIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface StepPhotoUploadProps {
  projectId: string;
  stepId: string;
  stepTitle: string;
}

export const StepPhotoUpload = ({ projectId, stepId, stepTitle }: StepPhotoUploadProps) => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  // Fetch photos for this step
  const { data: photos = [], isLoading } = useQuery({
    queryKey: ["step-photos", projectId, stepId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("project_photos")
        .select("*")
        .eq("project_id", projectId)
        .eq("step_id", stepId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
    enabled: !!projectId && !!user,
  });

  const uploadMutation = useMutation({
    mutationFn: async (file: File) => {
      if (!user) throw new Error("Non authentifié");

      const fileExt = file.name.split(".").pop();
      const uniqueId = Math.random().toString(36).substring(2) + Date.now().toString(36);
      const fileName = `${uniqueId}.${fileExt}`;
      const filePath = `${user.id}/${projectId}/${stepId}/${fileName}`;

      // Upload to storage
      const { error: uploadError } = await supabase.storage
        .from("project-photos")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabase.storage
        .from("project-photos")
        .getPublicUrl(filePath);

      // Save metadata
      const { error: dbError } = await supabase.from("project_photos").insert({
        project_id: projectId,
        step_id: stepId,
        file_name: file.name,
        file_url: publicUrlData.publicUrl,
        file_size: file.size,
      });

      if (dbError) throw dbError;

      return publicUrlData.publicUrl;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["step-photos", projectId, stepId] });
      queryClient.invalidateQueries({ queryKey: ["all-project-photos", projectId] });
      toast.success("Photo ajoutée avec succès!");
    },
    onError: (error: any) => {
      toast.error("Erreur: " + error.message);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (photo: { id: string; file_url: string }) => {
      // Extract path from URL
      const urlParts = photo.file_url.split("/project-photos/");
      if (urlParts.length > 1) {
        const filePath = urlParts[1];
        await supabase.storage.from("project-photos").remove([filePath]);
      }

      const { error } = await supabase
        .from("project_photos")
        .delete()
        .eq("id", photo.id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["step-photos", projectId, stepId] });
      queryClient.invalidateQueries({ queryKey: ["all-project-photos", projectId] });
      toast.success("Photo supprimée");
    },
    onError: (error: any) => {
      toast.error("Erreur: " + error.message);
    },
  });

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    try {
      for (const file of Array.from(files)) {
        if (!file.type.startsWith("image/")) {
          toast.error(`${file.name} n'est pas une image`);
          continue;
        }
        await uploadMutation.mutateAsync(file);
      }
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <>
      <Card className="mt-6">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Camera className="h-4 w-4" />
            Photos de suivi - {stepTitle}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Upload button */}
          <div className="mb-4">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
              className="hidden"
            />
            <Button
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="gap-2"
            >
              {isUploading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Téléversement...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4" />
                  Ajouter des photos
                </>
              )}
            </Button>
          </div>

          {/* Photos grid */}
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : photos.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <ImageIcon className="h-10 w-10 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Aucune photo pour cette étape</p>
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="relative group aspect-square rounded-lg overflow-hidden border cursor-pointer"
                  onClick={() => setSelectedPhoto(photo.file_url)}
                >
                  <img
                    src={photo.file_url}
                    alt={photo.file_name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteMutation.mutate({ id: photo.id, file_url: photo.file_url });
                    }}
                    className="absolute top-1 right-1 p-1 bg-destructive/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 className="h-3 w-3 text-destructive-foreground" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Photo viewer dialog */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Photo</DialogTitle>
          </DialogHeader>
          {selectedPhoto && (
            <img
              src={selectedPhoto}
              alt="Photo agrandie"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
