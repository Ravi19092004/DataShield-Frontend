import { Shield } from "lucide-react";

interface TrustScoreGaugeProps {
  score: number;
  size?: "sm" | "md" | "lg";
}

export const TrustScoreGauge = ({ score, size = "md" }: TrustScoreGaugeProps) => {
  const getColor = (score: number) => {
    if (score >= 70) return "safe";
    if (score >= 40) return "warning";
    return "destructive";
  };

  const getGradient = (score: number) => {
    if (score >= 70) return "from-safe to-green-400";
    if (score >= 40) return "from-warning to-yellow-400";
    return "from-destructive to-red-400";
  };

  const color = getColor(score);
  const gradient = getGradient(score);

  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const iconSizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className={`relative ${sizeClasses[size]} animate-scale-in`}>
      <svg className="transform -rotate-90 w-full h-full">
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          className="text-muted"
        />
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className={`text-${color} transition-all duration-1000 ease-out bg-gradient-to-r ${gradient}`}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Shield className={`${iconSizeClasses[size]} text-${color} mb-1`} />
        <span className={`${textSizeClasses[size]} font-bold text-foreground`}>{score}</span>
      </div>
    </div>
  );
};
