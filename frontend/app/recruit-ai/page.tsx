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
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">RecruitAI: Resume Screening</h1>
      <button 
        onClick={testConnection}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Test Backend Connection
      </button>
    </div>
  );
}