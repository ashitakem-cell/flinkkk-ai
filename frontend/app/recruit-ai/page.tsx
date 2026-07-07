'use client'
import { useState } from 'react';

export default function RecruitAIPage() {
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">RecruitAI</h1>
      <p className="text-gray-600 mb-8">AI Resume Screening Assistant</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Upload Section */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Upload Resume</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center hover:border-black transition">
            <input 
              type="file" 
              className="hidden" 
              id="file-upload" 
              onChange={(e) => e.target.files && setFile(e.target.files[0])} 
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <span className="text-4xl">📄</span>
              <p className="mt-2 text-gray-700 font-medium">Drag & Drop or Browse</p>
              <p className="text-xs text-gray-400 mt-1">Supports PDF up to 10 MB</p>
            </label>
          </div>
          {file && <p className="mt-4 text-sm text-green-600">Selected: {file.name}</p>}
          <button 
            onClick={() => setLoading(true)}
            className="w-full mt-6 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800"
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>
        </div>

        {/* Result Section */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm min-h-[300px]">
          <h2 className="text-lg font-semibold mb-4">Analysis Result</h2>
          {analysis ? (
            <div className="space-y-4">
              <div className="flex justify-between"><span>Score:</span> <span className="font-bold">89%</span></div>
              <div><p className="text-sm font-semibold">Skills:</p> <div className="flex gap-2 mt-1"><span className="bg-gray-100 px-2 py-1 rounded">React</span><span className="bg-gray-100 px-2 py-1 rounded">Node.js</span></div></div>
            </div>
          ) : (
            <div className="text-center pt-20 text-gray-400">
              <p>Waiting for Resume...</p>
              <p className="text-sm">Upload a PDF to begin analysis.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}