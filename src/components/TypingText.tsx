import { useTypingEffect } from '../hooks/useTypingEffect'

interface TypingTextProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  cursorClassName?: string
}

export function TypingText({ 
  text, 
  speed = 50, 
  delay = 0,
  className = '',
  cursorClassName = ''
}: TypingTextProps) {
  const { displayedText, isTyping } = useTypingEffect({ text, speed, delay })

  return (
    <span className={className}>
      {displayedText}
      {isTyping && (
        <span 
          className={`inline-block w-[2px] h-[1em] bg-current ml-1 align-middle ${cursorClassName}`}
          style={{
            animation: 'blink 0.8s infinite',
            boxShadow: '0 0 4px currentColor'
          }}
        >
          |
        </span>
      )}
      <style>{`
        @keyframes blink {
          0%, 45% { opacity: 1; }
          46%, 100% { opacity: 0.3; }
        }
      `}</style>
    </span>
  )
}

