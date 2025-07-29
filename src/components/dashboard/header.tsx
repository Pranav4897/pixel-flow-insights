import { Bell, Search, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-sm font-bold text-white">AD</span>
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">ADmyBRAND</h1>
              <p className="text-xs text-muted-foreground">Insights</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search campaigns, clients..."
              className="pl-10 bg-card/50 border-border/40"
            />
          </div>
          
          <Button variant="outline" size="icon" className="relative border-border/40 bg-card/50">
            <Bell className="h-4 w-4" />
            <Badge 
              variant="destructive" 
              className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
            >
              3
            </Badge>
          </Button>
          
          <ThemeToggle />
          
          <Button variant="outline" size="icon" className="border-border/40 bg-card/50">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}