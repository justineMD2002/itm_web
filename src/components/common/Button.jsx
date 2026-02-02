import { motion } from 'framer-motion'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 inline-block text-center'

  const variants = {
    primary: 'bg-primary hover:bg-primary-600 text-white hover:shadow-lg',
    secondary: 'bg-white hover:bg-gray-50 text-primary border-2 border-primary',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-primary'
  }

  const sizes = {
    sm: 'py-2 px-6 text-sm',
    md: 'py-3 px-8 text-base',
    lg: 'py-4 px-10 text-lg'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
