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

     {/* IMAGE GALLERY (seamless marquee, shows all images before looping) */}
<section id="gallery" className="py-6 bg-gray-100">
  <div className="max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-lg">
    {(() => {
      // Fixed tile width ensures we traverse all originals before the loop
      const TILE_W = 360; // px (adjust if you want larger/smaller tiles)
      const v = "?v=fix-images-2"; // bump to bust cache

      // Updated order: Construction-management placed before Property-Development-1
      const images = [
        "/images/Land-Development.png" + v,
        "/images/Construction-management.png" + v, // <-- new image replacing Property-Development-2
        "/images/Property-Development-1.png" + v,
        "/images/Addition.png" + v,
        "/images/Redevelopment.png" + v,
        "/images/stormwater-capture.png" + v,
      ];

      // Duplicate for seamless loop
      const track = images.concat(images);

      return (
        <motion.div
          className="flex"
          style={{ width: `${track.length * TILE_W}px` }}
          animate={{ x: [0, -images.length * TILE_W] }} // travel exactly one full set
          transition={{ duration: images.length * 4, ease: "linear", repeat: Infinity }}
        >
          {track.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="h-56 md:h-64 lg:h-72 object-cover flex-shrink-0"
              style={{ width: `${TILE_W}px` }}
              loading="lazy"
              draggable="false"
              onError={(e) => {
                console.warn("Missing image:", src);
                e.currentTarget.style.opacity = 0.15;
                e.currentTarget.alt = "Missing: " + src;
              }}
            />
          ))}
        </motion.div>
      );
    })()}
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
              title="Property & Site Development"
              bullets={[
                "Site selection, feasibility, and due diligence support",
                "Planning, zoning, and civil engineering services",
                "Construction management and owner representation",
              ]}
            />
            <ServiceCard
              icon={Workflow}
              title="Additions, Alterations & Permitting"
              bullets={[
                "Residential and commercial additions or remodels",
                "Entitlements, permitting, and plan check support",
                "Contractor bidding, coordination, and inspections",
              ]}
            />
            <ServiceCard
              icon={Droplets}
              title="Safe Clean Water (SCW) Program Support"
              bullets={[
                "Identify and evaluate stormwater capture and infiltration opportunities",
                "Develop project concepts and quantify water quality, supply, and community benefits",
                "Prepare SCW feasibility studies, funding applications, and program reporting materials",
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
      <section id="clients" className="py-16 bg-white border-t">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Who we support</h2>
          <p className="mt-2 text-gray-700 max-w-prose">
          We help property owners, developers, and municipalities turn underused
          land and existing assets into purposeful, compliant, and value-adding
          spaces.
          </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
          <h3 className="font-semibold text-lg text-blue-700">Private Property Owners</h3>
          <p className="mt-2 text-sm text-gray-700">
          Own land that’s sitting idle or an older building that needs work?
          We help you assess feasibility, navigate code requirements, and plan
          for profitable and compliant development.
          </p>
        </div>

        <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
          <h3 className="font-semibold text-lg text-blue-700">Developers &amp; Builders</h3>
          <p className="mt-2 text-sm text-gray-700">
          Whether you’re adding units, expanding existing facilities, or pursuing
          infill or adaptive-reuse projects, we provide entitlement, design, and
          construction coordination support to keep things moving.
          </p>
        </div>
  
        <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
          <h3 className="font-semibold text-lg text-blue-700">Municipal &amp; Program Clients</h3>
          <p className="mt-2 text-sm text-gray-700">
          For cities, agencies, and SCWP partners, we assist with feasibility
          studies, grant applications, stormwater capture project delivery, and
          program reporting.
            </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CAPABILITIES */}
    <section id="capabilities" className="py-16 bg-white border-t">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold">Selected capabilities</h2>
    <p className="mt-2 text-gray-700 max-w-prose">
      We bridge planning, engineering, and execution to help property owners and municipalities move projects from concept to construction with clarity and confidence.
    </p>

    <ul className="mt-6 grid md:grid-cols-2 gap-3 list-disc list-inside text-gray-700 leading-relaxed">
  {/* Property & Site Development */}
  <li>
    <strong>Site evaluation and feasibility studies</strong> — zoning, infrastructure,
    environmental conditions, and development potential.
  </li>
  <li>
    <strong>Design and entitlement strategy</strong> — concept layouts, grading,
    and permit pathways for new or redevelopment projects.
  </li>
  <li>
    <strong>Project management and coordination</strong> — aligning architects,
    engineers, contractors, and agencies to maintain schedule and budget.
  </li>

  {/* Additions, Alterations & Permitting */}
  <li>
    <strong>Construction oversight and compliance</strong> — plan check,
    field review, and documentation for inspections and occupancy.
  </li>
  <li>
    <strong>Additions and adaptive reuse expertise</strong> — modernization,
    expansions, and site improvements for existing developments.
  </li>

  {/* Safe Clean Water (SCW) Program Support */}
  <li>
    <strong>Stormwater and SCW Program expertise</strong> — feasibility studies,
    benefit quantification, and program reporting for municipal partners.
  </li>
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
                <Phone className="w-4 h-4" /> (909) 630-9843
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
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="text-sm">Company / Agency</label>
                <input
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  placeholder="Organization Name"
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
