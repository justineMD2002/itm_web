import { motion } from 'framer-motion'
import CompanyHistory from '../components/about/CompanyHistory'
import MissionVision from '../components/about/MissionVision'
import Values from '../components/about/Values'

const About = () => {
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
            <h1 className="heading-xl mb-4">About Us</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Discover our story, values, and the people who make IT Managers, Inc.
              a trusted partner for businesses worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      <CompanyHistory />
      <MissionVision />
      <Values />
    </div>
  )
}

export default About
