import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="p-8 grid grid-cols-12 gap-8">
      {/* Main Content (Left Side) */}
      <div className="col-span-8">
        <h1 className="text-3xl font-bold mb-8">Good morning, Ashita! 👋</h1>
        
        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl border">
            <p className="text-xs text-gray-500">Tasks Completed</p>
            <h3 className="text-xl font-bold">128</h3>
          </div>
          <div className="bg-white p-4 rounded-xl border">
            <p className="text-xs text-gray-500">Hours Saved</p>
            <h3 className="text-xl font-bold">56.4</h3>
          </div>
          <div className="bg-white p-4 rounded-xl border">
            <p className="text-xs text-gray-500">Candidates</p>
            <h3 className="text-xl font-bold">342</h3>
          </div>
          <div className="bg-white p-4 rounded-xl border">
            <p className="text-xs text-gray-500">Leads</p>
            <h3 className="text-xl font-bold">627</h3>
          </div>
        </div>

        {/* AI Employees */}
        <h2 className="text-lg font-bold mb-4">Your AI Employees</h2>
        <div className="grid grid-cols-3 gap-4">
          {["RecruitAI", "InsightAI", "SalesPilot"].map((name) => (
            <div key={name} className="bg-white p-4 rounded-xl border">
              <div className="w-10 h-10 bg-blue-100 rounded-full mb-3"></div>
              <h3 className="font-bold">{name}</h3>
              <p className="text-xs text-gray-500">Active</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Widgets (Right Side) */}
      <div className="col-span-4 space-y-6">
        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl border">
          <h2 className="font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <p className="text-sm">RecruitAI: Screened 24 resumes</p>
            <p className="text-sm">InsightAI: Generated report</p>
            <p className="text-sm">SalesPilot: Contacted 18 leads</p>
          </div>
        </div>

        {/* My Tasks */}
        <div className="bg-white p-6 rounded-xl border">
          <h2 className="font-bold mb-4">My Tasks</h2>
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> Review PM candidates
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> Analyze Q1 sales
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}