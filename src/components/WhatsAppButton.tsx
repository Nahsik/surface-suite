import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919265230643?text=Hi%2C%20I%27m%20interested%20in%20your%20products."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-elevated transition-all hover:scale-105"
    aria-label="Contact us on WhatsApp"
  >
    <MessageCircle size={24} />
  </a>
);

export default WhatsAppButton;
