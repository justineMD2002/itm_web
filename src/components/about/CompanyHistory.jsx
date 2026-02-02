import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { companyInfo } from '../../data/company'

const CompanyHistory = () => {
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
            Our Journey
          </p>
          <h2 className="heading-lg mb-4">
            Building the Future <span className="text-primary">Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to global impact, our story is one of collaboration,
            innovation, and unwavering commitment to excellence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary-400 to-primary-200 hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {companyInfo.timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(51, 102, 255, 0.15)' }}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100"
                  >
                    <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg hidden md:block z-10" />

                {/* Spacer */}
                <div className="w-full md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Founded Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl">
            <Check size={24} />
            <span>Proudly Serving Since {companyInfo.founded}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CompanyHistory
