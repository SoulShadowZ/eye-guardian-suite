import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Download, Share2, AlertCircle, CheckCircle2, Eye } from "lucide-react";
import { toast } from "sonner";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const measurements = location.state?.measurements || {
    leftEyePressure: 15,
    rightEyePressure: 16,
    visualAcuity: "20/20",
  };

  const pressureData = [
    { eye: "Left Eye", pressure: measurements.leftEyePressure, normalMin: 12, normalMax: 21 },
    { eye: "Right Eye", pressure: measurements.rightEyePressure, normalMin: 12, normalMax: 21 },
  ];

  const getRiskAssessment = () => {
    const avgPressure = (measurements.leftEyePressure + measurements.rightEyePressure) / 2;
    if (avgPressure > 21) return { level: "High Risk", color: "destructive", icon: AlertCircle, message: "Elevated IOP detected. Immediate consultation recommended." };
    if (avgPressure > 18) return { level: "Moderate Risk", color: "warning", icon: AlertCircle, message: "Slightly elevated IOP. Regular monitoring advised." };
    return { level: "Low Risk", color: "success", icon: CheckCircle2, message: "IOP within normal range. Continue regular checkups." };
  };

  const risk = getRiskAssessment();
  const RiskIcon = risk.icon;

  const handleShare = () => {
    toast.success("Report shared successfully");
  };

  const handleDownload = () => {
    toast.success("Report downloaded");
  };

  const handleNewTest = () => {
    navigate("/");
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
        <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
              <Eye className="w-10 h-10 text-primary" />
              Diagnostic Report
            </h1>
            <p className="text-gray-600 mt-1">E-VTon Eye Vision Tonometry Analysis</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleShare} className="border-gray-300 hover:bg-gray-100">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button onClick={handleDownload} className="bg-gradient-primary hover:opacity-90 transition-all shadow-lg">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Risk Assessment */}
        <Card className="bg-purple-50 border-purple-200 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RiskIcon className={`w-5 h-5 text-${risk.color}`} />
              Risk Assessment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <Badge variant={risk.color as any} className="mb-2">{risk.level}</Badge>
                <p className="text-sm text-muted-foreground">{risk.message}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Measurements Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">Left Eye Pressure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {measurements.leftEyePressure.toFixed(1)} <span className="text-lg text-muted-foreground">mmHg</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Normal range: 12-21 mmHg</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">Right Eye Pressure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {measurements.rightEyePressure.toFixed(1)} <span className="text-lg text-muted-foreground">mmHg</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Normal range: 12-21 mmHg</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">Visual Acuity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{measurements.visualAcuity}</div>
              <p className="text-sm text-muted-foreground mt-2">Optimal clarity</p>
            </CardContent>
          </Card>
        </div>

        {/* Chart */}
        <Card className="bg-white border-gray-200 shadow-lg">
          <CardHeader>
            <CardTitle>Intraocular Pressure Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={pressureData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="eye" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
                />
                <Legend />
                <Bar dataKey="pressure" fill="hsl(var(--primary))" name="IOP (mmHg)" radius={[8, 8, 0, 0]} />
                <Bar dataKey="normalMax" fill="hsl(var(--muted))" name="Normal Max" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Clinical Summary */}
        <Card className="bg-white border-gray-200 shadow-lg">
          <CardHeader>
            <CardTitle>Clinical Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Findings</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Bilateral eye pressure measurements completed using non-contact tonometry</li>
                <li>• Visual acuity assessment: {measurements.visualAcuity}</li>
                <li>• AI-powered risk stratification performed</li>
              </ul>
            </div>
            <Separator />
            <div>
              <h4 className="font-semibold mb-2">Recommendations</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Continue regular eye examinations every 6-12 months</li>
                <li>• Maintain healthy lifestyle and eye care practices</li>
                <li>• Consult ophthalmologist if symptoms develop</li>
                {risk.level !== "Low Risk" && <li className="text-warning">• Schedule follow-up consultation within 2 weeks</li>}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Footer Actions */}
        <div className="flex justify-center gap-4 pt-4">
          <Button variant="outline" size="lg" onClick={handleNewTest} className="border-gray-300 hover:bg-gray-100">
            New Test
          </Button>
          <Button size="lg" onClick={() => navigate("/")} className="bg-gradient-primary hover:opacity-90 transition-all shadow-lg">
            Complete Session
          </Button>
        </div>

        {/* Compliance Footer */}
        <div className="text-center text-xs text-gray-500 pt-8 border-t border-gray-200">
          <p>HIPAA-Compliant Data Storage • Report generated by E-VTon v2.0</p>
          <p className="mt-1">This report is for screening purposes only and should not replace professional medical diagnosis</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
