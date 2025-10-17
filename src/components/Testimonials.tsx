import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Maria & Alexandru",
      location: "București",
      text: "O experiență magică, departe de agitație! Am petrecut un weekend de neuitat în Cabana Verde. Sauna privată cu vedere spre pădure a fost visul nostru devenit realitate.",
      rating: 5,
    },
    {
      name: "Ioana P.",
      location: "Cluj-Napoca",
      text: "Perfect pentru deconectare totală! Am venit pentru relaxare și am plecat cu sufletul liniștit. Peisajele sunt de basm, iar gazdele sunt minunate.",
      rating: 5,
    },
    {
      name: "Andrei & Cristina",
      location: "Timișoara",
      text: "Cel mai frumos loc în care am stat vreodată în România! Detaliile de design, confortul și natura înconjurătoare creează o experiență unică. Revenim cu siguranță!",
      rating: 5,
    },
    {
      name: "Elena M.",
      location: "Brașov",
      text: "Un refugiu autentic pentru suflet. Yoga în natură, observarea stelelor și liniștea absolută - exact ce aveam nevoie. Recomand cu căldură!",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Ce Spun Oaspeții Noștri
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiențe autentice de la cei care au trăit magia Dozei de Verde
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in">
            <div className="flex mb-4 text-secondary">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>

            <p className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed italic">
              "{testimonials[currentIndex].text}"
            </p>

            <div>
              <p className="font-semibold text-lg text-primary">{testimonials[currentIndex].name}</p>
              <p className="text-muted-foreground">{testimonials[currentIndex].location}</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
