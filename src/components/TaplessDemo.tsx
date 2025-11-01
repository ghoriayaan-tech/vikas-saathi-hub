import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smartphone, Vibrate, CheckCircle2, Clock, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

type DemoStep = "idle" | "detected" | "cart" | "paying" | "success";

const TaplessDemo = () => {
  const [step, setStep] = useState<DemoStep>("idle");
  const [timeElapsed, setTimeElapsed] = useState(0);

  const startDemo = () => {
    setStep("detected");
    setTimeElapsed(0);
    setTimeout(() => setStep("cart"), 800);
  };

  const processPay = () => {
    setStep("paying");
    setTimeout(() => {
      setStep("success");
      setTimeElapsed(6);
    }, 1500);
  };

  const reset = () => {
    setStep("idle");
    setTimeElapsed(0);
  };

  return (
    <Card className="p-8 bg-gradient-card shadow-elevated">
      <div className="flex flex-col items-center">
        <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
          Tapless Checkout Simulator
        </h3>
        <p className="text-muted-foreground mb-8">Experience frictionless payments</p>

        {/* Phone Mockup */}
        <div className="relative w-[300px] h-[600px] bg-brand-purple rounded-[3rem] p-3 shadow-elevated">
          <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col">
            {/* Status Bar */}
            <div className="bg-brand-purple text-white px-6 py-3 flex justify-between items-center text-xs">
              <span>9:41 AM</span>
              <span>📶 100%</span>
            </div>

            {/* Screen Content */}
            <div className="flex-1 flex items-center justify-center p-6 bg-background">
              <AnimatePresence mode="wait">
                {step === "idle" && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center"
                  >
                    <Smartphone className="w-20 h-20 text-primary mx-auto mb-4" />
                    <h4 className="font-heading font-bold text-xl mb-2">Ready to Shop</h4>
                    <p className="text-muted-foreground text-sm mb-6">
                      Walk into a store to begin
                    </p>
                    <Button onClick={startDemo} size="lg" className="bg-primary">
                      Enter Ram Kirana Store
                    </Button>
                  </motion.div>
                )}

                {step === "detected" && (
                  <motion.div
                    key="detected"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ repeat: 3, duration: 0.2 }}
                    >
                      <Vibrate className="w-20 h-20 text-primary mx-auto mb-4" />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{ scale: [0.9, 1.1, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <h4 className="font-heading font-bold text-xl mb-2">
                        📍 Detected: Ram Kirana
                      </h4>
                      <p className="text-accent font-medium">Your phone vibrated!</p>
                    </motion.div>
                  </motion.div>
                )}

                {step === "cart" && (
                  <motion.div
                    key="cart"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    className="w-full"
                  >
                    <h4 className="font-heading font-bold text-lg mb-4">Your Cart</h4>
                    <div className="space-y-3 mb-6">
                      {[
                        { item: "Rice (5kg)", price: 200 },
                        { item: "Cooking Oil", price: 100 },
                        { item: "Soap Bar", price: 47 },
                      ].map((item, i) => (
                        <motion.div
                          key={item.item}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex justify-between p-3 bg-muted rounded-lg"
                        >
                          <span className="text-sm">{item.item}</span>
                          <span className="font-mono font-bold">₹{item.price}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg mb-4">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">Total</span>
                        <span className="font-mono font-bold text-2xl text-primary">₹347</span>
                      </div>
                    </div>
                    <Button onClick={processPay} size="lg" className="w-full bg-primary">
                      <Zap className="mr-2" />
                      Tap to Pay
                    </Button>
                  </motion.div>
                )}

                {step === "paying" && (
                  <motion.div
                    key="paying"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="mb-4"
                    >
                      <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
                    </motion.div>
                    <h4 className="font-heading font-bold text-xl">Processing Payment...</h4>
                    <p className="text-muted-foreground text-sm">Authenticating via Face ID</p>
                  </motion.div>
                )}

                {step === "success" && (
                  <motion.div
                    key="success"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.6 }}
                    >
                      <CheckCircle2 className="w-24 h-24 text-accent mx-auto mb-4" />
                    </motion.div>
                    <h4 className="font-heading font-bold text-2xl text-accent mb-2">
                      ✓ Payment Successful
                    </h4>
                    <p className="text-sm text-muted-foreground mb-6">
                      Paid via UPI • Merchant notified
                    </p>
                    <div className="bg-accent/10 p-4 rounded-lg mb-6 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Time taken:</span>
                        <span className="font-mono font-bold text-accent">{timeElapsed}s</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Steps:</span>
                        <span className="font-mono font-bold text-accent">2</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Friction reduced:</span>
                        <span className="font-mono font-bold text-accent">87%</span>
                      </div>
                    </div>
                    <Button onClick={reset} variant="outline" className="w-full">
                      Try Again
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Traditional checkout: 47 seconds • InvisiPay: 6 seconds</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TaplessDemo;
