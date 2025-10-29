import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, Loader2 } from "lucide-react";

interface InitStep {
  id: string;
  label: string;
  status: "pending" | "loading" | "complete";
}

const HardwareInit = () => {
  const navigate = useNavigate();
  const [steps, setSteps] = useState<InitStep[]>([
    { id: "ultrasonic", label: "Ultrasonic Sensor Calibration", status: "pending" },
    { id: "tonometer", label: "Tonometer Initialization", status: "pending" },
    { id: "camera", label: "Optical Imaging System", status: "pending" },
    { id: "ai", label: "AI Analytics Module", status: "pending" },
  ]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const initializeHardware = async () => {
      for (let i = 0; i < steps.length; i++) {
        // Update current step to loading
        setSteps(prev => 
          prev.map((step, idx) => 
            idx === i ? { ...step, status: "loading" } : step
          )
        );
        
        // Simulate initialization time
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Update current step to complete
        setSteps(prev => 
          prev.map((step, idx) => 
            idx === i ? { ...step, status: "complete" } : step
          )
        );
        
        setProgress(((i + 1) / steps.length) * 100);
      }

      // Navigate to measurement screen after completion
      setTimeout(() => {
        navigate("/measurement");
      }, 1000);
    };

    initializeHardware();
  }, [navigate]);

  const getStepIcon = (status: InitStep["status"]) => {
    switch (status) {
      case "complete":
        return <CheckCircle2 className="w-5 h-5 text-success" />;
      case "loading":
        return <Loader2 className="w-5 h-5 text-primary animate-spin" />;
      default:
        return <Circle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-accent/10 p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      <Card className="w-full max-w-lg border-2 shadow-glow relative z-10 animate-fade-in">
        <CardHeader>
          <CardTitle className="text-2xl">Initializing Hardware</CardTitle>
          <CardDescription>Please wait while the system calibrates</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center gap-3">
                {getStepIcon(step.status)}
                <span className={`text-sm ${step.status === "complete" ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Initialization Progress</span>
              <span className="font-medium">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="text-xs text-center text-muted-foreground pt-4 border-t">
            Hardware calibration ensures accurate measurements
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HardwareInit;
