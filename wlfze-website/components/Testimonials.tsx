"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "WLFZE transformed our supply chain operations. Their air freight service from Dubai to London is consistently reliable, and their team provides exceptional support throughout the entire process.",
    author: "Ahmed Al-Rashid",
    role: "Supply Chain Director, Al-Futtaim Group",
    rating: 5,
  },
  {
    quote: "We've been working with WLFZE for 3 years now. Their warehousing solutions at DAFZA have helped us reduce costs by 30% while improving delivery times to our GCC customers.",
    author: "Sarah Mitchell",
    role: "Operations Manager, TechFlow Electronics",
    rating: 5,
  },
  {
    quote: "The transparency and real-time tracking WLFZE provides gives us complete peace of mind. They're not just a logistics provider; they're a strategic partner in our growth.",
    author: "Mohammed Hassan",
    role: "CEO, Gulf Trading Enterprises",
    rating: 5,
  },
  {
    quote: "Their last-mile delivery service across the UAE is outstanding. Same-day delivery to Dubai and next-day to all other emirates has given us a competitive edge.",
    author: "Priya Sharma",
    role: "E-commerce Director, DesertCart",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-neutral-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Client Testimonials
          </span>
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-dark mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-neutral-dark/70 max-w-2xl mx-auto text-lg">
            Hear what our clients say about their experience with WLFZE
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-neutral-dark/80 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="font-montserrat font-bold text-accent">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-neutral-dark">{testimonial.author}</div>
                  <div className="text-sm text-neutral-dark/60">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
