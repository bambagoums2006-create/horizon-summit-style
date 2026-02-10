import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { recentOrders } from '@/data/mockDashboardData';

const statusVariant = (statut: string) => {
  switch (statut) {
    case 'Livré': return 'default';
    case 'Expédié': return 'secondary';
    case 'En cours': return 'outline';
    case 'En préparation': return 'outline';
    default: return 'outline';
  }
};

const RecentOrders = () => {
  return (
    <Card className="glass-card border-white/20">
      <CardHeader>
        <CardTitle className="text-lg">Commandes récentes</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Client</TableHead>
              <TableHead className="hidden md:table-cell">Produit</TableHead>
              <TableHead>Montant</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="hidden sm:table-cell">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-mono text-xs">{order.id}</TableCell>
                <TableCell className="font-medium">{order.client}</TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground">{order.produit}</TableCell>
                <TableCell className="font-semibold">{(order.montant / 100).toLocaleString('fr-MA')} DH</TableCell>
                <TableCell>
                  <Badge variant={statusVariant(order.statut)} className={order.statut === 'Livré' ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100' : ''}>
                    {order.statut}
                  </Badge>
                </TableCell>
                <TableCell className="hidden sm:table-cell text-muted-foreground text-xs">{order.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentOrders;
