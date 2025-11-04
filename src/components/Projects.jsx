import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Star } from 'lucide-react';

const PINNED_API = 'https://gh-pinned-repos.egoist.dev/?username=satset19';

function ProjectCard({ proj }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group relative rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-white">{proj.repo}</h3>
        <span className="inline-flex items-center gap-1 text-amber-300/90 text-sm">
          <Star className="w-4 h-4" />
          {proj.stars}
        </span>
      </div>
      {proj.description && (
        <p className="mt-2 text-sm text-gray-300 line-clamp-3">{proj.description}</p>
      )}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {proj.language && (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-xs text-gray-200">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: proj.languageColor || '#999' }} />
            {proj.language}
          </span>
        )}
      </div>
      <div className="mt-4 flex items-center gap-3">
        <a
          href={proj.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm font-medium"
        >
          <Code className="w-4 h-4" /> Kode Sumber
        </a>
        {proj.website && (
          <a
            href={proj.website}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium"
          >
            <Globe className="w-4 h-4" /> Live Demo
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        const res = await fetch(PINNED_API);
        const data = await res.json();
        if (active) setProjects(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error('Failed to fetch pinned repos', e);
        if (active) setProjects([]);
      } finally {
        if (active) setLoading(false);
      }
    }
    load();
    return () => { active = false; };
  }, []);

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-black via-black to-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Proyek Unggulan
        </motion.h2>
        <p className="mt-2 text-gray-300">Otomatis diambil dari Pinned Repositories GitHub.</p>

        {loading ? (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-40 animate-pulse rounded-xl bg-white/5 border border-white/10" />
            ))}
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.repo} proj={p} />
            ))}
            {projects.length === 0 && (
              <div className="col-span-full text-gray-300">Tidak ada data proyek yang ditemukan.</div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
