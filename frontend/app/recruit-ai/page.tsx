'use client'
import { useState } from 'react';

export default function RecruitAIPage() {
  const [file, setFile] = useState<File | null>(null);

  const uploadResume = async () => {
    if (!file) return alert("Pehle file select karo!");
    
    const formData = new FormData();
    formData.append('resume', file);

    // Direct URL use karo (replace 3000 with 5000)
    const backendUrl = window.location.origin.replace('-3000', '-5000');

    try {
      const res = await fetch(`${backendUrl}/api/recruit/upload-resume`, { 
        method: 'POST',
        body: formData 
      });
      
      const data = await res.json();
      alert(data.message);
    } catch (error) {
      console.error(error);
      alert("Error: Server se baat nahi ho pa rahi!");
    }
  };

  // ... baaki JSX wahi rahega
}