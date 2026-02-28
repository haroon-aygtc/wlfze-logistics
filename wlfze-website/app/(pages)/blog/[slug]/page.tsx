"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";

// Static blog post content generator
const getPostContent = (slug: string) => {
  const posts: Record<string, {
    title: string;
    date: string;
    author: string;
    readTime: string;
    category: string;
    image: string;
    content: string;
  }> = {
    "uae-logistics-trends-2026": {
      title: "UAE Logistics Trends to Watch in 2026",
      date: "February 15, 2026",
      author: "Mohammed Al-Rashid",
      readTime: "8 min read",
      category: "Industry Insights",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop",
      content: `
        <p>The UAE logistics industry is undergoing a transformation driven by technology, sustainability goals, and changing consumer expectations. As we move through 2026, several key trends are shaping the future of freight and supply chain management in the region.</p>

        <h2>1. AI-Powered Supply Chain Optimization</h2>
        <p>Artificial Intelligence is revolutionizing how logistics companies operate. From predictive analytics for demand forecasting to automated route optimization, AI is helping businesses reduce costs and improve delivery times. At WLFZE, we've implemented AI-driven systems that have improved our on-time delivery rate to 99%.</p>

        <h2>2. Sustainable Logistics Practices</h2>
        <p>With the UAE's commitment to Net Zero by 2050, green logistics is no longer optional. Electric delivery vehicles, optimized routing to reduce carbon emissions, and sustainable packaging are becoming standard practices. Companies that fail to adapt risk losing business to more environmentally conscious competitors.</p>

        <h2>3. Blockchain for Supply Chain Transparency</h2>
        <p>Blockchain technology is providing unprecedented visibility into supply chains. From origin tracking to customs documentation, blockchain ensures transparency and reduces fraud. This is particularly valuable for high-value cargo and pharmaceutical shipments.</p>

        <h2>4. Last-Mile Innovation</h2>
        <p>The explosive growth of e-commerce continues to drive innovation in last-mile delivery. Same-day and instant delivery options are becoming expectations rather than luxuries. Micro-fulfillment centers and crowd-sourced delivery models are changing the landscape.</p>

        <h2>5. Drones and Autonomous Vehicles</h2>
        <p>While still in early stages, drone delivery and autonomous vehicles are being tested in controlled environments. The Dubai Silicon Oasis and other tech hubs are serving as testing grounds for these technologies.</p>

        <h2>Conclusion</h2>
        <p>The UAE's strategic location, combined with these technological advancements, positions the country as a global logistics hub. Companies that embrace these trends will be best positioned for success in the evolving market.</p>
      `,
    },
    "dafza-guide-2026": {
      title: "Complete Guide to DAFZA for Logistics Companies",
      date: "February 8, 2026",
      author: "Sarah Johnson",
      readTime: "12 min read",
      category: "Business Guide",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&auto=format&fit=crop",
      content: `
        <p>Dubai Airport Free Zone (DAFZA) has established itself as one of the premier locations for logistics and trading companies in the Middle East. This comprehensive guide covers everything you need to know about setting up and operating within this strategic free zone.</p>

        <h2>Why DAFZA?</h2>
        <p>DAFZA offers unparalleled advantages for logistics companies:</p>
        <ul>
          <li>Direct access to Dubai International Airport (DXB)</li>
          <li>100% foreign ownership</li>
          <li>0% corporate and personal income tax</li>
          <li>Full repatriation of capital and profits</li>
          <li>No currency restrictions</li>
          <li>Streamlined customs procedures</li>
        </ul>

        <h2>License Types</h2>
        <p>DAFZA offers several license categories relevant to logistics:</p>
        <ul>
          <li>Trading License - for import/export activities</li>
          <li>Service License - for logistics and freight forwarding services</li>
          <li>Industrial License - for warehousing and light assembly</li>
        </ul>

        <h2>Facility Options</h2>
        <p>DAFZA provides flexible facility solutions:</p>
        <ul>
          <li>Office spaces from 20 sqm</li>
          <li>Warehouses from 200 sqm</li>
          <li>Light industrial units</li>
          <li>Executive desk options for startups</li>
        </ul>

        <h2>Customs Benefits</h2>
        <p>Operating from DAFZA provides significant customs advantages including bonded warehousing, duty suspension, and simplified documentation procedures.</p>
      `,
    },
  };

  return posts[slug] || posts["uae-logistics-trends-2026"];
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostContent(params.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-primary">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-accent mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container-custom -mt-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-2xl overflow-hidden shadow-2xl">
          <img src={post.image} alt={post.title} className="w-full h-[400px] md:h-[500px] object-cover" />
        </motion.div>
      </div>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
