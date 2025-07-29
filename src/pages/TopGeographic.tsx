import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { formatINR } from "@/lib/utils/currency"
import { MapPin, Users, ShoppingCart, TrendingUp } from "lucide-react"

const topCities = [
  { 
    name: "Mumbai", 
    revenue: 245000, 
    users: 12500, 
    conversions: 1890, 
    growth: "+15%",
    conversionRate: "15.1%",
    percentage: 35 
  },
  { 
    name: "Bengaluru", 
    revenue: 198000, 
    users: 9800, 
    conversions: 1456, 
    growth: "+22%",
    conversionRate: "14.9%",
    percentage: 28 
  },
  { 
    name: "Delhi", 
    revenue: 167000, 
    users: 8900, 
    conversions: 1234, 
    growth: "+8%",
    conversionRate: "13.9%",
    percentage: 24 
  },
  { 
    name: "Pune", 
    revenue: 89000, 
    users: 5600, 
    conversions: 745, 
    growth: "+18%",
    conversionRate: "13.3%",
    percentage: 13 
  },
]

const geoInsights = [
  {
    city: "Jaipur",
    insight: "High engagement (8.2%) but low conversion (2.1%). Consider improving localization and payment options.",
    status: "attention"
  },
  {
    city: "Chennai",
    insight: "Strong mobile conversion rate (16.3%). Optimize mobile experience for other cities.",
    status: "positive"
  },
  {
    city: "Kolkata",
    insight: "Weekend sales spike (+45%). Schedule campaigns for Friday-Sunday.",
    status: "opportunity"
  },
  {
    city: "Hyderabad",
    insight: "Premium product preference. Focus on high-value items for this market.",
    status: "positive"
  },
]

export default function TopGeographic() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Geographic Performance</h1>
            <p className="text-muted-foreground">Top performing cities and regional insights</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Cities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">Active markets</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Top City Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{formatINR(245000)}</div>
              <p className="text-xs text-muted-foreground">Mumbai leading</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Average Conversion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">14.3%</div>
              <p className="text-xs text-muted-foreground">Across all cities</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">+16%</div>
              <p className="text-xs text-muted-foreground">Month over month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Cities</CardTitle>
              <CardDescription>Revenue and conversion metrics by city</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {topCities.map((city) => (
                  <div key={city.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{city.name}</span>
                        <Badge variant="secondary" className="text-xs">{city.growth}</Badge>
                      </div>
                      <span className="font-bold text-primary">{formatINR(city.revenue)}</span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3 text-muted-foreground" />
                        <span className="text-muted-foreground">{city.users.toLocaleString()} users</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ShoppingCart className="h-3 w-3 text-muted-foreground" />
                        <span className="text-muted-foreground">{city.conversions} sales</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3 text-muted-foreground" />
                        <span className="text-muted-foreground">{city.conversionRate} CVR</span>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Market share</span>
                        <span>{city.percentage}%</span>
                      </div>
                      <Progress value={city.percentage} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Geographic Insights</CardTitle>
              <CardDescription>Key findings and recommendations by city</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {geoInsights.map((insight, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span className="font-medium">{insight.city}</span>
                      </div>
                      <Badge 
                        variant={
                          insight.status === 'positive' ? 'default' : 
                          insight.status === 'attention' ? 'destructive' : 
                          'secondary'
                        }
                      >
                        {insight.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{insight.insight}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Market Expansion Opportunities</CardTitle>
            <CardDescription>Potential new markets based on demographic analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-green-600" />
                  <span className="font-medium">Ahmedabad</span>
                  <Badge variant="outline" className="text-green-600">High Potential</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Growing tech hub with young demographics similar to Bengaluru
                </p>
                <div className="text-xs text-muted-foreground">
                  Estimated revenue potential: {formatINR(120000)}
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span className="font-medium">Chandigarh</span>
                  <Badge variant="outline" className="text-blue-600">Medium Potential</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  High disposable income, strong brand consciousness
                </p>
                <div className="text-xs text-muted-foreground">
                  Estimated revenue potential: {formatINR(85000)}
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  <span className="font-medium">Kochi</span>
                  <Badge variant="outline" className="text-orange-600">Growing Market</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Emerging market with increasing digital adoption
                </p>
                <div className="text-xs text-muted-foreground">
                  Estimated revenue potential: {formatINR(65000)}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}