import { AlertTriangle, TrendingUp, TrendingDown, Info } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { formatPercentage } from "@/lib/utils/currency"

const alerts = [
  {
    id: 1,
    type: "warning",
    title: "CPC Spike Alert",
    message: "Sharp rise in CPC for 'summer shoes' keyword (+32% in 3 days). Consider pausing or adjusting bids for that ad group until it stabilizes.",
    timestamp: "2 hours ago",
    campaign: "Summer Sale 2024"
  },
  {
    id: 2,
    type: "success",
    title: "High Performance Campaign",
    message: "Instagram Ads campaign exceeded conversion expectations by 45%. Consider increasing budget allocation.",
    timestamp: "4 hours ago",
    campaign: "Brand Awareness"
  },
  {
    id: 3,
    type: "info",
    title: "Budget Threshold",
    message: "LinkedIn Lead Gen campaign is 83% through allocated budget for July. Review and adjust if needed.",
    timestamp: "6 hours ago",
    campaign: "LinkedIn Lead Gen"
  },
  {
    id: 4,
    type: "warning",
    title: "Conversion Drop",
    message: "Product page conversion rate dropped by 19% between 'view product' and 'add to cart'. Consider testing stronger CTAs.",
    timestamp: "1 day ago",
    campaign: "Product Launch"
  }
]

export function AlertsPanel() {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-4 w-4" />
      case "success":
        return <TrendingUp className="h-4 w-4" />
      case "error":
        return <TrendingDown className="h-4 w-4" />
      default:
        return <Info className="h-4 w-4" />
    }
  }

  const getAlertVariant = (type: string) => {
    switch (type) {
      case "warning":
        return "border-warning/50 bg-warning/5"
      case "success":
        return "border-success/50 bg-success/5"
      case "error":
        return "border-destructive/50 bg-destructive/5"
      default:
        return "border-primary/50 bg-primary/5"
    }
  }

  return (
    <div className="metric-card">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Alerts & Notifications</h3>
          <p className="text-sm text-muted-foreground">Important updates from your campaigns</p>
        </div>
        <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/30">
          {alerts.length} active
        </Badge>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <Alert key={alert.id} className={getAlertVariant(alert.type)}>
            <div className="flex gap-3">
              <div className="flex-shrink-0 mt-0.5">
                {getAlertIcon(alert.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-semibold text-sm">{alert.title}</h4>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {alert.timestamp}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {alert.campaign}
                    </Badge>
                  </div>
                </div>
                <AlertDescription className="mt-1 text-sm">
                  {alert.message}
                </AlertDescription>
              </div>
            </div>
          </Alert>
        ))}
      </div>
    </div>
  )
}