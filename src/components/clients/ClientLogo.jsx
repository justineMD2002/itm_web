import { motion } from 'framer-motion'

const ClientLogo = ({ client, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="bg-white p-6 rounded-xl border border-gray-200 flex items-center justify-center hover:shadow-lg transition-shadow"
    >
      <div className="text-center">
        {/* Placeholder for logo - will be replaced with actual images */}
        <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-indigo-200 rounded-lg flex items-center justify-center mb-2 mx-auto">
          <span className="text-2xl font-bold text-primary">
            {client.name.substring(0, 2).toUpperCase()}
          </span>
        </div>
        <p className="text-sm font-medium text-gray-700">{client.name}</p>
      </div>
    </motion.div>
  )
}

export default ClientLogo
