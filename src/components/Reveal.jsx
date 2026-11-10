import { motion } from 'framer-motion'

// Wrapper that fades / rises content in the first time it scrolls into
// view (Framer Motion). Content is fully visible by default if motion is
// reduced — the animation is only a flourish, never a hiding step.
export default function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
