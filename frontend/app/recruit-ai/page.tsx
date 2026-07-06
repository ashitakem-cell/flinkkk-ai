'use client'
import { useState } from 'react';

export default function RecruitAIPage() {
  const [file, setFile] = useState<File | null>(null);

  const uploadResume = async () => {
    if (!file) return alert("Pehle file select karo!");

    const formData = new FormData();
    formData.append('resume', file);

    // GitHub Codespaces ka dynamic URL (Port 5000 ka)
    const backendUrl = window.location.origin.replace('-3000', '-5000');
    
    try {
      const res = await fetch(`${backendUrl}/api/recruit/upload-resume`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Upload fail ho gaya');
      
      const data = await res.json();
      alert(data.message);
    } catch (error) {
      console.error(error);
      alert("Error: Backend se connect nahi ho paya. Check karo ki Port 5000 'Public' hai.");
    }
  };

  // ... baaki return JSX code wahi rahega
}