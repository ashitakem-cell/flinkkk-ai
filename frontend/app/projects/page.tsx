export default function ProjectsPage() {
  const projects = [
    { name: "Recruitment Drive Q3", status: "Active", progress: 75, lead: "RecruitAI" },
    { name: "Sales Outreach Pipeline", status: "In Progress", progress: 45, lead: "SalesPilot" },
    { name: "Market Data Analysis", status: "Completed", progress: 100, lead: "InsightAI" },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex justify-between mb-4">
              <h3 className="font-bold text-lg">{project.name}</h3>
              <span className={`text-xs px-2 py-1 rounded ${
                project.status === "Completed" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
              }`}>
                {project.status}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-4">Managed by: {project.lead}</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
            </div>
            <p className="text-right text-xs mt-1 font-medium">{project.progress}%</p>
          </div>
        ))}
      </div>
    </div>
  )
}