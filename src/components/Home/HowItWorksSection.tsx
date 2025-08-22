import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MapPin, CreditCard, Car, DollarSign, Camera } from "lucide-react";

export const HowItWorksSection = () => {
  const parkerSteps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Search Location",
      description: "Enter your destination and find available parking spots nearby.",
      step: "01"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Choose Your Spot",
      description: "Browse options, check prices, and read reviews from other users.",
      step: "02"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Book & Pay",
      description: "Reserve instantly with secure payment. Get directions to your spot.",
      step: "03"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Park & Go",
      description: "Arrive at your reserved spot and enjoy hassle-free parking.",
      step: "04"
    }
  ];

  const ownerSteps = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "List Your Space",
      description: "Upload photos and details of your parking space in minutes.",
      step: "01"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Set Your Price",
      description: "Choose competitive pricing or let our smart pricing optimize for you.",
      step: "02"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Get Bookings",
      description: "Receive instant notifications when someone books your space.",
      step: "03"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Earn Money",
      description: "Get paid automatically after each booking. Weekly payouts available.",
      step: "04"
    }
  ];

  return (
    <section className="py-20" id="how-it-works">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple steps to find parking or start earning from your unused space.
          </p>
        </div>

        <Tabs defaultValue="parker" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-12">
            <TabsTrigger value="parker" className="text-sm font-medium">
              For Parkers
            </TabsTrigger>
            <TabsTrigger value="owner" className="text-sm font-medium">
              For Space Owners
            </TabsTrigger>
          </TabsList>

          <TabsContent value="parker" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {parkerSteps.map((step, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-medium transition-all duration-300 border-0 bg-gradient-card relative overflow-hidden group">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                    {step.step}
                  </div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-6 text-primary-foreground">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" className="bg-gradient-primary hover:shadow-medium">
                Start Finding Parking
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="owner" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ownerSteps.map((step, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-medium transition-all duration-300 border-0 bg-gradient-card relative overflow-hidden group">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors duration-300">
                    {step.step}
                  </div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-xl mb-6 text-accent-foreground">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="mr-4">
                Calculate Earnings
              </Button>
              <Button size="lg" className="bg-accent text-accent-foreground hover:shadow-medium">
                List Your Space
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};