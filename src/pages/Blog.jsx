import { useEffect } from "react";

export default function Blog() {
  
  useEffect(() => {
    document.title = "Ned-Ops — Blog";
  }, []);
  
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
      <p className="text-gray-600 mt-2">Technical write-ups coming soon.</p>
    </div>
  );
}