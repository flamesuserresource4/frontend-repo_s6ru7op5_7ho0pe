import { motion } from 'framer-motion'

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="h-72 bg-gradient-to-b from-transparent via-blue-50/60 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase">{eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">{title}</h2>
        </motion.header>
        <div>
          {children}
        </div>
      </div>
    </section>
  )
}
