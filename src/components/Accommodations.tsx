import { Wifi, Wind, Waves, Flame, Sparkles, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import cabinImage from "@/assets/cabin-terrace.jpg";
import tinyHouseImage from "@/assets/elevated-cabin.jpg";
import saunaImage from "@/assets/greenhouse-jacuzzi.jpg";

const Accommodations = () => {
  const accommodations = [
    {
      title: "Cabana Verde",
      description: "Modernă, cu terasă privată și vedere spre pădure",
      image: cabinImage,
      features: [
        { icon: <Wifi className="w-4 h-4" />, label: "WiFi" },
        { icon: <Wind className="w-4 h-4" />, label: "Aer condiționat" },
        { icon: <Waves className="w-4 h-4" />, label: "Jacuzzi" },
        { icon: <Flame className="w-4 h-4" />, label: "Grătar" },
        { icon: <Car className="w-4 h-4" />, label: "Parcare" },
      ],
    },
    {
      title: "Tiny House Panorama",
      description: "Minimalistă, cu perete vitrat și vedere spre dealuri",
      image: tinyHouseImage,
      features: [
        { icon: <Wifi className="w-4 h-4" />, label: "WiFi" },
        { icon: <Wind className="w-4 h-4" />, label: "Aer condiționat" },
        { icon: <Sparkles className="w-4 h-4" />, label: "Design modern" },
        { icon: <Flame className="w-4 h-4" />, label: "Grătar" },
        { icon: <Car className="w-4 h-4" />, label: "Parcare" },
      ],
    },
    {
      title: "Sauna Cabin Experience",
      description: "Unitate cu saună privată exterioară în seră de sticlă",
      image: saunaImage,
      features: [
        { icon: <Waves className="w-4 h-4" />, label: "Saună" },
        { icon: <Sparkles className="w-4 h-4" />, label: "Jacuzzi" },
        { icon: <Leaf className="w-4 h-4" />, label: "Seră de sticlă" },
        { icon: <Flame className="w-4 h-4" />, label: "Grătar" },
        { icon: <Car className="w-4 h-4" />, label: "Parcare" },
      ],
    },
  ];

  const scrollToReservations = () => {
    const element = document.getElementById("reservations");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accommodations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Cazările Noastre
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descoperă spațiile noastre unice, create pentru confort și relaxare deplină
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slide-up">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={accommodation.image}
                  alt={accommodation.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">{accommodation.title}</CardTitle>
                <CardDescription className="text-base">{accommodation.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {accommodation.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full text-sm"
                    >
                      <span className="text-secondary">{feature.icon}</span>
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={scrollToReservations} className="w-full" variant="default">
                  Rezervă acum
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Leaf = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
  </svg>
);

export default Accommodations;
