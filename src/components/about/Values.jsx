import { motion } from 'framer-motion'
import {
  Users,
  Lightbulb,
  Heart,
  Award,
  Shield,
  TrendingUp
} from 'lucide-react'
import { companyInfo } from '../../data/company'

const iconMap = {
  Users,
  Lightbulb,
  Heart,
  Award,
  Shield,
  TrendingUp
}

const Values = () => {
  const gradients = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-red-500 to-orange-500',
    'from-green-500 to-teal-500',
    'from-indigo-500 to-blue-500',
    'from-yellow-500 to-orange-500'
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2 uppercase tracking-wide text-sm">
            What Drives Us
          </p>
          <h2 className="heading-lg mb-4">
            Our Core <span className="text-primary">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These values guide everything we do, from how we collaborate with each other
            to how we serve our clients. They're the foundation of "The Power of Us."
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyInfo.values.map((value, index) => {
            const Icon = iconMap[value.icon]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -12,
                  boxShadow: '0 25px 50px rgba(51, 102, 255, 0.2)'
                }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 group"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon className="text-white" size={32} />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative Element */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  className={`h-1 bg-gradient-to-r ${gradients[index]} mt-6 rounded-full`}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-primary via-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10">
            <div className="text-6xl mb-6">🤝</div>
            <blockquote className="text-2xl md:text-3xl font-bold mb-4 leading-relaxed">
              "Alone we can do so little; together we can do so much."
            </blockquote>
            <p className="text-lg opacity-90">
              This principle guides our collaborative culture and drives our success.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Values
