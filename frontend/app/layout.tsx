import "../app/globals.css"
import AppSidebar from "../components/ui/AppSidebar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        <AppSidebar />
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <header className="h-16 border-b flex items-center px-8 bg-white">
            <input type="text" placeholder="Search..." className="px-4 py-2 border rounded-md text-sm w-64" />
          </header>
          <div className="p-8">{children}</div>
        </main>
      </body>
    </html>
  )
}