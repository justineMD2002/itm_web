import { motion } from 'framer-motion'
import { Globe, Smartphone, Cloud, Lock, Brain, BarChart, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Card from '../common/Card'

const FeaturedHighlights = () => {
  const highlights = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      color: 'from-blue-500 to-cyan-500',
      link: '/services'
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      color: 'from-purple-500 to-pink-500',
      link: '/services'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and seamless migration to modern cloud platforms.',
      color: 'from-indigo-500 to-blue-500',
      link: '/services'
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your valuable digital assets.',
      color: 'from-red-500 to-orange-500',
      link: '/services'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
      color: 'from-green-500 to-teal-500',
      link: '/services'
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights for better business decisions.',
      color: 'from-yellow-500 to-orange-500',
      link: '/services'
    }
  ]

  return (
    <section className="section-padding bg-gradient-bg">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold mb-2 uppercase tracking-wide text-sm">
              What We Do
            </p>
            <h2 className="heading-lg mb-4">
              Featured <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, our collaborative teams deliver innovative solutions
              that drive your business forward.
            </p>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={highlight.link}>
                <Card className="h-full group cursor-pointer">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <highlight.icon className="text-white" size={32} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {highlight.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                    <span>Learn More</span>
                    <ArrowRight
                      size={20}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-600 text-white font-semibold py-4 px-10 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <span>View All Services</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedHighlights
