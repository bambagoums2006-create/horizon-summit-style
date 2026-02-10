import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { trafficData } from '@/data/mockDashboardData';

const chartConfig = {
  visiteurs: { label: "Visiteurs", color: "hsl(35, 85%, 55%)" },
  conversions: { label: "Conversions", color: "hsl(15, 75%, 65%)" },
};

const TrafficChart = () => {
  return (
    <Card className="glass-card border-white/20">
      <CardHeader>
        <CardTitle className="text-lg">Trafic & Conversions (semaine)</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart data={trafficData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(30, 20%, 88%)" />
            <XAxis dataKey="jour" stroke="hsl(25, 15%, 45%)" fontSize={12} />
            <YAxis stroke="hsl(25, 15%, 45%)" fontSize={12} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="visiteurs" fill="hsl(35, 85%, 55%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="conversions" fill="hsl(15, 75%, 65%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default TrafficChart;
