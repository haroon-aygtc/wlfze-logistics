"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-accent">
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Move?
            </h2>
            <p className="text-white/90 text-lg max-w-xl">
              Get a free quote today and discover why businesses across the globe trust WLFZE for their logistics needs. Our team is ready to help 24/7.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-accent font-semibold px-8 py-4 rounded-lg hover:bg-neutral-light transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+971563457433"
              className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              +971 56 345 7433
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
