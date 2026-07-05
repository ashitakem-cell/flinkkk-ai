import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-900 text-white p-6 hidden md:block">
          <h1 className="text-xl font-bold mb-8">Flinkk AI</h1>
          <nav className="space-y-4">
            {["Dashboard", "AI Employees", "Chat with AI", "Projects", "Calendar", "Tasks", "Knowledge Base", "Reports", "Integrations", "Team", "Settings"].map((item) => (
              <div key={item} className="cursor-pointer hover:text-blue-400 font-medium">
                {item}
              </div>
            ))}
          </nav>
          {/* Upgrade Section */}
          <div className="mt-auto pt-20">
            <div className="bg-blue-900 p-4 rounded-lg">
              <p className="text-sm">Upgrade Plan</p>
              <button className="bg-blue-600 text-white w-full mt-2 py-1 rounded text-sm">Upgrade Now</button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-50">{children}</main>
      </body>
    </html>
  )
}