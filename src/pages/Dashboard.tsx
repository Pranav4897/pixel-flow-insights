import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard/header"
import { OverviewCards, EngagementMetrics } from "@/components/dashboard/overview-cards"
import { CampaignTable } from "@/components/dashboard/campaign-table"
import { AlertsPanel } from "@/components/dashboard/alerts-panel"
import { AudienceInsights } from "@/components/dashboard/audience-insights"
import { BudgetTracker } from "@/components/dashboard/budget-tracker"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  const [timePeriod, setTimePeriod] = useState("monthly")
  const periods = [
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container px-6 py-8 space-y-8">
        {/* Time Period Filter */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Revenue Analytics</h1>
          <div className="flex gap-2">
            {periods.map((period) => (
              <Button
                key={period.value}
                variant={timePeriod === period.value ? "default" : "outline"}
                size="sm"
                onClick={() => setTimePeriod(period.value)}
              >
                {period.label}
              </Button>
            ))}
          </div>
        </div>
        {/* Welcome Section */}
        <div className="glass-card p-6 bg-gradient-hero text-white">
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">Welcome back to ADmyBRAND Insights</h1>
            <p className="text-white/80 text-lg">
              Your campaigns are performing exceptionally well this month. 
              Here's your comprehensive marketing overview.
            </p>
          </div>
        </div>

        {/* Key Metrics Overview */}
        <section className="animate-slide-up">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Revenue & Performance Overview</h2>
            <p className="text-muted-foreground">Key metrics across all campaigns and channels</p>
          </div>
          <OverviewCards />
        </section>

        {/* Engagement Metrics */}
        <section className="animate-slide-up">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Engagement & Reach Metrics</h2>
            <p className="text-muted-foreground">User interaction and campaign reach statistics</p>
          </div>
          <EngagementMetrics />
        </section>

        {/* Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Campaign Table */}
          <div className="lg:col-span-2 animate-slide-up">
            <CampaignTable />
          </div>

          {/* Right Column - Alerts */}
          <div className="animate-slide-up">
            <AlertsPanel />
          </div>
        </div>

        {/* Budget Tracking */}
        <section className="animate-slide-up">
          <BudgetTracker />
        </section>

        {/* Audience Insights */}
        <section className="animate-slide-up">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Audience Demographics & Insights</h2>
            <p className="text-muted-foreground">
              Understanding your audience for better targeting and engagement
            </p>
          </div>
          <AudienceInsights />
        </section>

        {/* Summary Insights */}
        <section className="animate-slide-up">
          <div className="metric-card bg-gradient-primary text-white">
            <h3 className="text-xl font-bold mb-4">Key Insights & Recommendations</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-semibold">📊 Campaign Performance</h4>
                <p className="text-white/90 text-sm">
                  Google Ads generated ₹18.75L revenue with 4.8% CTR and 3.1% conversion rate. 
                  Facebook shows higher CTR (5.3%) but lower conversion (2.4%).
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">👥 Audience Engagement</h4>
                <p className="text-white/90 text-sm">
                  Millennial users (25-34) from Tier 1 cities using iOS devices engaged 2.2x more 
                  with highest email CTR at 9.4%.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">📈 Traffic Trends</h4>
                <p className="text-white/90 text-sm">
                  Traffic peaked on July 14th with influencer collaboration. 
                  Consider retargeting push to sustain 18% visitor decline.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">🗺 Geographic Performance</h4>
                <p className="text-white/90 text-sm">
                  Top conversions from Mumbai, Bengaluru, Delhi. 
                  Jaipur shows high engagement but low conversion - check localization.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}