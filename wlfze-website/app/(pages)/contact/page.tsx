"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import CTABanner from "@/components/CTABanner";

const contactInfo = [
  {
    icon: "mappin",
    title: "Address",
    details: ["QB-03, WH-10, DAFZA", "Dubai, United Arab Emirates"],
  },
  {
    icon: "phone",
    title: "Phone",
    details: ["+971 56 345 7433 (Mobile)", "+971 4 295 1234 (Landline)"],
  },
  {
    icon: "mail",
    title: "Email",
    details: ["info@wlfze.com", "sales@wlfze.com"],
  },
  {
    icon: "clock",
    title: "Working Hours",
    details: ["24/7 Operations", "Customer Support: 24/7"],
  },
] as const;

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  mappin: MapPin,
  phone: Phone,
  mail: Mail,
  clock: Clock,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
              Contact Us
            </span>
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-white/80">
              Ready to move? Our team is here to help 24/7. Reach out for quotes, inquiries, or any logistics questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="font-montserrat text-2xl font-bold text-neutral-dark mb-6">
                  Request a Quote
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-dark mb-2">First Name *</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Your first name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-dark mb-2">Last Name *</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Your last name" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-dark mb-2">Email Address *</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="your@email.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-dark mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="+971 XX XXX XXXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-dark mb-2">Company Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Your company" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-dark mb-2">Service Required *</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent" required>
                      <option value="">Select a service</option>
                      <option value="air">Air Freight</option>
                      <option value="sea">Sea Freight</option>
                      <option value="land">Land Freight</option>
                      <option value="warehouse">Warehousing</option>
                      <option value="courier">Courier</option>
                      <option value="lastmile">Last Mile Delivery</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-dark mb-2">Message *</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Tell us about your shipping requirements..." required></textarea>
                  </div>
                  <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              {contactInfo.map((info) => {
                const IconComponent = iconMap[info.icon];
                return (
                  <div key={info.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      {IconComponent && <IconComponent className="w-6 h-6 text-accent" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-neutral-dark mb-1">{info.title}</h3>
                      {info.details.map((detail) => (
                        <p key={detail} className="text-neutral-dark/70">{detail}</p>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.4470490417766!2d55.3600!3d25.2515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85c07%3A0xa5eda9fb3c93b69d!2sDubai%20Airport%20Free%20Zone!5e0!3m2!1sen!2sae!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="WLFZE Location"
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
