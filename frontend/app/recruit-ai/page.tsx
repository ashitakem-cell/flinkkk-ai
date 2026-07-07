'use client'
import { useState } from 'react';

export default function RecruitAIPage() {
  const [file, setFile] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const uploadResume = async () => {
    if (!file) return alert("Pehle file select karo!");
    setLoading(true);

    const formData = new FormData();
    formData.append('resume', file);

    const baseUrl = window.location.origin.replace('-3000', '-5000');

    try {
      const res = await fetch(`${baseUrl}/api/recruit/upload-resume`, { 
        method: 'POST',
        body: formData 
      });
      
      const data = await res.json();
      
      if (res.ok && data.success) {
        setResumeText(data.text);
      } else {
        alert("Error: " + (data.message || "Failed"));
      }
    } catch (error) {
      alert("Backend connection failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">RecruitAI - Parser</h1>
      <div className="bg-white p-6 rounded-xl border shadow-sm max-w-lg mb-6">
        <input type="file" onChange={(e) => e.target.files && setFile(e.target.files[0])} className="mb-4 block w-full" />
        <button onClick={uploadResume} disabled={loading} className="bg-black text-white py-2.5 px-4 rounded-lg">
          {loading ? "Parsing..." : "Screen Resume"}
        </button>
      </div>

      {resumeText && (
        <div className="bg-gray-50 p-6 rounded-xl border">
          <h2 className="font-bold mb-2">Parsed Text:</h2>
          <pre className="whitespace-pre-wrap text-sm">{resumeText.substring(0, 1000)}...</pre>
        </div>
      )}
    </div>
  );
}