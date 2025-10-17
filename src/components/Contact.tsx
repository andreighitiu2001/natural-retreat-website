import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mesaj trimis!",
      description: "Vă mulțumim pentru mesaj. Vă vom răspunde în cel mai scurt timp.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Contact & Locație
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Suntem aici pentru tine! Contactează-ne pentru orice întrebare
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-primary mb-6">
                Informații de Contact
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Telefon</p>
                    <a href="tel:+40123456789" className="text-muted-foreground hover:text-primary transition-colors">
                      +40 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <a href="mailto:contact@dozadeverde.ro" className="text-muted-foreground hover:text-primary transition-colors">
                      contact@dozadeverde.ro
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Adresă</p>
                    <p className="text-muted-foreground">
                      Județul Alba, România<br />
                      În inima naturii
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="font-semibold text-foreground mb-4">Urmărește-ne</p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-lg">
              <h4 className="font-semibold text-foreground mb-2">Program</h4>
              <p className="text-muted-foreground text-sm">
                Check-in: 15:00<br />
                Check-out: 11:00<br />
                Suntem disponibili 24/7 pentru oaspeții noștri
              </p>
            </div>
          </div>

          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-xl space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                Trimite-ne un mesaj
              </h3>

              <div className="space-y-2">
                <Label htmlFor="contact-name">Nume</Label>
                <Input
                  id="contact-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Numele tău"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="email@exemplu.ro"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">Mesaj</Label>
                <Textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="Cum te putem ajuta?"
                  rows={5}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Trimite mesajul
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl animate-slide-up h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d351823.4838476621!2d23.339722795312503!3d46.30670159999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474933c6e679f645%3A0x3!2sAlba%2C%20Romania!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Locația Doza de Verde"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
