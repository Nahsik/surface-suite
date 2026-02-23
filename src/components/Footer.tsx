import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-charcoal text-charcoal-foreground">
    <div className="container-wide mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-heading text-lg font-semibold mb-4">SurfaceCraft</h3>
          <p className="text-sm text-charcoal-foreground/70 leading-relaxed">
            Premium decorative wall panels crafted for residential and commercial interiors.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold mb-4 uppercase tracking-wider">Navigate</h4>
          <ul className="space-y-2">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Products", path: "/products" },
              { label: "Applications", path: "/applications" },
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm text-charcoal-foreground/70 hover:text-charcoal-foreground transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold mb-4 uppercase tracking-wider">Support</h4>
          <ul className="space-y-2">
            {[
              { label: "Contact Us", path: "/contact" },
              { label: "Request a Quote", path: "/request-quote" },
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm text-charcoal-foreground/70 hover:text-charcoal-foreground transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h4>
          <div className="space-y-2 text-sm text-charcoal-foreground/70">
            <p>123 Design District</p>
            <p>Architecture Lane, Suite 100</p>
            <p>info@surfacecraft.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
      <div className="border-t border-charcoal-foreground/10 mt-12 pt-8 text-center">
        <p className="text-xs text-charcoal-foreground/50">
          © {new Date().getFullYear()} SurfaceCraft. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
