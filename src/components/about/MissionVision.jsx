import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'
import { companyInfo } from '../../data/company'

const MissionVision = () => {
  return (
    <section className="section-padding bg-gradient-bg">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl p-10 shadow-lg"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 bg-gradient-to-br from-primary to-indigo-600 rounded-2xl flex items-center justify-center mb-6"
            >
              <Target className="text-white" size={40} />
            </motion.div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {companyInfo.mission}
            </p>

            <div className="space-y-3">
              {[
                'Deliver innovative IT solutions',
                'Foster an inclusive environment',
                'Empower client success',
                'Drive continuous improvement'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl p-10 shadow-lg"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6"
            >
              <Eye className="text-white" size={40} />
            </motion.div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {companyInfo.vision}
            </p>

            <div className="space-y-3">
              {[
                'Global IT leadership',
                'Collaborative partnerships',
                'Technical excellence',
                'Client-first approach'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Illustration Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center bg-gradient-to-br from-primary/10 to-indigo-100 rounded-3xl p-12"
        >
          <div className="text-6xl mb-4">🎯</div>
          <p className="text-gray-700 font-medium mb-2">
            Add mission/vision illustration here
          </p>
          <p className="text-sm text-gray-600">
            Get goal-oriented illustrations from: undraw.co | storyset.com
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default MissionVision
