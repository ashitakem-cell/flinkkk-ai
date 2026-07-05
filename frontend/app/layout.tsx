import "./globals.css"
import AppSidebar from "@/components/ui/AppSidebar" // Tumhari existing file use kar rahe hain

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        {/* Sidebar Component */}
        <AppSidebar />

        {/* Main Content */}
        <main className="flex-1 bg-gray-50">
          {/* Yahan hum TopBar ka content directly daal rahe hain */}
          <header className="h-16 border-b flex items-center justify-between px-8 bg-white">
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="px-4 py-2 border rounded-md w-64 text-sm"
            />
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium cursor-pointer hover:underline">What's New</span>
              <div className="w-8 h-8 bg-gray-200 rounded-full" />
            </div>
          </header>
          
          <div className="p-8">{children}</div>
        </main>
      </body>
    </html>
  )
}