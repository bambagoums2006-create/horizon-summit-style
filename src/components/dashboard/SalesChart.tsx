import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import { monthlySalesData } from '@/data/mockDashboardData';

const chartConfig = {
  ventes: { label: "Ventes (DH)", color: "hsl(35, 85%, 55%)" },
};

const SalesChart = () => {
  return (
    <Card className="glass-card border-white/20">
      <CardHeader>
        <CardTitle className="text-lg">Évolution des ventes</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <AreaChart data={monthlySalesData}>
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(35, 85%, 55%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(35, 85%, 55%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(30, 20%, 88%)" />
            <XAxis dataKey="month" stroke="hsl(25, 15%, 45%)" fontSize={12} />
            <YAxis stroke="hsl(25, 15%, 45%)" fontSize={12} tickFormatter={(v) => `${v / 1000}k`} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area type="monotone" dataKey="ventes" stroke="hsl(35, 85%, 55%)" fill="url(#salesGradient)" strokeWidth={2} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default SalesChart;
