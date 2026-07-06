'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AppSidebar() {
  const pathname = usePathname()

  const navLinks = [
    { name: 'Dashboard', path: '/' },
    { name: 'RecruitAI', path: '/recruit-ai' },
    { name: 'AI Employees', path: '/ai-employees' },
    { name: 'Chat with AI', path: '/chat' },
    { name: 'Projects', path: '/projects' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'Tasks', path: '/tasks' },
    { name: 'Team', path: '/team' },
  ]

  return (
    <div className="w-64 bg-[#0B1221] text-white h-screen p-6 fixed left-0 top-0">
      <h1 className="text-2xl font-bold mb-10">Flinkk AI</h1>
      
      <nav className="space-y-2">
        {navLinks.map((link) => {
          const isActive = pathname === link.path
          return (
            <Link 
              key={link.path}
              href={link.path} 
              className={`block p-3 rounded-lg transition-colors ${
                isActive ? 'bg-gray-800 border-l-4 border-white' : 'hover:bg-gray-800'
              }`}
            >
              {link.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}