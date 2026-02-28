"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import { Bike, MapPin, Clock, Banknote, Smartphone, Leaf, RotateCcw } from "lucide-react";

const features = [
  {
    icon: "clock",
    iconComponent: Clock,
    title: "Same-Day Delivery",
    description: "Delivery within hours across Dubai when ordered before cutoff",
  },
  {
    icon: "mappin",
    iconComponent: MapPin,
    title: "Live Tracking",
    description: "Real-time rider location with accurate ETAs",
  },
  {
    icon: "banknote",
    iconComponent: Banknote,
    title: "COD Available",
    description: "Cash on delivery with instant remittance to merchants",
  },
  {
    icon: "rotateccw",
    iconComponent: RotateCcw,
    title: "Returns Handling",
    description: "Reverse logistics and customer returns management",
  },
];

const benefits = [
  "Same-day delivery within Dubai - order before 2 PM for evening delivery",
  "Next-day delivery to all UAE emirates with morning slots",
  "Real-time tracking with live rider location on map",
  "Cash on delivery (COD) with same-day remittance to merchants",
  "Proof of delivery with customer signature and photo confirmation",
  "Returns pickup and reverse logistics handled seamlessly",
];

const processSteps = [
  {
    step: "01",
    title: "Order Integration",
    description: "API integration with your e-commerce platform for auto-import",
  },
  {
    step: "02",
    title: "Rider Assignment",
    description: "Smart allocation based on proximity and capacity",
  },
  {
    step: "03",
    title: "Order Pickup",
    description: "Rider collects from your warehouse or fulfillment center",
  },
  {
    step: "04",
    title: "In-Transit",
    description: "Live tracking enabled with SMS updates to customers",
  },
  {
    step: "05",
    title: "Delivery",
    description: "Contactless or in-person delivery with photo proof",
  },
  {
    step: "06",
    title: "COD Settlement",
    description: "Instant remittance of cash collected to your account",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616401784845-180886ba9a8c?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&auto=format&fit=crop",
];

const stats = [
  { value: "Same Day", label: "Dubai" },
  { value: "COD", label: "Available" },
  { value: "Live", label: "Tracking" },
  { value: "98%", label: "Success" },
];

export default function LastMileDeliveryPage() {
  return (
    <ServicePageLayout
      title="Final Mile Excellence"
      subtitle="Last Mile Delivery"
      description="Same-day and next-day delivery across UAE. E-commerce fulfillment with live tracking, COD collection, and proof of delivery for a complete customer experience."
      icon={Bike}
      heroImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2670&auto=format&fit=crop"
      features={features}
      benefits={benefits}
      processSteps={processSteps}
      galleryImages={galleryImages}
      stats={stats}
    />
  );
}
