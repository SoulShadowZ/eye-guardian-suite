import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Activity, Shield, Zap } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/10">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 mb-16">
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
              <Eye className="w-12 h-12 text-primary" />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">E-VTon</h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold">Eye Vision Tonometry</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive eye health diagnostic platform combining ultrasonic data with advanced tonometry for early detection of glaucoma and refractive errors
            </p>
          </div>
          <Button size="lg" onClick={() => navigate("/login")} className="text-lg px-8 py-6">
            Start Diagnostic Session
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Non-Contact Tonometry</h3>
              <p className="text-sm text-muted-foreground">
                Painless air-puff technology for accurate IOP measurement
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold">AI-Powered Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Intelligent risk stratification and clinical insights
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto">
                <Eye className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-semibold">Vision Screening</h3>
              <p className="text-sm text-muted-foreground">
                Advanced optical technology for comprehensive assessment
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">HIPAA Compliant</h3>
              <p className="text-sm text-muted-foreground">
                Secure data storage with full medical compliance
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Info Section */}
        <Card className="border-2 bg-gradient-to-r from-card to-primary/5">
          <CardContent className="py-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">95%+</div>
                <div className="text-sm text-muted-foreground">Expected Accuracy</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">&lt;$5</div>
                <div className="text-sm text-muted-foreground">Cost Per Test</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500M+</div>
                <div className="text-sm text-muted-foreground">Potential Users Globally</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-16 text-sm text-muted-foreground">
          <p>Early detection saves vision • Democratizing eye care worldwide</p>
          <p className="mt-2">Powered by Team BawalCode</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
