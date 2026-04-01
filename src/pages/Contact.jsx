import { useEffect } from "react";

export default function Contact() {
  
  useEffect(() => {
    document.title = "Ned-Ops — Contact";
  }, []);
  
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900">Questions? Contact me!</h1>
        <p className="text-gray-600 mt-2">
        Page in construction. For the meantime please use the chat 
        bubble to send a message or email me at:{" "}
        
            <a href="mailto:ned@ned-ops.dev"
            className="text-gray-900 font-semibold underline text-lg hover:text-amber-600 transition-colors"
            >
            ned@ned-ops.dev
            </a>
        </p>
    </div>
  );
}