import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Play, Mail, Linkedin, Twitter } from "lucide-react";

const CTAFooter = () => {
  return (
    <footer className="py-20 bg-brand-purple">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
            Join the Financial Inclusion Revolution
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Be part of India's journey to universal financial access
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16" id="cta">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
            >
              <a href="#" download className="flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Download Full Proposal
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-white/10 text-white border-2 border-white hover:bg-white hover:text-brand-purple text-lg px-8 py-6"
            >
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Pitch Deck
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-white/10 text-white border-2 border-white hover:bg-white hover:text-brand-purple text-lg px-8 py-6"
            >
              <a href="mailto:contact@finkshitij.com" className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <Twitter className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <Mail className="w-5 h-5 text-white" />
            </motion.a>
          </div>

          {/* Footer Text */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/60 text-sm">
              Built for Digital Banking Ideathon 2025
            </p>
            <p className="text-white/40 text-xs mt-2">
              FinKshitij © 2025 • Empowering India's Financial Future
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default CTAFooter;
