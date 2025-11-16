import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">Portfolio 2025</p>
          <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Dipuranjan Sethy</span>
            <span className="block text-gray-900">Engineer • Designer • Builder</span>
          </h1>
          <p className="mt-6 text-gray-700 text-lg">
            I craft delightful experiences across web, mobile and 3D. I love blending smooth motion, clean systems, and pragmatic engineering to ship products people enjoy.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-transform">See Projects</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold hover:bg-gray-50">Get in Touch</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
