'use client'
import { useState } from 'react';

export default function RecruitAIPage() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const uploadResume = async () => {
    if (!file) return alert("Pehle file select karo!");
    
    const formData = new FormData();
    formData.append('resume', file);

    try {
      const res = await fetch('http://localhost:5000/api/recruit/upload-resume', { 
        method: 'POST',
        body: formData 
      });
      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert("Error: Backend se connect nahi ho paya.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">RecruitAI: Upload Resume</h1>
        
        <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-xl">
          <input type="file" onChange={handleFileChange} className="mb-6 block" />
          
          <button 
            onClick={uploadResume}
            className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all"
          >
            Start Screening
          </button>
        </div>
      </div>
    </div>
  );
}