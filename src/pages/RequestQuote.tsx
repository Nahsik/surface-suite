import { useState } from "react";

const panelTypes = ["Hexagon Panels", "Concrete Finish", "Textured Panels", "3D Accent Panels", "Custom / Other"];
const timelines = ["Immediate", "1-3 Months", "3-6 Months", "6+ Months"];
const budgets = ["Under $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000+", "Not sure yet"];

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "",
    projectType: "", area: "", panelType: "",
    timeline: "", budget: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your quote request! Our team will reach out within 1-2 business days.");
    setFormData({ name: "", email: "", phone: "", company: "", projectType: "", area: "", panelType: "", timeline: "", budget: "", message: "" });
  };

  const inputClass = "w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary";
  const selectClass = "w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary";

  return (
    <div>
      <section className="bg-surface section-padding-sm">
        <div className="container-wide mx-auto">
          <h1 className="heading-section text-foreground mb-2">Request a Quote</h1>
          <p className="body-base text-muted-foreground">Tell us about your project and we'll provide a detailed estimate.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" required maxLength={100} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} />
              <input type="email" placeholder="Email" required maxLength={255} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="tel" placeholder="Phone" maxLength={20} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} />
              <input type="text" placeholder="Company (optional)" maxLength={100} value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={inputClass} />
            </div>

            <input type="text" placeholder="Project Type (e.g., Residential, Commercial, Hospitality)" required maxLength={100} value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className={inputClass} />

            <input type="text" placeholder="Total Area (sq.ft or sqm)" maxLength={50} value={formData.area} onChange={(e) => setFormData({ ...formData, area: e.target.value })} className={inputClass} />

            <select value={formData.panelType} onChange={(e) => setFormData({ ...formData, panelType: e.target.value })} className={selectClass}>
              <option value="">Preferred Panel Type</option>
              {panelTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>

            <select value={formData.timeline} onChange={(e) => setFormData({ ...formData, timeline: e.target.value })} className={selectClass}>
              <option value="">Timeline</option>
              {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>

            <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className={selectClass}>
              <option value="">Budget Range</option>
              {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>

            <div>
              <label className="block text-sm text-muted-foreground mb-2">Upload Blueprint / Reference Image (optional)</label>
              <input type="file" accept="image/*,.pdf" className="text-sm text-muted-foreground" />
            </div>

            <textarea
              placeholder="Additional details about your project..."
              rows={5}
              maxLength={2000}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`${inputClass} resize-none`}
            />

            <button type="submit" className="w-full bg-primary text-primary-foreground px-8 py-3 rounded-sm font-heading text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors">
              Submit Quote Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RequestQuote;
