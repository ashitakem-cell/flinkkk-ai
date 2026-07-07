'use client'
import { useState } from 'react';

export default function RecruitAIPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const uploadResume = async () => {
    if (!file) return alert("Pehle file select karo!");
    setLoading(true);

    const formData = new FormData();
    formData.append('resume', file);

    // Dynamic URL
    const baseUrl = window.location.origin.replace('-3000', '-5000');

    try {
      const res = await fetch(`${baseUrl}/api/recruit/upload-resume`, { 
        method: 'POST',
        body: formData 
      });
      
      const data = await res.json();
      if (res.ok && data.success) {
        alert("Success! Text extract ho gaya.");
        console.log("Parsed text:", data.text);
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Backend connection failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">RecruitAI</h1>
      <input type="file" onChange={(e) => e.target.files && setFile(e.target.files[0])} />
      <button 
        onClick={uploadResume} 
        disabled={loading}
        className="bg-black text-white px-4 py-2 mt-4 block rounded"
      >
        {loading ? "Parsing..." : "Screen Resume"}
      </button>
    </div>
  );
}