import { Brain, Calculator, ListChecks, FileCheck, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const featureKeys = [
  { icon: Brain, titleKey: "features.feature1Title", descKey: "features.feature1Desc", color: "bg-accent/10 text-accent" },
  { icon: Calculator, titleKey: "features.feature2Title", descKey: "features.feature2Desc", color: "bg-success/10 text-success" },
  { icon: ListChecks, titleKey: "features.feature3Title", descKey: "features.feature3Desc", color: "bg-primary/10 text-primary" },
  { icon: FileCheck, titleKey: "features.feature4Title", descKey: "features.feature4Desc", color: "bg-warning/10 text-warning" },
] as const;

export function Features() {
  const { t } = useTranslation();
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t("features.sectionTitle")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("features.sectionSubtitle")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featureKeys.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.titleKey} 
                className="group relative overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-display text-lg">{t(feature.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {t(feature.descKey)}
                  </CardDescription>
                </CardContent>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="h-4 w-4 text-accent" />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
