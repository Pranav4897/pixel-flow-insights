import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { formatINR, formatPercentage } from "@/lib/utils/currency"

const campaigns = [
  {
    id: 1,
    name: "Summer Sale 2024",
    platform: "Google Ads",
    status: "Active",
    budget: 250000,
    spent: 187500,
    impressions: 2500000,
    clicks: 125000,
    conversions: 3875,
    ctr: 5.0,
    roas: 4.8
  },
  {
    id: 2,
    name: "Brand Awareness",
    platform: "Facebook",
    status: "Active",
    budget: 150000,
    spent: 98000,
    impressions: 1800000,
    clicks: 95400,
    conversions: 2291,
    ctr: 5.3,
    roas: 3.2
  },
  {
    id: 3,
    name: "Product Launch",
    platform: "Instagram",
    status: "Paused",
    budget: 200000,
    spent: 168000,
    impressions: 1200000,
    clicks: 48000,
    conversions: 1440,
    ctr: 4.0,
    roas: 2.8
  },
  {
    id: 4,
    name: "LinkedIn Lead Gen",
    platform: "LinkedIn",
    status: "Active",
    budget: 100000,
    spent: 45000,
    impressions: 450000,
    clicks: 13500,
    conversions: 675,
    ctr: 3.0,
    roas: 6.2
  }
]

export function CampaignTable() {
  return (
    <div className="metric-card">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Campaign Performance</h3>
        <p className="text-sm text-muted-foreground">Detailed metrics for all active campaigns</p>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Campaign</TableHead>
              <TableHead>Platform</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Budget Progress</TableHead>
              <TableHead>CTR</TableHead>
              <TableHead>Conversions</TableHead>
              <TableHead>ROAS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaigns.map((campaign) => {
              const spentPercentage = (campaign.spent / campaign.budget) * 100
              const statusColor = campaign.status === "Active" 
                ? "bg-success/10 text-success" 
                : "bg-warning/10 text-warning"
              
              return (
                <TableRow key={campaign.id}>
                  <TableCell className="font-medium">
                    <div>
                      <p className="font-semibold">{campaign.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {campaign.impressions.toLocaleString()} impressions
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{campaign.platform}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={statusColor}>
                      {campaign.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{formatINR(campaign.spent)}</span>
                        <span className="text-muted-foreground">
                          {formatINR(campaign.budget)}
                        </span>
                      </div>
                      <Progress value={spentPercentage} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        {formatPercentage(spentPercentage)} spent
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">{formatPercentage(campaign.ctr)}</span>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{campaign.conversions.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatPercentage((campaign.conversions / campaign.clicks) * 100)} conv. rate
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`font-bold ${
                      campaign.roas >= 4 ? "text-success" : 
                      campaign.roas >= 3 ? "text-warning" : "text-destructive"
                    }`}>
                      {campaign.roas}x
                    </span>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}