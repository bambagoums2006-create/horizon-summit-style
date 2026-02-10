import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { topProducts } from '@/data/mockDashboardData';

const TopProducts = () => {
  const maxVentes = Math.max(...topProducts.map((p) => p.ventes));

  return (
    <Card className="glass-card border-white/20">
      <CardHeader>
        <CardTitle className="text-lg">Top produits</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {topProducts.map((product, i) => (
          <div key={product.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{product.image}</span>
                <div>
                  <p className="font-medium text-sm">{product.name}</p>
                  <p className="text-xs text-muted-foreground">{product.ventes} ventes · Stock: {product.stock}</p>
                </div>
              </div>
              <span className="font-semibold text-sm">{(product.revenue / 100).toLocaleString('fr-MA')} DH</span>
            </div>
            <Progress value={(product.ventes / maxVentes) * 100} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TopProducts;
