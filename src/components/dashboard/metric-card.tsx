import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface MetricCardProps {
  title: string
  value: string
  change?: {
    value: string
    trend: "up" | "down"
  }
  icon: LucideIcon
  className?: string
  description?: string
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  className,
  description 
}: MetricCardProps) {
  return (
    <div className={cn("metric-card group", className)}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-card-foreground">{value}</p>
          </div>
        </div>
        
        {change && (
          <div className={cn(
            "flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium",
            change.trend === "up" 
              ? "bg-success/10 text-success" 
              : "bg-destructive/10 text-destructive"
          )}>
            <span className={cn(
              "text-xs",
              change.trend === "up" ? "text-success" : "text-destructive"
            )}>
              {change.trend === "up" ? "↗" : "↘"}
            </span>
            {change.value}
          </div>
        )}
      </div>
      
      {description && (
        <p className="mt-3 text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  )
}