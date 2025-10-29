import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Activity, Target, Gauge } from "lucide-react";
import { toast } from "sonner";

interface MeasurementData {
  leftEyePressure: number;
  rightEyePressure: number;
  leftEyePower: number;
  rightEyePower: number;
  visualAcuity: string;
}

const Measurement = () => {
  const navigate = useNavigate();
  const [isCapturing, setIsCapturing] = useState(true);
  const [measurements, setMeasurements] = useState<MeasurementData>({
    leftEyePressure: 0,
    rightEyePressure: 0,
    leftEyePower: 0,
    rightEyePower: 0,
    visualAcuity: "Measuring...",
  });

  useEffect(() => {
    // Simulate real-time measurement capture
    const interval = setInterval(() => {
      if (isCapturing) {
        setMeasurements(prev => ({
          leftEyePressure: Math.min(prev.leftEyePressure + Math.random() * 2, 18),
          rightEyePressure: Math.min(prev.rightEyePressure + Math.random() * 2, 16),
          leftEyePower: Math.min(prev.leftEyePower + Math.random() * 0.3, -2.5),
          rightEyePower: Math.min(prev.rightEyePower + Math.random() * 0.3, -2.25),
          visualAcuity: prev.leftEyePressure > 15 ? "20/20" : "Measuring...",
        }));
      }
    }, 100);

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
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background p-4">
      <div className="max-w-6xl mx-auto space-y-6 py-8">
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
          <Card className="border-2">
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
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Eye Power
                  </span>
                </div>
                <div className="text-2xl font-semibold">
                  {measurements.leftEyePower.toFixed(2)} <span className="text-sm text-muted-foreground">D</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Eye */}
          <Card className="border-2">
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
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Eye Power
                  </span>
                </div>
                <div className="text-2xl font-semibold">
                  {measurements.rightEyePower.toFixed(2)} <span className="text-sm text-muted-foreground">D</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visual Acuity */}
        <Card className="border-2">
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
