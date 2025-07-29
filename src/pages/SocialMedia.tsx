import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatINR } from "@/lib/utils/currency"
import { Heart, MessageCircle, Share, Users, TrendingUp } from "lucide-react"

const socialPlatforms = [
  { 
    name: "Instagram", 
    followers: "156K", 
    engagement: "8.4%", 
    posts: 45, 
    reach: "2.1M",
    revenue: 85000,
    color: "bg-pink-500"
  },
  { 
    name: "Facebook", 
    followers: "89K", 
    engagement: "5.2%", 
    posts: 32, 
    reach: "1.8M",
    revenue: 67000,
    color: "bg-blue-600"
  },
  { 
    name: "Twitter", 
    followers: "43K", 
    engagement: "6.8%", 
    posts: 78, 
    reach: "890K",
    revenue: 34000,
    color: "bg-sky-500"
  },
  { 
    name: "LinkedIn", 
    followers: "28K", 
    engagement: "4.1%", 
    posts: 24, 
    reach: "456K",
    revenue: 52000,
    color: "bg-blue-700"
  },
]

const recentPosts = [
  { platform: "Instagram", content: "Summer Collection Launch 🌞", likes: 2450, comments: 186, shares: 92, engagement: "9.2%" },
  { platform: "Facebook", content: "Behind the scenes of our photoshoot", likes: 1820, comments: 143, shares: 67, engagement: "7.8%" },
  { platform: "Twitter", content: "Sustainable fashion is the future", likes: 890, comments: 78, shares: 234, engagement: "12.4%" },
  { platform: "LinkedIn", content: "Industry insights and trends", likes: 456, comments: 89, shares: 123, engagement: "8.9%" },
]

export default function SocialMedia() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Social Media Analytics</h1>
            <p className="text-muted-foreground">Track engagement and performance across all platforms</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {socialPlatforms.map((platform) => (
            <Card key={platform.name}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">{platform.name}</CardTitle>
                  <div className={`w-3 h-3 rounded-full ${platform.color}`} />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{platform.followers} followers</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{platform.engagement} engagement</span>
                </div>
                <div className="text-lg font-bold text-primary">
                  {formatINR(platform.revenue)}
                </div>
                <p className="text-xs text-muted-foreground">
                  {platform.reach} reach • {platform.posts} posts
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Platform Performance</CardTitle>
              <CardDescription>Monthly engagement metrics by platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {socialPlatforms.map((platform) => (
                  <div key={platform.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full ${platform.color}`} />
                      <span className="font-medium">{platform.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">{platform.engagement}</span>
                      <Badge variant="secondary">{platform.posts} posts</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Posts Performance</CardTitle>
              <CardDescription>Top performing content this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{post.platform}</Badge>
                      <span className="text-sm font-medium text-green-600">{post.engagement}</span>
                    </div>
                    <p className="text-sm mb-3">{post.content}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {post.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        {post.comments}
                      </div>
                      <div className="flex items-center gap-1">
                        <Share className="h-3 w-3" />
                        {post.shares}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}