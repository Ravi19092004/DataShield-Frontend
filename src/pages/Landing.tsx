import { Shield, Zap, Lock, Chrome, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "Real-Time Protection",
      description: "AI-powered phishing detection analyzes URLs instantly before you click.",
    },
    {
      icon: Zap,
      title: "Gamified Trust Scores",
      description: "Every site gets a 0-100 trust score with color-coded safety indicators.",
    },
    {
      icon: Lock,
      title: "Advanced ML Model",
      description: "Pre-trained XGBoost model with IP, ASN, and geolocation analysis.",
    },
    {
      icon: Chrome,
      title: "Browser Extension",
      description: "Seamless protection with hover analysis and automatic blocking.",
    },
  ];

  const installSteps = [
    "Download the DataShield.Ai browser extension",
    "Pin the extension to your toolbar",
    "Create your free account or login",
    "Browse safely with real-time protection!",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation isAuthenticated={false} />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Phishing Detection</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            Browse Safely with AI Protection
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            DataShield.Ai uses advanced machine learning to detect phishing attacks in real-time,
            protecting you from malicious websites before you even click.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cyber" size="lg" onClick={() => navigate("/register")}>
              <Download className="w-5 h-5 mr-2" />
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate("/login")}>
              Login to Dashboard
            </Button>
          </div>

          <div className="mt-12 relative">
            <div className="absolute inset-0 bg-gradient-cyber opacity-20 blur-3xl rounded-full"></div>
            <Card className="relative bg-card/50 backdrop-blur border-primary/20 shadow-glow-cyan">
              <CardContent className="p-8">
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Detection Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                    <div className="text-sm text-muted-foreground">Sites Analyzed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                    <div className="text-sm text-muted-foreground">Protected Users</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Security Features</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive protection powered by advanced AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-cyan animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our AI Model Works</h2>
            <p className="text-lg text-muted-foreground">
              Advanced machine learning ensures maximum protection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <CardTitle>URL Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our XGBoost model analyzes URL patterns, domain age, and SSL certificates
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Feature Enrichment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We gather IP address, ASN data, and geographic location for comprehensive analysis
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Trust Score</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Generate a gamified 0-100 score with color-coded safety indicators
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="container mx-auto px-4 py-20 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Easy Installation</h2>
            <p className="text-lg text-muted-foreground">Get protected in under 2 minutes</p>
          </div>

          <Card className="bg-card border-primary/20 shadow-glow-cyan">
            <CardContent className="p-8">
              <div className="space-y-6">
                {installSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Step {index + 1}</h3>
                      <p className="text-muted-foreground">{step}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button variant="cyber" size="lg" onClick={() => navigate("/register")}>
                  <Download className="w-5 h-5 mr-2" />
                  Download Extension
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-cyber text-foreground border-0 shadow-glow-purple">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Browse Safely?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of users protecting themselves from phishing attacks with AI-powered detection
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
              onClick={() => navigate("/register")}
            >
              Start Protecting Yourself Today
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 DataShield.Ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
