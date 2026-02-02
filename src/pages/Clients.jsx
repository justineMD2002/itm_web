import { motion } from 'framer-motion'
import { clients } from '../data/clients'
import ClientLogo from '../components/clients/ClientLogo'
import {
  Banknote,
  Heart,
  ShoppingCart,
  GraduationCap,
  Factory,
  Truck,
  Quote
} from 'lucide-react'

const iconMap = {
  Banknote,
  Heart,
  ShoppingCart,
  GraduationCap,
  Factory,
  Truck
}

const Clients = () => {
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
            <h1 className="heading-xl mb-4">Our Clients</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {clients.introduction}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clients.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-gradient-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-4">
              Industries <span className="text-primary">We Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across diverse sectors, enabling us to deliver
              tailored solutions that address unique industry challenges.
            </p>
          </motion.div>

          <div className="space-y-16">
            {clients.industries.map((industry, index) => {
              const Icon = iconMap[industry.icon]
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-indigo-600 rounded-2xl flex items-center justify-center">
                          <Icon className="text-white" size={32} />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">
                          {industry.name}
                        </h3>
                      </div>
                      <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        {industry.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100">
                          <div className="text-2xl font-bold text-primary">
                            {industry.clientCount}
                          </div>
                          <div className="text-sm text-gray-600">Clients</div>
                        </div>
                        <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100">
                          <div className="text-2xl font-bold text-primary">
                            {industry.projects}
                          </div>
                          <div className="text-sm text-gray-600">Projects</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {industry.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="grid grid-cols-2 gap-4">
                        {industry.clients.map((client, idx) => (
                          <ClientLogo key={idx} client={client} index={idx} />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-4">
              Client <span className="text-primary">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our clients have to say about working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clients.testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(51, 102, 255, 0.15)' }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100"
              >
                <Quote className="text-primary mb-4" size={40} />
                <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position}, {testimonial.company}
                    </div>
                    <div className="text-xs text-primary font-medium">
                      {testimonial.industry}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-indigo-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's collaborate to build innovative solutions that drive your business forward.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary font-semibold py-4 px-10 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Clients
