import { motion } from "framer-motion";
import { Zap, Bluetooth, Mic, Clock, Brain, Wheat, Users, Timer } from "lucide-react";
import { Card } from "@/components/ui/card";
import { invisiPayFeatures, altCreditFeatures } from "@/data/content";

const iconMap = {
  Zap, Bluetooth, Mic, Clock, Brain, Wheat, Users, Timer
};

const SolutionSplit = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Our Dual Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Solving payments and credit exclusion with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* InvisiPay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 h-full bg-gradient-primary shadow-glow">
              <div className="mb-6">
                <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-white font-bold text-sm mb-4">
                  PAYMENT INNOVATION
                </div>
                <h3 className="font-heading font-bold text-3xl text-white mb-3">
                  InvisiPay™
                </h3>
                <p className="text-white/90 text-lg">
                  Walk in. Pick. Walk out. Zero checkout friction.
                </p>
              </div>

              <div className="space-y-4">
                {invisiPayFeatures.map((feature, index) => {
                  const Icon = iconMap[feature.icon as keyof typeof iconMap];
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-white mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-white/80 text-sm">{feature.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center justify-between text-white">
                  <span className="text-sm">Time saved per transaction:</span>
                  <span className="font-mono font-bold text-2xl">41 seconds</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* AltCredit */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 h-full bg-gradient-secondary shadow-glow">
              <div className="mb-6">
                <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-white font-bold text-sm mb-4">
                  CREDIT INNOVATION
                </div>
                <h3 className="font-heading font-bold text-3xl text-white mb-3">
                  AltCredit™
                </h3>
                <p className="text-white/90 text-lg">
                  No CIBIL? No problem. AI-powered creditworthiness.
                </p>
              </div>

              <div className="space-y-4">
                {altCreditFeatures.map((feature, index) => {
                  const Icon = iconMap[feature.icon as keyof typeof iconMap];
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-white mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-white/80 text-sm">{feature.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center justify-between text-white">
                  <span className="text-sm">Additional Indians eligible:</span>
                  <span className="font-mono font-bold text-2xl">160M</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSplit;
