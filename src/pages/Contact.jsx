import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Facebook, Instagram, Github } from 'lucide-react'
import ContactForm from '../components/contact/ContactForm'
import LocationMap from '../components/contact/LocationMap'
import { contactInfo } from '../data/contact'

const iconMap = {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Github
}

const Contact = () => {
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
            <h1 className="heading-xl mb-4">Get in Touch</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Let's start a conversation. We're here to answer your questions and
              discuss how we can help bring your ideas to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gradient-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Headquarters */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {contactInfo.headquarters.title}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="text-gray-700">
                        {contactInfo.headquarters.address}
                      </p>
                      <p className="text-gray-700">
                        {contactInfo.headquarters.city}, {contactInfo.headquarters.state} {contactInfo.headquarters.zip}
                      </p>
                      <p className="text-gray-700">
                        {contactInfo.headquarters.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Phone className="text-primary flex-shrink-0" size={24} />
                    <a
                      href={`tel:${contactInfo.headquarters.phone}`}
                      className="text-gray-700 hover:text-primary transition-colors"
                    >
                      {contactInfo.headquarters.phone}
                    </a>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Mail className="text-primary flex-shrink-0" size={24} />
                    <a
                      href={`mailto:${contactInfo.headquarters.email}`}
                      className="text-gray-700 hover:text-primary transition-colors"
                    >
                      {contactInfo.headquarters.email}
                    </a>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="text-primary mt-1 flex-shrink-0" size={24} />
                    <p className="text-gray-700">
                      {contactInfo.headquarters.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Departments */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Departments
                </h3>

                <div className="space-y-4">
                  {contactInfo.departments.map((dept, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {dept.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {dept.description}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-sm">
                        <a
                          href={`mailto:${dept.email}`}
                          className="text-primary hover:underline"
                        >
                          {dept.email}
                        </a>
                        <a
                          href={`tel:${dept.phone}`}
                          className="text-gray-600 hover:text-primary"
                        >
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-primary to-indigo-600 rounded-2xl p-8 shadow-lg text-white">
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {contactInfo.socialMedia.map((social, index) => {
                    const Icon = iconMap[social.icon]
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -4 }}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Icon size={24} />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
              Our <span className="text-primary">Locations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at one of our offices around the world.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {contactInfo.offices.map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(51, 102, 255, 0.15)' }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {office.name}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>{office.address}</p>
                  <p>{office.city}, {office.state} {office.zip}</p>
                  <div className="pt-2 space-y-1">
                    <a
                      href={`tel:${office.phone}`}
                      className="block hover:text-primary transition-colors"
                    >
                      {office.phone}
                    </a>
                    <a
                      href={`mailto:${office.email}`}
                      className="block hover:text-primary transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <LocationMap mapEmbedUrl={contactInfo.mapEmbedUrl} />
        </div>
      </section>
    </div>
  )
}

export default Contact
