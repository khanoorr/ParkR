import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Smartphone, CreditCard, Shield, Clock, TrendingUp } from "lucide-react";
import bookIcon from "@/assets/book-icon.jpg";
import earnIcon from "@/assets/earn-icon.jpg";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Instant Booking",
      description: "Find and reserve parking spots in seconds with our mobile app. Real-time availability and instant confirmation.",
      image: bookIcon,
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Earn Money",
      description: "Turn your unused parking space into passive income. List your spot and start earning up to $200+ monthly.",
      image: earnIcon,
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Safe",
      description: "All transactions are protected with bank-level security. Verified users and secure payment processing.",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Prime Locations",
      description: "Access parking in the most convenient locations - airports, downtowns, malls, and event venues.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you with any issues. We're here when you need us.",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Easy Payments",
      description: "Contactless payments with multiple options. No cash needed, everything handled digitally.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="text-primary">ParkR?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of parking with our comprehensive platform designed for both parkers and space owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-medium transition-all duration-300 border-0 bg-gradient-card group hover:scale-105">
              <div className="text-center">
                {feature.image ? (
                  <div className="mx-auto mb-6 w-16 h-16 rounded-xl overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-6 text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="mr-4">
            Learn More
          </Button>
          <Button size="lg" className="bg-gradient-primary hover:shadow-medium">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};