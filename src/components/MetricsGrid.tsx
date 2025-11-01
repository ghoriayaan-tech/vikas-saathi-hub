import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { metrics } from "@/data/content";

const MetricsGrid = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-purple">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Impact Metrics
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Real results from our pilot programs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MetricCard = ({ metric, index }: { metric: typeof metrics[0]; index: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const target = parseInt(metric.value.replace(/\D/g, ""));
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, metric.value]);

  const formatNumber = () => {
    if (metric.value.includes("M")) {
      return `${count}M`;
    }
    if (metric.value.includes("<")) {
      return `<${count}`;
    }
    return count;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="text-center"
        >
          <div className="text-5xl font-bold font-mono text-white mb-2">
            {formatNumber()}
            {metric.suffix && (
              <span className="text-3xl">{metric.suffix}</span>
            )}
          </div>
          <div className="text-white/80 font-medium">{metric.label}</div>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default MetricsGrid;
