import { useState, useEffect } from 'react'

interface UseTypingEffectOptions {
  text: string
  speed?: number // Velocidad de escritura en ms por carácter
  delay?: number // Delay inicial antes de empezar a escribir
}

export function useTypingEffect({ text, speed = 50, delay = 0 }: UseTypingEffectOptions) {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    setDisplayedText('')
    setIsTyping(false)

    const timeoutId = setTimeout(() => {
      setIsTyping(true)
      let currentIndex = 0

      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(typingInterval)
          setIsTyping(false)
        }
      }, speed)

      return () => clearInterval(typingInterval)
    }, delay)

    return () => clearTimeout(timeoutId)
  }, [text, speed, delay])

  return { displayedText, isTyping }
}

