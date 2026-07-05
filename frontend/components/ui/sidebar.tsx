import Link from 'next/link'

export default function AppSidebar() {
  return (
    <div className="w-64 bg-[#0B1221] text-white h-screen p-6 fixed">
      <h1 className="text-2xl font-bold mb-10">Flinkk AI</h1>
      
      <nav className="space-y-4">
        <Link href="/" className="block p-2 hover:bg-gray-800 rounded transition-colors">
          Dashboard
        </Link>
        <Link href="#" className="block p-2 hover:bg-gray-800 rounded transition-colors">
          AI Employees
        </Link>
        <Link href="#" className="block p-2 hover:bg-gray-800 rounded transition-colors">
          Chat with AI
        </Link>
        <Link href="/projects" className="block p-2 hover:bg-gray-800 rounded transition-colors">
          Projects
        </Link>
        <Link href="#" className="block p-2 hover:bg-gray-800 rounded transition-colors">
          Calendar
        </Link>
        <Link href="#" className="block p-2 hover:bg-gray-800 rounded transition-colors">
          Tasks
        </Link>
        <Link href="/team" className="block p-2 hover:bg-gray-800 rounded transition-colors">
          Team
        </Link>
      </nav>

      <div className="absolute bottom-6 left-6">
        <div className="text-sm">
          <p className="font-bold">Ashita</p>
          <p className="text-gray-400">Admin</p>
        </div>
      </div>
    </div>
  )
}