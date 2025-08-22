import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Search, Filter, Clock, Star, DollarSign } from "lucide-react";
import { useState } from "react";

const SearchPage = () => {
  const [searchLocation, setSearchLocation] = useState("");

  const mockParkingSpots = [
    {
      id: 1,
      name: "Downtown Plaza Parking",
      address: "123 Main St, Downtown",
      price: 8,
      rating: 4.8,
      reviews: 124,
      distance: "0.2 miles",
      features: ["Covered", "24/7 Access", "Security Camera"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Business District Garage",
      address: "456 Corporate Blvd, Business District",
      price: 12,
      rating: 4.6,
      reviews: 89,
      distance: "0.4 miles",
      features: ["EV Charging", "Valet Service", "Covered"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Airport Long-term Parking",
      address: "789 Airport Rd, Terminal Area",
      price: 15,
      rating: 4.9,
      reviews: 256,
      distance: "2.1 miles",
      features: ["Shuttle Service", "Long-term", "Secure"],
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Search Header */}
        <section className="bg-gradient-hero py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 text-center">
                Find Your Perfect Parking Spot
              </h1>
              
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-foreground/60 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Where do you need parking?"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="pl-10 h-12 text-base bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-primary-foreground/50"
                    />
                  </div>
                  <Button size="lg" variant="secondary" className="h-12 px-8">
                    <Search className="w-5 h-5 mr-2" />
                    Search
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    <Filter className="w-5 h-5 mr-2" />
                    Filters
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                {mockParkingSpots.length} parking spots found
              </h2>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="bg-card border border-border rounded-lg px-3 py-1 text-sm">
                  <option>Price: Low to High</option>
                  <option>Distance</option>
                  <option>Rating</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {mockParkingSpots.map((spot) => (
                <Card key={spot.id} className="overflow-hidden hover:shadow-medium transition-all duration-300 group">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={spot.image} 
                      alt={spot.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        ${spot.price}/hr
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg text-foreground line-clamp-1">
                        {spot.name}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-warning text-warning" />
                        <span className="text-sm font-medium">{spot.rating}</span>
                        <span className="text-sm text-muted-foreground">({spot.reviews})</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {spot.address} • {spot.distance}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {spot.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        Available now
                      </div>
                      <Button className="bg-gradient-primary hover:shadow-medium">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchPage;