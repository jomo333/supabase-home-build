import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/landing/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Plus, FolderOpen, Calendar, DollarSign, Trash2, Loader2, Home } from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string | null;
  project_type: string | null;
  square_footage: number | null;
  total_budget: number;
  status: string;
  created_at: string;
  updated_at: string;
}

const MyProjects = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const queryClient = useQueryClient();

  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects", user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("updated_at", { ascending: false });
      
      if (error) throw error;
      return data as Project[];
    },
    enabled: !!user,
  });

  const deleteMutation = useMutation({
    mutationFn: async (projectId: string) => {
      const { error } = await supabase
        .from("projects")
        .delete()
        .eq("id", projectId);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast.success("Projet supprimé");
    },
    onError: () => {
      toast.error("Erreur lors de la suppression");
    },
  });

  // Redirect if not logged in
  if (!authLoading && !user) {
    navigate("/auth");
    return null;
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "en_cours":
        return <Badge className="bg-blue-500">En cours</Badge>;
      case "termine":
        return <Badge className="bg-green-500">Terminé</Badge>;
      case "pause":
        return <Badge variant="secondary">En pause</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-8">
        <div className="container space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="font-display text-3xl font-bold tracking-tight">
                Mes Projets
              </h1>
              <p className="text-muted-foreground mt-1">
                Retrouvez et gérez tous vos projets de construction
              </p>
            </div>
            
            <Button variant="accent" onClick={() => navigate("/start")}>
              <Plus className="h-4 w-4 mr-2" />
              Nouveau projet
            </Button>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : projects.length === 0 ? (
            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <FolderOpen className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="font-display text-lg font-medium mb-2">
                  Aucun projet
                </h3>
                <p className="text-muted-foreground mb-4">
                  Créez votre premier projet pour commencer à planifier votre construction
                </p>
                <Button variant="accent" onClick={() => navigate("/start")}>
                  <Plus className="h-4 w-4 mr-2" />
                  Créer mon premier projet
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Card 
                  key={project.id} 
                  className="hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => navigate(`/projet/${project.id}`)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <Home className="h-5 w-5 text-primary" />
                        <CardTitle className="font-display text-lg line-clamp-1">
                          {project.name}
                        </CardTitle>
                      </div>
                      {getStatusBadge(project.status)}
                    </div>
                    {project.description && (
                      <CardDescription className="line-clamp-2">
                        {project.description}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        {project.square_footage && (
                          <span>{project.square_footage} pi²</span>
                        )}
                        {project.total_budget > 0 && (
                          <span className="flex items-center gap-1">
                            <DollarSign className="h-3 w-3" />
                            {Number(project.total_budget).toLocaleString()} $
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(project.updated_at).toLocaleDateString('fr-CA')}
                      </div>
                    </div>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="destructive"
                        size="sm"
                        className="w-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (confirm("Supprimer ce projet?")) {
                            deleteMutation.mutate(project.id);
                          }
                        }}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Supprimer
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyProjects;
