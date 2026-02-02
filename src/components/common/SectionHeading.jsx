import { motion } from 'framer-motion'

const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
    >
      {subtitle && (
        <p className="text-primary font-semibold mb-2 uppercase tracking-wide text-sm">
          {subtitle}
        </p>
      )}
      <h2 className="heading-lg text-gray-900">
        {title}
      </h2>
    </motion.div>
  )
}

export default SectionHeading
