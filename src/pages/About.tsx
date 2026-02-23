import { Compass, Layers, Hexagon, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const processSteps = [
  { step: "01", title: "Material Selection", desc: "We source the finest natural aggregates, cements, and pigments for authentic texture and color." },
  { step: "02", title: "Surface Engineering", desc: "Advanced formulations create surfaces that are both beautiful and engineered for performance." },
  { step: "03", title: "Precision Molding", desc: "State-of-the-art molds capture every nuance of texture with millimeter accuracy." },
  { step: "04", title: "Quality Inspection", desc: "Every panel is individually inspected for color consistency, structural integrity, and finish quality." },
];

const About = () => (
  <div>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Decorative wall panels" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/60" />
      </div>
      <div className="relative z-10 text-center px-6">
        <h1 className="heading-display text-charcoal-foreground">About Us</h1>
      </div>
    </section>

    {/* Our Story */}
    <section className="section-padding">
      <div className="container-narrow mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <p className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-4">Our Story</p>
          <h2 className="heading-section text-foreground mb-6">Born from a Passion for Surface Textures</h2>
          <p className="body-base text-muted-foreground mb-4">
            SurfaceCraft was founded on a simple belief: walls deserve more than paint. Inspired by the raw beauty of architectural materials — concrete, stone, and natural aggregates — we set out to create panels that bring genuine texture into modern spaces.
          </p>
          <p className="body-base text-muted-foreground">
            Today, our panels grace residences, offices, hotels, and retail spaces across the globe. Each product is a testament to our design-first manufacturing philosophy, where aesthetics and engineering work in harmony.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Compass, label: "Design-First" },
              { icon: Layers, label: "Precision Crafted" },
              { icon: Hexagon, label: "Natural Materials" },
              { icon: CheckCircle, label: "Quality Assured" },
            ].map((item) => (
              <div key={item.label} className="bg-surface rounded-sm p-8 text-center shadow-soft">
                <item.icon size={32} className="text-primary mx-auto mb-3" />
                <p className="font-heading text-sm font-semibold text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Philosophy */}
    <section className="section-padding bg-surface">
      <div className="container-narrow mx-auto text-center max-w-2xl">
        <p className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-4">Our Philosophy</p>
        <h2 className="heading-section text-foreground mb-8">Texture-Driven Design</h2>
        <p className="body-large text-muted-foreground mb-4">
          We believe every surface has the power to transform a space. Our design philosophy centers on authentic texture, modern interior alignment, and precision craftsmanship.
        </p>
        <p className="body-base text-muted-foreground">
          Each panel is conceived as an architectural element — not just a wall covering, but a design statement that enhances the character of its environment.
        </p>
      </div>
    </section>

    {/* Process */}
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-4">Our Process</p>
          <h2 className="heading-section text-foreground">From Concept to Surface</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div key={step.step} className="relative">
              <span className="font-heading text-5xl font-bold text-primary/10">{step.step}</span>
              <h3 className="font-heading font-semibold text-foreground mt-2 mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
