import { DollarSign, TrendingUp, AlertCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { formatINR, formatCompactINR, formatPercentage } from "@/lib/utils/currency"

const budgetData = [
  {
    platform: "Google Ads",
    allocated: 500000,
    spent: 415000,
    performance: "high",
    recommendation: "Increase budget by ₹50K for better ROI"
  },
  {
    platform: "Facebook Ads",
    allocated: 300000,
    spent: 285000,
    performance: "medium",
    recommendation: "On track, continue current spend"
  },
  {
    platform: "Instagram Ads",
    allocated: 200000,
    spent: 224000,
    performance: "warning",
    recommendation: "Exceeded budget by 12%, consider reallocation"
  },
  {
    platform: "LinkedIn Ads",
    allocated: 150000,
    spent: 112500,
    performance: "low",
    recommendation: "Underutilized by 25%, reallocate ₹37.5K"
  }
]

export function BudgetTracker() {
  const totalAllocated = budgetData.reduce((sum, item) => sum + item.allocated, 0)
  const totalSpent = budgetData.reduce((sum, item) => sum + item.spent, 0)
  const spentPercentage = (totalSpent / totalAllocated) * 100

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case "high":
        return "bg-success/10 text-success border-success/30"
      case "warning":
        return "bg-warning/10 text-warning border-warning/30"
      case "low":
        return "bg-destructive/10 text-destructive border-destructive/30"
      default:
        return "bg-primary/10 text-primary border-primary/30"
    }
  }

  return (
    <div className="metric-card">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            <div>
              <h3 className="text-lg font-semibold">Budget Allocation & Tracking</h3>
              <p className="text-sm text-muted-foreground">July 2024 budget utilization</p>
            </div>
          </div>
          <Badge variant="outline" className="bg-primary/10 text-primary">
            {formatPercentage(spentPercentage)} utilized
          </Badge>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Total Spent: {formatCompactINR(totalSpent)}</span>
            <span className="text-muted-foreground">
              Budget: {formatCompactINR(totalAllocated)}
            </span>
          </div>
          <Progress value={spentPercentage} className="h-3" />
        </div>
      </div>

      <div className="space-y-4">
        {budgetData.map((platform) => {
          const platformSpentPercentage = (platform.spent / platform.allocated) * 100
          const isOverbudget = platformSpentPercentage > 100

          return (
            <div key={platform.platform} className="border border-border rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold">{platform.platform}</h4>
                  <p className="text-sm text-muted-foreground">
                    {formatINR(platform.spent)} / {formatINR(platform.allocated)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {isOverbudget && (
                    <AlertCircle className="h-4 w-4 text-warning" />
                  )}
                  <Badge className={getPerformanceColor(platform.performance)}>
                    {platform.performance}
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <Progress 
                  value={Math.min(platformSpentPercentage, 100)} 
                  className="h-2"
                />
                <div className="flex justify-between text-xs">
                  <span className={isOverbudget ? "text-warning font-medium" : "text-muted-foreground"}>
                    {formatPercentage(platformSpentPercentage)} spent
                  </span>
                  {isOverbudget && (
                    <span className="text-warning font-medium">
                      Over by {formatINR(platform.spent - platform.allocated)}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-3 p-2 bg-muted/50 rounded text-xs">
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{platform.recommendation}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <h4 className="font-semibold text-primary mb-2">Budget Optimization Insights</h4>
        <ul className="text-sm space-y-1 text-muted-foreground">
          <li>• Reallocating ₹50K from Instagram to LinkedIn could increase lead quality by 15%</li>
          <li>• Google Ads showing strong performance - consider increasing allocation</li>
          <li>• Peak engagement hours: 12-2 PM and 6-8 PM - optimize budget timing</li>
        </ul>
      </div>
    </div>
  )
}