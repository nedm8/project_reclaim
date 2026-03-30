export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Benedict Mazaredo</p>
        <div className="flex items-center gap-3">
          <span>Built with React · Hosted on Cloudflare</span>
          <a
            href="https://github.com/nedm8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}