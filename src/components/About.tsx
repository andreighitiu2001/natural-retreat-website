import { Leaf, Sun, Heart, TreePine } from "lucide-react";
import interiorImage from "@/assets/interior-bedroom.jpg";

const About = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustenabilitate",
      description: "Materiale naturale și construcție eco-friendly",
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Energie Verde",
      description: "Panouri solare și apă de izvor natural",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Slow Living",
      description: "Reconectare cu natura și cu tine însuți",
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Respectul Naturii",
      description: "Construit în armonie cu ecosistemul local",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Povestea Noastră
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Doza de Verde este mai mult decât un loc de cazare – este o filosofie de viață. 
              Am creat acest refugiu cu convingerea că natura are puterea de a ne regenera, 
              de a ne inspira și de a ne aduce în prezent.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Fiecare detaliu a fost gândit cu grijă: de la materialele naturale folosite în construcție, 
              la energia solară care alimentează spațiile, până la apa cristalină de izvor. 
              Credem în turism responsabil și în respectul față de comunitatea locală.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-secondary">{feature.icon}</div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={interiorImage}
                alt="Interior Doza de Verde"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary text-foreground p-6 rounded-xl shadow-xl max-w-xs">
              <p className="text-3xl font-serif font-bold">5+</p>
              <p className="text-sm">Ani de experiență în ospitalitate sustenabilă</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
