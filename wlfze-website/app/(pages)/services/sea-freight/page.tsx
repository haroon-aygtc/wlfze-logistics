"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import { Ship, Container, Anchor, Scale, Package, Globe } from "lucide-react";

const features = [
  {
    icon: "container",
    iconComponent: Container,
    title: "FCL & LCL Options",
    description: "Full container load and less-than-container load for any cargo size",
  },
  {
    icon: "globe",
    iconComponent: Globe,
    title: "300+ Ports",
    description: "Global port coverage across all major shipping routes",
  },
  {
    icon: "scale",
    iconComponent: Scale,
    title: "Project Cargo",
    description: "Oversized and heavy lift specialists for complex shipments",
  },
  {
    icon: "package",
    iconComponent: Package,
    title: "Multi-modal",
    description: "Sea-air and sea-land combinations for optimal solutions",
  },
];

const benefits = [
  "Competitive rates through carrier partnerships with 50+ shipping lines",
  "FCL and LCL options for any cargo volume",
  "Project cargo and heavy lift expertise",
  "Temperature-controlled reefers for sensitive cargo",
  "Ro-Ro services for vehicles and machinery",
  "Hazardous materials certified handling",
];

const processSteps = [
  {
    step: "01",
    title: "Quote Request",
    description: "Provide cargo details, origin, destination for ocean freight pricing",
  },
  {
    step: "02",
    title: "Route Planning",
    description: "We select optimal vessel routes and transit schedules",
  },
  {
    step: "03",
    title: "Cargo Consolidation",
    description: "LCL consolidation or direct FCL booking based on needs",
  },
  {
    step: "04",
    title: "Port Handling",
    description: "Coordination with port authorities for smooth loading",
  },
  {
    step: "05",
    title: "Ocean Transit",
    description: "Container tracking throughout the voyage with updates",
  },
  {
    step: "06",
    title: "Destination Services",
    description: "Customs clearance and final delivery arrangements",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&auto=format&fit=crop",
];

const stats = [
  { value: "300+", label: "Global Ports" },
  { value: "50+", label: "Carrier Partners" },
  { value: "FCL/LCL", label: "Options" },
  { value: "99%", label: "Reliability" },
];

export default function SeaFreightPage() {
  return (
    <ServicePageLayout
      title="Comprehensive Sea Freight Solutions"
      subtitle="Sea Freight Services"
      description="Full and partial container shipping worldwide. Cost-effective solutions for bulk cargo, project shipments, and everything in between with end-to-end visibility."
      icon={Ship}
      heroImage="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2670&auto=format&fit=crop"
      features={features}
      benefits={benefits}
      processSteps={processSteps}
      galleryImages={galleryImages}
      stats={stats}
    />
  );
}
