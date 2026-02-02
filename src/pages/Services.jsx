import { useState } from 'react'
import { motion } from 'framer-motion'
import { services, serviceCategories } from '../data/services'
import ServiceCard from '../components/services/ServiceCard'

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('All Services')

  const filteredServices = activeCategory === 'All Services'
    ? services
    : services.filter(service => {
        // Simple category filtering based on service type
        const categoryMap = {
          'Development': ['Web Development', 'Mobile App Development'],
          'Cloud & Infrastructure': ['Cloud Services', 'DevOps Solutions'],
          'Security': ['Cybersecurity'],
          'Data & AI': ['AI & Machine Learning', 'Data Analytics'],
          'Design & Consulting': ['UI/UX Design', 'IT Consulting']
        }
        return categoryMap[activeCategory]?.includes(service.title)
      })

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-indigo-600 text-white py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-xl mb-4">Our Services</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs.
              From concept to deployment, we deliver excellence together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-bg">
        <div className="container-custom">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {serviceCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* Empty State */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                No services found in this category.
              </p>
            </div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 bg-gradient-to-r from-primary to-indigo-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life. Our team is ready
              to discuss your project and deliver solutions that exceed expectations.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary font-semibold py-4 px-10 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
