import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Briefcase, Clock, ChevronDown, ChevronUp } from 'lucide-react'

const JobCard = ({ job, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(51, 102, 255, 0.15)' }}
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 hover:text-primary transition-colors">
              {job.title}
            </h3>
            <div className="flex flex-wrap gap-3 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Briefcase size={16} className="text-primary" />
                <span>{job.department}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin size={16} className="text-primary" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={16} className="text-primary" />
                <span>{job.type}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              {job.experience}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {job.description}
        </p>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            <span>{isExpanded ? 'Show Less' : 'View Details'}</span>
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          <button className="ml-auto bg-primary hover:bg-primary-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
            Apply Now
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-gray-100 pt-6 bg-gray-50">
              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Responsibilities:</h4>
                <ul className="space-y-2">
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                <ul className="space-y-2">
                  {job.requirements.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nice to Have */}
              {job.niceToHave && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Nice to Have:</h4>
                  <ul className="space-y-2">
                    {job.niceToHave.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default JobCard
