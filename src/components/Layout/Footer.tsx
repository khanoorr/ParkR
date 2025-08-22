import { MapPin, Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-urban-gray text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">ParkR</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Find and book parking spots instantly, or earn money by renting out your unused parking space. 
              Making urban parking simple and profitable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* For Parkers */}
          <div>
            <h3 className="font-semibold mb-4">For Parkers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/search" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Find Parking
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/cities" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Cities
                </Link>
              </li>
            </ul>
          </div>

          {/* For Hosts */}
          <div>
            <h3 className="font-semibold mb-4">For Hosts</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/list-space" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  List Your Space
                </Link>
              </li>
              <li>
                <Link to="/host-benefits" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Host Benefits
                </Link>
              </li>
              <li>
                <Link to="/earnings" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Earnings Calculator
                </Link>
              </li>
              <li>
                <Link to="/host-resources" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 ParkR. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="/support" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};