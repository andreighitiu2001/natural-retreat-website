import { Waves, Flame, Star, Mountain, Bike, TreePine } from "lucide-react";

const Experiences = () => {
  const experiences = [
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Sauna & Relaxare",
      description: "Saună privată în aer liber cu vedere spre natură",
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Grătar & Foc de Tabără",
      description: "Seri perfecte cu prietenii sau familia",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Observarea Stelelor",
      description: "Telescop pentru nopți magice sub cerul liber",
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: "Trasee de Drumeție",
      description: "Explorează împrejurimile pe poteci naturale",
    },
    {
      icon: <Bike className="w-8 h-8" />,
      title: "Plimbări cu Bicicleta",
      description: "Biciclete disponibile pentru aventuri locale",
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Terapie Forestieră",
      description: "Yoga și meditație la cerere în natură",
    },
  ];

  return (
    <section id="experiences" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Experiențe Unice
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Reconectează-te cu natura prin activități care hrănesc sufletul
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-secondary mb-4">{experience.icon}</div>
              <h3 className="text-xl font-serif font-semibold mb-2">{experience.title}</h3>
              <p className="opacity-90">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
