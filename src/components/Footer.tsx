import { Instagram, Facebook, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Doza de Verde" className="h-10 w-10" />
              <span className="font-serif text-xl font-semibold">Doza de Verde</span>
            </div>
            <p className="text-sm opacity-90">
              Refugiu în natură. Liniște. Echilibru. Inspirație.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Link-uri Utile</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#about" className="hover:text-secondary transition-colors">Despre Noi</a>
              </li>
              <li>
                <a href="#accommodations" className="hover:text-secondary transition-colors">Cazări</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-secondary transition-colors">Galerie</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <button className="hover:text-secondary transition-colors">Termeni și Condiții</button>
              </li>
              <li>
                <button className="hover:text-secondary transition-colors">Politica de Confidențialitate</button>
              </li>
              <li>
                <button className="hover:text-secondary transition-colors">GDPR</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-90">
            © {currentYear} Doza de Verde Retreat & Spa. Toate drepturile rezervate.
          </p>

          <div className="flex items-center gap-4">
            <p className="text-sm opacity-90 flex items-center gap-1">
              Made with <Heart className="w-4 h-4 fill-current" /> in România
            </p>
            <div className="flex gap-3">
              <button className="hover:text-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="hover:text-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
