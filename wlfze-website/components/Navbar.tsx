"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Air Freight", href: "/services/air-freight" },
      { name: "Sea Freight", href: "/services/sea-freight" },
      { name: "Land Freight", href: "/services/land-freight" },
      { name: "Warehousing", href: "/services/warehousing" },
      { name: "Courier", href: "/services/courier" },
      { name: "Last Mile Delivery", href: "/services/last-mile-delivery" },
    ],
  },
  { name: "Tracking", href: "/tracking" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.jpg"
              alt="WLFZE - World Link Logistics Services FZE"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 font-medium transition-colors",
                      scrolled ? "text-neutral-dark hover:text-accent" : "text-white hover:text-accent"
                    )}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-neutral-dark hover:bg-accent/10 hover:text-accent transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "font-medium transition-colors",
                    scrolled ? "text-neutral-dark hover:text-accent" : "text-white hover:text-accent"
                  )}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+971563457433"
              className={cn(
                "flex items-center gap-2 font-medium",
                scrolled ? "text-neutral-dark" : "text-white"
              )}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+971 56 345 7433</span>
            </a>
            <Link href="/contact" className="btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2",
              scrolled ? "text-neutral-dark" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container-custom py-4 space-y-2">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.name} className="space-y-2">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center justify-between w-full py-2 text-neutral-dark font-medium"
                    >
                      {link.name}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform",
                          servicesOpen && "rotate-180"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-1"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className="block py-2 text-sm text-neutral-dark/80 hover:text-accent"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-neutral-dark font-medium hover:text-accent"
                  >
                    {link.name}
                  </Link>
                )
              )}
              <div className="pt-4 border-t">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full text-center block"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
