import { motion } from 'framer-motion'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid md:grid-cols-2 gap-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-gray-700 text-lg leading-relaxed"
        >
          I'm a multidisciplinary engineer focused on building polished products with an eye for detail. I enjoy systems design, interaction design, and performance-minded engineering. Recently I've been exploring creative coding and 3D interfaces.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
        >
          <ul className="grid grid-cols-2 gap-3 text-sm">
            {[
              'React / Next.js',
              'TypeScript',
              'Node & FastAPI',
              'Tailwind / Design systems',
              'Framer Motion / GSAP',
              'Three / Spline',
              'MongoDB / SQL',
              'Cloud & DevOps basics',
            ].map((s) => (
              <li key={s} className="px-3 py-2 rounded-full bg-gray-50 border border-gray-200">{s}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  )
}
