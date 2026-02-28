"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Package, Truck, CheckCircle, Clock, MapPin } from "lucide-react";

const mockTrackingResult = {
  trackingNumber: "WLF123456789",
  status: "In Transit",
  origin: "Dubai, UAE",
  destination: "London, UK",
  estimatedDelivery: "March 3, 2026",
  events: [
    { date: "Feb 28, 2026", time: "14:30", status: "Picked Up", location: "DAFZA Warehouse, Dubai", completed: true },
    { date: "Feb 28, 2026", time: "18:45", status: "Departed Facility", location: "Dubai Airport (DXB)", completed: true },
    { date: "Feb 29, 2026", time: "02:15", status: "In Transit", location: "En route to London", completed: true },
    { date: "Mar 1, 2026", time: "08:00", status: "Arrived at Hub", location: "London Heathrow (LHR)", completed: false },
    { date: "Mar 1, 2026", time: "12:00", status: "Customs Clearance", location: "London", completed: false },
    { date: "Mar 3, 2026", time: "10:00", status: "Out for Delivery", location: "London", completed: false },
  ],
};

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setShowResult(true);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto text-center">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-6">
              Track Your Shipment
            </h1>
            <p className="text-white/80 mb-8">
              Enter your tracking number to get real-time updates on your shipment status
            </p>
            
            <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-dark/50" />
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter tracking number (e.g., WLF123456789)"
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-neutral-dark focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <button type="submit" className="btn-primary px-8">
                Track
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      {showResult && (
        <section className="section-padding bg-neutral-light">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
              {/* Status Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <p className="text-neutral-dark/60 text-sm">Tracking Number</p>
                    <p className="font-montserrat font-bold text-2xl text-neutral-dark">{mockTrackingResult.trackingNumber}</p>
                  </div>
                  <div className="px-4 py-2 bg-accent/10 text-accent rounded-full font-semibold">
                    {mockTrackingResult.status}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm text-neutral-dark/60">Origin</p>
                      <p className="font-medium">{mockTrackingResult.origin}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm text-neutral-dark/60">Destination</p>
                      <p className="font-medium">{mockTrackingResult.destination}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm text-neutral-dark/60">Est. Delivery</p>
                      <p className="font-medium">{mockTrackingResult.estimatedDelivery}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-montserrat font-bold text-xl mb-6">Shipment Progress</h3>
                <div className="space-y-6">
                  {mockTrackingResult.events.map((event, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${event.completed ? 'bg-accent text-white' : 'bg-neutral-light text-neutral-dark/40'}`}>
                          {event.completed ? <CheckCircle className="w-5 h-5" /> : <Package className="w-5 h-5" />}
                        </div>
                        {index < mockTrackingResult.events.length - 1 && (
                          <div className={`w-0.5 flex-1 my-2 ${event.completed ? 'bg-accent' : 'bg-neutral-light'}`} />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <p className="font-bold text-lg">{event.status}</p>
                            <p className="text-neutral-dark/60">{event.location}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{event.date}</p>
                            <p className="text-neutral-dark/60 text-sm">{event.time}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Features */}
      {!showResult && (
        <section className="section-padding bg-neutral-light">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "truck", title: "Real-time Updates", desc: "Track your shipment at every stage" },
                { icon: "clock", title: "24/7 Tracking", desc: "Access tracking anytime, anywhere" },
                { icon: "checkcircle", title: "Proof of Delivery", desc: "Get confirmation when delivered" },
              ].map((item, i) => {
                const IconComponent = { truck: Truck, clock: Clock, checkcircle: CheckCircle }[item.icon];
                return (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-xl p-6 text-center shadow-lg">
                    {IconComponent && <IconComponent className="w-12 h-12 text-accent mx-auto mb-4" />}
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-neutral-dark/70">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
