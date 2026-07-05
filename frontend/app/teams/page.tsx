export default function TeamPage() {
  const employees = [
    { name: "RecruitAI", role: "HR Specialist", status: "Active", lastActive: "2 mins ago" },
    { name: "SalesPilot", role: "Lead Gen", status: "Active", lastActive: "5 mins ago" },
    { name: "DataInsight", role: "Analyst", status: "Busy", lastActive: "1 hour ago" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Manage AI Team</h1>
      
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 font-semibold text-gray-700">Name</th>
              <th className="p-4 font-semibold text-gray-700">Role</th>
              <th className="p-4 font-semibold text-gray-700">Status</th>
              <th className="p-4 font-semibold text-gray-700">Last Active</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">{emp.name}</td>
                <td className="p-4 text-gray-600">{emp.role}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    emp.status === "Active" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {emp.status}
                  </span>
                </td>
                <td className="p-4 text-gray-500 text-sm">{emp.lastActive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}