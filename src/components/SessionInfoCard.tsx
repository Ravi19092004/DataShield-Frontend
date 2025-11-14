import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClientTime } from "@/components/ClientTime";
import { Shield, Clock, MapPin, Wifi } from "lucide-react";

const SessionInfoCard = () => {
  return (
    <Card className="bg-card border-border shadow-glow-cyan">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="w-5 h-5" />
          Session Info
        </CardTitle>
        <CardDescription>Your current session details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">Current Time</span>
          </div>
          <ClientTime />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">Status</span>
          </div>
          <Badge variant="default" className="bg-safe">
            Active
          </Badge>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">Location</span>
          </div>
          <span className="text-sm text-muted-foreground">Local</span>
        </div>

        <div className="pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Session started: {new Date().toLocaleDateString()}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SessionInfoCard;
