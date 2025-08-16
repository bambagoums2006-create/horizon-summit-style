import { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import horizonLogo from '@/assets/horizon-logo.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', href: '#' },
    { name: 'Electronics', href: '#electronics' },
    { name: 'Gaming', href: '#gaming' },
    { name: 'Apple', href: '#apple' },
    { name: 'Électroménager', href: '#electromenager' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={horizonLogo} alt="Horizon" className="h-10 w-10 object-contain" />
          <h1 className="text-2xl font-bold text-foreground">HORIZON</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white/20 rounded-xl px-4 py-2 backdrop-blur-md">
          <Input
            placeholder="Rechercher..."
            className="bg-transparent border-none text-foreground placeholder:text-muted-foreground w-64"
          />
          <Search className="h-5 w-5 text-muted-foreground ml-2" />
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hover-lift">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover-lift relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </Button>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass-card mx-4 mt-2 rounded-xl p-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center bg-white/20 rounded-xl px-4 py-2 mt-4">
              <Input
                placeholder="Rechercher..."
                className="bg-transparent border-none text-foreground placeholder:text-muted-foreground"
              />
              <Search className="h-5 w-5 text-muted-foreground ml-2" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;