import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type Language = 'en' | 'es'

type Dictionary = {
  navbar: { projects: string; contact: string }
  hero: { titleA: string; titleB: string; subtitle: string; viewProjects: string; contact: string }
  projects: { heading: string; cta: string }
  contact: { heading: string; body: string; cta: string }
}

const en: Dictionary = {
  navbar: { projects: 'Projects', contact: 'Contact' },
  hero: {
    titleA: 'Clean, AI-powered frontend.',
    titleB: '',
    subtitle:
      'I build elegant, fast, and accessible web apps with modern frameworks and impeccable UI.',
    viewProjects: 'View Projects',
    contact: 'Contact',
  },
  projects: { heading: 'Selected Projects', cta: 'Work with me →' },
  contact: {
    heading: "Let's build something great",
    body: "I’m available for select freelance and business collaborations.",
    cta: 'Get in touch',
  },
}

const es: Dictionary = {
  navbar: { projects: 'Proyectos', contact: 'Contacto' },
  hero: {
    titleA: 'Frontend limpio y potenciado con IA.',
    titleB: '',
    subtitle:
      'Soy desarrollador especializado en frontend, Vibe Coding con IA en el desarrollo de software y con experiencia en AWS, Vercel, Netlify y entornos como Cursor. Me enfoco en crear aplicaciones modernas, escalables y de alto rendimiento.',
    viewProjects: 'Ver Proyectos',
    contact: 'Contacto',
  },
  projects: { heading: 'Proyectos Seleccionados', cta: 'Trabajemos juntos →' },
  contact: {
    heading: 'Construyamos algo grandioso',
    body: 'Disponible para colaboraciones freelance y proyectos de negocio.  adricall060@gmail.com',
    cta: 'Contactar',
  },
}

type I18nContextType = {
  lang: Language
  setLang: (l: Language) => void
  t: Dictionary
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const initial = (localStorage.getItem('lang') as Language) ||
    ((navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en')
  const [lang, setLangState] = useState<Language>(initial)

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const setLang = (l: Language) => setLangState(l)
  const t = useMemo(() => (lang === 'es' ? es : en), [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}


