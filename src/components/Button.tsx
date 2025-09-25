import { motion } from 'framer-motion'

type ButtonProps = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  className?: string
}

export function Button({ href, children, variant = 'primary', className }: ButtonProps) {
  const base = 'inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition-colors'
  const styles =
    variant === 'primary'
      ? 'bg-white text-black hover:bg-silver'
      : 'border border-white/20 text-white hover:border-white/40'

  return (
    <motion.a
      href={href}
      className={`${base} ${styles} ${className ?? ''}`}
      whileHover={{ y: -1, boxShadow: '0 8px 24px rgba(0,0,0,0.25)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.3 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  )
}



