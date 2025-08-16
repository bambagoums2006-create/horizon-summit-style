import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProductSection from '@/components/ProductSection';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ProductSection />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="glass-card py-12 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img src="/lovable-uploads/8f762cd9-7246-46af-a18d-a0cbda455145.png" alt="Horizon SABG" className="h-10 w-10 object-contain" />
            <div className="text-2xl font-bold text-foreground">HORIZON</div>
          </div>
          <p className="text-muted-foreground mb-6">
            Votre destination premium pour la technologie de luxe
          </p>
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-primary transition-colors">CGV</a>
            <a href="#" className="hover:text-primary transition-colors">Confidentialité</a>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20 text-muted-foreground">
            © 2024 Horizon. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
