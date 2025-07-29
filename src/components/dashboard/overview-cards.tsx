import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Target,
  MousePointer,
  Eye,
  Heart,
  MessageCircle
} from "lucide-react"
import { MetricCard } from "./metric-card"
import { formatCompactINR, formatPercentage } from "@/lib/utils/currency"

export function OverviewCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Total Revenue"
        value={formatCompactINR(2875000)}
        change={{
          value: formatPercentage(12.5),
          trend: "up"
        }}
        icon={DollarSign}
        description="Revenue generated across all campaigns this month"
      />
      
      <MetricCard
        title="Active Campaigns"
        value="23"
        change={{
          value: formatPercentage(8.2),
          trend: "up"
        }}
        icon={Target}
        description="Currently running campaigns across all channels"
      />
      
      <MetricCard
        title="Total Leads"
        value="1,247"
        change={{
          value: formatPercentage(15.3),
          trend: "up"
        }}
        icon={Users}
        description="New leads generated this month"
      />
      
      <MetricCard
        title="Avg. ROAS"
        value="4.2x"
        change={{
          value: formatPercentage(5.8),
          trend: "up"
        }}
        icon={TrendingUp}
        description="Return on ad spend across all platforms"
      />
    </div>
  )
}

export function EngagementMetrics() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Total Impressions"
        value="2.5M"
        change={{
          value: formatPercentage(18.7),
          trend: "up"
        }}
        icon={Eye}
        description="Ad impressions across all campaigns"
      />
      
      <MetricCard
        title="Click-Through Rate"
        value="4.8%"
        change={{
          value: formatPercentage(2.3),
          trend: "up"
        }}
        icon={MousePointer}
        description="Average CTR across all platforms"
      />
      
      <MetricCard
        title="Social Engagement"
        value="15.2K"
        change={{
          value: formatPercentage(22.1),
          trend: "up"
        }}
        icon={Heart}
        description="Likes, shares, and comments"
      />
      
      <MetricCard
        title="Conversion Rate"
        value="3.1%"
        change={{
          value: formatPercentage(1.2),
          trend: "down"
        }}
        icon={MessageCircle}
        description="Overall conversion rate from all channels"
      />
    </div>
  )
}