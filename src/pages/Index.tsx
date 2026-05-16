import { MapPin, Phone, Mail, Leaf, Globe2, ShieldCheck, Award } from "lucide-react";
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
    desc: "Aromatic, warm and earthy seeds — a cornerstone of Indian and global cuisine. Sourced from Gujarat's finest harvests.",
    image: cumin,
  },
  {
    name: "Coriander Seeds",
    botanical: "Coriandrum sativum",
    desc: "Mild, citrus-sweet seeds prized for curry powders, pickles, and seasoning blends across the world.",
    image: coriander,
  },
  {
    name: "Sesame Seeds",
    botanical: "Sesamum indicum",
    desc: "Premium hulled and natural sesame — rich in oil content and ideal for bakery, confectionery, and tahini production.",
    image: sesame,
  },
  {
    name: "Pigeon Peas (Toor Dal)",
    botanical: "Cajanus cajan",
    desc: "Protein-rich pulses, hand-cleaned and machine-sorted to deliver consistent grain size and superior cooking quality.",
    image: pigeon,
  },
  {
    name: "Fenugreek Seeds",
    botanical: "Trigonella foenum-graecum",
    desc: "Bittersweet, golden seeds known for their distinctive aroma — widely used in spice blends and traditional medicine.",
    image: fenugreek,
  },
];

const features = [
  { icon: Leaf, title: "Farm Fresh", desc: "Directly sourced from Gujarat's most trusted farms." },
  { icon: ShieldCheck, title: "Quality Assured", desc: "Multi-stage cleaning, sorting and lab testing." },
  { icon: Globe2, title: "Global Export", desc: "Reliable shipping to clients across continents." },
  { icon: Award, title: "Trusted Partner", desc: "Years of expertise in agri-commodity trade." },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section id="home" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Assorted Indian spices, seeds and pulses by Rameshwar International" className="w-full h-full object-cover" width={1920} height={1024} />
          <div className="absolute inset-0 bg-charcoal/55" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto py-24">
          <p className="text-sm font-heading font-semibold text-charcoal-foreground/80 uppercase tracking-[0.3em] mb-6">Rameshwar International</p>
          <h1 className="heading-display text-charcoal-foreground mb-6">
            We Grow Quality,<br />We Harvest Trust.
          </h1>
          <p className="body-large text-charcoal-foreground/80 mb-10">
            Exporters of premium Indian spices, seeds and pulses — sourced from the heart of Gujarat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#products" className="bg-primary text-primary-foreground px-8 py-3 rounded-sm font-heading text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors">
              Explore Products
            </a>
            <a href="#contact" className="border border-charcoal-foreground/30 text-charcoal-foreground px-8 py-3 rounded-sm font-heading text-sm font-medium tracking-wide hover:bg-charcoal-foreground/10 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding">
        <div className="container-wide mx-auto max-w-4xl text-center">
          <p className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-4">About Us</p>
          <h2 className="heading-section text-foreground mb-6">Rooted in Gujarat, Trusted Worldwide</h2>
          <p className="body-base text-muted-foreground mb-4">
            Rameshwar International is a Rajkot-based exporter of high-quality agricultural commodities. From the rich soils of Gujarat, we bring the world a curated range of spices, seeds and pulses — each batch cleaned, graded and packed to meet global standards.
          </p>
          <p className="body-base text-muted-foreground">
            Our commitment is simple: consistent quality, transparent dealings, and on-time delivery for every customer, every time.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-surface">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <f.icon size={24} />
                </div>
                <h3 className="font-heading font-semibold text-sm text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="section-padding">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-4">Our Products</p>
            <h2 className="heading-section text-foreground">Premium Agricultural Exports</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <article key={p.name} className="bg-card rounded-sm overflow-hidden shadow-soft hover:shadow-card transition-shadow group">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img src={p.image} alt={p.name} width={800} height={800} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1">{p.name}</h3>
                  <p className="text-xs italic text-muted-foreground mb-3">{p.botanical}</p>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-surface">
        <div className="container-wide mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-4">Get in Touch</p>
            <h2 className="heading-section text-foreground">Let's Build a Partnership</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-8 rounded-sm shadow-soft text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <MapPin size={20} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Address</h3>
              <p className="text-sm text-muted-foreground">Rajkot Marketing Yard,<br />Rajkot, Gujarat, India</p>
            </div>
            <div className="bg-card p-8 rounded-sm shadow-soft text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Phone size={20} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground">+91 00000 00000</p>
            </div>
            <div className="bg-card p-8 rounded-sm shadow-soft text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Mail size={20} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">info@rameshwarinternational.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
