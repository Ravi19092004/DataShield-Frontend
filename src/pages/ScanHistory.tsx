import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrustScoreGauge } from "@/components/TrustScoreGauge";
import { mockScanHistory, ScanResult } from "@/lib/mockData";
import { Trash2, AlertTriangle, CheckCircle, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const ScanHistory = () => {
  const [scans, setScans] = useState<ScanResult[]>(mockScanHistory);

  const handleDeleteScan = (id: string) => {
    setScans(scans.filter((scan) => scan.id !== id));
    toast.success("Scan deleted successfully");
  };

  const handleClearAll = () => {
    setScans([]);
    toast.success("All scan history cleared");
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Safe":
        return <CheckCircle className="w-5 h-5 text-safe" />;
      case "Suspicious":
        return <AlertTriangle className="w-5 h-5 text-warning" />;
      case "Unsafe":
        return <Shield className="w-5 h-5 text-destructive" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "destructive" | "secondary"> = {
      Safe: "default",
      Suspicious: "secondary",
      Unsafe: "destructive",
    };
    return (
      <Badge variant={variants[status]} className={status === "Safe" ? "bg-safe" : status === "Suspicious" ? "bg-warning text-warning-foreground" : ""}>
        {status}
      </Badge>
    );
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation isAuthenticated={true} />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-cyber bg-clip-text text-transparent">
              Scan History
            </h1>
            <p className="text-muted-foreground">View and manage your scan history from the last 30 days</p>
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" disabled={scans.length === 0}>
                Clear All History
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-card">
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently delete all your scan history. This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleClearAll} className="bg-destructive hover:bg-destructive/90">
                  Delete All
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <Card className="bg-card border-border shadow-glow-cyan animate-fade-in">
          <CardHeader>
            <CardTitle>All Scans ({scans.length})</CardTitle>
            <CardDescription>Complete history of URL scans and their results</CardDescription>
          </CardHeader>
          <CardContent>
            {scans.length === 0 ? (
              <div className="text-center py-12">
                <Shield className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No scan history</h3>
                <p className="text-muted-foreground">Your scan history will appear here</p>
              </div>
            ) : (
              <div className="space-y-4">
                {scans.map((scan, index) => (
                  <Card
                    key={scan.id}
                    className="bg-muted/30 border-border hover:border-primary/50 transition-all animate-fade-in"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <TrustScoreGauge score={scan.trustScore} size="md" />

                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2 mb-2">
                            {getStatusIcon(scan.status)}
                            {getStatusBadge(scan.status)}
                            <span className="text-xs text-muted-foreground ml-auto">
                              {formatDate(scan.timestamp)}
                            </span>
                          </div>

                          <p className="text-sm font-medium break-all">{scan.url}</p>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-muted-foreground">
                            <div>
                              <span className="font-medium">IP:</span> {scan.details.ip}
                            </div>
                            <div>
                              <span className="font-medium">ASN:</span> {scan.details.asn}
                            </div>
                            <div>
                              <span className="font-medium">Location:</span> {scan.details.location}
                            </div>
                            <div>
                              <span className="font-medium">Score:</span> {scan.trustScore}/100
                            </div>
                          </div>
                        </div>

                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent className="bg-card">
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete this scan?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This will permanently delete this scan from your history.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDeleteScan(scan.id)}
                                className="bg-destructive hover:bg-destructive/90"
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ScanHistory;
