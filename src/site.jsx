import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Droplets,
  ShieldCheck,
  FileSpreadsheet,
  HardHat,
  Workflow,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

export default function HigherConsultingSite() {
  const [submitted, setSubmitted] = useState(false);

  // --- HERO ROTATOR CONFIG (Listen → Design → Deliver) ---
  const slides = [
    { src: "/images/Listen.png",  title: "Listen",  colorClass: "text-blue-300" },
    { src: "/images/Design.png",  title: "Design",  colorClass: "text-teal-300" },
    { src: "/images/Deliver.png", title: "Deliver", colorClass: "text-indigo-300" },
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6000); // 6s per slide
    return () => clearInterval(id);
  }, []);

  const current = slides[idx];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-blue-600 flex items-center justify-center shadow text-white font-bold">
              H
            </div>
            <div>
              <p className="text-sm tracking-wide text-gray-600">
                Higher Consulting Group, LLC
              </p>
              <h1 className="text-lg font-semibold leading-4">
                Engineering & Realty Services
              </h1>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#approach" className="hover:text-blue-700">Approach</a>
            <a href="#clients" className="hover:text-blue-700">Clients</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
            <a href="#capabilities" className="hover:text-blue-700">Capabilities</a>
            <a href="#faq" className="hover:text-blue-700">FAQ</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700"
          >
            <Mail className="w-4 h-4" /> Contact
          </a>
        </div>
      </header>

      {/* HERO - Your images as background, text synced to image */}
      <section
        id="home"
        className="relative h-[550px] flex items-center justify-center text-center overflow-hidden"
      >
        {/* Background image (cross-fade) */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0.0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              fetchpriority="high"
            />
          </AnimatePresence>
          {/* Soft overlay for readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Text overlay (matches current image) */}
        <div className="relative z-10 text-white max-w-3xl px-4">
          <motion.h1
            key={current.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-5xl md:text-6xl font-extrabold"
          >
            We{" "}
            <span className={current.title === "Listen" ? current.colorClass : "text-white/80"}>
              Listen
            </span>
            . We{" "}
            <span className={current.title === "Design" ? current.colorClass : "text-white/80"}>
              Design
            </span>
            . We{" "}
            <span className={current.title === "Deliver" ? current.colorClass : "text-white/80"}>
              Deliver
            </span>
            .
          </motion.h1>

          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Practical engineering and realty expertise for property and infrastructure development.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#services"
              className="rounded-2xl bg-blue-600 text-white px-5 py-3 shadow hover:bg-blue-700"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="rounded-2xl bg-white/90 text-gray-800 px-5 py-3 shadow hover:bg-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

     {/* IMAGE GALLERY (seamless marquee) */}
<section id="gallery" className="py-6 bg-gray-100">
  <div className="max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-lg">
    <motion.div
      className="flex"
      style={{ width: "200%" }}
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
    >
      {[
        "/images/Land-Development.png",
        "/images/Property-Development-1.png",
        "/images/Property-Development-2.png",
        "/images/Redevelopment.png",
        "/images/Addition.png",
        "/images/Stormwater-capture.png",
      ]
        .concat([
          "/images/Land-Development.png",
          "/images/Property-Development-1.png",
          "/images/Property-Development-2.png",
          "/images/Redevelopment.png",
          "/images/Addition.png",
          "/images/Stormwater-capture.png",
        ])
        .map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="h-56 md:h-64 lg:h-72 object-cover flex-shrink-0 rounded-none"
            style={{ width: "25%" }}
            loading="lazy"
            draggable="false"
          />
        ))}
    </motion.div>
  </div>
</section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Core services</h2>
          <p className="text-gray-700 mt-2 max-w-prose">
            Engineering &amp; realty services for property and infrastructure
            development.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <ServiceCard
              icon={Building2}
              title="Property Development"
              bullets={[
                "Land acquisition support & early due diligence (title, survey, environmental, utilities)",
                "Planning, zoning, and civil engineering services",
                "Construction management & owner’s rep services",
              ]}
            />
            <ServiceCard
              icon={Workflow}
              title="Redevelopment & Permit Assistance"
              bullets={[
                "Small-scale redevelopment projects including additions and alterations",
                "Entitlements, permits, and agency coordination",
                "Contractor bidding, plan check, and inspections support",
              ]}
            />
            <ServiceCard
              icon={Droplets}
              title="SCWP Feasibility Study Development"
              bullets={[
                "Needs assessment: identify priorities, sites, and constraints",
                "Concept development & benefit analysis (water quality/supply, community)",
                "Prepare applications for Infrastructure Program funding (SCWP)",
              ]}
            />
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="py-16 bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold">How we work</h2>
            <p className="mt-2 text-gray-700">
              Clear scope, structured execution, and measurable outcomes.
            </p>
          </div>
          <div className="md:col-span-2 grid md:grid-cols-3 gap-6">
            {[
              { title: "Listen", text: "Stakeholder goals, constraints, and timelines." },
              { title: "Design", text: "Right-sized processes, templates, and reviews." },
              { title: "Deliver", text: "Weekly cadence, transparent reporting, and QA." },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl bg-gray-50 p-5 border">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-gray-700 mt-1">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Who we support</h2>
          <p className="mt-2 text-gray-700">
            Counties, cities, special districts, and public agencies across
            Southern California.
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
            {[
              "County Departments",
              "Public Works",
              "Water Agencies",
              "City Managers",
              "Code Enforcement",
              "Recovery Divisions",
              "Planning",
              "FEMA/PA Teams",
            ].map((t, i) => (
              <div key={i} className="rounded-xl border bg-white p-4 text-center">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="py-16 bg-white border-t">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Selected capabilities</h2>
          <ul className="mt-4 grid md:grid-cols-2 gap-3 list-disc list-inside text-gray-700">
            <li>SCWP feasibility studies and scoring support</li>
            <li>FEMA Public Assistance documentation (PAPPG-aligned)</li>
            <li>Production reporting and performance dashboards</li>
            <li>Stakeholder coordination and chain-of-command comms</li>
            <li>RFS intake and case management process design</li>
            <li>Contractor oversight and quality assurance</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold">Let’s talk</h2>
            <p className="mt-2 text-gray-700 max-w-prose">
              Send a quick note and we’ll follow up with scheduling options.
            </p>
            <div className="mt-6 space-y-3 text-gray-700">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> hello@higherconsultinggroup.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> (###) ###-####
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Southern California • Available statewide
              </p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Demo form — connect to a real handler later.");
              setSubmitted(true);
            }}
            className="rounded-2xl bg-white p-6 border shadow-sm"
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm">Name</label>
                <input
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  placeholder="Full name"
                  required
                />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  placeholder="you@example.gov"
                  required
                />
              </div>
              <div>
                <label className="text-sm">Organization</label>
                <input
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  placeholder="Agency / Department"
                />
              </div>
              <div>
                <label className="text-sm">Message</label>
                <textarea
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  rows={4}
                  placeholder="Briefly describe goals or project"
                  required
                />
              </div>
              <button
                type="submit"
                className="rounded-2xl bg-blue-600 text-white px-5 py-3 shadow hover:bg-blue-700 inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Send
              </button>
              {submitted && (
                <p className="text-sm text-green-700">
                  Thanks! Your message has been recorded (demo).
                </p>
              )}
              <p className="text-xs text-gray-500">
                By submitting, you consent to be contacted about this inquiry. No marketing spam.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Higher Consulting Group, LLC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="inline-flex items-center gap-1 hover:text-blue-700">
              <ExternalLink className="w-3.5 h-3.5" /> Capability Statement (PDF)
            </a>
            <a href="#" className="hover:text-blue-700">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, bullets }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border">
      <div className="flex items-center gap-3">
        <Icon className="w-6 h-6 text-blue-700" />
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
