import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Star {
  id: number
  x: number
  delay: number
  duration: number
  size: number
}

export function StarsBackground() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    // Crear más estrellas para efecto continuo constante
    const starCount = 20
    const newStars: Star[] = []
    const baseDuration = 10 // Duración base en segundos
    const timeBetweenStars = baseDuration / starCount // Tiempo entre cada estrella

    for (let i = 0; i < starCount; i++) {
      // Distribuir los delays de forma uniforme para efecto continuo
      // Cada estrella comienza cuando la anterior está avanzando
      const delay = i * timeBetweenStars
      newStars.push({
        id: i,
        x: Math.random() * 100, // Posición horizontal aleatoria (0-100%)
        delay: delay, // Delay distribuido uniformemente para continuidad
        duration: 9 + Math.random() * 3, // Duración entre 9-12 segundos (más consistente)
        size: 3 + Math.random() * 2, // Tamaño entre 3-5px
      })
    }

    setStars(newStars)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            bottom: '-20px',
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: 'rgba(255, 255, 255, 1)',
            boxShadow: `
              0 0 ${star.size * 3}px ${star.size * 1.5}px rgba(255, 255, 255, 0.9),
              0 0 ${star.size * 6}px ${star.size * 2}px rgba(255, 255, 255, 0.5),
              0 0 ${star.size * 10}px ${star.size * 3}px rgba(255, 255, 255, 0.3)
            `,
            filter: 'blur(0.5px)',
          }}
          initial={{
            y: 0,
            opacity: 0,
            scale: 0.3,
          }}
          animate={{
            y: '-110vh', // Mover desde abajo hasta arriba
            opacity: [0, 1, 1, 0], // Aparecer, brillar, desaparecer
            scale: [0.3, 1, 1, 0.3], // Crecer y encoger
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'linear',
            opacity: {
              times: [0, 0.1, 0.9, 1], // Aparecer y desaparecer más rápido
              duration: star.duration,
            },
            scale: {
              times: [0, 0.1, 0.9, 1], // Crecer más rápido al inicio
              duration: star.duration,
            },
          }}
        />
      ))}
    </div>
  )
}

