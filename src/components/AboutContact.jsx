import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'FastAPI', 'Python', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'CI/CD'
];

export default function AboutContact() {
  return (
    <>
      <section id="about" className="py-20 bg-gradient-to-b from-black to-black/95">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Tentang Saya
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-gray-300 max-w-3xl"
          >
            Saya adalah Software Engineer yang senang membangun aplikasi yang cepat, mudah digunakan, dan memiliki desain yang apik. Saya percaya pada kolaborasi lintas-disiplin, pengujian yang baik, dan observabilitas untuk menjaga kualitas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8"
          >
            <h3 className="text-white font-semibold">Tech Stack / Keahlian</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="rounded-full border border-white/10 bg-white/5 text-gray-200 text-sm px-3 py-1">{s}</span>
              ))}
            </div>
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium px-4 py-2 transition-colors"
            >
              <Download className="w-4 h-4" /> Unduh CV/Resume
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 border-t border-white/10 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Kontak
          </motion.h2>
          <p className="mt-3 text-gray-300">Ingin berdiskusi atau merekrut? Silakan hubungi saya melalui:</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:satset19.dev@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-teal-500 hover:bg-teal-400 text-white font-medium px-4 py-2 transition-colors"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
            <a
              href="https://github.com/satset19"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium px-4 py-2 transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/satset19"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium px-4 py-2 transition-colors"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
