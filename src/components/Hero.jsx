import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlay that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
        >
          Halo, saya <span className="text-teal-400">satset19</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
          className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl"
        >
          Software Engineer yang fokus pada pengalaman pengguna, performa, dan arsitektur modern. Portofolio ini menyoroti proyek-proyek terpilih dan pendekatan teknis saya.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="mt-8 flex items-center gap-3"
        >
          <a
            href="#projects"
            onClick={(e)=>{e.preventDefault();document.querySelector('#projects')?.scrollIntoView({behavior:'smooth'})}}
            className="inline-flex items-center justify-center rounded-md bg-teal-500 hover:bg-teal-400 text-white font-medium px-5 py-3 transition-colors"
          >
            Lihat Proyek Saya
          </a>
          <a
            href="#about"
            onClick={(e)=>{e.preventDefault();document.querySelector('#about')?.scrollIntoView({behavior:'smooth'})}}
            className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-3 transition-colors"
          >
            Tentang Saya
          </a>
        </motion.div>
      </div>
    </section>
  );
}
