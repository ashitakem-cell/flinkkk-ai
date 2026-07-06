'use client'
import { useState } from 'react';

export default function RecruitAIPage() {
  const [file, setFile] = useState<File | null>(null);

  const uploadResume = async () => {
    if (!file) return alert("Kripya pehle resume file select karein.");
    
    // Yahan hum file ko backend par bhejenge
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
      alert("Error: Backend se connection nahi ho paya.");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">RecruitAI - Resume Screening</h1>
      
      <div className="bg-white p-6 rounded-xl border shadow-sm max-w-lg">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Candidate Resume Upload karein
        </label>
        <input 
          type="file" 
          onChange={(e) => e.target.files && setFile(e.target.files[0])}
          className="block w-full text-sm text-gray-500 mb-4 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        
        <button 
          onClick={uploadResume}
          className="w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Screen Resume
        </button>
      </div>
    </div>
  );
}