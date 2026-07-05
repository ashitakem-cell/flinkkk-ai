export default function AIEmployeeCard({ name, role, status, avatar }: { name: string, role: string, status: string, avatar: string }) {
  return (
    <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        {/* AI Avatar */}
        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-lg">
          {avatar}
        </div>
        
        {/* Info */}
        <div className="flex-1">
          <h3 className="font-bold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>

        {/* Status Badge */}
        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
          status === "Active" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
        }`}>
          {status}
        </span>
      </div>
    </div>
  )
}