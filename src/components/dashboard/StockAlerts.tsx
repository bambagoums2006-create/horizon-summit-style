import { AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { stockAlerts } from '@/data/mockDashboardData';

const StockAlerts = () => {
  return (
    <Card className="glass-card border-white/20">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          Alertes de stock
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {stockAlerts.map((item) => (
          <div key={item.name} className="flex items-center justify-between p-3 rounded-lg bg-amber-50/50 border border-amber-200/50">
            <div>
              <p className="font-medium text-sm">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.categorie}</p>
            </div>
            <div className="text-right">
              <Badge variant="destructive" className="bg-amber-100 text-amber-700 hover:bg-amber-100">
                {item.stock}/{item.seuil}
              </Badge>
              <p className="text-xs text-destructive mt-1">Stock bas</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default StockAlerts;
