import { LayoutDashboard, Calculator, BookOpen, User, LogOut, FolderOpen, Scale, FolderDown, CalendarDays, Languages } from "lucide-react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/logo.png";

function useNavItems() {
  const { t } = useTranslation();
  return [
    { href: "/mes-projets", labelKey: "common.nav.myProjects", icon: FolderOpen },
    { href: "/dashboard", labelKey: "common.nav.steps", icon: LayoutDashboard },
    { href: "/galerie", labelKey: "common.nav.myFolders", icon: FolderDown },
    { href: "/budget", labelKey: "common.nav.budget", icon: Calculator },
    { href: "/echeancier", labelKey: "common.nav.schedule", icon: CalendarDays },
    { href: "/code-batiment", labelKey: "common.nav.buildingCode", icon: Scale },
    { href: "/guide", labelKey: "common.nav.guide", icon: BookOpen },
  ];
}

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { t, i18n } = useTranslation();
  const navItems = useNavItems();
  const { user, profile, signOut, loading } = useAuth();
  
  // Get project ID from URL if available
  const projectId = searchParams.get("project") || location.pathname.match(/\/projet\/([^/]+)/)?.[1];

  const setLang = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const getInitials = () => {
    if (profile?.display_name) {
      return profile.display_name.substring(0, 2).toUpperCase();
    }
    if (user?.email) {
      return user.email.substring(0, 2).toUpperCase();
    }
    return "U";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MonProjetMaison.ca" className="h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href || 
              (item.href === "/galerie" && location.pathname === "/galerie");
            
            // Add project parameter for relevant pages
            let href = item.href;
            if (
              projectId &&
              (item.href === "/galerie" ||
                item.href === "/dashboard" ||
                item.href === "/budget")
            ) {
              href = `${item.href}?project=${projectId}`;
            }
            
            return (
              <Link
                key={item.href}
                to={href}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-accent/10 text-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                <Icon className="h-4 w-4" />
                {t(item.labelKey)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9" title={t("common.language")}>
                <Languages className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLang("fr")}>Français</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLang("en")}>English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {!loading && (
            <>
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={profile?.avatar_url || undefined} alt={profile?.display_name || "User"} />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {getInitials()}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        {profile?.display_name && (
                          <p className="font-medium">{profile.display_name}</p>
                        )}
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate("/mes-projets")}>
                      <FolderOpen className="mr-2 h-4 w-4" />
                      {t("common.nav.myProjectsMenu")}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate(projectId ? `/dashboard?project=${projectId}` : "/dashboard")}>
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      {t("common.nav.stepsMenu")}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut} className="text-destructive">
                      <LogOut className="mr-2 h-4 w-4" />
                      {t("common.nav.signOut")}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button variant="ghost" size="sm" onClick={() => navigate("/auth")}>
                    <User className="h-4 w-4 mr-2" />
                    {t("common.nav.signIn")}
                  </Button>
                  <Button variant="accent" size="sm" className="hidden sm:flex" onClick={() => navigate("/auth")}>
                    {t("common.nav.getStarted")}
                  </Button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
