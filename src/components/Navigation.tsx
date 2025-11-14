import { Link, useNavigate, useLocation } from "react-router-dom";
import { Shield, LogOut, User, History, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavigationProps {
  isAuthenticated?: boolean;
}

export const Navigation = ({ isAuthenticated = false }: NavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Mock logout - will be replaced with actual auth
    navigate("/login");
  };

  const navLinks = [
    { name: "Home", path: "/", show: !isAuthenticated },
    { name: "Dashboard", path: "/dashboard", show: isAuthenticated },
    { name: "Features", path: "/#features", show: !isAuthenticated },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
              DataShield.Ai
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.show ? (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ) : null
            )}

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <User className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-popover">
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    <User className="w-4 h-4 mr-2" />
                    Update Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/history")}>
                    <History className="w-4 h-4 mr-2" />
                    Scan History
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-3">
                <Button variant="ghost" onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button variant="cyber" onClick={() => navigate("/register")}>
                  Get Started
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-card">
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) =>
                  link.show ? (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        isActive(link.path) ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ) : null
                )}
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/profile"
                      className="text-lg font-medium text-muted-foreground hover:text-primary"
                    >
                      Update Profile
                    </Link>
                    <Link
                      to="/history"
                      className="text-lg font-medium text-muted-foreground hover:text-primary"
                    >
                      Scan History
                    </Link>
                    <Button variant="destructive" onClick={handleLogout} className="mt-4">
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" onClick={() => navigate("/login")} className="justify-start">
                      Login
                    </Button>
                    <Button variant="cyber" onClick={() => navigate("/register")}>
                      Get Started
                    </Button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
