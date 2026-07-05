export default function AppSidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white h-screen p-6 flex flex-col">
      <h1 className="text-xl font-bold mb-8">Flinkk AI</h1>
      <nav className="space-y-4">
        {["Dashboard", "AI Employees", "Chat with AI", "Projects", "Calendar", "Tasks", "Knowledge Base", "Reports", "Integrations", "Team", "Settings"].map((item) => (
          <div key={item} className="cursor-pointer hover:text-blue-400 font-medium transition-colors">
            {item}
          </div>
        ))}
      </nav>
      
      <div className="mt-auto pt-6 border-t border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold">A</div>
          <div>
            <p className="text-sm font-bold">Ashita Sharma</p>
            <p className="text-xs text-slate-400">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}