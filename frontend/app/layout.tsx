export default function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 text-white p-6 h-screen">
      <h1 className="text-xl font-bold mb-8">Flinkk AI</h1>
      <nav className="space-y-4">
        {["Dashboard", "AI Employees", "Chat with AI", "Projects", "Calendar", "Tasks", "Knowledge Base", "Reports", "Integrations", "Team", "Settings"].map((item) => (
          <div key={item} className="cursor-pointer hover:text-blue-400">{item}</div>
        ))}
      </nav>
      {/* Upgrade Section */}
      <div className="mt-auto pt-20">
        <div className="bg-blue-900 p-4 rounded-lg">
          <p className="text-sm">Upgrade Plan</p>
          <button className="bg-blue-600 text-white w-full mt-2 py-1 rounded">Upgrade Now</button>
        </div>
      </div>
    </div>
  )
}