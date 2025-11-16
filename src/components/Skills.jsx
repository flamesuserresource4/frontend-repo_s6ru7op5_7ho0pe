import { motion } from 'framer-motion'
import Section from './Section'

const skills = [
  { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { name: 'Backend', items: ['Node.js', 'FastAPI', 'MongoDB', 'REST APIs'] },
  { name: 'Design', items: ['Figma', 'Design Systems', 'Micro-interactions', 'Prototyping'] },
]

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Strengths I bring">
      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((group, i) => (
          <motion.div
            key={group.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="font-semibold text-gray-900">{group.name}</h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-gray-700">• {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
