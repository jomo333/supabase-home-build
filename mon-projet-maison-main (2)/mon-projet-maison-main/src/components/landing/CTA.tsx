import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const benefitKeys = ["cta.benefit1", "cta.benefit2", "cta.benefit3", "cta.benefit4"] as const;

export function CTA() {
  const { t } = useTranslation();
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-hero p-8 md:p-12 lg:p-16">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t("cta.title")}
              </h2>
              <p className="mt-4 text-lg text-white/80">
                {t("cta.subtitle")}
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {benefitKeys.map((key) => (
                  <li key={key} className="flex items-center gap-2 text-white/90">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-sm">{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-4">
              <Link to="/dashboard">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  {t("cta.startFree")}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <p className="text-sm text-white/60">
                {t("cta.noCard")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
