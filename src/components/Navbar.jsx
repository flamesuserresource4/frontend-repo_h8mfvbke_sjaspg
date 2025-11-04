import { useCallback } from 'react';
import { Github, Linkedin } from 'lucide-react';

function NavLink({ to, children }) {
  const onClick = useCallback((e) => {
    e.preventDefault();
    const el = document.querySelector(to);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [to]);

  return (
    <a
      href={to}
      onClick={onClick}
      className="px-3 py-2 text-sm font-medium text-gray-200 hover:text-white hover:bg-white/5 rounded-md transition-colors"
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="text-white font-semibold tracking-tight" onClick={(e)=>{e.preventDefault();document.querySelector('#home')?.scrollIntoView({behavior:'smooth'})}}>satset<span className="text-teal-400">19</span></a>
        <div className="hidden sm:flex items-center gap-1">
          <NavLink to="#home">Home</NavLink>
          <NavLink to="#projects">Proyek</NavLink>
          <NavLink to="#about">Tentang</NavLink>
          <NavLink to="#contact">Kontak</NavLink>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/satset19"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-md hover:bg-white/5 text-gray-300 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/satset19"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md hover:bg-white/5 text-gray-300 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
