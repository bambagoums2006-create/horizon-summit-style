import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroMountain from '@/assets/hero-mountain.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroMountain})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 animate-float">
        <div className="glass-card p-6 rounded-2xl animate-glow">
          <Sparkles className="h-8 w-8 text-primary" />
        </div>
      </div>
      
      <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '2s' }}>
        <div className="glass-card p-4 rounded-xl">
          <div className="text-2xl">✨</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="glass-card p-12 rounded-3xl backdrop-blur-xl">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            HORIZON
            <span className="block text-4xl md:text-5xl bg-gradient-sunset bg-clip-text text-transparent font-normal">
              Collection Premium
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Découvrez notre sélection exclusive de produits technologiques haut de gamme 
            dans un écrin luxueux inspiré des sommets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-sunset hover:scale-105 transform transition-all duration-300 text-white font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-primary/25"
            >
              Explorer la Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl"
            >
              Voir les Nouveautés
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-white/70">Produits Premium</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-white/70">Clients Satisfaits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-white/70">Avis Positifs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;