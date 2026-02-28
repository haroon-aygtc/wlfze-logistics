"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import { Warehouse, PackageSearch, Boxes, ScanBarcode, Truck, Shield } from "lucide-react";

const features = [
  {
    icon: "packagesearch",
    iconComponent: PackageSearch,
    title: "Inventory Management",
    description: "Real-time stock tracking with advanced WMS integration",
  },
  {
    icon: "boxes",
    iconComponent: Boxes,
    title: "Pick & Pack",
    description: "Efficient order fulfillment and kitting services",
  },
  {
    icon: "scanbarcode",
    iconComponent: ScanBarcode,
    title: "Barcode Scanning",
    description: "Accurate tracking systems with RFID capabilities",
  },
  {
    icon: "truck",
    iconComponent: Truck,
    title: "Distribution",
    description: "Last-mile delivery and cross-docking services",
  },
];

const benefits = [
  "Strategic DAFZA location with direct airport and port access",
  "Bonded warehousing for duty-deferred storage",
  "Pick, pack, and dispatch services with 99.9% accuracy",
  "Inventory management with real-time visibility 24/7",
  "Value-added services: labeling, kitting, assembly, repackaging",
  "Cross-docking and distribution across UAE and GCC",
];

const processSteps = [
  {
    step: "01",
    title: "Inventory Receipt",
    description: "Goods received, inspected, and barcode scanned into WMS",
  },
  {
    step: "02",
    title: "Storage Allocation",
    description: "Strategic location assignment based on product characteristics",
  },
  {
    step: "03",
    title: "Inventory Management",
    description: "Real-time tracking with cycle counts and quality checks",
  },
  {
    step: "04",
    title: "Order Processing",
    description: "Pick and pack orders with quality verification",
  },
  {
    step: "05",
    title: "Value-Added Services",
    description: "Kitting, labeling, and custom packaging as required",
  },
  {
    step: "06",
    title: "Dispatch & Delivery",
    description: "Ship orders via chosen carrier with full tracking",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565611460905-e67d56e142be?w=800&auto=format&fit=crop",
];

const stats = [
  { value: "50K+", label: "Sqm Space" },
  { value: "DAFZA", label: "Location" },
  { value: "24/7", label: "Operations" },
  { value: "99.9%", label: "Accuracy" },
];

export default function WarehousingPage() {
  return (
    <ServicePageLayout
      title="Smart Storage Solutions"
      subtitle="Warehousing Services"
      description="Secure, flexible warehousing at DAFZA with full inventory management, bonded storage, and distribution services. Real-time visibility and expert handling."
      icon={Warehouse}
      heroImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop"
      features={features}
      benefits={benefits}
      processSteps={processSteps}
      galleryImages={galleryImages}
      stats={stats}
    />
  );
}
