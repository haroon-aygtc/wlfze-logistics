"use client";

import { motion } from "framer-motion";
import { Shield, Globe, Clock, Leaf } from "lucide-react";

const benefits = [
  {
    icon: "shield",
    title: "Reliability First",
    description: "Your cargo is our responsibility. With 99% on-time delivery and full insurance coverage, we ensure your goods arrive safely every time.",
  },
  {
    icon: "globe",
    title: "Global Network",
    description: "Access to 300+ ports and 150+ countries through our established network of partners and direct operations worldwide.",
  },
  {
    icon: "clock",
    title: "Transparency & Speed",
    description: "Real-time tracking, instant quotes, and proactive updates. Know exactly where your shipment is at every moment.",
  },
  {
    icon: "leaf",
    title: "Sustainability Commitment",
    description: "We invest in green logistics solutions, optimizing routes and using eco-friendly packaging to reduce our carbon footprint.",
  },
] as const;

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  globe: Globe,
  clock: Clock,
  leaf: Leaf,
};

export default function WhyWLFZE() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-dark mb-4">
            The WLFZE Difference
          </h2>
          <p className="text-neutral-dark/70 max-w-2xl mx-auto text-lg">
            Beyond logistics, we deliver peace of mind through excellence in every interaction
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 p-6 rounded-2xl bg-neutral-light hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                {(() => {
                  const IconComponent = iconMap[benefit.icon];
                  return IconComponent ? <IconComponent className="w-7 h-7 text-accent" /> : null;
                })()}
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-xl text-neutral-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-neutral-dark/70">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
