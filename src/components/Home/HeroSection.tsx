import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Clock, DollarSign } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-parking.jpg";

export const HeroSection = () => {
  const [location, setLocation] = useState("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern parking solutions" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Text */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Find Perfect</span>
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Parking Spots
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book parking instantly or earn money by renting your unused space. 
            Join thousands making parking simple and profitable.
          </p>

          {/* Search Bar */}
          <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-large mb-8 max-w-2xl mx-auto border border-border/50">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Enter location (e.g., Downtown, Airport)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10 h-12 text-base bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              <Button size="lg" className="h-12 px-8 bg-gradient-primary hover:shadow-medium transition-all duration-300">
                <Search className="w-5 h-5 mr-2" />
                Find Parking
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-3">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-foreground">50K+</div>
              <div className="text-sm text-muted-foreground">Available Spots</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-3">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Instant Booking</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-3">
                <DollarSign className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-foreground">$200+</div>
              <div className="text-sm text-muted-foreground">Monthly Earnings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};