import { ProjectCard } from '../components/ProjectCard'
import type { Project } from '../components/ProjectCard'
import { useI18n } from '../i18n'

const projects: Project[] = [
  {
    title: 'Investment Insights Dashboard',
    description: 'Panel para analizar portafolios, métricas y rendimiento con visualizaciones claras.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Charts'],
    url: '#',
    repo: 'https://github.com/Adrixx117',
  },
  {
    title: 'PHP E‑commerce',
    description: 'Tienda online con catálogo, carrito y checkout; backend en PHP y MySQL.',
    tech: ['PHP', 'MySQL', 'Tailwind'],
    url: '#',
    repo: 'https://github.com/Adrixx117',
  },
  {
    title: 'Responsive Gallery',
    description: 'Galería moderna con grid responsivo, lightbox y animaciones suaves.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    url: '#',
    repo: 'https://github.com/Adrixx117',
  },
  {
    title:'Dictionary App',
    description: 'Aplicación de diccionario con búsqueda de significado de palabras',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: '#',
    repo: 'https://github.com/Adrixx117',
  }
]

export function ProjectsSection() {
  const { t } = useI18n()
  return (
    <section id="projects" className="py-20 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h3 className="text-2xl md:text-3xl font-semibold">{t.projects.heading}</h3>
          <a href="#contact" className="hidden md:inline-block text-sm text-gray-300 hover:text-white transition">
            {t.projects.cta}
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map(p => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}


