"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Plane, Ship, Truck, Warehouse, Package, Bike, ArrowRight, Check } from "lucide-react";
import CTABanner from "@/components/CTABanner";

const services = [
  {
    icon: "plane",
    title: "Air Freight",
    description: "Express and standard air cargo services connecting Dubai to over 150 countries worldwide.",
    features: ["Door-to-door delivery", "Real-time tracking", "Express 24-48h options", "Charter services available"],
    href: "/services/air-freight",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    icon: "ship",
    title: "Sea Freight",
    description: "Full container load (FCL) and less-than-container load (LCL) shipping solutions.",
    features: ["FCL & LCL options", "Project cargo handling", "Customs clearance", "Multi-modal connectivity"],
    href: "/services/sea-freight",
    color: "from-cyan-500/20 to-cyan-600/20",
  },
  {
    icon: "truck",
    title: "Land Freight",
    description: "Comprehensive ground transportation across UAE, GCC, and beyond.",
    features: ["FTL & LTL services", "Cross-border expertise", "Temperature-controlled", "GPS tracking"],
    href: "/services/land-freight",
    color: "from-green-500/20 to-green-600/20",
  },
  {
    icon: "warehouse",
    title: "Warehousing",
    description: "Secure storage and distribution at our DAFZA facility with full inventory management.",
    features: ["Bonded warehouse", "Pick & pack services", "Inventory management", "Value-added services"],
    href: "/services/warehousing",
    color: "from-amber-500/20 to-amber-600/20",
  },
  {
    icon: "package",
    title: "Courier",
    description: "Express document and parcel delivery services for urgent shipments.",
    features: ["Same-day delivery", "International express", "Signature confirmation", "Online booking"],
    href: "/services/courier",
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    icon: "bike",
    title: "Last Mile Delivery",
    description: "Final delivery solutions across UAE with real-time tracking and proof of delivery.",
    features: ["Same-day UAE delivery", "Cash on delivery", "Live tracking", "E-commerce fulfillment"],
    href: "/services/last-mile-delivery",
    color: "from-orange-500/20 to-orange-600/20",
  },
] as const;

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  plane: Plane,
  ship: Ship,
  truck: Truck,
  warehouse: Warehouse,
  package: Package,
  bike: Bike,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop')`,
            }}
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-center mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
              Our Services
            </span>
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Comprehensive Logistics Solutions
            </h1>
            <p className="text-xl text-white/80">
              From air freight to last-mile delivery, we provide end-to-end logistics services tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.href} className="group block h-full">
                  <div className="bg-white rounded-2xl p-8 shadow-lg card-hover h-full border border-gray-100">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                      {(() => {
                        const IconComponent = iconMap[service.icon];
                        return IconComponent ? <IconComponent className="w-8 h-8 text-accent" /> : null;
                      })()}
                    </div>
                    <h2 className="font-montserrat font-bold text-2xl text-neutral-dark mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-neutral-dark/70 mb-6">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-sm text-neutral-dark/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-2 text-accent font-medium">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                Why WLFZE
              </span>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
                Your Trusted Logistics Partner
              </h2>
              <div className="space-y-4">
                {[
                  "Strategic DAFZA location for optimal connectivity",
                  "24/7 operations and customer support",
                  "Advanced tracking and visibility systems",
                  "Customs brokerage and documentation services",
                  "Flexible solutions for businesses of all sizes",
                  "Competitive rates through carrier partnerships",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-dark/80">{item}</span>
                  </div>
                ))}
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
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop"
                  alt="Logistics operations"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
