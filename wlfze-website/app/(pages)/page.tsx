import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import StatsSection from "@/components/StatsSection";
import WhyWLFZE from "@/components/WhyWLFZE";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

const services = [
  {
    icon: "plane",
    title: "Air Freight",
    description: "Express and standard air cargo services with global reach. Door-to-door delivery with real-time tracking.",
    href: "/services/air-freight",
  },
  {
    icon: "ship",
    title: "Sea Freight",
    description: "FCL and LCL container shipping worldwide. Cost-effective solutions for bulk cargo and project shipments.",
    href: "/services/sea-freight",
  },
  {
    icon: "truck",
    title: "Land Freight",
    description: "Full truckload and less-than-truckload services across GCC and beyond. Cross-border expertise.",
    href: "/services/land-freight",
  },
  {
    icon: "warehouse",
    title: "Warehousing",
    description: "Secure storage at DAFZA with inventory management, pick & pack, and distribution services.",
    href: "/services/warehousing",
  },
  {
    icon: "package",
    title: "Courier",
    description: "Express document and parcel delivery. Domestic and international with signature confirmation.",
    href: "/services/courier",
  },
  {
    icon: "bike",
    title: "Last Mile Delivery",
    description: "Same-day and next-day delivery across UAE. E-commerce fulfillment with live tracking.",
    href: "/services/last-mile-delivery",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-dark mb-4">
              End-to-End Logistics Solutions
            </h2>
            <p className="text-neutral-dark/70 max-w-2xl mx-auto text-lg">
              From air freight to last-mile delivery, we provide comprehensive logistics services tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <WhyWLFZE />
      <Testimonials />
      <CTABanner />
    </>
  );
}
