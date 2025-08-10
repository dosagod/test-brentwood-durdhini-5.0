import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-accent to-warning text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">BD</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Brentwood Darshani</h3>
                <p className="text-white/80 text-sm">South Indian Catering</p>
              </div>
            </div>
            <p className="text-white/90 text-sm">
              Authentic South Indian flavors crafted with love and served fresh for your special occasions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-white/80 hover:text-white text-sm transition-colors">
                Home
              </Link>
              <Link to="/menu" className="block text-white/80 hover:text-white text-sm transition-colors">
                Our Menu
              </Link>
              <Link to="/contact" className="block text-white/80 hover:text-white text-sm transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-white/70" />
                <span className="text-white/90">11111</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-white/70" />
                <span className="text-white/90">The White House</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="w-4 h-4 text-white/70" />
                <span className="text-white/90">Mon-Sun: 8AM-9PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li>• Wedding Catering</li>
              <li>• Corporate Events</li>
              <li>• Festival Celebrations</li>
              <li>• Custom Menu Planning</li>
              <li>• Fresh Daily Preparations</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80 text-sm flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-300" /> for authentic South Indian cuisine
          </p>
          <p className="text-white/60 text-xs mt-2">
            © {new Date().getFullYear()} Brentwood Darshani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;