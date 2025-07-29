import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatINR } from "@/lib/utils/currency"
import { TrendingUp, TrendingDown, Building2, BarChart3 } from "lucide-react"

const ecommerceBrands = [
  { 
    name: "Nykaa", 
    symbol: "NYKAA", 
    price: 1456.80, 
    change: +34.20, 
    changePercent: +2.4,
    marketCap: "73,240 Cr",
    sector: "Beauty & Personal Care"
  },
  { 
    name: "Zomato", 
    symbol: "ZOMATO", 
    price: 89.45, 
    change: -2.15, 
    changePercent: -2.3,
    marketCap: "78,650 Cr",
    sector: "Food Delivery"
  },
  { 
    name: "Paytm", 
    symbol: "PAYTM", 
    price: 712.30, 
    change: +18.90, 
    changePercent: +2.7,
    marketCap: "45,890 Cr",
    sector: "Fintech"
  },
  { 
    name: "PolicyBazaar", 
    symbol: "PB", 
    price: 1234.50, 
    change: -45.20, 
    changePercent: -3.5,
    marketCap: "56,780 Cr",
    sector: "Insurance"
  },
  { 
    name: "Lenskart", 
    symbol: "LENS", 
    price: 890.20, 
    change: +12.80, 
    changePercent: +1.5,
    marketCap: "32,450 Cr",
    sector: "Eyewear"
  },
]

const marketNews = [
  {
    title: "E-commerce sector shows strong Q3 growth despite market volatility",
    summary: "Leading online retailers report 18% YoY revenue growth driven by festive season sales",
    time: "2 hours ago",
    impact: "positive"
  },
  {
    title: "Digital payment adoption reaches all-time high in tier-2 cities",
    summary: "Fintech companies see 45% increase in transaction volumes from smaller cities",
    time: "4 hours ago",
    impact: "positive"
  },
  {
    title: "Rising logistics costs impact e-commerce margins",
    summary: "Fuel price hikes and labor shortages affecting last-mile delivery costs",
    time: "6 hours ago",
    impact: "negative"
  },
  {
    title: "Beauty and wellness brands lead consumer spending recovery",
    summary: "Premium beauty products see surge in demand post-pandemic",
    time: "8 hours ago",
    impact: "positive"
  },
]

export default function StockMarket() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">E-commerce Stock Market</h1>
            <p className="text-muted-foreground">Track performance of leading e-commerce and digital brands</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">Live</span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Market Index</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18,542.30</div>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-green-600" />
                <span className="text-xs text-green-600">+234.50 (+1.28%)</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">E-commerce Sector</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,856.40</div>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-green-600" />
                <span className="text-xs text-green-600">+45.20 (+1.6%)</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Fintech Sector</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234.80</div>
              <div className="flex items-center gap-1">
                <TrendingDown className="h-3 w-3 text-red-600" />
                <span className="text-xs text-red-600">-12.40 (-1.0%)</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Trading Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹8.9K Cr</div>
              <p className="text-xs text-muted-foreground">Today's volume</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>E-commerce Brand Stocks</CardTitle>
                <CardDescription>Real-time stock prices of major e-commerce companies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ecommerceBrands.map((brand) => (
                    <div key={brand.symbol} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Building2 className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">{brand.name}</p>
                          <p className="text-sm text-muted-foreground">{brand.symbol} • {brand.sector}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">₹{brand.price.toFixed(2)}</p>
                        <div className={`flex items-center gap-1 ${
                          brand.change >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {brand.change >= 0 ? 
                            <TrendingUp className="h-3 w-3" /> : 
                            <TrendingDown className="h-3 w-3" />
                          }
                          <span className="text-sm">
                            {brand.change >= 0 ? '+' : ''}{brand.change.toFixed(2)} ({brand.changePercent >= 0 ? '+' : ''}{brand.changePercent.toFixed(1)}%)
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">MCap: ₹{brand.marketCap}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Market News</CardTitle>
              <CardDescription>Latest updates affecting e-commerce stocks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {marketNews.map((news, index) => (
                  <div key={index} className="border rounded-lg p-3">
                    <div className="flex items-start justify-between mb-2">
                      <Badge 
                        variant={news.impact === 'positive' ? 'default' : 'destructive'}
                        className="text-xs"
                      >
                        {news.impact === 'positive' ? 'Bullish' : 'Bearish'}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{news.time}</span>
                    </div>
                    <h4 className="font-medium text-sm mb-1">{news.title}</h4>
                    <p className="text-xs text-muted-foreground">{news.summary}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sector Performance</CardTitle>
            <CardDescription>Year-to-date performance by e-commerce sub-sectors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="h-4 w-4 text-green-600" />
                  <span className="font-medium">Food Delivery</span>
                </div>
                <div className="text-2xl font-bold text-green-600">+24.5%</div>
                <p className="text-xs text-muted-foreground">YTD Performance</p>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="h-4 w-4 text-blue-600" />
                  <span className="font-medium">Beauty & Fashion</span>
                </div>
                <div className="text-2xl font-bold text-blue-600">+18.2%</div>
                <p className="text-xs text-muted-foreground">YTD Performance</p>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="h-4 w-4 text-purple-600" />
                  <span className="font-medium">Fintech</span>
                </div>
                <div className="text-2xl font-bold text-purple-600">+12.8%</div>
                <p className="text-xs text-muted-foreground">YTD Performance</p>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="h-4 w-4 text-orange-600" />
                  <span className="font-medium">Health & Wellness</span>
                </div>
                <div className="text-2xl font-bold text-orange-600">+31.4%</div>
                <p className="text-xs text-muted-foreground">YTD Performance</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}