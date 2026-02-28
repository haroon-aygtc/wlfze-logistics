"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import { Truck, MapPin, Gauge, Thermometer, Route, Shield } from "lucide-react";

const features = [
  {
    icon: "mappin",
    iconComponent: MapPin,
    title: "GCC Coverage",
    description: "UAE, Saudi, Kuwait, Bahrain, Oman, Qatar - complete regional coverage",
  },
  {
    icon: "gauge",
    iconComponent: Gauge,
    title: "FTL & LTL",
    description: "Full and partial truckload options for any shipment size",
  },
  {
    icon: "thermometer",
    iconComponent: Thermometer,
    title: "Reefer Trucks",
    description: "Temperature-controlled transport for pharmaceuticals and food",
  },
  {
    icon: "route",
    iconComponent: Route,
    title: "Cross-Border",
    description: "Seamless customs clearance across all GCC borders",
  },
];

const benefits = [
  "Full Truckload (FTL) and Less-Than-Truckload (LTL) services",
  "Cross-border expertise for GCC countries with customs handling",
  "GPS tracking and real-time shipment updates",
  "Temperature-controlled vehicles for perishables",
  "Dangerous goods transportation certified",
  "Express road freight for time-critical shipments",
];

const processSteps = [
  {
    step: "01",
    title: "Route Planning",
    description: "Analyze optimal routes considering distance, customs, and transit times",
  },
  {
    step: "02",
    title: "Vehicle Assignment",
    description: "Allocate appropriate truck type based on cargo specifications",
  },
  {
    step: "03",
    title: "Cargo Loading",
    description: "Professional loading with proper securing and documentation",
  },
  {
    step: "04",
    title: "Border Clearance",
    description: "Handle all customs paperwork and cross-border formalities",
  },
  {
    step: "05",
    title: "Transit Tracking",
    description: "Real-time GPS tracking with milestone notifications",
  },
  {
    step: "06",
    title: "Safe Delivery",
    description: "Unloading and delivery confirmation with POD documentation",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&auto=format&fit=crop",
];

const stats = [
  { value: "GCC", label: "Coverage" },
  { value: "500+", label: "Trucks" },
  { value: "FTL/LTL", label: "Services" },
  { value: "98%", label: "On-Time" },
];

export default function LandFreightPage() {
  return (
    <ServicePageLayout
      title="Ground Transportation Excellence"
      subtitle="Land Freight Services"
      description="Comprehensive road freight services across UAE and GCC. FTL, LTL, and specialized transport solutions with real-time tracking and expert customs handling."
      icon={Truck}
      heroImage="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2670&auto=format&fit=crop"
      features={features}
      benefits={benefits}
      processSteps={processSteps}
      galleryImages={galleryImages}
      stats={stats}
    />
  );
}
