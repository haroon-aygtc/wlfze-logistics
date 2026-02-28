"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Plane, Ship, Truck, Warehouse, Package, Bike, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  index: number;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  plane: Plane,
  ship: Ship,
  truck: Truck,
  warehouse: Warehouse,
  package: Package,
  bike: Bike,
};

export default function ServiceCard({ icon, title, description, href, index }: ServiceCardProps) {
  const Icon = iconMap[icon];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href} className="group block">
        <div className="bg-white rounded-2xl p-8 shadow-lg card-hover h-full">
          <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
            {Icon && <Icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />}
          </div>
          <h3 className="font-montserrat font-bold text-xl text-neutral-dark mb-3 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-neutral-dark/70 mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center gap-2 text-accent font-medium">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
