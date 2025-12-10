import { motion } from 'framer-motion'
import { ProjectsSection } from './components/ProjectsSection'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { TechIcons } from './components/TechIcons'
import { Button } from './components/Button'
import { TypingText } from './components/TypingText'
import { StarsBackground } from './components/StarsBackground'
import { GlowCard } from './components/ui/spotlight-card'
import { useI18n } from './i18n'

export default function App() {
  const { t, lang } = useI18n()
  return (
    <div className="min-h-screen bg-ink text-white font-sf selection:bg-white selection:text-black">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,#ffffff10,transparent_60%)]" />
      <StarsBackground />
      <Navbar />

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 md:pt-36 md:pb-28">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-center text-4xl md:text-6xl font-semibold tracking-tight"
            >
              <TypingText 
                text={t.hero.titleA + (t.hero.titleB ? ' ' + t.hero.titleB : '')}
                speed={80}
                delay={300}
              />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="mt-6 text-center text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-1 shadow-soft"
            >
              <div className="rounded-[22px] bg-graphite p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center">
                  <div className="md:col-span-2">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                      <TypingText 
                        text="Adrian Calleja - FrontEnd Dev"
                        speed={80}
                        delay={600}
                      />
                    </h2>
                    <p className="mt-3 text-gray-300">
                      Specializing in React, TypeScript, and delightful micro-interactions.
                    </p>
                    <div className="mt-6 flex gap-3">
                      <Button href="#projects">{t.hero.viewProjects}</Button>
                      <Button href="#contact" variant="outline">{t.hero.contact}</Button>
                    </div>
                    <TechIcons />
                  </div>
                  <div className="md:col-span-1">
                    <div className="md:col-span-1">
                      <div className="md:col-span-1">
                        <div className="aspect-[4/3] rounded-2xl bg-white/5 border-2 border-white/30 p-1 shadow-xl">
                          <img
                            src="/icons/freepik.png"
                            alt="Descripción de la imagen"
                            className="w-full h-full rounded-xl object-cover shadow-lg"
                          />
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AWS study note */}
        <section className="py-10">
          <div className="mx-auto max-w-7xl px-6">
            <GlowCard
              glowColor="blue"
              customSize
              className="w-full"
            >
              <div className="rounded-[22px] bg-graphite p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      <TypingText 
                        text={lang === 'es' ? 'Formación en AWS Cloud Solutions' : 'Training in AWS Cloud Solutions'}
                        speed={150}
                        delay={200}
                      />
                    </h3>
                    <p className="mt-3 text-gray-300">
                      {lang === 'es'
                        ? 'Con base en buenas prácticas de arquitectura en la nube, automatización e infraestructura como código.'
                        : 'Grounded in cloud architecture best practices, automation, and infrastructure as code.'}
                    </p>
                  </div>
                  <div className="md:col-span-1">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                      <img src="/icons/image.png" alt="AWS Cloud" className="h-full w-full object-contain p-2 scale-95 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* Prompt Engineering certification */}
        <section className="py-10">
          <div className="mx-auto max-w-7xl px-6">
            <GlowCard
              glowColor="purple"
              customSize
              className="w-full"
            >
              <div className="rounded-[22px] bg-graphite p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      <TypingText 
                        text={lang === 'es' ? 'Certificación en Prompt Engineering' : 'Prompt Engineering Certification'}
                        speed={150}
                        delay={400}
                      />
                    </h3>
                    <p className="mt-3 text-gray-300">
                      {lang === 'es'
                        ? 'Certificado en Prompt Engineering con IA, especializado en técnicas avanzadas de ingeniería de prompts para maximizar la efectividad de modelos de lenguaje e inteligencia artificial.'
                        : 'Certified in Prompt Engineering with AI, specializing in advanced prompt engineering techniques to maximize the effectiveness of language models and artificial intelligence.'}
                    </p>
                  </div>
                  <div className="md:col-span-1">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                      <img src="/icons/tituloIA.jpg" alt="Prompt Engineering Certification" className="h-full w-full object-contain p-2 scale-95 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </section>

        <ProjectsSection />

        <section id="contact" className="py-24 scroll-mt-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-10 md:p-14 text-center">
              <h3 className="text-3xl md:text-4xl font-semibold">{t.contact.heading}</h3>
              <p className="mt-4 text-gray-300 max-w-xl mx-auto">{t.contact.body}</p>
              <div className="mt-8">
                <Button href="mailto:adricall060@gmail.com?subject=Project%20Inquiry">{t.contact.cta}</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}


