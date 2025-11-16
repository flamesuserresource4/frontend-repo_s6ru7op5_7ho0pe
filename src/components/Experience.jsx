import { motion } from 'framer-motion'
import Section from './Section'

const experience = [
  { role: 'Frontend Engineer', org: 'Awesome Co', period: '2023 — Present', points: ['Shipped motion-rich interfaces', 'Led design system efforts', 'Improved performance by 35%'] },
  { role: 'Fullstack Developer', org: 'Startup Labs', period: '2021 — 2023', points: ['Built dashboards & APIs', 'Scaled to thousands of users'] },
]

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I’ve worked">
      <div className="space-y-6">
        {experience.map((e, i) => (
          <motion.div
            key={e.role}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{e.role} · <span className="text-gray-600">{e.org}</span></h3>
              <span className="text-sm text-gray-500">{e.period}</span>
            </div>
            <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
