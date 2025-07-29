import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Newspaper, TrendingUp, Users } from "lucide-react"

const fashionNews = [
  {
    id: 1,
    title: "Sustainable Fashion Trends Dominate 2024 Market",
    summary: "Eco-friendly materials and ethical production methods see 67% increase in consumer preference",
    category: "Sustainability",
    publishedAt: "2 hours ago",
    readTime: "3 min read",
    trending: true,
    source: "Fashion Business Journal"
  },
  {
    id: 2,
    title: "AI-Powered Personal Styling Reaches New Heights",
    summary: "Machine learning algorithms now predict fashion preferences with 94% accuracy",
    category: "Technology",
    publishedAt: "4 hours ago",
    readTime: "5 min read",
    trending: true,
    source: "Tech Fashion Today"
  },
  {
    id: 3,
    title: "Gen Z Drives Vintage Fashion Revival",
    summary: "Thrift shopping and vintage clothing sales up 156% among 18-24 age group",
    category: "Trends",
    publishedAt: "6 hours ago",
    readTime: "4 min read",
    trending: false,
    source: "Youth Style Report"
  },
  {
    id: 4,
    title: "Indian Fashion Weeks Go Digital-First",
    summary: "Major fashion events adopt virtual showrooms and AR try-on experiences",
    category: "Events",
    publishedAt: "8 hours ago",
    readTime: "6 min read",
    trending: false,
    source: "India Fashion Weekly"
  },
  {
    id: 5,
    title: "Fast Fashion Brands Face Environmental Scrutiny",
    summary: "New regulations require transparency in supply chain and carbon footprint reporting",
    category: "Regulation",
    publishedAt: "12 hours ago",
    readTime: "7 min read",
    trending: false,
    source: "Sustainable Fashion News"
  },
  {
    id: 6,
    title: "Luxury Brands Expand into Metaverse Fashion",
    summary: "High-end designers create exclusive NFT collections and virtual wearables",
    category: "Innovation",
    publishedAt: "1 day ago",
    readTime: "5 min read",
    trending: true,
    source: "Luxury Fashion Times"
  },
]

const trendingTopics = [
  { topic: "Sustainable Fashion", articles: 145, growth: "+23%" },
  { topic: "AI in Fashion", articles: 89, growth: "+45%" },
  { topic: "Vintage Revival", articles: 67, growth: "+78%" },
  { topic: "Digital Fashion Shows", articles: 54, growth: "+34%" },
  { topic: "Metaverse Wearables", articles: 43, growth: "+156%" },
]

const categoryStats = [
  { name: "Sustainability", count: 156, color: "bg-green-500" },
  { name: "Technology", count: 134, color: "bg-blue-500" },
  { name: "Trends", count: 98, color: "bg-purple-500" },
  { name: "Events", count: 87, color: "bg-orange-500" },
  { name: "Innovation", count: 76, color: "bg-pink-500" },
  { name: "Regulation", count: 45, color: "bg-gray-500" },
]

export default function News() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Fashion News & Insights</h1>
            <p className="text-muted-foreground">Stay updated with the latest fashion industry trends and news</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">Live Updates</span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Trending Stories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">High engagement</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Active topics</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Weekly Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">+34%</div>
              <p className="text-xs text-muted-foreground">Article engagement</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Latest Fashion News</CardTitle>
                <CardDescription>Breaking stories and industry updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fashionNews.map((article) => (
                    <div key={article.id} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{article.category}</Badge>
                          {article.trending && (
                            <Badge className="bg-red-500 hover:bg-red-600">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              Trending
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{article.summary}</p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{article.source}</span>
                        <span>{article.publishedAt}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Trending Topics</CardTitle>
                <CardDescription>Most discussed fashion topics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50">
                      <div>
                        <p className="font-medium text-sm">{topic.topic}</p>
                        <div className="flex items-center gap-1">
                          <Newspaper className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{topic.articles} articles</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-green-600">
                        {topic.growth}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Category Distribution</CardTitle>
                <CardDescription>Articles by category this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categoryStats.map((category) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${category.color}`} />
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{category.count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Industry Impact Analysis</CardTitle>
            <CardDescription>How current news affects the fashion industry</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="font-medium">Market Growth</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Sustainable fashion segment showing 45% YoY growth driven by consumer awareness
                </p>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Positive Impact</Badge>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span className="font-medium">Consumer Behavior</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Gen Z prioritizing brand values over price, reshaping market dynamics
                </p>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Trend Shift</Badge>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Newspaper className="h-4 w-4 text-purple-600" />
                  <span className="font-medium">Technology Adoption</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  AI and AR technologies accelerating fashion industry digital transformation
                </p>
                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">Innovation</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}