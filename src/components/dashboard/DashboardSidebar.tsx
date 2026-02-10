import { BarChart3, Box, Home, Package, Settings, ShoppingCart, TrendingUp, Users, AlertTriangle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components/ui/sidebar';

const menuItems = [
  { title: "Vue d'ensemble", icon: Home, id: "overview" },
  { title: "Commandes", icon: ShoppingCart, id: "orders" },
  { title: "Produits", icon: Package, id: "products" },
  { title: "Clients", icon: Users, id: "customers" },
  { title: "Analytics", icon: BarChart3, id: "analytics" },
  { title: "Performance", icon: TrendingUp, id: "performance" },
  { title: "Stock", icon: Box, id: "stock" },
  { title: "Alertes", icon: AlertTriangle, id: "alerts" },
];

interface DashboardSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const DashboardSidebar = ({ activeTab, onTabChange }: DashboardSidebarProps) => {
  return (
    <Sidebar className="border-r border-border/50">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 py-3">
            <div className="flex items-center gap-2">
              <img src="/lovable-uploads/8f762cd9-7246-46af-a18d-a0cbda455145.png" alt="Horizon" className="h-8 w-8 object-contain" />
              <span className="font-bold text-base text-foreground">HORIZON</span>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onTabChange(item.id)}
                    className={`cursor-pointer transition-all ${
                      activeTab === item.id
                        ? 'bg-primary/15 text-primary font-semibold'
                        : 'hover:bg-muted/50'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-muted/50 cursor-pointer">
                  <Settings className="h-4 w-4" />
                  <span>Paramètres</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="hover:bg-muted/50 cursor-pointer">
                  <Link to="/">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Retour au site</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default DashboardSidebar;
