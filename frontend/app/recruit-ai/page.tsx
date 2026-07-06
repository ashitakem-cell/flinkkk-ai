'use client'
import { useState } from 'react';

export default function RecruitAIPage() {
  const [file, setFile] = useState<File | null>(null);

  const uploadResume = async () => {
    if (!file) return alert("Pehle file select karo!");
    
    const formData = new FormData();
    formData.append('resume', file);

    // Dynamic URL for Codespaces
    const backendUrl = window.location.origin.replace('-3000', '-5000');

    try {
      const res = await fetch(`${backendUrl}/api/recruit/upload-resume`, { 
        method: 'POST',
        body: formData 
      });
      
      if (!res.ok) throw new Error('Network response was not ok');
      
      const data = await res.json();
      alert(data.message);
    } catch (error) {
      console.error(error);
      alert("Error: Backend se connection nahi ho paya!");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">RecruitAI - Resume Screening</h1>
      <div className="bg-white p-6 rounded-xl border shadow-sm max-w-lg">
        <input 
          type="file" 
          onChange={(e) => e.target.files && setFile(e.target.files[0])}
          className="mb-4 block w-full"
        />
        <button 
          onClick={uploadResume}
          className="w-full bg-black text-white py-2.5 rounded-lg font-medium"
        >
          Screen Resume
        </button>
      </div>
    </div>
  );
}