import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Sunrise } from "lucide-react";
import { team } from "@/data/content";

const TeamVision = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Expert Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Domain expertise meets technical innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-elevated transition-all duration-300">
                  <div className="text-7xl mb-4">{member.avatar}</div>
                  <h3 className="font-heading font-bold text-xl mb-2">
                    {member.role}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision 2030 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 opacity-20" />
          <div className="relative bg-gradient-to-br from-brand-orange to-brand-teal p-12 md:p-16 text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Sunrise className="w-16 h-16 text-white" />
            </motion.div>
            
            <h2 className="font-heading font-bold text-4xl md:text-6xl text-white mb-8">
              Vision 2030
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20"
              >
                <div className="text-5xl md:text-6xl font-bold font-mono text-white mb-3">
                  10M
                </div>
                <p className="text-white/90 text-lg">
                  Credit-Invisible Indians Empowered
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20"
              >
                <div className="text-5xl md:text-6xl font-bold font-mono text-white mb-3">
                  ₹10,000 Cr
                </div>
                <p className="text-white/90 text-lg">
                  Disbursed Without Traditional Collateral
                </p>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-white/90 text-xl mt-8 italic"
            >
              FinKshitij = Financial Horizon 🌅
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamVision;
