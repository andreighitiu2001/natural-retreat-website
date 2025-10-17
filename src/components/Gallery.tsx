import { useState } from "react";
import { X } from "lucide-react";
import cabin1 from "@/assets/cabin-exterior.jpg";
import cabin2 from "@/assets/cabin-terrace.jpg";
import cabin3 from "@/assets/hammock-area.jpg";
import cabin4 from "@/assets/elevated-cabin.jpg";
import cabin5 from "@/assets/entrance-view.jpg";
import interior1 from "@/assets/interior-bedroom.jpg";
import interior2 from "@/assets/interior-kitchen.jpg";
import nature1 from "@/assets/cabin-cows.jpg";
import nature2 from "@/assets/greenhouse-jacuzzi.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: cabin1, category: "Cazări", alt: "Cabană exterioară" },
    { src: interior1, category: "Interior", alt: "Dormitor modern" },
    { src: nature1, category: "Natură", alt: "Animale în natură" },
    { src: cabin2, category: "Cazări", alt: "Terasă cabană" },
    { src: interior2, category: "Interior", alt: "Bucătărie modernă" },
    { src: nature2, category: "Experiențe", alt: "Jacuzzi în seră" },
    { src: cabin3, category: "Experiențe", alt: "Zona de relaxare" },
    { src: cabin4, category: "Cazări", alt: "Tiny house" },
    { src: cabin5, category: "Peisaj", alt: "Intrare" },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Galerie Foto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descoperă frumusețea spațiilor noastre și a naturii înconjurătoare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl aspect-[4/3] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-secondary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
