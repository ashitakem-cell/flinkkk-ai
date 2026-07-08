'use client';

import { useState } from "react";

export default function RecruitAIPage() {
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

    if (!file) {
      alert("Please select a resume first.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/recruit/upload-resume`;

      console.log("Sending request to:", url);

      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      console.log("Response Status:", response.status);

      const data = await response.json();

      console.log("Response Data:", data);

      if (data.success) {
        setAnalysis(data.text);
      } else {
        alert("Analysis failed");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("Backend connection failed");
    }

    setLoading(false);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">
        RecruitAI
      </h1>

      <p className="text-gray-500 mb-8">
        AI Resume Screening Assistant
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Upload Card */}
        <div className="bg-white rounded-xl shadow border p-6">

          <h2 className="text-2xl font-semibold mb-5">
            Upload Resume
          </h2>

          <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center">

            <input
              id="resume"
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) => {
                if (e.target.files) {
                  setFile(e.target.files[0]);
                }
              }}
            />

            <label htmlFor="resume" className="cursor-pointer">

              <div className="text-6xl">
                📄
              </div>

              <p className="mt-4 text-xl font-semibold">
                Click to Upload Resume
              </p>

              <p className="text-gray-500">
                PDF upto 10MB
              </p>

            </label>

          </div>

          {file && (
            <div className="mt-5 text-green-600 font-medium">
              Selected File:
              <br />
              {file.name}
            </div>
          )}

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="mt-6 w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800"
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>

        </div>

        {/* Result */}
        <div className="bg-white rounded-xl shadow border p-6">

          <h2 className="text-2xl font-semibold mb-5">
            Analysis Result
          </h2>

          {analysis ? (
            <div className="bg-gray-100 rounded-lg p-4 h-[500px] overflow-auto whitespace-pre-wrap">
              {analysis}
            </div>
          ) : (
            <div className="text-center mt-40 text-gray-400">
              <p className="text-xl">
                Waiting for Resume...
              </p>
              <p>
                Upload a PDF to begin analysis.
              </p>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}