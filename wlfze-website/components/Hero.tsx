"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Package, Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
              Based in DAFZA, Dubai Since 2014
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Connecting Dubai to the World
            <span className="text-accent"> — Precision Logistics, Every Mile</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-4 font-medium"
          >
            Air • Sea • Land • Warehouse • Courier • Last-Mile
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-white/80 mb-10 max-w-2xl"
          >
            End-to-end freight forwarding and logistics solutions tailored for businesses 
            that demand speed, reliability, and transparency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-lg hover:bg-accent-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Package className="w-5 h-5" />
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/tracking"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              <Search className="w-5 h-5" />
              Track Shipment
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 left-0 right-0 hidden md:block z-10"
      >
        <div className="container-custom">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex items-center justify-around border border-white/20">
            {[
              { value: "300+", label: "Global Ports" },
              { value: "150+", label: "Countries Served" },
              { value: "99%", label: "On-Time Delivery" },
              { value: "24/7", label: "Customer Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-montserrat font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
