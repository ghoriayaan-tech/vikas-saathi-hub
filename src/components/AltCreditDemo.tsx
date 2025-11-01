import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, Brain, TrendingUp, Clock } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { loanTiers } from "@/data/content";

type DemoPhase = "form" | "analyzing" | "result";

interface FormData {
  name: string;
  phone: string;
  location: "urban" | "rural" | "tier3" | "";
  hasCIBIL: boolean;
}

const AltCreditDemo = () => {
  const [phase, setPhase] = useState<DemoPhase>("form");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    location: "",
    hasCIBIL: false,
  });
  const [score, setScore] = useState(0);
  const [loanDetails, setLoanDetails] = useState({ amount: 0, rate: 0 });

  const calculateScore = () => {
    let baseScore = 600;
    if (formData.location === "rural") baseScore += 50;
    if (formData.location === "tier3") baseScore += 30;
    const randomVariation = Math.floor(Math.random() * 80) - 40;
    return Math.max(550, Math.min(750, baseScore + randomVariation));
  };

  const getLoanDetails = (creditScore: number) => {
    const tier = [...loanTiers].reverse().find(t => creditScore >= t.minScore);
    return tier || loanTiers[loanTiers.length - 1];
  };

  const handleAnalyze = () => {
    if (!formData.name || !formData.phone || !formData.location) return;
    
    setPhase("analyzing");
    setTimeout(() => {
      const calculatedScore = calculateScore();
      setScore(calculatedScore);
      const details = getLoanDetails(calculatedScore);
      setLoanDetails(details);
      setPhase("result");
    }, 3000);
  };

  const reset = () => {
    setPhase("form");
    setFormData({ name: "", phone: "", location: "", hasCIBIL: false });
    setScore(0);
  };

  const analysisSteps = [
    "Checking UPI transaction patterns...",
    "Analyzing utility bill payments...",
    "Building community trust graph...",
  ];

  return (
    <Card className="p-8 bg-gradient-card shadow-elevated">
      <div className="max-w-2xl mx-auto">
        <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2 text-center">
          AltCredit Loan Approval
        </h3>
        <p className="text-muted-foreground mb-8 text-center">
          Get credit without traditional CIBIL scores
        </p>

        <AnimatePresence mode="wait">
          {phase === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location Type</Label>
                <Select
                  value={formData.location}
                  onValueChange={(value) => setFormData({ ...formData, location: value as any })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select location type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urban">Urban (Metro/Tier-1)</SelectItem>
                    <SelectItem value="tier3">Tier-3 City</SelectItem>
                    <SelectItem value="rural">Rural</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2 p-4 bg-muted rounded-lg">
                <input
                  type="checkbox"
                  id="cibil"
                  checked={formData.hasCIBIL}
                  onChange={(e) => setFormData({ ...formData, hasCIBIL: e.target.checked })}
                  className="w-4 h-4 text-primary"
                />
                <Label htmlFor="cibil" className="cursor-pointer">
                  I have a CIBIL score
                </Label>
              </div>

              {!formData.hasCIBIL && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="bg-accent/10 p-4 rounded-lg border border-accent/20"
                >
                  <div className="flex items-start gap-2">
                    <Brain className="w-5 h-5 text-accent mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-accent">No problem!</p>
                      <p className="text-muted-foreground">
                        We'll use alternative data like UPI transactions, utility bills, and community trust to assess your creditworthiness.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              <Button
                onClick={handleAnalyze}
                disabled={!formData.name || formData.phone.length !== 10 || !formData.location}
                className="w-full bg-primary"
                size="lg"
              >
                <Brain className="mr-2" />
                Analyze Alternative Data
              </Button>
            </motion.div>
          )}

          {phase === "analyzing" && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="mb-6"
              >
                <Brain className="w-20 h-20 text-primary mx-auto" />
              </motion.div>
              <h4 className="font-heading font-bold text-xl mb-6">Analyzing Your Profile...</h4>
              <div className="space-y-4 max-w-md mx-auto">
                {analysisSteps.map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.8, duration: 0.4 }}
                    className="flex items-center gap-3 text-left"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.8 + 0.3 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </motion.div>
                    <span className="text-muted-foreground">{step}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {phase === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {/* Score Gauge */}
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="relative inline-block"
                >
                  <svg className="w-48 h-48 transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      className="text-muted"
                    />
                    <motion.circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${(score / 900) * 553} 553`}
                      className="text-accent"
                      initial={{ strokeDasharray: "0 553" }}
                      animate={{ strokeDasharray: `${(score / 900) * 553} 553` }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div>
                      <motion.div
                        className="text-5xl font-bold font-mono text-accent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {score}
                      </motion.div>
                      <div className="text-sm text-muted-foreground">/900</div>
                    </div>
                  </div>
                </motion.div>
                <h4 className="font-heading font-bold text-2xl mt-4">
                  AltCredit Score
                </h4>
              </div>

              {/* Approval Details */}
              <div className="bg-accent/10 p-6 rounded-xl border-2 border-accent">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="font-heading font-bold text-xl text-accent">✓ Approved</h5>
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Loan Amount</span>
                    <span className="font-mono font-bold text-2xl">₹{loanDetails.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Interest Rate</span>
                    <span className="font-mono font-bold text-xl">{loanDetails.rate}% p.a.</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Tenure</span>
                    <span className="font-mono font-bold text-xl">6 months</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t">
                    <span className="font-medium">Disbursement</span>
                    <span className="font-bold text-accent">2 hours to bank</span>
                  </div>
                </div>
              </div>

              {/* Why Approved */}
              <div className="space-y-3">
                <h5 className="font-heading font-semibold text-lg">Why You're Approved:</h5>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Regular UPI transactions (₹8K/month average)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>On-time electricity bill payments (18 months)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Low telecom recharges (improve by ₹50/month for better rates)</span>
                  </div>
                </div>
              </div>

              {/* Improvement Tips */}
              <Button 
                onClick={() => alert('Tips: Increase UPI transactions, maintain regular utility payments, build community trust through local references')} 
                variant="outline" 
                className="w-full" 
                size="lg"
              >
                <TrendingUp className="mr-2" />
                See How to Improve Score
              </Button>

              <Button onClick={reset} variant="outline" className="w-full">
                Try Another Profile
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
};

export default AltCreditDemo;
