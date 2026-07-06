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
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">RecruitAI</h1>
          <p className="text-gray-500 mt-2">Resume screening aur candidate management simplified.</p>
        </div>

        {/* Main Action Card */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Upload New Resume</h2>
          <p className="text-sm text-gray-600 mb-6">
            System check karne ke liye niche click karein. Backend response screen par dikhega.
          </p>
          
          <button 
            onClick={testConnection}
            className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all shadow-md active:scale-95"
          >
            Test Backend Connection
          </button>
        </div>
      </div>
    </div>
  );
}