import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { Analytics } from "@vercel/analytics/react";
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
  Download,
  Award
} from 'lucide-react';

import fotoPerfil from "../assets/adrian.png";
import championsImg from "../assets/CHAMPIONS.png";
import reyCerdosImg from "../assets/REYCERDOS.png";
import criptografiaImg from "../assets/criptografia.png";
import memoryGameImg from "../assets/MEMORYGAME.png";

import videoVentanaMp4 from "../assets/VIDEO_VENTANA.mp4";
import logoIntroMp4 from "../assets/LOGO_INTRO.mp4";
import presentacionMp4 from "../assets/PRESENTACION.mp4";
import tubo340Mp4 from "../assets/TUBO_340.mp4";
import accesoPdf from "../assets/acceso.pdf";
import pythonPdf from "../assets/python.pdf";

import difusorNuevoJpg from "../assets/DIFUSOR_NUEVO.jpg";
import difusorNuevo2Jpg from "../assets/DIFUSOR_NUEVO2.jpg";
import plano1Jpg from "../assets/PLANO1.jpg";
import plano3Jpg from "../assets/PLANO3.jpg";
import plano3TragaluzPng from "../assets/PLANO3_tragaluz.png";
import plano4TragaluzPng from "../assets/PLANO4_tragaluz.png";

import cvPdf from "../assets/mi-cv.pdf";


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
        className="relative min-h-screen flex items-center justify-center overflow-visible"
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
              className="text-5xl md:text-7xl leading-[1.17] pt-2 font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
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
                href={cvPdf}
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
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
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

      <Section id="projects" title="Proyectos de desarrollo">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* CHAMPIONS */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 h-full">
              <div className="flex flex-col gap-4 h-full">

                <div className="h-72 flex items-center justify-center overflow-visible">
                  <div className="transition-transform duration-300 hover:scale-135 scale-125">
                    <img
                      src={championsImg}
                      alt="Champions Games"
                      className="w-130 h-130 object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Champions Games
                </h3>

                <p className="text-gray-300">
                  Proyecto web full stack desarrollado en equipo, con arquitectura separada de frontend y backend,
                  integrado con base de datos MongoDB.
                </p>

                <p className="text-gray-400">
                  <span className="text-purple-400 font-semibold">Tecnologías:</span> React, Node.js, Express, MongoDB
                </p>

                <p className="text-gray-400">
                  <span className="text-pink-400 font-semibold">Mi aportación:</span> desarrollo frontend, construcción de vistas y componentes e integración con backend.
                </p>
                <p className="text-gray-400">
                  <span className="text-yellow-400 font-semibold">Login de prueba:</span> <br /> Usuario: prueba <br /> Contraseña: 12345678
                </p>

                <div className="flex flex-wrap gap-3 mt-auto pt-2">
                  <a
                    href="https://github.com/cristobaldp/PaginaWeb_ChampionsGames-master.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    Ver repositorio
                  </a>

                  <a
                    href="https://championsweb.adriantarancon.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver demo
                  </a>
                </div>
              </div>
            </div>

            {/* GODOT */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 h-full">
              <div className="flex flex-col gap-4 h-full">

                <div className="h-72 flex items-center justify-center overflow-visible">
                  <div className="transition-transform duration-300 hover:scale-135 scale-125">
                    <img
                      src={reyCerdosImg}
                      alt="Prototipo de videojuego con Godot"
                      className="w-90 h-90 object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Prototipo de videojuego con Godot
                </h3>

                <p className="text-gray-300">
                  Demo de videojuego desarrollada de forma individual con Godot y GDScript,
                  integrada con Firebase y desplegada en web. Incluye launcher propio con interfaz en Python.
                </p>

                <p className="text-gray-400">
                  <span className="text-purple-400 font-semibold">Tecnologías:</span> Godot, GDScript, Python, Firebase, Render
                </p>

                <p className="text-gray-400">
                  <span className="text-pink-400 font-semibold">Mi aportación:</span> desarrollo completo del juego, lógica, integración con base de datos y despliegue.
                </p>

                <div className="flex flex-wrap gap-3 mt-auto pt-2">
                  <a
                    href="https://github.com/AdriTg00/VIDEOJUEGO_2D.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    Ver repositorio
                  </a>

                  <a
                    href="/juego/juego.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Jugar demo
                  </a>
                </div>
              </div>
            </div>

            {/* SECUREDROP */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 h-full">
              <div className="flex flex-col gap-4 h-full">

                <div className="h-72 flex items-center justify-center">
                  <div className="transition-transform duration-300 hover:scale-105">
                    <img
                      src={criptografiaImg}
                      alt="Proyecto de criptografía en Java"
                      className="w-90 h-90 object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  SecureDrop — Securización en Java
                </h3>

                <p className="text-gray-300">
                  Aplicación cliente-servidor por consola desarrollada en equipo y en Java mediante sockets TCP,
                  orientada a autenticación, envío de mensajes y control de acceso por roles.
                  Diseñada como base para implementar mejoras de seguridad.
                </p>

                <p className="text-gray-400">
                  <span className="text-purple-400 font-semibold">Tecnologías:</span> Java, TCP Sockets, SSL/TLS, AES, RSA
                </p>

                <p className="text-gray-400">
                  <span className="text-pink-400 font-semibold">Mi aportación:</span> desarrollo de arquitectura cliente-servidor,
                  autenticación, gestión de mensajes y evolución hacia un sistema seguro.
                </p>

                <div className="flex flex-wrap gap-3 mt-auto pt-2">
                  <a
                    href="https://github.com/AdriTg00/Criptografia.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    Ver repositorio
                  </a>
                </div>
              </div>
            </div>
            {/* MEMORY GAME ANDROID */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 h-full">
              <div className="flex flex-col gap-4 h-full">

                <div className="h-72 flex items-center justify-center overflow-visible">
                  <div className="transition-transform duration-300 hover:scale-110">
                    <img
                      src={memoryGameImg}
                      alt="Juego de memoria desarrollado en Android Studio"
                      className="w-90 h-90 object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Juego de Memoria Android
                </h3>

                <p className="text-gray-300">
                  Minijuego de cartas por parejas desarrollado en <span className="text-purple-400 font-semibold">Android Studio</span>,
                  enfocado en la lógica de emparejamiento, interacción visual y dinámica de juego.
                </p>

                <p className="text-gray-400">
                  <span className="text-purple-400 font-semibold">Tecnologías:</span> Android Studio, Java, XML
                </p>

                <p className="text-gray-400">
                  <span className="text-pink-400 font-semibold">Mi aportación:</span> desarrollo completo del proyecto de forma individual,
                  como trabajo escolar, incluyendo lógica del juego, interfaz y estructura general de la aplicación.
                </p>

                <div className="flex flex-wrap gap-3 mt-auto pt-2">
                  <a
                    href="https://github.com/AdriTg00/game-card-android"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    Ver repositorio
                  </a>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </Section>
      <Section id="featured-video" title="Proyectos audiovisuales">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 text-center">
              <Video className="w-10 h-10 mx-auto mb-5 text-pink-400" />
              <p className="text-gray-300 text-base md:text-lg mb-3 font-semibold">
                Vídeo publicitario
              </p>
              <p className="text-gray-400 mb-6 text-sm md:text-base">
                Vídeo profesional realizado durante mi etapa en DoingLight Technologies.
              </p>
              <a
                href={videoVentanaMp4}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                Ver vídeo
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 text-center">
              <Video className="w-10 h-10 mx-auto mb-5 text-pink-400" />
              <p className="text-gray-300 text-base md:text-lg mb-3 font-semibold">
                Intro .mp4
              </p>
              <p className="text-gray-400 mb-6 text-sm md:text-base">
                Pieza audiovisual orientada a presentación visual e identidad de marca.
              </p>
              <a
                href={logoIntroMp4}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                Ver vídeo
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 text-center">
              <Video className="w-10 h-10 mx-auto mb-5 text-pink-400" />
              <p className="text-gray-300 text-base md:text-lg mb-3 font-semibold">
                Presentación
              </p>
              <p className="text-gray-400 mb-6 text-sm md:text-base">
                Trabajo de edición, montaje y acabado visual para presentación profesional.
              </p>
              <a
                href={presentacionMp4}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                Ver vídeo
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 text-center">
              <Video className="w-10 h-10 mx-auto mb-5 text-pink-400" />
              <p className="text-gray-300 text-base md:text-lg mb-3 font-semibold">
                Tubo 340
              </p>
              <p className="text-gray-400 mb-3 text-sm md:text-base">
                Variaciones audiovisuales de producto con enfoque visual y publicitario.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <a
                  href={tubo340Mp4}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver vídeo
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      <Section id="renders" title="Renders y trabajo 3D">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href={difusorNuevoJpg}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-pink-500/40 transition-all duration-300"
            >
              <img
                src={difusorNuevoJpg}
                alt="Difusor 3D"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center text-gray-300 font-semibold">
                Difusor 3D
              </div>
            </a>

            <a
              href={difusorNuevo2Jpg}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-pink-500/40 transition-all duration-300"
            >
              <img
                src={difusorNuevo2Jpg}
                alt="Difusor 3D vista alternativa"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center text-gray-300 font-semibold">
                Difusor 3D · Vista alternativa
              </div>
            </a>

            <a
              href={plano1Jpg}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-pink-500/40 transition-all duration-300"
            >
              <img
                src={plano1Jpg}
                alt="Plano técnico 1"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center text-gray-300 font-semibold">
                Plano técnico 1
              </div>
            </a>

            <a
              href={plano3Jpg}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-pink-500/40 transition-all duration-300"
            >
              <img
                src={plano3Jpg}
                alt="Plano técnico 3"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center text-gray-300 font-semibold">
                Plano técnico 3
              </div>
            </a>

            <a
              href={plano3TragaluzPng}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-pink-500/40 transition-all duration-300"
            >
              <img
                src={plano3TragaluzPng}
                alt="Plano con tragaluz"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center text-gray-300 font-semibold">
                Plano con tragaluz
              </div>
            </a>

            <a
              href={plano4TragaluzPng}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-pink-500/40 transition-all duration-300"
            >
              <img
                src={plano4TragaluzPng}
                alt="Plano con tragaluz variante"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center text-gray-300 font-semibold">
                Plano con tragaluz · Variante
              </div>
            </a>
          </div>
        </motion.div>
      </Section>

      {/* Certifications Section */}
      {/* Certifications Section */}
      <Section id="certifications" title="Licencias y certificaciones">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <CertificationCard
            title="Python TOTAL - Programador Avanzado en 16 días (Incluye IA)"
            provider="Udemy"
            credentialUrl="https://www.udemy.com/certificate/UC-66228eb6-186c-4066-be69-1c776de4b12a/"
            downloadUrl={pythonPdf}
            delay={0}
          />

          <CertificationCard
            title="Acceso a datos"
            provider="Udemy"
            credentialUrl="https://www.udemy.com/certificate/UC-dd44fa70-6b23-4db0-a2af-7b195862ab4a/"
            downloadUrl={accesoPdf}
            delay={0.1}
          />
        </div>
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
            <h3 className="text-2xl leading-[1.4] pt-1 font-bold mb-6 flex items-center gap-3">
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
      <Analytics />
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
        <h2 className="text-4xl md:text-5xl leading-[1.4] font-bold text-center mb-16 pt-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
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
          <h3 className="text-2xl leading-[1.4] pt-1 font-bold mb-2">{title}</h3>
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
          <h3 className="text-xl leading-[1.4] pt-1 font-bold mb-2">{title}</h3>
          <p className="text-purple-400">{level}</p>
        </div>
      </div>
    </motion.div>
  );
}
function CertificationCard({
  title,
  provider,
  credentialUrl,
  downloadUrl,
  delay
}: {
  title: string;
  provider: string;
  credentialUrl?: string;
  downloadUrl?: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <Award className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />

        <div className="flex-1">
          <h3 className="text-xl leading-[1.4] pt-1 font-bold mb-2">{title}</h3>
          <p className="text-cyan-400 font-medium mb-4">{provider}</p>

          <div className="flex flex-wrap gap-3">
            {credentialUrl && (
              <a
                href={credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Mostrar credencial
              </a>
            )}

            {downloadUrl && (
              <a
                href={downloadUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Descargar PDF
              </a>
            )}
          </div>
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