import { Users, MapPin, Smartphone, Clock } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { formatPercentage } from "@/lib/utils/currency"

const audienceData = {
  demographics: [
    { age: "25-34", percentage: 35, count: "87,500" },
    { age: "35-44", percentage: 28, count: "70,000" },
    { age: "18-24", percentage: 20, count: "50,000" },
    { age: "45-54", percentage: 12, count: "30,000" },
    { age: "55+", percentage: 5, count: "12,500" }
  ],
  locations: [
    { city: "Mumbai", percentage: 25, conversions: "4.2%" },
    { city: "Bengaluru", percentage: 22, conversions: "3.8%" },
    { city: "Delhi", percentage: 18, conversions: "3.5%" },
    { city: "Jaipur", percentage: 15, conversions: "2.1%" },
    { city: "Chennai", percentage: 20, conversions: "3.9%" }
  ],
  devices: [
    { type: "Mobile (iOS)", percentage: 45, engagement: "9.4%" },
    { type: "Mobile (Android)", percentage: 35, engagement: "7.2%" },
    { type: "Desktop", percentage: 15, engagement: "5.8%" },
    { type: "Tablet", percentage: 5, engagement: "6.1%" }
  ],
  behavior: [
    { time: "9-11 AM", engagement: 85 },
    { time: "12-2 PM", engagement: 92 },
    { time: "6-8 PM", engagement: 78 },
    { time: "9-11 PM", engagement: 68 }
  ]
}

export function AudienceInsights() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Demographics */}
      <div className="metric-card">
        <div className="mb-4 flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          <div>
            <h3 className="font-semibold">Age Demographics</h3>
            <p className="text-sm text-muted-foreground">User distribution by age group</p>
          </div>
        </div>
        
        <div className="space-y-3">
          {audienceData.demographics.map((demo) => (
            <div key={demo.age} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{demo.age} years</span>
                <span className="text-muted-foreground">{demo.count} users</span>
              </div>
              <Progress value={demo.percentage} className="h-2" />
              <p className="text-xs text-muted-foreground">
                {formatPercentage(demo.percentage)} of total audience
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Geographic Distribution */}
      <div className="metric-card">
        <div className="mb-4 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          <div>
            <h3 className="font-semibold">Top Locations</h3>
            <p className="text-sm text-muted-foreground">Performance by city</p>
          </div>
        </div>
        
        <div className="space-y-3">
          {audienceData.locations.map((location) => (
            <div key={location.city} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{location.city}</span>
                <span className="text-muted-foreground">
                  {location.conversions} conv. rate
                </span>
              </div>
              <Progress value={location.percentage} className="h-2" />
              <p className="text-xs text-muted-foreground">
                {formatPercentage(location.percentage)} of total traffic
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Device & Platform */}
      <div className="metric-card">
        <div className="mb-4 flex items-center gap-2">
          <Smartphone className="h-5 w-5 text-primary" />
          <div>
            <h3 className="font-semibold">Device Usage</h3>
            <p className="text-sm text-muted-foreground">Platform engagement rates</p>
          </div>
        </div>
        
        <div className="space-y-3">
          {audienceData.devices.map((device) => (
            <div key={device.type} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{device.type}</span>
                <span className="text-muted-foreground">
                  {device.engagement} CTR
                </span>
              </div>
              <Progress value={device.percentage} className="h-2" />
              <p className="text-xs text-muted-foreground">
                {formatPercentage(device.percentage)} of total sessions
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Peak Hours */}
      <div className="metric-card">
        <div className="mb-4 flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          <div>
            <h3 className="font-semibold">Peak Engagement Hours</h3>
            <p className="text-sm text-muted-foreground">Best times to reach your audience</p>
          </div>
        </div>
        
        <div className="space-y-3">
          {audienceData.behavior.map((time) => (
            <div key={time.time} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{time.time}</span>
                <span className="text-muted-foreground">
                  {time.engagement}% engagement
                </span>
              </div>
              <Progress value={time.engagement} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}