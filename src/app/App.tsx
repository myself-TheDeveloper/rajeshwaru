import { useState, useRef, useEffect, ChangeEvent, FormEvent } from "react";
import { Menu, X, ArrowRight, ArrowUpRight, ChevronDown, Phone, Mail, MapPin, Shield, Zap, Leaf, Layers, Ruler, Award, Star, Quote } from "lucide-react";
import logoRed from "../assets/logoRed.png";
import heroImg from "../assets/heroImg.jpg";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import project4 from "../assets/project4.jpeg";
import project5 from "../assets/project5.jpeg";
import project6 from "../assets/project6.jpeg";
import project7 from "../assets/project7.jpeg";
import project8 from "../assets/project8.jpeg";
import project9 from "../assets/project9.jpeg";
import project10 from "../assets/project10.jpeg";
import project11 from "../assets/project11.jpeg";
import project12 from "../assets/project12.jpeg";
import project13 from "../assets/project13.jpg";
import project14 from "../assets/project14.jpeg";
import project15 from "../assets/project15.jpeg";
import project16 from "../assets/project16.jpeg";
import project17 from "../assets/project17.jpeg";

const CONTACT_EMAIL = "rajeshwarigfrcexterio@gmail.com";

/* ─── DATA ─── */

const NAV = ["About", "Benefits", "Projects", "Process", "Contact"];

const STATS = [
  { value: "18+", label: "Years Experience" },
  { value: "340+", label: "Projects Completed" },
  { value: "92%", label: "Weight Savings vs Standard Concrete" },
  { value: "60+", label: "Design Finishes Available" },
];

const BENEFITS = [
  {
    icon: Zap,
    title: "Exceptional Strength-to-Weight Ratio",
    body: "GFRC achieves the compressive strength of traditional concrete at a fraction of the mass. Panels weigh up to 75% less than solid concrete equivalents, dramatically reducing structural load and foundation costs.",
    metric: "75% lighter",
  },
  {
    icon: Ruler,
    title: "Design Freedom",
    body: "Unlike precast concrete, GFRC can be cast into virtually any shape — curves, undulations, sharp reveals, intricate reliefs, and complex geometries that would be impossible or cost-prohibitive in standard concrete.",
    metric: "Unlimited forms",
  },
  {
    icon: Leaf,
    title: "Durability & Low Maintenance",
    body: "Alkali-resistant glass fibres prevent cracking, spalling, and corrosion. GFRC withstands freeze-thaw cycles, coastal salt exposure, UV radiation, and chemical attack without surface treatment.",
    metric: "50+ year lifespan",
  },
  {
    icon: Shield,
    title: "Fire & Impact Resistant",
    body: "Classified A1 non-combustible. GFRC panels provide superior impact resistance, making them the preferred choice for high-traffic facades, security structures, and fire-rated assemblies.",
    metric: "A1 non-combustible",
  },
  {
    icon: Layers,
    title: "Versatile Surface Finishes",
    body: "From acid-etched exposures to smooth painted finishes, sandblasted textures to coloured integral pigments — GFRC accepts any finish your design demands, with full consistency across a panel run.",
    metric: "60+ finishes",
  },
  {
    icon: Award,
    title: "Faster Installation",
    body: "Lightweight panels require lighter cranes and smaller crews. Complex facades that would take months in stone or precast concrete can be clad in weeks, dramatically compressing the construction programme.",
    metric: "3× faster install",
  },
];

const PROJECTS = [
  {
    name: "",
    type: "Commercial Highrise",
    img: project1,
    wide: false,
  },

  {
    name: "",
    type: "Commercial Highrise",
    img: project6,
    wide: false,
  },
  {
    name: "",
    type: "Commercial Highrise",
    img: project7,
    wide: false,
  },
  {
    name: "",
    type: "Commercial Highrise",
    img: project8,
    wide: false,
  },
  {
    name: "",
    type: "Commercial Highrise",
    img: project9,
    wide: false,
  },
  {
    name: "",
    type: "Commercial Highrise",
    img: project10,
    wide: false,
  },
  {
    name: "",
    type: "Commercial Highrise",
    img: project11,
    wide: false,
  },
  {
    name: "",
    type: "Commercial Highrise",
    img: project12,
    wide: false,
  },
  {
    name: "",
    type: "Commercial Highrise",
    img: project13,
    wide: false,
  },
  {
    name: "",
    type: "Commercial Highrise",
    img: project14,
    wide: false,
  },
  {
    name: "",
    type: "Commercial Highrise",
    img: project15,
    wide: false,
  },
  {
    name: "",
    type: "Commercial Highrise",
    img: project16,
    wide: false,
  },
  {
    name: "",
    type: "Commercial Highrise",
    img: project17,
    wide: false,
  },
  {

    name: "",
    type: "Cultural / Civic",

    img: project2,
    wide: true,
  },
  {

    name: "",
    type: "Hospitality",

    img: project3,
    wide: false,
  },
  {

    name: "",
    type: "Commercial Campus",

    img: project4,
    wide: false,
  },
  {

    name: "",
    type: "Residential / Retail",
    img: project5,
    wide: true,
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Design Consultation", body: "Our engineers work directly with your architect and structural team to optimise panel geometry, fixing strategy, and finish specification from day one." },
  { num: "02", title: "Mix Design & Testing", body: "Every project begins with laboratory mix design — glass fibre dosage, aggregate selection, and pigment matching are validated before a single production panel is cast." },
  { num: "03", title: "Precision Casting", body: "Panels are spray-cast or hand-packed over CNC-milled foam or fibreglass moulds in our 1500 m² climate-controlled production facility." },
  { num: "04", title: "Curing & QC", body: "Each panel cures in a controlled humidity environment. Dimensional checks, flexural strength tests, and surface inspection are carried out batch-by-batch." },
  { num: "05", title: "Delivery & Installation", body: "Panels arrive sequence-stacked and individually wrapped. Our installation supervisors coordinate with your site team to ensure every panel lands on specification." },
];

const TESTIMONIALS = [
  {
    quote: "CastForm delivered 4,200 square metres of façade panels to within half a millimetre of tolerance on every single unit. I have never seen that level of consistency from a concrete manufacturer.",
    name: "Andile Nkosi",
    role: "Principal Architect",
    firm: "Nkosi & Partners Architecture",
  },
  {
    quote: "The weight saving alone changed the economics of the project. We were able to redesign the subframe, reduce our crane spec, and claw back six weeks of programme. The finish quality was exceptional.",
    name: "Sarah Müller",
    role: "Project Director",
    firm: "Integrated Construction Group",
  },
  {
    quote: "We specified GFRC for the first time on this project, largely because CastForm's technical team made the case so compellingly. Three years on, not a crack, not a stain, not a complaint.",
    name: "James Fourie",
    role: "Development Manager",
    firm: "Meridian Property Group",
  },
];

/* ─── COMPONENT ─── */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeProcess, setActiveProcess] = useState(0);
  const [filterType, setFilterType] = useState("All");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    project: "",
    stage: "Concept",
  });
  const [formStatus, setFormStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const projectTypes = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.type)))];
  const filteredProjects = filterType === "All" ? PROJECTS : PROJECTS.filter((p) => p.type === filterType);

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus({ type: "idle", message: "" });

    if (!formData.name.trim() || !formData.email.trim() || !formData.project.trim()) {
      setFormStatus({ type: "error", message: "Please fill in your name, email, and project brief." });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => payload.append(key, value as string));
      payload.append("_subject", "New enquiry from website");
      payload.append("_replyto", formData.email);
      payload.append("_honey", "");
      payload.append("_captcha", "false");

      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();
      console.debug("FormSubmit response", response.status, result);

      if (!response.ok || result.success === false) {
        throw new Error(result.message || "Unable to send enquiry. Please verify the email or try again.");
      }

      setFormStatus({ type: "success", message: "Thank you! Your enquiry has been sent." });
      setFormData({ name: "", company: "", email: "", phone: "", project: "", stage: "Concept" });
    } catch (error: any) {
      setFormStatus({ type: "error", message: error?.message || "Unable to send enquiry. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveTestimonial((t) => (t + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const goTestimonial = (i: number) => {
    setActiveTestimonial(i);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveTestimonial((t) => (t + 1) % TESTIMONIALS.length);
    }, 5000);
  };

  return (
    <div
      className="min-h-screen bg-[#FCF2E5] text-[#524646] overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >

      {/* ── NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-[#FCF2E5]/95 backdrop-blur-sm border-b border-[#EC5B38]/30"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
          <div className="flex items-center">
            <img
              src={logoRed}
              alt="Rajeshwari GFRC Exterio logo"
              className="h-10 w-auto"
            />
          </div>

          <ul className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[#A8A492] hover:text-[#EC5B38] text-sm tracking-wide transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-[#EC5B38] text-white px-6 py-2.5 text-sm font-medium hover:bg-[#EC5B38] transition-colors"
          >
            Start a Project <ArrowRight size={14} />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-[#524646]"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div
            className="md:hidden bg-[#FCF2E5] px-6 py-8 flex flex-col gap-6 border-t border-[#EC5B38]/30"
            style={{ borderColor: "rgba(251,192,45,0.2)" }}
          >
            {NAV.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#524646] text-2xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#EC5B38] text-white px-6 py-3 text-sm font-medium w-fit mt-2"
            >
              Start a Project <ArrowRight size={14} />
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#FCF2E5]">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1569258592171-357ea26da4df?w=1800&h=1200&fit=crop&auto=format"
            alt="Dramatic concrete architectural monument"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FCF2E5] via-[#FCF2E5]/60 to-transparent" />
        </div>

        {/* Subtle concrete texture overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1560780552-ba54683cb263?w=400&h=400&fit=crop&auto=format")`,
            backgroundSize: "300px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pb-20 pt-40 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end w-full">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-[#EC5B38]" />
              <span
                className="text-[#EC5B38] text-xs tracking-[0.4em] uppercase"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Glass Fibre Reinforced Concrete
              </span>
            </div>

            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] text-[#524646] mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Rajeshwari GFRC<br />
              <em className="not-italic text-[#EC5B38]">Defies</em><br />
              Its Own Weight.
            </h1>

            <p className="text-[#A8A492] text-lg max-w-xl leading-relaxed mb-10 font-light">
              India leading GFRC manufacturer. We craft architectural concrete panels that are lighter, stronger, and more expressive than anything the industry has seen before.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 bg-[#EC5B38] text-white px-8 py-4 text-sm font-medium hover:bg-[#EC5B38] transition-colors"
              >
                View Our Projects <ArrowRight size={16} />
              </a>
              <a
                href="#benefits"
                className="inline-flex items-center gap-3 bg-[#EC5B38]/10 border border-[#EC5B38]/30 text-[#A8A492] px-8 py-4 text-sm font-medium hover:bg-[#EC5B38]/20 hover:border-[#EC5B38]/30 transition-colors"
              >
                Why GFRC?
              </a>
            </div>
          </div>

          {/* Credentials strip */}
          <div className="lg:col-span-4 space-y-0">
            {[
              ["ISO 9001:2015", "Certified manufacturer"],
              ["GFRC-SA Member", "Industry association"],
              ["SANS 10177", "Fire classification"],
            ].map(([cert, sub]) => (
              <div
                key={cert}
                className="flex items-center justify-between py-4 border-t border-[#524646]/10"
              >
                <span
                  className="text-[#524646] text-sm font-semibold"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {cert}
                </span>
                <span className="text-[#A8A492] text-xs">{sub}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center pb-8 animate-bounce">
          <ChevronDown className="text-[#A8A492]" size={20} />
        </div>
      </section>

      {/* ── STATS TICKER ── */}
      <section className="bg-[#EC5B38] py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-white/20">
          {STATS.map((s) => (
            <div key={s.label} className="text-center md:px-8">
              <span
                className="text-4xl md:text-5xl font-black text-white block leading-none mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {s.value}
              </span>
              <span className="text-white/70 text-xs tracking-widest uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-28 bg-[#FCF2E5]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="aspect-[3/4] overflow-hidden bg-[#FCF2E5]">
              <img
                src={heroImg}
                alt="Fine concrete texture detail"
                className="w-full h-full "
              />
            </div>
            {/* Floating accent block */}
            <div className="absolute -bottom-8 -right-4 lg:-right-10 bg-[#524646] p-7 max-w-[240px] hidden lg:block border border-[#524646]/30 shadow-sm">
              <span
                className="text-[#f5f5f5] text-xl font-bold leading-tight block"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Pioneering GFRC in India
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#EC5B38]" />
              <span
                className="text-[#EC5B38] text-xs tracking-[0.4em] uppercase"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Who We Are
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold text-[#524646] leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              India Most Trusted GFRC Manufacturer
            </h2>

            <div className="space-y-5 text-[#A8A492] leading-relaxed text-[15px]">
              <p>
                Founded with a vision to redefine modern construction, CastForm is a fast-growing pioneer in advanced architectural concrete. We are proud to bring cutting-edge manufacturing to the region, utilizing state-of-the-art alkali-resistant glass fibre reinforcement in our high-performance spray-cast façades. From our specialized production facility, we operate dedicated casting bays, climate-controlled curing chambers, and a rigorous quality-testing setup. We manage the entire lifecycle of your project under one roof—whether it is a single, intricately detailed custom element or a massive 10,000 m² structural cladding system.
              </p>
              <p>
                We work directly with architects, developers, and main contractors — providing technical consultancy, shop drawings, sample approval, and installation support throughout every project lifecycle.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {[
                ["1500 m²", "Production facility"],
                ["In-house lab", "Full QC testing"],
                ["Direct supply", "No subcontractors"],
                ["18+ years", "Specialist expertise"],
              ].map(([val, lab]) => (
                <div key={val} className="bg-[#FCF2E5] p-4 border-l-2 border-[#EC5B38]">
                  <span
                    className="text-[#524646] font-bold text-sm block"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {val}
                  </span>
                  <span className="text-[#A8A492] text-xs">{lab}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section id="benefits" className="py-28 bg-[#FCF2E5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#EC5B38]" />
            <span
              className="text-[#EC5B38] text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Material Advantages
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#524646] leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Architects &amp; Developers<br />
              Choose <em className="text-[#EC5B38]">GFRC</em>
            </h2>
            <p className="text-[#A8A492] max-w-sm text-sm leading-relaxed lg:text-right">
              Glass Fibre Reinforced Concrete outperforms traditional concrete across every dimension that matters in architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#FCF2E5]  ">
            {BENEFITS.map(({ icon: Icon, title, body, metric }) => (
              <div
                key={title}
                className="bg-[#FCF2E5] p-8 hover:bg-[#FCF2E5] transition-colors group border border-[#EC5B38]/20 shadow-sm"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 bg-[#EC5B38]/10 border border-[#EC5B38]/20 flex items-center justify-center group-hover:bg-[#EC5B38]/20 transition-colors">
                    <Icon size={18} className="text-[#EC5B38]" />
                  </div>
                  <span
                    className="text-[#EC5B38] text-xs font-semibold"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {metric}
                  </span>
                </div>
                <h3
                  className="text-lg font-bold text-[#524646] mb-3 leading-snug"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {title}
                </h3>
                <p className="text-[#A8A492] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* GFRC vs Concrete comparison */}
          <div className="mt-16 border border-[#524646]/40 overflow-x-auto ">
            <table className="w-full min-w-[600px] text-sm">
              <thead >
                <tr className="border-b border-[#EC5B38]/20 bg-[#524646] text-[#A8A492]">
                  <th className="text-left px-6 py-4  font-normal tracking-widest uppercase text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>Property</th>
                  <th className="px-6 py-4 text-center">
                    <span className=" font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>GFRC (CastForm)</span>
                  </th>
                  <th className="px-6 py-4 text-center  text-xs font-normal tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>Standard Precast</th>
                  <th className="px-6 py-4 text-center  text-xs font-normal tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>Natural Stone</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Panel weight", "12–18 kg/m²", "80–120 kg/m²", "60–150 kg/m²"],
                  ["Min. thickness", "12 mm", "75 mm", "30 mm"],
                  ["Complex geometry", "✓ Yes", "✗ Limited", "✗ Very limited"],
                  ["Fire rating", "A1 Non-combustible", "A1", "A1"],
                  ["Colour options", "60+ integral", "10–15", "Natural only"],
                  ["Crack resistance", "Excellent (fibre bridging)", "Moderate", "Poor"],
                  ["Installation time", "Fast (lightweight)", "Slow (heavy lifts)", "Slow"],
                ].map(([prop, gfrc, precast, stone], i) => (
                  <tr
                    key={prop}
                    className={`border-b border-[#524646]/40 ${i % 2 === 0 ? "bg-[#FCF2E5]" : "bg-[#FDE5D5]"}`}
                  >
                    <td className="px-6 py-4 text-[#A8A492] text-xs">{prop}</td>
                    <td className="px-6 py-4 text-center text-[#EC5B38] text-xs font-semibold">{gfrc}</td>
                    <td className="px-6 py-4 text-center text-[#A8A492] text-xs">{precast}</td>
                    <td className="px-6 py-4 text-center text-[#A8A492] text-xs">{stone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-28 bg-[#FCF2E5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#EC5B38]" />
            <span
              className="text-[#EC5B38] text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Selected Works
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#524646] leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Projects That<br />Define Skylines
            </h2>

            {/* Filter tabs */}
            {/* <div className="flex flex-wrap gap-2">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  aria-pressed={filterType === type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-2 rounded-full text-xs tracking-wide transition-all border ${filterType === type
                    ? "bg-[#EC5B38] text-white border-[#EC5B38] shadow-sm"
                    : "bg-[#FCF2E5] text-[#A8A492] border-[#EC5B38]/10 hover:bg-[#EC5B38]/20 hover:border-[#EC5B38]/30"
                    }`}
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {type}
                </button>
              ))}
            </div> */}
          </div>

          {/* Project grid */}
          <div className="columns-1 md:columns-2 gap-4 space-y-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden bg-[#FCF2E5] shadow-sm border border-[#EC5B38]/20"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className={`overflow-hidden ${project.wide ? "aspect-[16/9]" : "aspect-[4/5]"}`}>
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 bg-[#EC5B38]/10 flex flex-col justify-end p-8 transition-opacity duration-400 ${activeProject === project.id ? "opacity-100" : "opacity-0"
                    }`}
                >
                  {/* <span
                    className="text-[#EC5B38] text-xs mb-3 tracking-widest uppercase"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {project.id} — {project.type}
                  </span> */}
                  {/*  <h3
                    className="text-2xl font-bold text-[#524646] mb-4 leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {project.name}
                  </h3> */}
                  {/*  <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-[#A8A492]">
                    <span><span className="text-[#524646]/50 mr-1">Location:</span>{project.location}</span>
                    <span><span className="text-[#524646]/50 mr-1">Area:</span>{project.area}</span>
                    <span><span className="text-[#524646]/50 mr-1">Finish:</span>{project.finish}</span>
                    <span><span className="text-[#524646]/50 mr-1">Year:</span>{project.year}</span>
                  </div> */}
                  <div className="flex items-center gap-2 mt-5 text-[#EC5B38] text-xs font-semibold">
                    View project <ArrowUpRight size={14} />
                  </div>
                </div>

                {/* Always-visible label strip */}
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#FCF2E5]/70 to-transparent px-6 py-5 transition-opacity duration-300 ${activeProject === project.id ? "opacity-0" : "opacity-100"
                    }`}
                >
                  <span
                    className="text-[#524646] font-bold text-sm leading-tight block"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {project.name}
                  </span>
                  <span className="text-[#524646]/60 text-xs">{project.type} · {project.year}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#EC5B38] text-white px-8 py-4 text-sm font-medium hover:bg-[#EC5B38] transition-colors"
            >
              Discuss Your Project <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="py-28 bg-[#FCF2E5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#EC5B38]" />
            <span
              className="text-[#EC5B38] text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              How We Work
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h2
                className="text-4xl md:text-5xl font-bold text-[#524646] leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Production Process
              </h2>
              <p className="text-[#A8A492] text-sm leading-relaxed mb-10">
                Every CastForm project follows a rigorous five-stage process from concept to site. No shortcuts. No subcontractors. No surprises.
              </p>
              <div className="aspect-[3/4] bg-[#FCF2E5] overflow-hidden border border-[#EC5B38]/10 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1711606329941-63c1af645a53?w=600&h=800&fit=crop&auto=format"
                  alt="GFRC concrete panel close-up"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-0">
                {PROCESS_STEPS.map((step, i) => (
                  <div
                    key={step.num}
                    className={`border-t border-[#A8A492] cursor-pointer transition-all duration-300 ${activeProcess === i ? "" : "hover:bg-[#FCF2E5]/50"
                      }`}
                    onClick={() => setActiveProcess(activeProcess === i ? -1 : i)}
                  >
                    <div className="flex items-center justify-between px-6 py-6 gap-4">
                      <div className="flex items-center gap-6">
                        <span
                          className={`text-3xl font-black leading-none transition-colors ${activeProcess === i ? "text-[#EC5B38]" : "text-[#A8A492]"
                            }`}
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {step.num}
                        </span>
                        <h3
                          className={`text-lg font-bold leading-tight transition-colors ${activeProcess === i ? "text-[#524646]" : "text-[#A8A492]"
                            }`}
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <div
                        className={`w-6 h-6 border flex items-center justify-center shrink-0 transition-colors ${activeProcess === i ? "border-[#EC5B38] bg-[#EC5B38]" : "border-[#A8A492]"
                          }`}
                      >
                        <span className={`text-xs font-bold ${activeProcess === i ? "text-white" : "text-[#A8A492]"}`}>
                          {activeProcess === i ? "−" : "+"}
                        </span>
                      </div>
                    </div>
                    {activeProcess === i && (
                      <div className="px-6 pb-6 pl-[72px]">
                        <p className="text-[#A8A492] text-sm leading-relaxed">{step.body}</p>
                      </div>
                    )}
                  </div>
                ))}
                <div className="border-t border-[#A8A492]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 bg-[#FCF2E5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#EC5B38]" />
            <span
              className="text-[#EC5B38] text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Client Voices
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Quote size={40} className="text-[#EC5B38]/40 mb-6" />
              <blockquote
                className="text-2xl md:text-3xl font-medium text-[#524646] leading-relaxed mb-8 italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#EC5B38] flex items-center justify-center text-white font-bold text-sm">
                  {TESTIMONIALS[activeTestimonial].name[0]}
                </div>
                <div>
                  <span className="text-[#524646] font-semibold text-sm block">{TESTIMONIALS[activeTestimonial].name}</span>
                  <span className="text-[#A8A492] text-xs">{TESTIMONIALS[activeTestimonial].role} · {TESTIMONIALS[activeTestimonial].firm}</span>
                </div>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-3 mt-10">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`View testimonial ${i + 1}`}
                    onClick={() => goTestimonial(i)}
                    className={`transition-all duration-300 ${activeTestimonial === i
                      ? "w-8 h-2 bg-[#EC5B38]"
                      : "w-2 h-2 bg-[#FCF2E5] hover:bg-[#A8A492]"
                      }`}
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-square bg-[#FCF2E5] overflow-hidden border border-[#EC5B38]/10 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1496236436299-cde70e3587cf?w=700&h=700&fit=crop&auto=format"
                  alt="Architectural concrete building"
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              {/* Stars */}
              <div className="flex items-center gap-1 mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#EC5B38] fill-[#EC5B38]" />
                ))}
                <span className="text-[#A8A492] text-xs ml-2">5.0 · 47 client reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FULL-BLEED ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1614595737476-42487331b8a1?w=1800&h=900&fit=crop&auto=format"
            alt="Dramatic concrete architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#EC5B38]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-6xl font-black text-white leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Build Something<br />Extraordinary?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10 font-light">
            Share your brief with our team. We will respond with a technical proposal and indicative pricing within 48 hours.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-white text-[#EC5B38] px-10 py-5 text-sm font-bold hover:bg-white/90 transition-colors"
          >
            Start the Conversation <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-28 bg-[#FCF2E5]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#EC5B38]" />
              <span
                className="text-[#EC5B38] text-xs tracking-[0.4em] uppercase"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Get In Touch
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#524646] leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Let&apos;s Talk<br />About Your Project
            </h2>
            <p className="text-[#A8A492] text-sm leading-relaxed mb-10">
              Whether you have a set of drawings or just a vision, our technical team can help you understand what GFRC can achieve for your project and budget.
            </p>

            <div className="space-y-5">
              {[
                { icon: Phone, text: "+91 97893 19700" },
                { icon: Mail, text: "rajeshwarigfrcexterio@gmail.com" },
                { icon: MapPin, text: "Manaveli, Vanamadevi Post, Kattumannarkoil Taluk, Cuddalore Dist, Tamil Nadu, India - 608 701" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#EC5B38]/10 border border-[#EC5B38]/20 flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-[#EC5B38]" />
                  </div>
                  <span className="text-[#A8A492] text-sm pt-1">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: "name", label: "Full Name", placeholder: "Enter your full name" },
                  { id: "company", label: "Practice / Company", placeholder: "Enter your practice or company name" },
                ].map(({ id, label, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-xs tracking-widest uppercase text-[#A8A492] mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>{label}</label>
                    <input
                      id={id}
                      name={id}
                      type="text"
                      value={formData[id as keyof typeof formData]}
                      onChange={handleFieldChange}
                      placeholder={placeholder}
                      className="w-full bg-[#FCF2E5] border border-[#A8A492] text-[#524646] placeholder:text-[#A8A492] px-4 py-3 text-sm focus:outline-none focus:border-[#EC5B38] transition-colors"
                    />
                  </div>
                ))}
              </div>
              {[
                { id: "email", label: "Email", placeholder: "Enter your email address", type: "email" },
                { id: "phone", label: "Phone", placeholder: "Enter your phone number", type: "tel" },
              ].map(({ id, label, placeholder, type }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-xs tracking-widest uppercase text-[#A8A492] mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>{label}</label>
                  <input
                    id={id}
                    name={id}
                    type={type}
                    value={formData[id as keyof typeof formData]}
                    onChange={handleFieldChange}
                    placeholder={placeholder}
                    className="w-full bg-[#FCF2E5] border border-[#A8A492] text-[#524646] placeholder:text-[#A8A492] px-4 py-3 text-sm focus:outline-none focus:border-[#EC5B38] transition-colors"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="project" className="block text-xs tracking-widest uppercase text-[#A8A492] mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>Project Brief</label>
                <textarea
                  id="project"
                  name="project"
                  rows={5}
                  value={formData.project}
                  onChange={handleFieldChange}
                  placeholder="Tell us about your project — building type, estimated façade area, design intent, programme..."
                  className="w-full bg-[#FCF2E5] border border-[#A8A492] text-[#524646] placeholder:text-[#A8A492] px-4 py-3 text-sm focus:outline-none focus:border-[#EC5B38] transition-colors resize-none"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-[#A8A492] mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>Project Stage</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {["Concept", "Design Development", "Tender / Bid", "Construction"].map((stage) => (
                    <label key={stage} className="flex items-center gap-2 text-xs text-[#A8A492] cursor-pointer group">
                      <input
                        type="radio"
                        name="stage"
                        value={stage}
                        checked={formData.stage === stage}
                        onChange={handleFieldChange}
                        className="accent-[#EC5B38]"
                      />
                      <span className="group-hover:text-[#524646] transition-colors">{stage}</span>
                    </label>
                  ))}
                </div>
              </div>
              {formStatus.type !== "idle" && (
                <p className={`text-sm ${formStatus.type === "success" ? "text-[#1c7c3b]" : "text-[#b02a37]"}`}>
                  {formStatus.message}
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#EC5B38] text-white py-4 text-sm font-semibold transition-colors flex items-center justify-center gap-3 ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-[#c9432a]"}`}
              >
                {isSubmitting ? "Sending…" : "Send Enquiry"} <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#FCF2E5] border-t border-[#EC5B38]/20 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
            <div className="md:col-span-2">
              <div className="flex items-center">
                <img
                  src={logoRed}
                  alt="Rajeshwari GFRC Exterio logo"
                  className="h-20 w-auto mb-5"
                />
              </div>
              {/* <span
                className="text-[#524646] text-2xl font-black block mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                CastForm
              </span>
              <span
                className="text-[#A8A492] text-xs tracking-[0.3em] uppercase block mb-5"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                GFRC Specialists · Est. 1996
              </span> */}
              <p className="text-[#A8A492] text-sm leading-relaxed max-w-xs">
                India leading manufacturer of Glass Fibre Reinforced Concrete architectural panels, facades, and custom elements.
              </p>
            </div>

            <div>
              <span className="text-[#A8A492] text-xs tracking-widest uppercase block mb-5" style={{ fontFamily: "'DM Mono', monospace" }}>Navigation</span>
              <ul className="space-y-3">
                {[...NAV,].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-[#A8A492] hover:text-[#524646] text-sm transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[#A8A492] text-xs tracking-widest uppercase block mb-5" style={{ fontFamily: "'DM Mono', monospace" }}>Certifications</span>
              <ul className="space-y-3">
                {["ISO 9001:2015", "SANS 10177", "GFRC-SA Member"].map((cert) => (
                  <li key={cert}>
                    <span className="text-[#A8A492] text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-[#EC5B38]/30 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <span className="text-[#A8A492] text-xs">© 2026 BWSS pvt Ltd. All rights reserved.</span>
            <div className="flex gap-6">
              {[["Privacy Policy", "#contact"], ["Terms of Use", "#contact"]].map(([link, href]) => (
                <a key={link} href={href} className="text-[#A8A492] hover:text-[#A8A492] text-xs transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}









