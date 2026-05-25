import { useState } from "react";
import { Leaf, ArrowRight, Sprout, ShieldCheck, FlaskConical, Layers, Truck, Package, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import heroBg from "@/assets/rameshwar-hero.jpg";
import cumin from "@/assets/spice-cumin.jpg";
import coriander from "@/assets/spice-coriander.jpg";
import sesame from "@/assets/spice-sesame.jpg";
import pigeon from "@/assets/spice-pigeon-peas.jpg";
import fenugreek from "@/assets/spice-fenugreek.jpg";

const products = [
  {
    name: "Cumin Seeds",
    botanical: "Cuminum cyminum",
    image: cumin,
    desc: "Aromatic, sun-dried cumin from Gujarat & Rajasthan. Known for its rich oil content and bold earthy aroma.",
    grades: ["Singapore", "Europe", "Machine Clean"],
  },
  {
    name: "Coriander Seeds",
    botanical: "Coriandrum sativum",
    image: coriander,
    desc: "Plump, fragrant coriander seeds with a sweet citrus undertone — a staple of Indian and global cuisines.",
    grades: ["Eagle", "Scooter", "Single Polish"],
  },
  {
    name: "Sesame Seeds",
    botanical: "Sesamum indicum",
    image: sesame,
    desc: "Hulled and natural sesame seeds — nutty, oil-rich and graded for bakery, tahini and confectionery use.",
    grades: ["Hulled", "Natural White", "Black"],
  },
  {
    name: "Pigeon Peas",
    botanical: "Cajanus cajan",
    image: pigeon,
    desc: "Premium tur dal / arhar — protein-rich split pigeon peas, sortex-cleaned and ready for global supply.",
    grades: ["Whole", "Split (Tur Dal)", "Sortex"],
  },
  {
    name: "Fenugreek Seeds",
    botanical: "Trigonella foenum-graecum",
    image: fenugreek,
    desc: "Bold, golden methi seeds with intense aroma — used across culinary, medicinal and nutraceutical industries.",
    grades: ["Whole", "Sortex Clean", "Premium"],
  },
];

const aboutPoints = [
  { title: "Direct Sourcing", desc: "From farms to our warehouse — no middlemen." },
  { title: "Quality Graded", desc: "Machine-cleaned & manually sorted twice." },
  { title: "Export Ready", desc: "Packed to international standards." },
  { title: "Trusted Origin", desc: "Authentic Gujarat-grown produce." },
];

const whyUs = [
  { icon: Sprout, title: "Farm-Direct Sourcing", desc: "We partner directly with farmers across Gujarat and central India, eliminating middlemen and preserving freshness." },
  { icon: ShieldCheck, title: "Stringent Quality Control", desc: "Every batch is moisture-tested, sortex-cleaned and visually inspected before being approved for dispatch." },
  { icon: FlaskConical, title: "Lab-Verified Purity", desc: "Independent lab reports for moisture, foreign matter and pesticide residue — available on request." },
  { icon: Layers, title: "Multiple Export Grades", desc: "Singapore, Europe, Eagle, Scooter, Sortex — we deliver the grade your market demands." },
  { icon: Truck, title: "Reliable Logistics", desc: "Container-loading capabilities from Mundra & Pipavav ports — timely shipments, every time." },
  { icon: Package, title: "Global-Ready Packaging", desc: "Custom packaging in PP bags, jute sacks or branded retail packs — tailored to your buyer's spec." },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Premium Indian spices, seeds and pulses by Rameshwar International" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/75 to-charcoal/30" />
        </div>
        <div className="relative z-10 container-wide mx-auto px-6 lg:px-20 py-24">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-primary mb-8">
              <Leaf size={14} /> Rajkot · Gujarat · India
            </p>
            <h1 className="heading-display text-charcoal-foreground mb-8">
              From the soil of <span className="accent-italic">Gujarat,</span><br />
              to kitchens around the world.
            </h1>
            <p className="body-large text-charcoal-foreground/70 mb-10 max-w-xl">
              Rameshwar International Company is a trusted exporter of premium Indian spices, seeds and pulses — handpicked, machine-cleaned and quality-assured from the heart of Rajkot Marketing Yard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-body text-sm font-medium hover:bg-primary/90 transition-colors">
                Explore Products <ArrowRight size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center border border-charcoal-foreground/30 text-charcoal-foreground px-7 py-3.5 rounded-full font-body text-sm font-medium hover:bg-charcoal-foreground/10 transition-colors">
                Contact Us
              </a>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl border-t border-charcoal-foreground/15 pt-8">
              {[
                { stat: "5+", label: "Premium Products" },
                { stat: "100%", label: "Quality Assured" },
                { stat: "Global", label: "Export Network" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-heading text-3xl md:text-4xl text-primary mb-1">{s.stat}</div>
                  <div className="text-xs text-charcoal-foreground/60 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="eyebrow mb-6">— About Us</p>
              <h2 className="heading-section text-foreground mb-8">
                Rooted in tradition, <span className="accent-italic">built for the world.</span>
              </h2>
              <p className="body-base text-muted-foreground mb-5">
                Headquartered at the historic Rajkot Marketing Yard, Gujarat — one of India's largest agricultural trade hubs — Rameshwar International Company has grown from a humble local trader into a reliable exporter of authentic Indian spices, seeds and pulses.
              </p>
              <p className="body-base text-muted-foreground">
                We work directly with farming communities across Gujarat, Rajasthan and Madhya Pradesh, ensuring every grain we export carries the soul of the soil it grew in — clean, sorted, graded and tested before it leaves our warehouse.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-border rounded-sm overflow-hidden">
              {aboutPoints.map((p) => (
                <div key={p.title} className="bg-card p-8">
                  <h3 className="font-heading text-2xl text-primary mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="section-padding bg-surface">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="eyebrow mb-6">— Our Catalogue</p>
            <h2 className="heading-section text-foreground mb-6">
              Five staples. <span className="accent-italic">One promise of purity.</span>
            </h2>
            <p className="body-base text-muted-foreground">
              Carefully sourced, cleaned and graded — each of our products meets international export standards across multiple grade tiers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <article key={p.name} className="group bg-card rounded-sm overflow-hidden border border-border hover:border-primary/40 transition-colors flex flex-col">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={p.image} alt={p.name} width={800} height={600} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="font-heading text-2xl text-foreground leading-tight">{p.name}</h3>
                      <p className="text-xs italic text-muted-foreground mt-1">{p.botanical}</p>
                    </div>
                    <a href="#contact" aria-label={`Inquire about ${p.name}`} className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full border border-border text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                      <ArrowRight size={14} />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mb-5 flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {p.grades.map((g) => (
                      <span key={g} className="text-[10px] font-medium uppercase tracking-wider text-primary/90 bg-primary/10 px-2.5 py-1 rounded-full">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="section-padding">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="eyebrow mb-6">— Why Choose Us</p>
            <h2 className="heading-section text-foreground mb-6">
              A partnership built on <span className="accent-italic">consistency.</span>
            </h2>
            <p className="body-base text-muted-foreground">
              From sourcing to shipping, we obsess over the small details so your supply chain runs without surprises. Here's what makes Rameshwar International different.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
            {whyUs.map((f) => (
              <div key={f.title} className="bg-card p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-5">
                  <f.icon size={20} />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-surface">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="eyebrow mb-6">— Get in Touch</p>
              <h2 className="heading-section text-foreground mb-6">
                Let's talk about your <span className="accent-italic">requirement.</span>
              </h2>
              <p className="body-base text-muted-foreground mb-10">
                Share your product, quantity and destination — we'll respond with samples, grades and competitive quotes within 24 hours.
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0"><MapPin size={18} /></div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Address</div>
                    <div className="text-sm text-foreground">Rajkot Marketing Yard, Rajkot, Gujarat, India</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0"><Phone size={18} /></div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Phone</div>
                    <a href="tel:+919265230643" className="text-sm text-foreground hover:text-primary">+91 92652 30643</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0"><Mail size={18} /></div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Email</div>
                    <a href="mailto:rameshwarinternational01@gmail.com" className="text-sm text-foreground hover:text-primary break-all">rameshwarinternational01@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={onSubmit} className="bg-card border border-border rounded-sm p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Your Name</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Email</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Phone</label>
                  <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Product of Interest</label>
                  <select value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary">
                    <option value="">Select a product</option>
                    {products.map((p) => <option key={p.name} value={p.name}>{p.name}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Message</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary resize-none" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-body text-sm font-medium hover:bg-primary/90 transition-colors">
                Send Inquiry <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
