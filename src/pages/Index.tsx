import { Link } from "react-router-dom";
import { Leaf, Shield, Feather, Palette, Building2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import hexagonLayout from "@/assets/hexagon-layout.jpg";
import productHexagon from "@/assets/product-hexagon.jpg";
import productConcrete from "@/assets/product-concrete.jpg";
import productTextured from "@/assets/product-textured.jpg";
import product3dAccent from "@/assets/product-3d-accent.jpg";
import appLivingRoom from "@/assets/app-living-room.jpg";
import appOffice from "@/assets/app-office.jpg";
import appHospitality from "@/assets/app-hospitality.jpg";
import appRetail from "@/assets/app-retail.jpg";
import appFeatureWall from "@/assets/app-feature-wall.jpg";

const featuredProducts = [
  { name: "Hexagon Panels", desc: "Authentic concrete hexagons with natural texture variations.", image: productHexagon, slug: "hex-concrete-natural" },
  { name: "Concrete Finish", desc: "Seamless cement surfaces with warm, consistent tones.", image: productConcrete, slug: "smooth-cement-finish" },
  { name: "Textured Panels", desc: "Geometric relief patterns that play with light and shadow.", image: productTextured, slug: "diamond-relief-panel" },
  { name: "3D Accent Panels", desc: "Bold architectural blocks for dramatic statement walls.", image: product3dAccent, slug: "architectural-accent-block" },
];

const whyChooseUs = [
  { icon: Leaf, title: "Natural Composition", desc: "Crafted from natural materials for authentic texture." },
  { icon: Shield, title: "Durable & Long-Lasting", desc: "Engineered for 25+ years of beautiful performance." },
  { icon: Feather, title: "Lightweight & Easy Install", desc: "Simple adhesive mounting, no structural changes needed." },
  { icon: Palette, title: "Custom Design Capability", desc: "Bespoke colors, patterns, and dimensions available." },
  { icon: Building2, title: "Residential & Commercial", desc: "Versatile solutions for any interior environment." },
];

const applications = [
  { name: "Living Rooms", desc: "Create warm, textured spaces that invite conversation.", image: appLivingRoom },
  { name: "Offices", desc: "Professional environments with architectural character.", image: appOffice },
  { name: "Hospitality", desc: "Memorable lobbies and spaces that impress guests.", image: appHospitality },
  { name: "Retail Spaces", desc: "Distinctive storefronts that elevate brand presence.", image: appRetail },
  { name: "Feature Walls", desc: "Focal points that define and anchor interior design.", image: appFeatureWall },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Hexagonal decorative wall panels in concrete and blue-grey tones" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="heading-display text-charcoal-foreground mb-6">
            Natural Surfaces.<br />Timeless Design.
          </h1>
          <p className="body-large text-charcoal-foreground/80 mb-10">
            Premium decorative wall panels crafted for residential and commercial interiors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="bg-primary text-primary-foreground px-8 py-3 rounded-sm font-heading text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors">
              Explore Collection
            </Link>
            <Link to="/request-quote" className="border border-charcoal-foreground/30 text-charcoal-foreground px-8 py-3 rounded-sm font-heading text-sm font-medium tracking-wide hover:bg-charcoal-foreground/10 transition-colors">
              Request Sample
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Intro */}
      <section className="section-padding">
        <div className="container-wide mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-4">About SurfaceCraft</p>
            <h2 className="heading-section text-foreground mb-6">Where Nature Meets Architecture</h2>
            <p className="body-base text-muted-foreground mb-4">
              Our panels bring the authentic beauty of natural materials to modern interiors. Each surface tells a story of texture, craftsmanship, and design precision.
            </p>
            <p className="body-base text-muted-foreground mb-4">
              Unlike artificial tiles, our panels deliver superior depth and character. They work beautifully as highlight panels alongside ceramic, stone, and painted surfaces.
            </p>
            <p className="body-base text-muted-foreground">
              From residential feature walls to commercial lobbies, SurfaceCraft transforms ordinary spaces into extraordinary experiences.
            </p>
          </div>
          <div className="rounded-sm overflow-hidden shadow-card">
            <img src={hexagonLayout} alt="Hexagonal panel arrangement in grey and blue tones" className="w-full h-auto" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-surface">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-4">Our Collection</p>
            <h2 className="heading-section text-foreground">Featured Products</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.name} className="bg-card rounded-sm overflow-hidden shadow-soft hover:shadow-card transition-shadow group">
                <div className="aspect-square overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.desc}</p>
                  <Link to={`/products/${product.slug}`} className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-4">Why SurfaceCraft</p>
            <h2 className="heading-section text-foreground">Designed to Perform</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="font-heading font-semibold text-sm text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Preview */}
      <section className="section-padding bg-surface">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-4">Applications</p>
            <h2 className="heading-section text-foreground">Designed For Every Space</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.slice(0, 3).map((app) => (
              <div key={app.name} className="relative rounded-sm overflow-hidden group h-72">
                <img src={app.image} alt={app.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading font-semibold text-charcoal-foreground mb-1">{app.name}</h3>
                  <p className="text-sm text-charcoal-foreground/80">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {applications.slice(3).map((app) => (
              <div key={app.name} className="relative rounded-sm overflow-hidden group h-72">
                <img src={app.image} alt={app.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading font-semibold text-charcoal-foreground mb-1">{app.name}</h3>
                  <p className="text-sm text-charcoal-foreground/80">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-narrow mx-auto text-center">
          <h2 className="heading-section text-foreground mb-4">Transform Your Walls Today</h2>
          <p className="body-base text-muted-foreground mb-10 max-w-xl mx-auto">
            Discover the perfect panel for your project. Our team is ready to help you create something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-quote" className="bg-primary text-primary-foreground px-8 py-3 rounded-sm font-heading text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors">
              Get a Quote
            </Link>
            <Link to="/contact" className="border border-border text-foreground px-8 py-3 rounded-sm font-heading text-sm font-medium tracking-wide hover:bg-muted transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
