export default function Footer() {
  return (
    <footer className="w-full py-8 text-center bg-slate-950/50 backdrop-blur-md border-t border-white/10 text-gray-400">
      <p>© 2026 My Portfolio | Built with React & Tailwind</p>
      <div className="mt-2 flex justify-center gap-4">
        <a href="#" className="hover:text-blue-400 transition">GitHub</a>
        <a href="#" className="hover:text-blue-400 transition">LinkedIn</a>
        <a href="#" className="hover:text-blue-400 transition">Twitter</a>
      </div>
    </footer>
  );
}