// Mock data for the dashboard

export const statsData = {
  revenue: { value: 2847500, change: 12.5, label: "Revenu total" },
  orders: { value: 1284, change: 8.2, label: "Commandes" },
  customers: { value: 3842, change: 15.3, label: "Clients" },
  products: { value: 156, change: -2.1, label: "Produits en stock" },
};

export const monthlySalesData = [
  { month: "Jan", ventes: 185000, commandes: 95 },
  { month: "Fév", ventes: 220000, commandes: 112 },
  { month: "Mar", ventes: 195000, commandes: 98 },
  { month: "Avr", ventes: 310000, commandes: 145 },
  { month: "Mai", ventes: 275000, commandes: 132 },
  { month: "Jun", ventes: 340000, commandes: 168 },
  { month: "Jul", ventes: 290000, commandes: 142 },
  { month: "Aoû", ventes: 265000, commandes: 128 },
  { month: "Sep", ventes: 350000, commandes: 175 },
  { month: "Oct", ventes: 410000, commandes: 198 },
  { month: "Nov", ventes: 385000, commandes: 187 },
  { month: "Déc", ventes: 450000, commandes: 210 },
];

export const categoryRevenueData = [
  { name: "Electronics", value: 980000, fill: "hsl(35, 85%, 55%)" },
  { name: "Gaming", value: 720000, fill: "hsl(15, 75%, 65%)" },
  { name: "Apple", value: 650000, fill: "hsl(350, 80%, 65%)" },
  { name: "Électroménager", value: 497500, fill: "hsl(25, 60%, 50%)" },
];

export const recentOrders = [
  { id: "HRZ-1284", client: "Ahmed Benali", produit: "iPhone 15 Pro Max", montant: 189900, statut: "Livré", date: "2024-12-15" },
  { id: "HRZ-1283", client: "Fatima Zahra", produit: "PlayStation 5", montant: 74900, statut: "En cours", date: "2024-12-15" },
  { id: "HRZ-1282", client: "Youssef Amrani", produit: "MacBook Pro M3", montant: 329900, statut: "En préparation", date: "2024-12-14" },
  { id: "HRZ-1281", client: "Sara Idrissi", produit: "Samsung Galaxy S24 Ultra", montant: 159900, statut: "Livré", date: "2024-12-14" },
  { id: "HRZ-1280", client: "Omar Tazi", produit: "LG OLED TV 65\"", montant: 249900, statut: "Expédié", date: "2024-12-13" },
  { id: "HRZ-1279", client: "Leila Fassi", produit: "iPad Air M2", montant: 99900, statut: "En cours", date: "2024-12-13" },
  { id: "HRZ-1278", client: "Karim Alaoui", produit: "AirPods Pro 2", montant: 39900, statut: "Livré", date: "2024-12-12" },
  { id: "HRZ-1277", client: "Nadia Berrada", produit: "Machine à laver Samsung", montant: 89900, statut: "En préparation", date: "2024-12-12" },
];

export const topProducts = [
  { name: "iPhone 15 Pro Max", ventes: 234, revenue: 4439660, stock: 18, image: "📱" },
  { name: "PlayStation 5", ventes: 189, revenue: 1415610, stock: 32, image: "🎮" },
  { name: "MacBook Pro M3", ventes: 156, revenue: 5146440, stock: 8, image: "💻" },
  { name: "Samsung Galaxy S24", ventes: 142, revenue: 2270580, stock: 25, image: "📱" },
  { name: "LG OLED TV 65\"", ventes: 98, revenue: 2449020, stock: 5, image: "📺" },
];

export const stockAlerts = [
  { name: "MacBook Pro M3", stock: 8, seuil: 15, categorie: "Apple" },
  { name: "LG OLED TV 65\"", stock: 5, seuil: 10, categorie: "Electronics" },
  { name: "PS5 Controller", stock: 3, seuil: 20, categorie: "Gaming" },
  { name: "AirPods Max", stock: 7, seuil: 12, categorie: "Apple" },
];

export const trafficData = [
  { jour: "Lun", visiteurs: 1250, conversions: 45 },
  { jour: "Mar", visiteurs: 1480, conversions: 52 },
  { jour: "Mer", visiteurs: 1320, conversions: 48 },
  { jour: "Jeu", visiteurs: 1580, conversions: 61 },
  { jour: "Ven", visiteurs: 1890, conversions: 72 },
  { jour: "Sam", visiteurs: 2100, conversions: 85 },
  { jour: "Dim", visiteurs: 1750, conversions: 68 },
];
