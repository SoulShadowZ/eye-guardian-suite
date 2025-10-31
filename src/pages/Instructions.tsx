import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, AlertTriangle, CheckCircle, Activity } from "lucide-react";

const Instructions = () => {
  const navigate = useNavigate();

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
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-2">
            <Eye className="w-10 h-10 text-primary" />
            Understanding Glaucoma
          </h1>
          <p className="text-gray-600">Essential information before your diagnostic session</p>
        </div>

        {/* About Glaucoma */}
        <Card className="bg-white border-gray-200 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              What is Glaucoma?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Glaucoma is a group of eye conditions that damage the optic nerve, often caused by abnormally high 
              intraocular pressure (IOP). It is one of the leading causes of blindness worldwide and can develop 
              without noticeable symptoms in early stages.
            </p>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Risk Factors:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Age over 60 years</li>
                  <li>• Family history of glaucoma</li>
                  <li>• High eye pressure (IOP)</li>
                  <li>• Diabetes or hypertension</li>
                  <li>• Severe myopia or hyperopia</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Early Detection:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Regular eye pressure checks</li>
                  <li>• Optic nerve examination</li>
                  <li>• Visual field testing</li>
                  <li>• Annual screenings after 40</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hardware Usage Steps */}
        <Card className="bg-white border-gray-200 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              Hardware Usage Instructions
            </CardTitle>
            <CardDescription>Follow these steps for accurate measurements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Position Yourself Correctly</h4>
                  <p className="text-sm text-muted-foreground">
                    Sit comfortably with your chin on the chin rest and forehead against the headband. 
                    Ensure your eye is aligned with the measurement device.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Remove Contact Lenses</h4>
                  <p className="text-sm text-muted-foreground">
                    If wearing contact lenses, remove them before the test. Glasses can remain on 
                    during initial assessment but will be removed for tonometry.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Keep Eyes Open and Still</h4>
                  <p className="text-sm text-muted-foreground">
                    During measurement, keep your eyes wide open and focus on the fixation light. 
                    Try not to blink during the brief measurement period (2-3 seconds).
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Ultrasonic Measurement</h4>
                  <p className="text-sm text-muted-foreground">
                    The ultrasonic tonometer will gently approach your eye. You'll feel a soft puff 
                    of air. This measures your intraocular pressure without direct contact.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Optical Imaging</h4>
                  <p className="text-sm text-muted-foreground">
                    The system will capture high-resolution images of your retina and optic nerve. 
                    Keep looking at the central light throughout the imaging process.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  6
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">AI Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Our AI system will analyze all measurements in real-time to assess glaucoma risk 
                    and provide comprehensive diagnostic insights.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notice */}
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-sm text-gray-700">
            The entire process takes approximately 5-7 minutes. If you experience discomfort at any point, 
            please inform the operator immediately.
          </AlertDescription>
        </Alert>

        {/* Action Button */}
        <div className="flex justify-center pt-4">
          <Button 
            size="lg" 
            onClick={() => navigate("/hardware-init")}
            className="px-12 bg-gradient-primary hover:opacity-90 transition-all shadow-lg"
          >
            Proceed to Hardware Initialization
          </Button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
