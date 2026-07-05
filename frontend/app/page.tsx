import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8">
      {/* Heading Section */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Good morning, Ashita! 👋</h1>
        <p className="text-muted-foreground">Your AI team is ready to help you grow your business.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: "Tasks Completed", value: "128", trend: "+18% from last week" },
          { title: "Hours Saved", value: "56.4", trend: "+24% from last week" },
          { title: "Candidates Processed", value: "342", trend: "+22% from last week" },
          { title: "Leads Contacted", value: "627", trend: "+15% from last week" },
        ].map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
              <h2 className="text-3xl font-bold mt-2">{stat.value}</h2>
              <p className="text-xs text-green-500 mt-1">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Employees Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Your AI Employees</h2>
          <Sheet>
            <SheetTrigger className="text-sm text-blue-600 hover:underline">Manage Team →</SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Manage AI Employees</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                {["RecruitAI", "InsightAI", "SalesPilot"].map((name) => (
                  <div key={name} className="flex justify-between items-center p-4 border rounded-lg">
                    <span className="font-medium">{name}</span>
                    <Switch defaultChecked />
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { name: "RecruitAI", role: "HR Specialist", status: "Active" },
            { name: "InsightAI", role: "Data Analyst", status: "Active" },
            { name: "SalesPilot", role: "Sales Assistant", status: "Active" },
          ].map((agent, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{agent.name}</CardTitle>
                <Badge variant="secondary" className="bg-green-100 text-green-700">● {agent.status}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">{agent.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Activity</h2>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {[
                { activity: "RecruitAI screened 5 new resumes", time: "2 min ago" },
                { activity: "InsightAI generated Q2 report", time: "1 hour ago" },
                { activity: "SalesPilot followed up with 12 leads", time: "3 hours ago" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between p-4 hover:bg-slate-50">
                  <p className="text-sm font-medium">{item.activity}</p>
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}