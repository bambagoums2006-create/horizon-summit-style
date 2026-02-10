import { DollarSign, ShoppingCart, Users, Package, TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { statsData } from '@/data/mockDashboardData';

const iconMap = {
  revenue: DollarSign,
  orders: ShoppingCart,
  customers: Users,
  products: Package,
};

const formatValue = (key: string, value: number) => {
  if (key === 'revenue') return `${(value / 100).toLocaleString('fr-MA')} DH`;
  return value.toLocaleString('fr-MA');
};

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {(Object.entries(statsData) as [string, typeof statsData.revenue][]).map(([key, stat]) => {
        const Icon = iconMap[key as keyof typeof iconMap];
        const isPositive = stat.change > 0;

        return (
          <Card key={key} className="glass-card border-white/20 hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-xl bg-primary/15 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-emerald-600' : 'text-destructive'}`}>
                  {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  {isPositive ? '+' : ''}{stat.change}%
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold text-foreground mt-1">{formatValue(key, stat.value)}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default StatsCards;
