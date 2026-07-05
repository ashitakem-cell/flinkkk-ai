import AIEmployeeCard from "../components/ui/AIEmployeeCard"

export default function Dashboard() {
  return (
    <div className="p-8">
      {/* Welcome Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Good morning, Ashita! 👋</h1>
        <p className="text-gray-600 mt-2">Your AI team is ready to help you grow your business.</p>
      </div>

      {/* Stats Section (Dummy) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500">Tasks Completed</p>
          <h3 className="text-2xl font-bold">128</h3>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500">Hours Saved</p>
          <h3 className="text-2xl font-bold">56.4</h3>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500">Candidates Processed</p>
          <h3 className="text-2xl font-bold">342</h3>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500">Leads Contacted</p>
          <h3 className="text-2xl font-bold">627</h3>
        </div>
      </div>

      {/* Your AI Employees Section */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Your AI Employees</h2>
          <button className="text-blue-600 text-sm font-medium hover:underline">Manage Team →</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AIEmployeeCard name="RecruitAI" role="HR Specialist" status="Active" avatar="R" />
          <AIEmployeeCard name="SalesPilot" role="Lead Gen" status="Active" avatar="S" />
          <AIEmployeeCard name="DataInsight" role="Analyst" status="Busy" avatar="D" />
        </div>
      </div>
    </div>
  )
}