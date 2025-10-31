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
    <div className="min-h-screen flex">
      {/* Left Section - Purple Gradient */}
      <div className="hidden lg:flex lg:w-2/5 bg-gradient-primary p-12 flex-col justify-center text-white">
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl font-bold mb-2">E-VTon</h1>
            <p className="text-xl opacity-95">Eye Health Diagnostic Platform</p>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <span>Non-contact Tonometry Measurement</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <span>AI-Powered Glaucoma Detection</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <span>Ultrasonic Data Analytics</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <span>Comprehensive Eye Health Reports</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section - Content */}
      <div className="flex-1 bg-gray-50 p-6 lg:p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-6 animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Live Measurement</h1>
            <p className="text-gray-600 mt-1">Non-contact tonometry in progress</p>
          </div>
          {isCapturing && (
            <Badge variant="outline" className="gap-2 animate-pulse bg-purple-50 border-purple-200">
              <Activity className="w-4 h-4 text-primary" />
              <span className="text-primary">Capturing Data</span>
            </Badge>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Eye */}
          <Card className="bg-white border-gray-200 shadow-lg">
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
          <Card className="bg-white border-gray-200 shadow-lg">
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
        <Card className="bg-white border-gray-200 shadow-lg">
          <CardContent className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Visual Acuity</p>
                <p className="text-2xl font-bold mt-1 text-gray-900">{measurements.visualAcuity}</p>
              </div>
              <Button 
                size="lg" 
                onClick={handleViewResults}
                disabled={isCapturing}
                className="bg-gradient-primary hover:opacity-90 transition-all shadow-lg"
              >
                {isCapturing ? "Capturing..." : "View Complete Results"}
              </Button>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default Measurement;
