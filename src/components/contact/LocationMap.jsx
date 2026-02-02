import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const LocationMap = ({ mapEmbedUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg"
    >
      {/* Map Placeholder - Replace with actual Google Maps embed */}
      <div className="relative h-96 bg-gradient-to-br from-primary/20 to-indigo-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="text-primary mx-auto mb-4" size={64} />
            <p className="text-gray-700 font-medium mb-2">
              Add Google Maps embed here
            </p>
            <p className="text-sm text-gray-600">
              Use the mapEmbedUrl from contact.js data
            </p>
          </div>
        </div>
        {/* Uncomment to use actual Google Maps */}
        {/* <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        /> */}
      </div>
    </motion.div>
  )
}

export default LocationMap
