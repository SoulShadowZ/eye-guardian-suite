import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Activity, Gauge } from "lucide-react";
import { toast } from "sonner";

interface MeasurementData {
  leftEyePressure: number;
  rightEyePressure: number;
  visualAcuity: string;
}

const Measurement = () => {
  const navigate = useNavigate();
  const [isCapturing, setIsCapturing] = useState(true);
  const [measurements, setMeasurements] = useState<MeasurementData>({
    leftEyePressure: 14,
    rightEyePressure: 15,
    visualAcuity: "20/20",
  });

  useEffect(() => {
    // Simulate real-time measurement capture with healthy eye pressure values (12-16 mmHg)
    const interval = setInterval(() => {
      if (isCapturing) {
        setMeasurements({
          leftEyePressure: 14 + Math.random() * 2,
          rightEyePressure: 15 + Math.random() * 2,
          visualAcuity: "20/20",
        });
      }
    }, 200);

    // Complete measurement after 5 seconds
    const timeout = setTimeout(() => {
      setIsCapturing(false);
      toast.success("Measurement complete");
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isCapturing]);

  const getPressureStatus = (pressure: number) => {
    if (pressure < 12) return { label: "Low", variant: "default" as const };
    if (pressure <= 21) return { label: "Normal", variant: "default" as const };
    return { label: "Elevated", variant: "destructive" as const };
  };

  const handleViewResults = () => {
    navigate("/results", { state: { measurements } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      <div className="max-w-6xl mx-auto space-y-6 py-8 relative z-10 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Live Measurement</h1>
            <p className="text-muted-foreground mt-1">Non-contact tonometry in progress</p>
          </div>
          {isCapturing && (
            <Badge variant="outline" className="gap-2 animate-pulse">
              <Activity className="w-4 h-4" />
              Capturing Data
            </Badge>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Eye */}
          <Card className="border-2 shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                Left Eye
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <Gauge className="w-4 h-4" />
                    Intraocular Pressure
                  </span>
                  <Badge {...getPressureStatus(measurements.leftEyePressure)}>
                    {getPressureStatus(measurements.leftEyePressure).label}
                  </Badge>
                </div>
                <div className="text-4xl font-bold text-primary">
                  {measurements.leftEyePressure.toFixed(1)} <span className="text-xl text-muted-foreground">mmHg</span>
                </div>
                <p className="text-xs text-muted-foreground">Normal range: 12-21 mmHg</p>
              </div>
            </CardContent>
          </Card>

          {/* Right Eye */}
          <Card className="border-2 shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                Right Eye
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <Gauge className="w-4 h-4" />
                    Intraocular Pressure
                  </span>
                  <Badge {...getPressureStatus(measurements.rightEyePressure)}>
                    {getPressureStatus(measurements.rightEyePressure).label}
                  </Badge>
                </div>
                <div className="text-4xl font-bold text-primary">
                  {measurements.rightEyePressure.toFixed(1)} <span className="text-xl text-muted-foreground">mmHg</span>
                </div>
                <p className="text-xs text-muted-foreground">Normal range: 12-21 mmHg</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visual Acuity */}
        <Card className="border-2 shadow-elegant">
          <CardContent className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Visual Acuity</p>
                <p className="text-2xl font-bold mt-1">{measurements.visualAcuity}</p>
              </div>
              <Button 
                size="lg" 
                onClick={handleViewResults}
                disabled={isCapturing}
              >
                {isCapturing ? "Capturing..." : "View Complete Results"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Measurement;
