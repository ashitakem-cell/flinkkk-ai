import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Good morning, Ashita! 👋</h1>
        <p className="text-muted-foreground">Your AI team is ready to help you grow your business.</p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Main Content (Left + Center Columns - 8 parts) */}
        <div className="col-span-8 space-y-8">
          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Tasks Completed", value: "128" },
              { title: "Hours Saved", value: "56.4" },
              { title: "Candidates Processed", value: "342" },
              { title: "Leads Contacted", value: "627" },
            ].map((stat, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <h2 className="text-3xl font-bold">{stat.value}</h2>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* AI Employees */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Your AI Employees</h2>
              <Sheet>
                <SheetTrigger className="text-sm text-blue-600 hover:underline">Manage Team →</SheetTrigger>
                <SheetContent>
                  <SheetHeader><SheetTitle>Manage AI Employees</SheetTitle></SheetHeader>
                  <div className="mt-6 space-y-4">
                    {["RecruitAI", "InsightAI", "SalesPilot"].map((name) => (
                      <div key={name} className="flex justify-between items-center p-4 border rounded-lg">
                        <span>{name}</span>
                        <Switch defaultChecked />
                      </div>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {["RecruitAI", "InsightAI", "SalesPilot"].map((name) => (
                <Card key={name}>
                  <CardContent className="p-4 space-y-2">
                    <div className="w-12 h-12 bg-gray-200 rounded-full" />
                    <p className="font-medium">{name}</p>
                    <Badge variant="secondary">Active</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity (Right Column - 4 parts) */}
        <div className="col-span-4">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {["RecruitAI screened 5 resumes", "InsightAI generated report", "SalesPilot contacted leads"].map((act, i) => (
                  <div key={i} className="p-4 text-sm">{act}</div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}