import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { useState } from 'react';
import ps5Product from '@/assets/ps5-product.jpg';
import iphoneProduct from '@/assets/iphone-product.jpg';
import appliancesProduct from '@/assets/appliances-product.jpg';

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous', icon: '🌟' },
    { id: 'gaming', name: 'Gaming', icon: '🎮' },
    { id: 'apple', name: 'Apple', icon: '🍎' },
    { id: 'electromenager', name: 'Électroménager', icon: '🏠' },
  ];

  const products = [
    {
      id: 1,
      name: 'PlayStation 5',
      category: 'gaming',
      price: 499,
      originalPrice: 599,
      image: ps5Product,
      rating: 4.8,
      reviews: 1234,
      badge: 'Populaire',
      description: 'Console de jeu nouvelle génération',
    },
    {
      id: 2,
      name: 'iPhone 15 Pro Max',
      category: 'apple',
      price: 1299,
      originalPrice: null,
      image: iphoneProduct,
      rating: 4.9,
      reviews: 892,
      badge: 'Nouveau',
      description: 'Le smartphone le plus avancé',
    },
    {
      id: 3,
      name: 'MacBook Pro M3',
      category: 'apple',
      price: 2199,
      originalPrice: 2399,
      image: iphoneProduct,
      rating: 4.9,
      reviews: 567,
      badge: 'Promo',
      description: 'Performance ultime pour les pros',
    },
    {
      id: 4,
      name: 'Xbox Series X',
      category: 'gaming',
      price: 399,
      originalPrice: 499,
      image: ps5Product,
      rating: 4.7,
      reviews: 743,
      badge: 'Offre',
      description: 'Gaming 4K à 120fps',
    },
    {
      id: 5,
      name: 'Robot Cuiseur Thermomix',
      category: 'electromenager',
      price: 1359,
      originalPrice: null,
      image: appliancesProduct,
      rating: 4.6,
      reviews: 456,
      badge: 'Premium',
      description: 'Cuisine comme un chef',
    },
    {
      id: 6,
      name: 'Dyson V15 Detect',
      category: 'electromenager',
      price: 649,
      originalPrice: 799,
      image: appliancesProduct,
      rating: 4.8,
      reviews: 321,
      badge: 'Bestseller',
      description: 'Aspiration laser révolutionnaire',
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-20 px-4" id="electronics">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Collection
            <span className="block bg-gradient-sunset bg-clip-text text-transparent">
              Premium
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection exclusive de produits technologiques et électroménagers de luxe
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-gradient-sunset text-white shadow-lg scale-105' 
                  : 'glass-card hover-lift'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="glass-card hover-lift group p-6 rounded-3xl border-0 overflow-hidden">
              {/* Product Badge */}
              <div className="flex justify-between items-start mb-4">
                <Badge className="bg-gradient-sunset text-white px-3 py-1 rounded-full">
                  {product.badge}
                </Badge>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Product Image */}
              <div className="mb-6 overflow-hidden rounded-2xl">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-semibold ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} avis)</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-bold text-foreground">{product.price}€</span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {product.originalPrice}€
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button className="w-full bg-gradient-sunset hover:scale-105 transition-all duration-300 text-white font-semibold py-3 rounded-2xl">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Ajouter au panier
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;