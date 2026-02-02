import { motion } from 'framer-motion'

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -8, boxShadow: '0 20px 40px rgba(51, 102, 255, 0.1)' } : {}}
      className={`bg-white rounded-xl shadow-md p-6 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card
