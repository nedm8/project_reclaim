import { useEffect } from "react";

export default function Projects() {
  
  useEffect(() => {
    document.title = "Ned-Ops — Projects";
  }, []);
  
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
      <p className="text-gray-600 mt-2">Case studies coming soon.</p>
    </div>
  );
}