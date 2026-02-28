"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight, User } from "lucide-react";

const posts = [
  {
    slug: "uae-logistics-trends-2026",
    title: "UAE Logistics Trends to Watch in 2026",
    excerpt: "Discover the emerging trends shaping the logistics industry in the UAE, from AI-powered tracking to sustainable shipping practices.",
    date: "February 15, 2026",
    author: "Mohammed Al-Rashid",
    category: "Industry Insights",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop",
  },
  {
    slug: "dafza-guide-2026",
    title: "Complete Guide to DAFZA for Logistics Companies",
    excerpt: "Everything you need to know about operating within Dubai Airport Free Zone, from licensing to customs benefits.",
    date: "February 8, 2026",
    author: "Sarah Johnson",
    category: "Business Guide",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop",
  },
  {
    slug: "air-freight-vs-sea-freight",
    title: "Air Freight vs Sea Freight: Making the Right Choice",
    excerpt: "A comprehensive comparison to help you decide the best shipping method for your business needs.",
    date: "January 25, 2026",
    author: "Ahmed Hassan",
    category: "Shipping Guide",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop",
  },
  {
    slug: "ecommerce-fulfillment-uae",
    title: "E-Commerce Fulfillment Strategies for UAE Market",
    excerpt: "Learn how to optimize your e-commerce logistics for the unique demands of the UAE market.",
    date: "January 12, 2026",
    author: "Priya Patel",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
  },
  {
    slug: "sustainable-logistics",
    title: "Sustainable Logistics: Green Initiatives in Freight",
    excerpt: "How the logistics industry is adapting to environmental challenges with eco-friendly solutions.",
    date: "December 28, 2025",
    author: "Mohammed Al-Rashid",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop",
  },
  {
    slug: "customs-clearance-guide",
    title: "UAE Customs Clearance: A Complete Guide",
    excerpt: "Navigate UAE customs procedures with confidence. Essential documentation and process guidelines.",
    date: "December 15, 2025",
    author: "Sarah Johnson",
    category: "Compliance",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
              Our Blog
            </span>
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-4">
              Logistics Insights & News
            </h1>
            <p className="text-xl text-white/80">
              Stay updated with the latest trends, guides, and news from the world of logistics and freight forwarding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-accent text-white text-sm font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-sm text-neutral-dark/60 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <h2 className="font-montserrat font-bold text-xl text-neutral-dark mb-3 group-hover:text-accent transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-neutral-dark/70 mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-accent font-medium">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
