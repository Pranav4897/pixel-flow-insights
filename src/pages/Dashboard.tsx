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
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold">Revenue Analytics</h1>
          <div className="flex flex-wrap gap-2">
            {periods.map((period) => (
              <Button
                key={period.value}
                variant={timePeriod === period.value ? "default" : "outline"}
                size="sm"
                onClick={() => setTimePeriod(period.value)}
                className="text-xs sm:text-sm"
              >
                {period.label}
              </Button>
            ))}
          </div>
        </div>
        {/* Welcome Section */}
        <div className="glass-card p-4 sm:p-6 bg-gradient-hero text-white">
          <div className="animate-fade-in">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Welcome back to ADmyBRAND Insights</h1>
            <p className="text-white/80 text-sm sm:text-base lg:text-lg">
              Your campaigns are performing exceptionally well this {timePeriod === 'daily' ? 'day' : timePeriod === 'weekly' ? 'week' : timePeriod === 'monthly' ? 'month' : 'year'}. 
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
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-3">
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
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-semibold">📊 {timePeriod.charAt(0).toUpperCase() + timePeriod.slice(1)} Performance</h4>
                <p className="text-white/90 text-sm">
                  {timePeriod === 'daily' ? 'Today\'s campaigns generated ₹2.8L with 4.8% CTR.' : 
                   timePeriod === 'weekly' ? 'This week\'s campaigns generated ₹18.75L with 4.8% CTR.' :
                   timePeriod === 'monthly' ? 'This month\'s campaigns generated ₹75L with 4.8% CTR.' :
                   'This year\'s campaigns generated ₹900L with 4.8% CTR.'}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">👥 Audience Insights</h4>
                <p className="text-white/90 text-sm">
                  {timePeriod === 'daily' ? 'Today: Millennials (25-34) show 2.2x engagement.' :
                   timePeriod === 'weekly' ? 'This week: iOS users from Tier 1 cities lead engagement.' :
                   timePeriod === 'monthly' ? 'This month: Millennial users from Tier 1 cities engaged 2.2x more.' :
                   'This year: Consistent millennial engagement with highest email CTR at 9.4%.'}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">📈 Traffic Trends</h4>
                <p className="text-white/90 text-sm">
                  {timePeriod === 'daily' ? 'Traffic peaked at 2 PM today with social media boost.' :
                   timePeriod === 'weekly' ? 'Weekly peak on Wednesday with influencer content.' :
                   timePeriod === 'monthly' ? 'Traffic peaked on July 14th with influencer collaboration.' :
                   'Annual peak during festive season with 300% traffic increase.'}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">🗺 Geographic Trends</h4>
                <p className="text-white/90 text-sm">
                  {timePeriod === 'daily' ? 'Mumbai leads today with 35% of conversions.' :
                   timePeriod === 'weekly' ? 'Tier 1 cities dominate weekly conversions.' :
                   timePeriod === 'monthly' ? 'Top conversions from Mumbai, Bengaluru, Delhi this month.' :
                   'Annual growth: 45% from metros, 32% from Tier 2 cities.'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}