import { motion } from 'framer-motion'
import Section from './Section'

const projects = [
  {
    title: 'Motion-first Landing',
    description: 'A performant landing page with buttery transitions and 3D accents.',
    tags: ['React', 'Framer Motion', 'Spline'],
    link: 'https://example.com'
  },
  {
    title: 'Product Dashboard',
    description: 'Analytics with multi-tenant architecture and crisp UI.',
    tags: ['Next.js', 'Tailwind', 'MongoDB'],
    link: 'https://example.com'
  },
  {
    title: 'Creative Playground',
    description: 'Experimental components and micro-interaction library.',
    tags: ['TypeScript', 'Design Systems'],
    link: 'https://example.com'
  }
]

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Work" title="Featured projects">
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="block bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="h-36 rounded-xl bg-gradient-to-br from-blue-100 via-violet-100 to-fuchsia-100" />
            <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-gray-700">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-gray-100 border border-gray-200">{t}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}
