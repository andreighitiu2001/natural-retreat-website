import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Reservations = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    accommodation: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Cererea a fost trimisă!",
      description: "Vă mulțumim! Vom reveni curând pentru confirmarea disponibilității.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      accommodation: "",
      checkIn: "",
      checkOut: "",
      guests: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="reservations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Rezervări
            </h2>
            <p className="text-lg text-muted-foreground">
              Completează formularul și te vom contacta pentru confirmarea disponibilității
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up bg-card p-8 rounded-2xl shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nume complet *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  placeholder="Ion Popescu"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  placeholder="email@exemplu.ro"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefon *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                placeholder="+40 712 345 678"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="accommodation">Tipul cazării *</Label>
              <Select value={formData.accommodation} onValueChange={(value) => handleChange("accommodation", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Alege tipul de cazare" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cabana-verde">Cabana Verde</SelectItem>
                  <SelectItem value="tiny-house">Tiny House Panorama</SelectItem>
                  <SelectItem value="sauna-cabin">Sauna Cabin Experience</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="checkIn">Check-in *</Label>
                <Input
                  id="checkIn"
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => handleChange("checkIn", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="checkOut">Check-out *</Label>
                <Input
                  id="checkOut"
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) => handleChange("checkOut", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests">Număr persoane *</Label>
              <Input
                id="guests"
                type="number"
                min="1"
                max="10"
                value={formData.guests}
                onChange={(e) => handleChange("guests", e.target.value)}
                required
                placeholder="2"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mesaj opțional</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Cerințe speciale sau întrebări..."
                rows={4}
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Trimite cererea
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
