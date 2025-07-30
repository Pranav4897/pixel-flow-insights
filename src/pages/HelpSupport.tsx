import { DashboardHeader } from "@/components/dashboard/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  Book, 
  AlertTriangle, 
  CheckCircle,
  RefreshCw,
  Settings,
  BarChart3,
  Users
} from "lucide-react"

export default function HelpSupport() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container px-4 sm:px-6 py-8 space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold">Help & Support</h1>
          <Badge variant="secondary">24/7 Support Available</Badge>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Contact Support */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Contact Support
              </CardTitle>
              <CardDescription>Get direct assistance from our team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Button className="w-full justify-start gap-2 bg-gradient-primary hover:opacity-90">
                  <MessageCircle className="h-4 w-4" />
                  Live Chat
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Mail className="h-4 w-4" />
                  Email Support
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Phone className="h-4 w-4" />
                  Call Support
                </Button>
              </div>
              
              <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                <p className="font-medium">Support Hours:</p>
                <p>Monday - Friday: 9 AM - 9 PM IST</p>
                <p>Saturday - Sunday: 10 AM - 6 PM IST</p>
                <p className="font-medium mt-4">Emergency Support:</p>
                <p>Available 24/7 for critical issues</p>
              </div>
            </CardContent>
          </Card>

          {/* Submit Ticket */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Submit a Support Ticket</CardTitle>
              <CardDescription>Describe your issue and we'll get back to you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Brief description of your issue" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Please provide detailed information about your issue, including steps to reproduce if applicable..."
                  rows={4}
                />
              </div>
              
              <Button className="bg-gradient-primary hover:opacity-90">
                Submit Ticket
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Troubleshooting Guide */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Troubleshooting Guide
            </CardTitle>
            <CardDescription>Common issues and their solutions</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="dashboard-loading">
                <AccordionTrigger className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Dashboard Not Loading or Showing Blank Data
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Quick Fix:</strong> Try refreshing your browser (Ctrl+F5 or Cmd+Shift+R)
                    </AlertDescription>
                  </Alert>
                  <div className="space-y-2 text-sm">
                    <p><strong>Step 1:</strong> Clear browser cache and cookies</p>
                    <p><strong>Step 2:</strong> Disable browser extensions temporarily</p>
                    <p><strong>Step 3:</strong> Check if you're connected to a stable internet connection</p>
                    <p><strong>Step 4:</strong> Try accessing from an incognito/private window</p>
                    <p><strong>Step 5:</strong> If issue persists, contact support with your browser version</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="data-sync">
                <AccordionTrigger className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Data Not Syncing or Outdated Information
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Quick Fix:</strong> Click the refresh button on individual widgets
                    </AlertDescription>
                  </Alert>
                  <div className="space-y-2 text-sm">
                    <p><strong>Step 1:</strong> Check data source connections in Settings</p>
                    <p><strong>Step 2:</strong> Verify API credentials are valid</p>
                    <p><strong>Step 3:</strong> Ensure date ranges are set correctly</p>
                    <p><strong>Step 4:</strong> Check if third-party services (Google Ads, Facebook) are accessible</p>
                    <p><strong>Step 5:</strong> Contact support if data is missing for more than 2 hours</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="permissions">
                <AccordionTrigger className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Permission Errors or Access Denied
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Quick Fix:</strong> Log out and log back in to refresh permissions
                    </AlertDescription>
                  </Alert>
                  <div className="space-y-2 text-sm">
                    <p><strong>Step 1:</strong> Verify your account role and permissions with admin</p>
                    <p><strong>Step 2:</strong> Check if your session has expired</p>
                    <p><strong>Step 3:</strong> Clear browser storage and re-login</p>
                    <p><strong>Step 4:</strong> Contact admin to verify account status</p>
                    <p><strong>Step 5:</strong> If you're an admin, check user management settings</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="performance">
                <AccordionTrigger className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Slow Performance or Timeouts
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Quick Fix:</strong> Reduce date range and limit active widgets
                    </AlertDescription>
                  </Alert>
                  <div className="space-y-2 text-sm">
                    <p><strong>Step 1:</strong> Check your internet connection speed</p>
                    <p><strong>Step 2:</strong> Close unnecessary browser tabs</p>
                    <p><strong>Step 3:</strong> Try using a different browser</p>
                    <p><strong>Step 4:</strong> Reduce the number of widgets displayed</p>
                    <p><strong>Step 5:</strong> Contact support if issues persist on multiple devices</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Resources */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                Documentation & Guides
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                Getting Started Guide
              </Button>
              <Button variant="outline" className="w-full justify-start">
                API Documentation
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Video Tutorials
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Best Practices
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Status</CardTitle>
              <CardDescription>Current status of all services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Dashboard Services</span>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Operational
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Data Sync</span>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Operational
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">API Services</span>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Operational
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Support System</span>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Operational
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}