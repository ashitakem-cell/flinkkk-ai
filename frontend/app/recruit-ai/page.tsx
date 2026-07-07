'use client'
import { useState } from 'react';

export default function RecruitAIPage() {
  const [file, setFile] = useState<File | null>(null);

  const uploadResume = async () => {
    if (!file) return alert("Pehle file select karo!");
    
    const formData = new FormData();
    formData.append('resume', file);

    // Dynamic URL handling for Codespaces
    // Yeh check karta hai ki kya hum 3000 par hain, agar haan, toh 5000 par request bhejta hai
    const currentOrigin = window.location.origin;
    const backendUrl = currentOrigin.includes('-3000') 
      ? currentOrigin.replace('-3000', '-5000') 
      : 'http://localhost:5000'; // Fallback for local development

    try {
      const res = await fetch(`${backendUrl}/api/recruit/upload-resume`, { 
        method: 'POST',
        body: formData 
      });
      
      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }
      
      const data = await res.json();
      alert(data.message);
    } catch (error) {
      console.error("Connection error:", error);
      alert("Error: Backend se connection nahi ho paya! Check karo ki server chal raha hai.");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">RecruitAI - Resume Screening</h1>
      <div className="bg-white p-6 rounded-xl border shadow-sm max-w-lg">
        <label className="block mb-2 text-sm font-medium">Upload Resume (PDF)</label>
        <input 
          type="file" 
          accept=".pdf"
          onChange={(e) => e.target.files && setFile(e.target.files[0])}
          className="mb-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
        />
        <button 
          onClick={uploadResume}
          className="w-full bg-black text-white py-2.5 rounded-lg font-medium transition hover:bg-gray-800"
        >
          Screen Resume
        </button>
      </div>
    </div>
  );
}