"use client";

import { motion } from "framer-motion";
import { Shield, Lightbulb, Users, Leaf, Award, Globe } from "lucide-react";
import CTABanner from "@/components/CTABanner";

const values = [
  {
    icon: "shield",
    title: "Reliability",
    description: "We deliver on our promises. Every shipment, every time, with full accountability.",
  },
  {
    icon: "lightbulb",
    title: "Innovation",
    description: "Embracing technology and new methods to constantly improve our services.",
  },
  {
    icon: "users",
    title: "Customer-First",
    description: "Your success is our success. We build lasting partnerships, not just transactions.",
  },
  {
    icon: "leaf",
    title: "Sustainability",
    description: "Committed to reducing our environmental impact through green logistics practices.",
  },
] as const;

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  lightbulb: Lightbulb,
  users: Users,
  leaf: Leaf,
};

const team = [
  {
    name: "Mohammed Al-Rashid",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    description: "20+ years in logistics, former DHL executive",
  },
  {
    name: "Sarah Johnson",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    description: "Expert in supply chain optimization",
  },
  {
    name: "Ahmed Hassan",
    role: "Regional Manager - GCC",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    description: "15 years freight forwarding experience",
  },
  {
    name: "Priya Patel",
    role: "Customer Success Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    description: "Specialist in enterprise client relations",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2670&auto=format&fit=crop')`,
            }}
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
              About WLFZE
            </span>
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              A Legacy of Excellence in Logistics
            </h1>
            <p className="text-xl text-white/80">
              Since 2014, we've been bridging businesses across continents from our headquarters in Dubai Airport Free Zone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                Our Story
              </span>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
                From Dubai to the World
              </h2>
              <div className="space-y-4 text-neutral-dark/80">
                <p>
                  Established in 2014 in Dubai Airport Free Zone (DAFZA), WLFZE began with a simple mission: to provide businesses with logistics services that are fast, reliable, and transparent. What started as a small freight forwarding operation has grown into a comprehensive logistics powerhouse.
                </p>
                <p>
                  Today, we handle thousands of shipments monthly, connecting businesses in the UAE to over 150 countries worldwide. Our strategic location in DAFZA gives us direct access to Dubai International Airport and Jebel Ali Port, enabling us to offer unmatched speed and efficiency.
                </p>
                <p>
                  Our team of 50+ logistics professionals brings decades of combined experience, ensuring that every shipment—whether a small document or a full container—is handled with the utmost care and precision.
                </p>
              </div>
              
              <div className="flex gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-montserrat font-bold text-accent">10+</div>
                  <div className="text-sm text-neutral-dark/60">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-montserrat font-bold text-accent">50+</div>
                  <div className="text-sm text-neutral-dark/60">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-montserrat font-bold text-accent">10K+</div>
                  <div className="text-sm text-neutral-dark/60">Shipments/Month</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop"
                  alt="WLFZE Warehouse at DAFZA"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-xl shadow-xl">
                <Award className="w-8 h-8 mb-2" />
                <div className="font-bold text-lg">Certified Partner</div>
                <div className="text-sm text-white/80">IATA & FIATA Member</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              What Drives Us
            </h2>
            <p className="text-neutral-dark/70 max-w-2xl mx-auto">
              Our core values shape every decision we make and every interaction we have
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  {(() => {
                    const IconComponent = iconMap[value.icon];
                    return IconComponent ? <IconComponent className="w-8 h-8 text-accent" /> : null;
                  })()}
                </div>
                <h3 className="font-montserrat font-bold text-xl text-neutral-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-dark/70">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              Our Team
            </span>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Meet the Leaders
            </h2>
            <p className="text-neutral-dark/70 max-w-2xl mx-auto">
              Experienced professionals dedicated to your logistics success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-neutral-light rounded-2xl overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-montserrat font-bold text-lg text-neutral-dark mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium text-sm mb-2">{member.role}</p>
                    <p className="text-neutral-dark/60 text-sm">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
                Global Reach
              </span>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">
                Connected to 300+ Ports Worldwide
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Through our network of trusted partners and direct operations, we provide seamless logistics solutions to virtually any destination on the globe.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-xl">150+</div>
                    <div className="text-white/60">Countries Served</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-xl">50+</div>
                    <div className="text-white/60">Partner Airlines</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-xl">25+</div>
                    <div className="text-white/60">Shipping Lines</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-xl">100+</div>
                    <div className="text-white/60">Ground Partners</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop"
                  alt="Global logistics network map"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-lg font-medium">
                    Strategic partnerships with leading carriers ensure competitive rates and priority capacity
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
