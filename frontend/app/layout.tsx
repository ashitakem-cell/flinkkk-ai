import "../app/globals.css"
import AppSidebar from "../components/ui/AppSidebar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-50">
        {/* Sidebar Component */}
        <div className="w-64 flex-shrink-0">
          <AppSidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          <header className="h-16 border-b flex items-center justify-between px-8 bg-white">
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="px-4 py-2 border rounded-md w-64 text-sm"
            />
          </header>
          <main className="p-8">{children}</main>
        </div>
      </body>
    </html>
  )
}