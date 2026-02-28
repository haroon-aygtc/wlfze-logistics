"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import { Package, Clock, FileText, Globe, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: "clock",
    iconComponent: Clock,
    title: "Express Delivery",
    description: "Same-day and next-day delivery options for urgent shipments",
  },
  {
    icon: "filetext",
    iconComponent: FileText,
    title: "Document Handling",
    description: "Secure handling of confidential documents worldwide",
  },
  {
    icon: "globe",
    iconComponent: Globe,
    title: "International Express",
    description: "Global courier network reaching 150+ countries",
  },
  {
    icon: "zap",
    iconComponent: Zap,
    title: "Real-Time Tracking",
    description: "Live tracking with instant delivery notifications",
  },
];

const benefits = [
  "Same-day delivery within Dubai - pickup to delivery in hours",
  "Next-day delivery to all UAE emirates guaranteed",
  "International express delivery to 150+ countries",
  "Real-time tracking with SMS and email notifications",
  "Signature confirmation and digital proof of delivery",
  "24/7 customer support with dedicated account managers",
];

const processSteps = [
  {
    step: "01",
    title: "Book Online",
    description: "Schedule pickup via web, app, or phone call",
  },
  {
    step: "02",
    title: "Pickup",
    description: "Courier collects from your location at scheduled time",
  },
  {
    step: "03",
    title: "Hub Processing",
    description: "Sorting and routing through our distribution center",
  },
  {
    step: "04",
    title: "Transit",
    description: "Fast transport via air or road depending on destination",
  },
  {
    step: "05",
    title: "Last Mile",
    description: "Local courier takes over for final delivery",
  },
  {
    step: "06",
    title: "Delivery",
    description: "Secure handover with signature and photo confirmation",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1586864387789-628af9feed72?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&auto=format&fit=crop",
];

const stats = [
  { value: "Same Day", label: "Dubai" },
  { value: "150+", label: "Countries" },
  { value: "24/7", label: "Support" },
  { value: "99%", label: "Success" },
];

export default function CourierPage() {
  return (
    <ServicePageLayout
      title="Express Courier Solutions"
      subtitle="Courier Services"
      description="Fast, reliable courier services for documents and parcels. Domestic and international express delivery with real-time tracking and guaranteed service levels."
      icon={Package}
      heroImage="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2670&auto=format&fit=crop"
      features={features}
      benefits={benefits}
      processSteps={processSteps}
      galleryImages={galleryImages}
      stats={stats}
    />
  );
}
