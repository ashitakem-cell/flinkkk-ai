'use client'

export default function RecruitAIPage() {
  const testConnection = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/recruit/upload-resume', { 
        method: 'POST' 
      });
      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert("Backend se connect nahi ho paya. Check karo ki node server.js chal raha hai ya nahi.");
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">RecruitAI</h1>
        <p className="text-gray-500 mt-2">Resume screening aur candidate management simplified.</p>
      </div>

      {/* Main Action Card */}
      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Upload New Resume</h2>
        <p className="text-sm text-gray-600 mb-6">
          System check karne ke liye niche click karein. Backend response screen par dikhega.
        </p>
        
        <button 
          onClick={testConnection}
          className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-2"
        >
          {/* Icon placeholder (optional) */}
          <span>Test Backend Connection</span>
        </button>
      </div>
    </div>
  );
}