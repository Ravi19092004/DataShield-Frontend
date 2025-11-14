'use client';

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, CheckCircle, Search, Download, ExternalLink } from "lucide-react";

import UpdateProfilePage from "@/components/UpdateProfileForm";
import ScanHistoryPage from "@/components/ScanHistoryPage.tsx";
import PricingPage from "@/components/PricingPage.tsx";
import { ClientTime } from "@/components/ClientTime";
import { TrustScoreGauge } from "@/components/TrustScoreGauge";
import SessionInfoCard from "@/components/SessionInfoCard.tsx";

import { mockDashboardStats, ScanResult as MockScanResult } from "@/lib/mockData";

/* ----------------------------- Interfaces ----------------------------- */

// Matches your DB scan model
interface ScanResult {
  id: string;
  url: string;
  status: 'Safe' | 'Unsafe' | 'Error';
  safe_percentage?: number;
  unsafe_percentage?: number;
  ip_address?: string;
  asn?: string;
  location?: string;
  country_code?: string;
  createdAt: string;
  userId: string;
  trustScore: number;
  timestamp: Date; // For UI compatibility
  colorCode: string;
}

// API prediction response
interface PredictionResult {
  prediction: 'Safe' | 'Unsafe' | 'Error';
  confidence: number;
  url?: string;
  ip_address?: string;
  asn?: string;
  hosting_provider?: string;
  location?: string;
  error?: string;
}

/* --------------------------- Dashboard Component --------------------------- */
const Dashboard = () => {
  /* ----------------------------- State ----------------------------- */
  const [urlToScan, setUrlToScan] = useState("");
  const [scanResult, setScanResult] = useState<PredictionResult | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [recentScans, setRecentScans] = useState<ScanResult[]>([]);
  const [activeView, setActiveView] = useState<"dashboard" | "profile" | "history" | "pricing">("dashboard");

  const [stats, setStats] = useState(mockDashboardStats);

  /* ----------------------------- Effects ----------------------------- */
  // Fetch recent scans and stats on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch recent scans
        const response = await fetch('/api/scan-history');
        if (response.ok) {
          const data = await response.json();
          const transformedScans = data.slice(0, 5).map((scan: any) => ({
            ...scan,
            trustScore: scan.status === 'Safe' ? (scan.safe_percentage || 85) : (scan.unsafe_percentage ? 100 - scan.unsafe_percentage : 25),
            timestamp: new Date(scan.createdAt),
            colorCode: scan.status === 'Safe' ? 'green' : scan.status === 'Unsafe' ? 'red' : 'yellow'
          }));
          setRecentScans(transformedScans);
        }

        // Fetch updated stats
        const statsResponse = await fetch('/api/dashboard-stats');
        if (statsResponse.ok) {
          const statsData = await statsResponse.json();
          setStats(statsData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Set up real-time updates every 30 seconds
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  /* ----------------------------- Handlers ----------------------------- */
  const handleScan = async () => {
    if (!urlToScan) {
      alert("Please enter a URL to scan");
      return;
    }

    setIsScanning(true);
    setScanResult(null);

    try {
      // Predict URL
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: urlToScan }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to get a prediction.');

      // Save scan result
      await fetch('/api/save-scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: urlToScan,
          redirectedUrl: data.url || urlToScan,
          status: data.prediction,
          safe_percentage: data.prediction === 'Safe' ? data.confidence * 100 : null,
          unsafe_percentage: data.prediction === 'Unsafe' ? data.confidence * 100 : null,
          ip_address: data.ip_address,
          asn: data.asn,
          location: data.location,
          country_code: null,
        }),
      });

      // Refresh recent scans and stats after scan
      const historyResponse = await fetch('/api/scan-history');
      if (historyResponse.ok) {
        const historyData = await historyResponse.json();
        const transformedScans = historyData.slice(0, 5).map((scan: any) => ({
          ...scan,
          trustScore: scan.status === 'Safe' ? (scan.safe_percentage || 85) : (scan.unsafe_percentage ? 100 - scan.unsafe_percentage : 25),
          timestamp: new Date(scan.createdAt),
          colorCode: scan.status === 'Safe' ? 'green' : scan.status === 'Unsafe' ? 'red' : 'yellow'
        }));
        setRecentScans(transformedScans);
      }

      // Refresh stats
      const statsResponse = await fetch('/api/dashboard-stats');
      if (statsResponse.ok) {
        const statsData = await statsResponse.json();
        setStats(statsData);
      }

      setScanResult(data);

    } catch (error) {
      setScanResult({ prediction: 'Error', confidence: 0, error: error instanceof Error ? error.message : 'Unknown error' });
    } finally {
      setIsScanning(false);
    }
  };

  const handleExportHistory = () => {
    alert("Exporting scan history as PDF...");
  };

  /* ----------------------------- Helpers ----------------------------- */
  const getStatusIcon = (status?: string) => {
    switch (status) {
      case "Safe": return <CheckCircle className="w-5 h-5 text-safe" />;
      case "Unsafe": return <Shield className="w-5 h-5 text-destructive" />;
      case "Error": return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      default: return null;
    }
  };

  const getStatusBadge = (status?: string) => {
    const variants: Record<string, "default" | "destructive" | "secondary"> = {
      Safe: "default",
      Unsafe: "destructive",
      Error: "secondary",
    };
    return status && <Badge variant={variants[status]}>{status}</Badge>;
  };

  const formatTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ago`;
  };

  /* ----------------------------- UI ----------------------------- */
  return (
    <div className="min-h-screen relative">
      <Navigation isAuthenticated={true} />
      <div className="container mx-auto px-4 py-8 relative z-10">
        {activeView === "profile" && <UpdateProfilePage onBack={() => setActiveView("dashboard")} />}
        {activeView === "history" && <ScanHistoryPage onBack={() => setActiveView("dashboard")} />}
        {activeView === "pricing" && <PricingPage onBack={() => setActiveView("dashboard")} />}
        {activeView === "dashboard" && (
          <>
            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Card examples */}
              <Card> {/* Threat Monitoring Card */} </Card>
              <Card> {/* Firewall Status Card */} </Card>
              <Card> {/* Network Traffic Card */} </Card>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Scans</p>
                      <p className="text-2xl font-bold">{stats.totalScans}</p>
                    </div>
                    <Search className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Phishing Detected</p>
                      <p className="text-2xl font-bold text-destructive">{stats.phishingDetected}</p>
                    </div>
                    <Shield className="w-8 h-8 text-destructive" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Safe Sites</p>
                      <p className="text-2xl font-bold text-safe">{stats.safeSites}</p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-safe" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Safe Percentage</p>
                      <p className="text-2xl font-bold">{stats.safePercentage}%</p>
                    </div>
                    <AlertTriangle className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* URL Scanner + Recent Scans */}
              <div className="lg:col-span-2 space-y-8">
                {/* URL Scanner Card */}
                {/* Recent Scans Card */}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>Protection Status</Card>
                <SessionInfoCard />
                <Card>Quick Actions</Card>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Matrix Rain Effect Background */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
        <div className="matrix-bg h-full w-full" />
      </div>
    </div>
  );
};

export default Dashboard;