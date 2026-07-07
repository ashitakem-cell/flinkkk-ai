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
        throw new Error(data.message || "Failed to parse");
      }
    } catch (error) {
      console.error(error);
      alert("Error: " + (error instanceof Error ? error.message : "Parsing failed!"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">RecruitAI: Resume Parser</h1>
      
      <div className="bg-white p-6 rounded-xl border shadow-sm max-w-lg mb-6">
        <input 
          type="file" 
          onChange={(e) => e.target.files && setFile(e.target.files[0])}
          className="mb-4 block w-full"
        />
        <button 
          onClick={uploadResume}
          disabled={loading}
          className="w-full bg-black text-white py-2.5 rounded-lg font-medium"
        >
          {loading ? "Parsing..." : "Screen Resume"}
        </button>
      </div>

      {resumeText && (
        <div className="bg-gray-50 p-6 rounded-lg border">
          <h2 className="font-bold mb-2">Extracted Text:</h2>
          <pre className="whitespace-pre-wrap text-sm">{resumeText.substring(0, 1000)}...</pre>
        </div>
      )}
    </div>
  );
}