import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Users, Globe, Award, TrendingUp } from 'lucide-react'
import { companyInfo } from '../../data/company'

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      const endValue = typeof end === 'string' ? parseInt(end) : end
      const increment = endValue / (duration * 60)
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= endValue) {
          setCount(endValue)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, 1000 / 60)

      return () => clearInterval(timer)
    }
  }, [isInView, end, duration, hasAnimated])

  return <span ref={ref}>{count}</span>
}

const Introduction = () => {
  const stats = [
    {
      icon: Users,
      value: companyInfo.stats[0].value,
      label: companyInfo.stats[0].label,
      description: companyInfo.stats[0].description,
      color: 'blue'
    },
    {
      icon: Globe,
      value: companyInfo.stats[1].value,
      label: companyInfo.stats[1].label,
      description: companyInfo.stats[1].description,
      color: 'indigo'
    },
    {
      icon: Award,
      value: companyInfo.stats[2].value,
      label: companyInfo.stats[2].label,
      description: companyInfo.stats[2].description,
      color: 'purple'
    },
    {
      icon: TrendingUp,
      value: companyInfo.stats[3].value,
      label: companyInfo.stats[3].label,
      description: companyInfo.stats[3].description,
      color: 'pink'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Introduction Text */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-6">
              Who <span className="text-primary">We Are</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              {companyInfo.description}
            </p>
            <p className="text-lg text-gray-500 italic">
              "Together, we're not just a team—we're a movement towards innovation,
              inclusivity, and excellence."
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(51, 102, 255, 0.15)' }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 text-center"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6`}
              >
                <stat.icon className="text-primary" size={32} />
              </motion.div>

              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>

              <div className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </div>

              <p className="text-sm text-gray-600">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-primary to-indigo-600 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-95">
            {companyInfo.mission}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Introduction
