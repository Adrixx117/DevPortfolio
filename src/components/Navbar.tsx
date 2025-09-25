import { useI18n } from '../i18n'

export function Navbar() {
  const { t, lang, setLang } = useI18n()
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">Adrian Calleja</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a href="#projects" className="hover:text-white transition">{t.navbar.projects}</a>
            <a href="#contact" className="hover:text-white transition">{t.navbar.contact}</a>
            <a href="https://github.com/Adrixx117" target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub</a>
            <a href="https://www.linkedin.com/in/adrii-call/" target="_blank" rel="noreferrer" className="hover:text-white transition">LinkedIn</a>
            <button
              className="ml-4 rounded-full border border-white/20 px-3 py-1 text-xs hover:border-white/40 transition"
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              aria-label="Toggle language"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}


