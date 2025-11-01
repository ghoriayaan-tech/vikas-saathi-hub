import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { personas } from "@/data/content";

const PersonaCards = () => {
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
            Who We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Banking for every Indian, regardless of background
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="p-6 h-full text-center hover:shadow-elevated transition-all duration-300 cursor-pointer relative overflow-hidden">
                {/* Front */}
                <div className="group-hover:opacity-0 transition-opacity duration-300">
                  <div className="text-6xl mb-4">{persona.emoji}</div>
                  <h3 className="font-heading font-bold text-lg mb-2">
                    {persona.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {persona.challenge}
                  </p>
                </div>

                {/* Back - appears on hover */}
                <div className="absolute inset-0 bg-gradient-primary p-6 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-4xl mb-3">{persona.emoji}</div>
                  <h4 className="font-heading font-bold text-white mb-2">
                    Our Solution
                  </h4>
                  <p className="text-white/90 text-sm">
                    {persona.solution}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonaCards;
