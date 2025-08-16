import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Contactez
            <span className="block bg-gradient-sunset bg-clip-text text-transparent">
              Horizon
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Notre équipe d'experts est à votre disposition pour vous accompagner dans vos projets
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-sunset p-3 rounded-2xl">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Téléphone</div>
                    <div className="text-muted-foreground">+33 1 23 45 67 89</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-sunset p-3 rounded-2xl">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">contact@horizon-store.fr</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-sunset p-3 rounded-2xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Adresse</div>
                    <div className="text-muted-foreground">123 Avenue des Alpes<br />74000 Annecy, France</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-sunset p-3 rounded-2xl">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Horaires</div>
                    <div className="text-muted-foreground">
                      Lun-Ven: 9h-19h<br />
                      Sam: 10h-18h
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="glass-card p-6 text-center rounded-2xl border-0">
                <div className="text-3xl font-bold bg-gradient-sunset bg-clip-text text-transparent">24h</div>
                <div className="text-sm text-muted-foreground">Livraison Express</div>
              </Card>
              <Card className="glass-card p-6 text-center rounded-2xl border-0">
                <div className="text-3xl font-bold bg-gradient-sunset bg-clip-text text-transparent">5⭐</div>
                <div className="text-sm text-muted-foreground">Service Client</div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-card p-8 rounded-3xl border-0">
            <h3 className="text-2xl font-bold text-foreground mb-6">Envoyez-nous un message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Prénom"
                  className="bg-white/20 border-white/30 rounded-2xl py-3 px-4 text-foreground placeholder:text-muted-foreground"
                />
                <Input
                  placeholder="Nom"
                  className="bg-white/20 border-white/30 rounded-2xl py-3 px-4 text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <Input
                type="email"
                placeholder="Email"
                className="bg-white/20 border-white/30 rounded-2xl py-3 px-4 text-foreground placeholder:text-muted-foreground"
              />

              <Input
                placeholder="Subject"
                className="bg-white/20 border-white/30 rounded-2xl py-3 px-4 text-foreground placeholder:text-muted-foreground"
              />

              <Textarea
                placeholder="Votre message..."
                rows={6}
                className="bg-white/20 border-white/30 rounded-2xl py-3 px-4 text-foreground placeholder:text-muted-foreground resize-none"
              />

              <Button className="w-full bg-gradient-sunset hover:scale-105 transition-all duration-300 text-white font-semibold py-4 rounded-2xl">
                Envoyer le message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;