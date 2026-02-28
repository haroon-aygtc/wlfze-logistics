"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Air Freight", href: "/services/air-freight" },
    { name: "Sea Freight", href: "/services/sea-freight" },
    { name: "Land Freight", href: "/services/land-freight" },
    { name: "Warehousing", href: "/services/warehousing" },
    { name: "Courier", href: "/services/courier" },
    { name: "Last Mile Delivery", href: "/services/last-mile-delivery" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Track Shipment", href: "/tracking" },
    { name: "Get a Quote", href: "/contact" },
    { name: "FAQs", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/wlfze.uae" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/logo.jpg"
                alt="WLFZE - World Link Logistics Services FZE"
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/80 mb-6 max-w-sm">
              Connecting Dubai to the World with precision logistics solutions. 
              Based in DAFZA, we deliver excellence in air, sea, and land freight services.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@wlfze.com" className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@wlfze.com</span>
              </a>
              <a href="tel:+971563457433" className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                <span>+971 56 345 7433</span>
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>QB-03, WH-10, DAFZA,<br />Dubai, UAE</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} WLFZE. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
