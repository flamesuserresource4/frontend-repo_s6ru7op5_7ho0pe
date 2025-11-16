import { motion } from 'framer-motion'
import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build something together">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm text-center"
      >
        <p className="text-gray-700 text-lg">I’m open to roles, collaborations, and freelance gigs. If you have an idea in mind, let’s chat.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="mailto:hello@dipuranjan.dev" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-transform">Email me</a>
          <a href="/Dipuranjan_Sethy_Resume.pdf" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold hover:bg-gray-50">Download Resume</a>
        </div>
      </motion.div>
    </Section>
  )
}
