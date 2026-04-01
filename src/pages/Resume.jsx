import { useEffect } from "react";

export default function Resume() {
  
  useEffect(() => {
    document.title = "Ned-Ops — Resume";
  }, []);
  
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900">Resume</h1>
      <p className="text-gray-600 mt-2">Full resume and PDF download coming soon.</p>
    </div>
  );
}