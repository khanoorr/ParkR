import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, TrendingUp, Users, Star } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary-glow to-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
            Ready to Transform Your
            <br />
            <span className="text-primary-foreground/90">Parking Experience?</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Join thousands of satisfied users who have discovered the easiest way to park and earn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/20 rounded-xl mb-6">
              <Users className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="text-3xl font-bold text-primary-foreground mb-2">50,000+</div>
            <div className="text-primary-foreground/80">Happy Users</div>
          </Card>
          
          <Card className="p-8 text-center bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/20 rounded-xl mb-6">
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="text-3xl font-bold text-primary-foreground mb-2">100+</div>
            <div className="text-primary-foreground/80">Cities Covered</div>
          </Card>
          
          <Card className="p-8 text-center bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/20 rounded-xl mb-6">
              <Star className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="text-3xl font-bold text-primary-foreground mb-2">4.9/5</div>
            <div className="text-primary-foreground/80">User Rating</div>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-4 text-lg font-medium shadow-large hover:shadow-medium transition-all duration-300"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Find Parking Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg font-medium border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 shadow-large hover:shadow-medium transition-all duration-300"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Start Earning Today
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/60 mt-4">
            No setup fees • Free to join • Start earning immediately
          </p>
        </div>
      </div>
    </section>
  );
};