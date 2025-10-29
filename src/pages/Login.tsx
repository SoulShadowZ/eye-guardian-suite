import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Lock } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [patientId, setPatientId] = useState("");
  const [operatorCode, setOperatorCode] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!patientId || !operatorCode) {
      toast.error("Please fill in all fields");
      return;
    }

    toast.success("Login successful");
    navigate("/hardware-init");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-background p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Eye className="w-10 h-10 text-primary" />
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">E-VTon</h1>
            <p className="text-xl text-muted-foreground mt-2">Eye Vision Tonometry</p>
          </div>
        </div>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Device Login</CardTitle>
            <CardDescription>Enter credentials to start diagnostic session</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="patientId">Patient ID</Label>
                <Input
                  id="patientId"
                  placeholder="Enter patient ID"
                  value={patientId}
                  onChange={(e) => setPatientId(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="operatorCode">Operator Code</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="operatorCode"
                    type="password"
                    placeholder="Enter operator code"
                    className="pl-10"
                    value={operatorCode}
                    onChange={(e) => setOperatorCode(e.target.value)}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Start Session
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground">
          HIPAA-compliant • Secure Data Storage
        </p>
      </div>
    </div>
  );
};

export default Login;
