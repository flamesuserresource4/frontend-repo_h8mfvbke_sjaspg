import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutContact from './components/AboutContact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <AboutContact />
      </main>
      <footer className="border-t border-white/10 bg-black/95">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-400 flex items-center justify-between">
          <span>© {new Date().getFullYear()} satset19. All rights reserved.</span>
          <a
            href="#home"
            className="hover:text-white"
            onClick={(e)=>{e.preventDefault();document.querySelector('#home')?.scrollIntoView({behavior:'smooth'})}}
          >
            Kembali ke atas ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
