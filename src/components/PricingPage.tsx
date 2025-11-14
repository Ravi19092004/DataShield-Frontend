import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Shield, Users, Globe } from "lucide-react";

interface PricingPageProps {
  onBack: () => void;
}

const PricingPage = ({ onBack }: PricingPageProps) => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "Up to 10 scans per day",
        "Basic threat detection",
        "Email support",
        "Community access"
      ],
      icon: Shield,
      popular: false
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "month",
      description: "For power users and small teams",
      features: [
        "Unlimited scans",
        "Advanced AI detection",
        "Real-time monitoring",
        "Priority support",
        "API access",
        "Custom reports"
      ],
      icon: Zap,
      popular: true
    },
    {
      name: "Enterprise",
      price: "$29.99",
      period: "month",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Dedicated support",
        "Custom integrations",
        "Advanced analytics",
        "SLA guarantee",
        "On-premise deployment"
      ],
      icon: Globe,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button variant="outline" onClick={onBack} className="mb-4">
            ← Back to Dashboard
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent">
              Choose Your Plan
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the perfect plan for your security needs. Upgrade or downgrade at any time.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative bg-card border-border shadow-glow-cyan animate-fade-in ${
                plan.popular ? 'ring-2 ring-primary border-primary' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'variant-outline'}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.name === 'Free' ? 'Get Started' : 'Upgrade Now'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-cyber border-0 shadow-glow-purple max-w-4xl mx-auto">
            <CardContent className="p-8">
              <Users className="w-12 h-12 text-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Need a Custom Solution?</h3>
              <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
                Contact our sales team for custom enterprise solutions tailored to your organization's specific security requirements.
              </p>
              <Button variant="outline" className="bg-background/50 border-foreground/20 text-foreground hover:bg-background/80">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
