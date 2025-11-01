import { motion } from "framer-motion";
import { Clock, Ban, Signal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { problems } from "@/data/content";

const iconMap = {
  Clock,
  Ban,
  Signal,
};

const ProblemCards = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            The Problem We're Solving
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            190 million Indians are excluded from the digital economy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = iconMap[problem.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 h-full hover:shadow-elevated transition-all duration-300 bg-card">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold font-mono">
                      {problem.stat}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemCards;
