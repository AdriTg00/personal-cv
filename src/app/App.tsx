import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import {
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Code,
  Palette,
  Video,
  TestTube,
  Globe,
  ChevronDown,
  Github,
  Linkedin,
  ExternalLink,
  Download
} from 'lucide-react';
import fotoPerfil from "../assets/adrian.png";

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-x-hidden">
      {/* Cursor follower effect */}
      <motion.div
        className="fixed w-6 h-6 border-2 border-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              ADRIÁN<br />TARANCÓN
            </motion.h1>

            <motion.img
              src={fotoPerfil}
              alt="Foto de Adrián Tarancón"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-36 h-36 md:w-44 md:h-44 mx-auto mb-8 rounded-full object-cover border-4 border-white/20 shadow-2xl"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4 mb-12"
            >
              <p className="text-xl md:text-2xl text-purple-300 font-light">
                Desarrollador Junior • Tester • Diseñador 3D
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Combinando creatividad visual con habilidades técnicas para crear experiencias digitales únicas
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <button
                onClick={() => scrollToSection('experience')}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Ver Experiencia
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-purple-400 rounded-full hover:bg-purple-400/10 transition-all duration-300"
              >
                Contactar
              </button>

              <a
                href="https://github.com/AdriTg00"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-cyan-400 rounded-full hover:bg-cyan-400/10 transition-all duration-300 flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>

              <a
                href="/mi-cv.pdf"
                download
                className="px-8 py-3 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Descargar CV
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <Section id="about" title="Perfil Profesional">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
            <p className="text-lg leading-relaxed text-gray-300">
              Desarrollador junior con formación en <span className="text-purple-400 font-semibold">Desarrollo de Aplicaciones Multiplataforma</span> y
              experiencia en <span className="text-cyan-400 font-semibold">testing y automatización con Playwright y TypeScript</span>.
              Cuento con una base técnica y creativa gracias a mi trayectoria en <span className="text-pink-400 font-semibold">animación 3D, vídeo y diseño</span>,
              lo que me aporta atención al detalle, capacidad de adaptación y enfoque práctico para resolver problemas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <SkillCard icon={Code} title="Resolutivo" color="purple" />
              <SkillCard icon={Palette} title="Adaptativo" color="pink" />
              <SkillCard icon={Video} title="Colaborativo" color="cyan" />
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Experiencia Laboral">
        <div className="max-w-5xl mx-auto">
          <ExperienceCard
            title="Tester con Playwright / TypeScript"
            company="Elte Group (Cracovia)"
            url="https://eltegroup.eu/"
            period="Actualidad"
            description="Tester y automatizador de test con herramientas como Playwright y TypeScript"
            icon={TestTube}
            color="purple"
            delay={0}
          />

          <ExperienceCard
            title="Diseñador Gráfico y Editor de Video"
            company="DoingLight Technologies"
            url="https://www.doinglight.es/"
            period="09/2022 - 07/2024"
            description="Diseñador de modelos en 3D (CINEMA 4D) y edición de video (ADOBE AFTER EFFECTS)"
            icon={Palette}
            color="pink"
            delay={0.2}
          />

          <ExperienceCard
            title="Editor y Montador de Videos"
            company="Estudio Numerico"
            url="https://www.estudionumerico.com/casosexito/"
            period="03/2022 - 06/2022"
            description="Editor y montador de videos publicitarios enfocados al comercio (ADOBE AFTER EFFECTS)"
            icon={Video}
            color="cyan"
            delay={0.4}
          />
        </div>
      </Section>

      <Section id="featured-video" title="Proyecto audiovisual destacado">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 text-center">
            <Video className="w-12 h-12 mx-auto mb-4 text-pink-400" />

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Proyecto audiovisual destacado
            </h3>

            <p className="text-gray-300 text-lg mb-3">
              Vídeo profesional realizado durante mi etapa en DoingLight Technologies.
            </p>

            <p className="text-gray-400 mb-8">
              <span className="text-pink-400 font-semibold">Rol:</span> edición, montaje y acabado visual.
            </p>

            <a
              href="/VIDEO_VENTANA.mp4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300 transform hover:scale-105"
            >
              <ExternalLink className="w-5 h-5" />
              Ver vídeo
            </a>
          </div>
        </motion.div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Formación">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <EducationCard
            title="Desarrollo de Aplicaciones Multiplataforma"
            level="Ciclo Grado Superior"
            delay={0}
          />
          <EducationCard
            title="Animación 3D, Juegos y Entornos Interactivos"
            level="Ciclo Grado Superior"
            delay={0.1}
          />
          <EducationCard
            title="Video DJ - Disc Jockey"
            level="Ciclo Grado Medio"
            delay={0.2}
          />
          <EducationCard
            title="Escuela Secundaria Obligatoria"
            level="ESO"
            delay={0.3}
          />
        </div>
      </Section>

      {/* Skills & Languages */}
      <Section id="skills" title="Habilidades & Idiomas">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Code className="w-6 h-6 text-purple-400" />
              Tecnologías
            </h3>
            <div className="flex flex-wrap gap-3">
              <TechBadge name="TypeScript" />
              <TechBadge name="Playwright" />
              <TechBadge name="Python" />
              <TechBadge name="Java" />
              <TechBadge name="Cinema 4D" />
              <TechBadge name="After Effects" />
              <TechBadge name="React" />
              <TechBadge name="Testing" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/10 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Globe className="w-6 h-6 text-cyan-400" />
              Idiomas
            </h3>
            <div className="space-y-4">
              <LanguageBar language="Español" level="Nativo" percentage={100} />
              <LanguageBar language="Inglés" level="Nivel Medio" percentage={60} />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contacto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="flex flex-col items-center gap-6">
              <motion.a
                href="mailto:adrian2000tg3@gmail.com"
                whileHover={{ scale: 1.03 }}
                className="w-full max-w-2xl bg-white/5 rounded-2xl p-8 md:p-10 hover:bg-white/10 transition-all text-center"
              >
                <Mail className="w-10 h-10 mx-auto mb-4 text-purple-400" />
                <p className="text-gray-400 text-sm mb-2">Email</p>
                <p className="text-xl md:text-2xl font-semibold break-words">
                  adrian2000tg3@gmail.com
                </p>
              </motion.a>

              <div className="w-full max-w-md">
                <ContactItem
                  icon={Phone}
                  label="Teléfono"
                  value="633-93-73-52"
                  href="tel:633937352"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-white/10">
        <p>© 2026 Adrián Tarancón. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

// Components
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} ref={ref} className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          {title}
        </h2>
        {children}
      </motion.div>
    </section>
  );
}

function SkillCard({ icon: Icon, title, color }: { icon: any; title: string; color: string }) {
  const colors = {
    purple: 'from-purple-600 to-purple-800',
    pink: 'from-pink-600 to-pink-800',
    cyan: 'from-cyan-600 to-cyan-800'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 2 }}
      className={`bg-gradient-to-br ${colors[color as keyof typeof colors]} p-6 rounded-2xl text-center`}
    >
      <Icon className="w-12 h-12 mx-auto mb-3" />
      <p className="font-semibold text-lg">{title}</p>
    </motion.div>
  );
}

function ExperienceCard({
  title,
  company,
  url,
  period,
  description,
  icon: Icon,
  color,
  delay
}: {
  title: string;
  company: string;
  url: string;
  period: string;
  description: string;
  icon: any;
  color: string;
  delay: number;
}) {
  const colors = {
    purple: 'border-purple-500/30 hover:border-purple-500/60 bg-purple-500/5',
    pink: 'border-pink-500/30 hover:border-pink-500/60 bg-pink-500/5',
    cyan: 'border-cyan-500/30 hover:border-cyan-500/60 bg-cyan-500/5'
  };

  const iconColors = {
    purple: 'text-purple-400',
    pink: 'text-pink-400',
    cyan: 'text-cyan-400'
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ x: 10 }}
      className={`mb-8 border-l-4 ${colors[color as keyof typeof colors]} pl-8 py-6 rounded-r-2xl transition-all duration-300`}
    >
      <div className="flex items-start gap-4">
        <div className={`${iconColors[color as keyof typeof iconColors]} mt-1`}>
          <Icon className="w-8 h-8" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 flex items-center gap-2 mb-2 transition-colors"
          >
            {company}
            <ExternalLink className="w-4 h-4" />
          </a>
          <p className="text-gray-400 mb-3">{period}</p>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function EducationCard({ title, level, delay }: { title: string; level: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <GraduationCap className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-purple-400">{level}</p>
        </div>
      </div>
    </motion.div>
  );
}

function TechBadge({ name }: { name: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.1 }}
      className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all cursor-default"
    >
      {name}
    </motion.span>
  );
}

function LanguageBar({ language, level, percentage }: { language: string; level: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-semibold">{language}</span>
        <span className="text-gray-400">{level}</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
        />
      </div>
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  subValue,
  href
}: {
  icon: any;
  label: string;
  value: string;
  subValue?: string;
  href?: string;
}) {
  const content = (
    <div className="text-center">
      <Icon className="w-8 h-8 mx-auto mb-3 text-purple-400" />
      <p className="text-gray-400 text-sm mb-1">{label}</p>
      <p className="font-semibold break-words overflow-wrap-anywhere">{value}</p>
      {subValue && <p className="text-sm text-gray-400 mt-1">{subValue}</p>}
    </div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        className="block bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all"
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 rounded-xl p-6"
    >
      {content}
    </motion.div>
  );
}