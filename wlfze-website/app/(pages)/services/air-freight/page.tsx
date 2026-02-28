"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import { Plane, Clock, Globe, Shield, Thermometer } from "lucide-react";

const features = [
  {
    icon: "clock",
    iconComponent: Clock,
    title: "Express 24-48h",
    description: "Urgent deliveries to major destinations with guaranteed transit times",
  },
  {
    icon: "globe",
    iconComponent: Globe,
    title: "Global Coverage",
    description: "150+ countries served through our extensive airline network",
  },
  {
    icon: "shield",
    iconComponent: Shield,
    title: "Secure Handling",
    description: "Full insurance coverage and secure chain of custody",
  },
  {
    icon: "thermometer",
    iconComponent: Thermometer,
    title: "Temperature Control",
    description: "Cold chain solutions for pharmaceuticals and perishables",
  },
];

const benefits = [
  "Door-to-door delivery from pickup to final destination",
  "Priority booking with major airlines (Emirates, Etihad, Qatar Airways)",
  "Temperature-controlled options for pharmaceuticals & perishables",
  "Dangerous goods handling certified",
  "AOG (Aircraft on Ground) emergency services",
  "Charter services for oversized or urgent cargo",
];

const processSteps = [
  {
    step: "01",
    title: "Request Quote",
    description: "Share your cargo details and destination for instant pricing",
  },
  {
    step: "02",
    title: "Booking Confirmation",
    description: "We secure space with airlines and confirm flight schedules",
  },
  {
    step: "03",
    title: "Cargo Pickup",
    description: "Door-to-door collection or drop-off at our DAFZA facility",
  },
  {
    step: "04",
    title: "Customs Clearance",
    description: "Expert handling of export/import documentation and clearance",
  },
  {
    step: "05",
    title: "Air Transit",
    description: "Real-time tracking throughout flight with proactive updates",
  },
  {
    step: "06",
    title: "Final Delivery",
    description: "Door delivery or pickup from destination airport",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1524592714635-d77511a4834d?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&auto=format&fit=crop",
];

const stats = [
  { value: "150+", label: "Countries Served" },
  { value: "48h", label: "Express Delivery" },
  { value: "99%", label: "On-Time Rate" },
  { value: "24/7", label: "Support" },
];

export default function AirFreightPage() {
  return (
    <ServicePageLayout
      title="Fast & Reliable Air Cargo Solutions"
      subtitle="Air Freight Services"
      description="Connect your business to the world with our comprehensive air freight services. From express documents to heavy cargo, we deliver speed and reliability with real-time tracking and dedicated support."
      icon={Plane}
      heroImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2670&auto=format&fit=crop"
      features={features}
      benefits={benefits}
      processSteps={processSteps}
      galleryImages={galleryImages}
      stats={stats}
    />
  );
}
