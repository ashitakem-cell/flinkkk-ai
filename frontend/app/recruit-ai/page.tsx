'use client'
import { useState } from 'react';

export default function RecruitAIPage() {
  const [file, setFile] = useState<File | null>(null);

  const uploadResume = async () => {
    if (!file) return alert("Pehle file select karo!");
    
    const formData = new FormData();
    formData.append('resume', file);

    // Ye trick Codespaces ke URL se 3000 hata kar 5000 laga degi
    const baseUrl = window.location.origin.replace('-3000', '-5000');

    try {
      const res = await fetch(`${baseUrl}/api/recruit/upload-resume`, { 
        method: 'POST',
        body: formData 
      });
      
      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert("Error: Backend se connect nahi ho paya!");
    }
  };

  return (
    <div className="p-8">
      <input type="file" onChange={(e) => e.target.files && setFile(e.target.files[0])} />
      <button onClick={uploadResume} className="bg-black text-white p-2">Screen Resume</button>
    </div>
  );
}