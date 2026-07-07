'use client'
import { useState } from 'react';

export default function RecruitAIPage() {
  const [file, setFile] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState<string>(''); // Text store karne ke liye

  const uploadResume = async () => {
    if (!file) return alert("Pehle file select karo!");
    
    const formData = new FormData();
    formData.append('resume', file);

    const baseUrl = window.location.origin.replace('-3000', '-5000');

    try {
      const res = await fetch(`${baseUrl}/api/recruit/upload-resume`, { 
        method: 'POST',
        body: formData 
      });
      
      const data = await res.json();
      setResumeText(data.text); // Text ko state mein save kiya
      alert("Resume parsed successfully!");
    } catch (error) {
      alert("Error: Connection failed!");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">RecruitAI - Resume Screening</h1>
      
      <div className="bg-white p-6 rounded-xl border shadow-sm max-w-lg mb-6">
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

      {/* Resume Text Display Area */}
      {resumeText && (
        <div className="bg-gray-100 p-6 rounded-xl border max-w-2xl">
          <h2 className="font-bold mb-2">Parsed Resume Text:</h2>
          <pre className="whitespace-pre-wrap text-sm text-gray-700">{resumeText}</pre>
        </div>
      )}
    </div>
  );
}