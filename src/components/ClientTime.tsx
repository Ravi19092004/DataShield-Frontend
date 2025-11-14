import { useState, useEffect } from "react";

export const ClientTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-sm text-muted-foreground">
      {time.toLocaleTimeString()}
    </div>
  );
};
