export interface ScanResult {
  id: string;
  url: string;
  trustScore: number;
  status: "Safe" | "Suspicious" | "Unsafe";
  colorCode: "green" | "yellow" | "red";
  timestamp: Date;
  details: {
    ip: string;
    asn: string;
    location: string;
    sourceUrl: string;
    finalUrl: string;
  };
}

export interface DashboardStats {
  totalScans: number;
  phishingDetected: number;
  safeSites: number;
  safePercentage: number;
}

export const mockDashboardStats: DashboardStats = {
  totalScans: 1247,
  phishingDetected: 89,
  safeSites: 1158,
  safePercentage: 92.87,
};

export const mockRecentScans: ScanResult[] = [
  {
    id: "1",
    url: "https://github.com",
    trustScore: 98,
    status: "Safe",
    colorCode: "green",
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    details: {
      ip: "140.82.121.4",
      asn: "AS36459 GitHub, Inc.",
      location: "San Francisco, US",
      sourceUrl: "https://github.com",
      finalUrl: "https://github.com",
    },
  },
  {
    id: "2",
    url: "https://suspicious-site-example.com",
    trustScore: 45,
    status: "Suspicious",
    colorCode: "yellow",
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    details: {
      ip: "192.168.1.1",
      asn: "AS12345 Unknown Provider",
      location: "Unknown",
      sourceUrl: "https://suspicious-site-example.com",
      finalUrl: "https://suspicious-site-example.com",
    },
  },
  {
    id: "3",
    url: "https://google.com",
    trustScore: 99,
    status: "Safe",
    colorCode: "green",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    details: {
      ip: "142.250.185.78",
      asn: "AS15169 Google LLC",
      location: "Mountain View, US",
      sourceUrl: "https://google.com",
      finalUrl: "https://google.com",
    },
  },
  {
    id: "4",
    url: "https://phishing-example.com",
    trustScore: 12,
    status: "Unsafe",
    colorCode: "red",
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
    details: {
      ip: "185.220.101.1",
      asn: "AS50673 Suspicious Hosting",
      location: "Unknown, RU",
      sourceUrl: "https://phishing-example.com",
      finalUrl: "https://phishing-example.com/redirect",
    },
  },
  {
    id: "5",
    url: "https://amazon.com",
    trustScore: 97,
    status: "Safe",
    colorCode: "green",
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    details: {
      ip: "54.239.28.85",
      asn: "AS16509 Amazon.com, Inc.",
      location: "Seattle, US",
      sourceUrl: "https://amazon.com",
      finalUrl: "https://amazon.com",
    },
  },
];

export const mockScanHistory: ScanResult[] = [
  ...mockRecentScans,
  {
    id: "6",
    url: "https://stackoverflow.com",
    trustScore: 96,
    status: "Safe",
    colorCode: "green",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    details: {
      ip: "151.101.129.69",
      asn: "AS54113 Fastly",
      location: "New York, US",
      sourceUrl: "https://stackoverflow.com",
      finalUrl: "https://stackoverflow.com",
    },
  },
  {
    id: "7",
    url: "https://fake-bank-login.com",
    trustScore: 8,
    status: "Unsafe",
    colorCode: "red",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
    details: {
      ip: "103.224.182.242",
      asn: "AS133752 Shady Hosting",
      location: "Unknown, CN",
      sourceUrl: "https://fake-bank-login.com",
      finalUrl: "https://fake-bank-login.com/steal-credentials",
    },
  },
  {
    id: "8",
    url: "https://reddit.com",
    trustScore: 94,
    status: "Safe",
    colorCode: "green",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8),
    details: {
      ip: "151.101.1.140",
      asn: "AS54113 Fastly",
      location: "San Francisco, US",
      sourceUrl: "https://reddit.com",
      finalUrl: "https://reddit.com",
    },
  },
  {
    id: "9",
    url: "https://sketchy-deals.xyz",
    trustScore: 38,
    status: "Suspicious",
    colorCode: "yellow",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12),
    details: {
      ip: "45.142.212.61",
      asn: "AS200019 Alexhost SRL",
      location: "Chisinau, MD",
      sourceUrl: "https://sketchy-deals.xyz",
      finalUrl: "https://sketchy-deals.xyz",
    },
  },
  {
    id: "10",
    url: "https://wikipedia.org",
    trustScore: 99,
    status: "Safe",
    colorCode: "green",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    details: {
      ip: "208.80.154.224",
      asn: "AS14907 Wikimedia Foundation",
      location: "San Francisco, US",
      sourceUrl: "https://wikipedia.org",
      finalUrl: "https://wikipedia.org",
    },
  },
];

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  profilePicture: string;
  joinedDate: Date;
}

export const mockUserProfile: UserProfile = {
  id: "user-1",
  username: "securitypro",
  email: "user@DataShield.Ai",
  profilePicture: "/placeholder.svg",
  joinedDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 90),
};
