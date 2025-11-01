import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, TrendingUp } from "lucide-react";
import { pilots } from "@/data/content";

const PilotCards = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Our Pilot Roadmap
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proven results from real-world deployments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pilots.map((pilot, index) => (
            <motion.div
              key={pilot.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="p-6 h-full hover:shadow-elevated transition-all duration-300 border-2 hover:border-primary">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {pilot.id}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">
                    {pilot.title}
                  </h3>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{pilot.location}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{pilot.duration}</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <span className="font-semibold text-sm">Key Metrics:</span>
                  </div>
                  <ul className="space-y-2">
                    {pilot.metrics.map((metric) => (
                      <li key={metric} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PilotCards;
