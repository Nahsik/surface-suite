import logo from "@/assets/rameshwar-logo.jpeg";

const Footer = () => (
  <footer className="bg-charcoal text-charcoal-foreground">
    <div className="container-wide mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Rameshwar International logo" className="h-10 w-10 rounded-sm object-cover" />
            <h3 className="font-heading text-lg font-semibold">Rameshwar International</h3>
          </div>
          <p className="text-sm text-charcoal-foreground/70 leading-relaxed">
            Exporters of premium Indian spices, seeds and pulses from Gujarat to the world.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold mb-4 uppercase tracking-wider">Products</h4>
          <ul className="space-y-2 text-sm text-charcoal-foreground/70">
            <li>Cumin Seeds</li>
            <li>Coriander Seeds</li>
            <li>Sesame Seeds</li>
            <li>Pigeon Peas</li>
            <li>Fenugreek Seeds</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h4>
          <div className="space-y-2 text-sm text-charcoal-foreground/70">
            <p>Rajkot Marketing Yard</p>
            <p>Rajkot, Gujarat, India</p>
            <p>rameshwarinternational01@gmail.com</p>
            <p>+91 92652 30643</p>
          </div>
        </div>
      </div>
      <div className="border-t border-charcoal-foreground/10 mt-12 pt-8 text-center">
        <p className="text-xs text-charcoal-foreground/50">
          © {new Date().getFullYear()} Rameshwar International. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
