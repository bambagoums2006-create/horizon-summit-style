import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell } from 'recharts';
import { categoryRevenueData } from '@/data/mockDashboardData';

const chartConfig = {
  Electronics: { label: "Electronics", color: "hsl(35, 85%, 55%)" },
  Gaming: { label: "Gaming", color: "hsl(15, 75%, 65%)" },
  Apple: { label: "Apple", color: "hsl(350, 80%, 65%)" },
  Électroménager: { label: "Électroménager", color: "hsl(25, 60%, 50%)" },
};

const CategoryChart = () => {
  const total = categoryRevenueData.reduce((s, d) => s + d.value, 0);

  return (
    <Card className="glass-card border-white/20">
      <CardHeader>
        <CardTitle className="text-lg">Revenu par catégorie</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Pie data={categoryRevenueData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={4}>
              {categoryRevenueData.map((entry, i) => (
                <Cell key={i} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="grid grid-cols-2 gap-3 mt-4">
          {categoryRevenueData.map((cat) => (
            <div key={cat.name} className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full" style={{ background: cat.fill }} />
              <span className="text-xs text-muted-foreground">{cat.name}</span>
              <span className="text-xs font-medium ml-auto">{Math.round((cat.value / total) * 100)}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryChart;
