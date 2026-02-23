import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products } from "@/data/products";
import { Download, FileText, BookOpen } from "lucide-react";
import productHexagon from "@/assets/product-hexagon.jpg";
import productConcrete from "@/assets/product-concrete.jpg";
import productTextured from "@/assets/product-textured.jpg";
import product3dAccent from "@/assets/product-3d-accent.jpg";

const imageMap: Record<string, string> = {
  "product-hexagon": productHexagon,
  "product-concrete": productConcrete,
  "product-textured": productTextured,
  "product-3d-accent": product3dAccent,
};

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", projectType: "", quantity: "", message: "" });

  if (!product) {
    return (
      <div className="section-padding text-center">
        <h1 className="heading-section text-foreground mb-4">Product Not Found</h1>
        <Link to="/products" className="text-primary">← Back to Products</Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We'll get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", projectType: "", quantity: "", message: "" });
  };

  return (
    <div>
      <section className="section-padding-sm bg-surface">
        <div className="container-wide mx-auto">
          <Link to="/products" className="text-sm text-primary hover:text-primary/80 mb-4 inline-block">← All Products</Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-sm overflow-hidden shadow-card">
              <img src={imageMap[product.image]} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <p className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-2">{product.category}</p>
            <h1 className="heading-section text-foreground mb-4">{product.name}</h1>
            <p className="body-base text-muted-foreground mb-8">{product.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Dimensions", value: product.dimensions },
                { label: "Thickness", value: product.thickness },
                { label: "Weight", value: product.weight },
                { label: "Finish", value: product.finish },
                { label: "Material", value: product.material },
                { label: "Recommended Use", value: product.recommendedUse },
              ].map((spec) => (
                <div key={spec.label} className="bg-surface rounded-sm p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{spec.label}</p>
                  <p className="text-sm font-medium text-foreground">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* Technical Specs */}
            <div className="mb-8">
              <h2 className="heading-sub text-foreground mb-4">Technical Specifications</h2>
              <div className="space-y-3">
                {[
                  { label: "Installation", value: product.installationMethod },
                  { label: "Maintenance", value: product.maintenance },
                  { label: "Durability", value: product.durability },
                  { label: "Water Resistance", value: product.waterResistance },
                ].map((spec) => (
                  <div key={spec.label} className="flex justify-between border-b border-border pb-3">
                    <span className="text-sm text-muted-foreground">{spec.label}</span>
                    <span className="text-sm font-medium text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Downloads */}
            <div className="mb-8">
              <h2 className="heading-sub text-foreground mb-4">Downloads</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: FileText, label: "Datasheet" },
                  { icon: Download, label: "Installation Guide" },
                  { icon: BookOpen, label: "Catalog" },
                ].map((dl) => (
                  <button key={dl.label} className="flex items-center gap-2 text-sm text-primary border border-primary/20 px-4 py-2 rounded-sm hover:bg-primary/5 transition-colors">
                    <dl.icon size={16} />
                    {dl.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding bg-surface">
        <div className="container-narrow mx-auto max-w-2xl">
          <h2 className="heading-section text-foreground text-center mb-8">Inquire About This Product</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email"
                required
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Phone"
                maxLength={20}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Project Type"
                maxLength={100}
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <input
              type="text"
              placeholder="Required Quantity"
              maxLength={50}
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <textarea
              placeholder="Message"
              rows={4}
              maxLength={1000}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            />
            <button type="submit" className="w-full bg-primary text-primary-foreground px-8 py-3 rounded-sm font-heading text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
