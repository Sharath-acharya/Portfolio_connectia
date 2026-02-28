import { useEffect, useRef, useState } from 'react'

function App() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observerRef.current?.observe(el)
    })

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      observerRef.current?.disconnect()
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Add smooth scroll with offset for fixed nav
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
      
      // Add flash effect to section
      element.classList.add('section-flash')
      setTimeout(() => {
        element.classList.remove('section-flash')
      }, 1000)
    }
  }

  const skills = {
    languages: ['C++', 'C', 'Java', 'SQL', 'Python'],
    technologies: ['Power BI', 'Microsoft SQL Server', 'Figma', 'MySQL', 'VS Code', 'GitHub', 'Canva', 'MongoDB', 'Excel']
  }

  interface Project {
    title: string
    description: string
    tech: string[]
    link?: string
  }

  const projects: Project[] = [
    {
      title: 'Data Analytics Dashboard using Power BI',
      description: 'Designed and developed an interactive dashboard for visualizing and analyzing business data. Performed data cleaning, transformation, and modeling to derive accurate insights.',
      tech: ['Power BI', 'SQL', 'Excel', 'DAX'],
      link: 'github.com/name/repo'
    },
    {
      title: 'Estimation of Soil Parameters using RGB Images and ML',
      description: 'Developed a machine-learning pipeline to estimate soil properties from RGB soil images. Experimented with ML algorithms (Random Forest, SVM, KNN) to identify the most suitable model for agricultural soil assessment.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy']
    }
  ]

  const certifications = [
    { name: 'Google Data Analytics', org: 'Coursera', year: '2023' },
    { name: 'Programming in Java', org: 'NPTEL', year: '2022' }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Animated mesh gradient */}
        <div 
          className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] animate-float-mesh"
          style={{ 
            top: '20%', 
            left: '10%',
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`
          }}
        ></div>
        <div 
          className="absolute w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-float-mesh-delayed"
          style={{ 
            top: '60%', 
            right: '15%',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
          }}
        ></div>
        <div 
          className="absolute w-[350px] h-[350px] bg-teal-500/10 rounded-full blur-[100px] animate-float-mesh-slow"
          style={{ 
            bottom: '20%', 
            left: '50%',
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
          }}
        ></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-cyan-400/20 rotate-45 animate-float-shape-1"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-blue-400/20 animate-float-shape-2"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 border-2 border-teal-400/20 rounded-full animate-float-shape-3"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-cyan-400/10 rotate-12 animate-float-shape-4"></div>
        <div className="absolute bottom-1/4 right-1/4 w-14 h-14 border-2 border-blue-400/15 rounded-full animate-float-shape-5"></div>
        
        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="url(#gradient1)" strokeWidth="1" className="animate-draw-line-1" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="url(#gradient2)" strokeWidth="1" className="animate-draw-line-2" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Scanline effect */}
        <div className="absolute inset-0 bg-scanline opacity-5"></div>
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-glow-pulse-1 shadow-lg shadow-cyan-500/50"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-glow-pulse-2 shadow-lg shadow-blue-500/50"></div>
        <div className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-teal-400 rounded-full animate-glow-pulse-3 shadow-lg shadow-teal-500/50"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-xl z-50 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
              Sharath Acharya
            </h1>
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize hover:text-cyan-400 transition-all duration-300 relative group"
                >
                  {section}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full shadow-lg shadow-cyan-500/50"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20 z-10">
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-particle-1" style={{ top: '20%', left: '10%' }}></div>
          <div className="absolute w-3 h-3 bg-blue-400 rounded-full animate-particle-2" style={{ top: '40%', right: '15%' }}></div>
          <div className="absolute w-2 h-2 bg-teal-400 rounded-full animate-particle-3" style={{ bottom: '30%', left: '20%' }}></div>
          <div className="absolute w-4 h-4 bg-cyan-300 rounded-full animate-particle-4" style={{ top: '60%', right: '25%' }}></div>
          <div className="absolute w-2 h-2 bg-blue-300 rounded-full animate-particle-5" style={{ bottom: '20%', right: '30%' }}></div>
          <div className="absolute w-3 h-3 bg-teal-300 rounded-full animate-particle-6" style={{ top: '70%', left: '40%' }}></div>
          
          {/* Additional floating elements */}
          <div className="absolute w-1 h-20 bg-gradient-to-b from-cyan-400/0 via-cyan-400/50 to-cyan-400/0 animate-float-line-1" style={{ top: '10%', left: '5%' }}></div>
          <div className="absolute w-1 h-16 bg-gradient-to-b from-blue-400/0 via-blue-400/50 to-blue-400/0 animate-float-line-2" style={{ top: '50%', right: '10%' }}></div>
          <div className="absolute w-20 h-1 bg-gradient-to-r from-teal-400/0 via-teal-400/50 to-teal-400/0 animate-float-line-3" style={{ bottom: '15%', left: '15%' }}></div>
        </div>

        {/* Animated corner accents */}
        <div className="absolute top-20 left-10 w-16 h-16 border-l-2 border-t-2 border-cyan-400/30 animate-corner-glow-1"></div>
        <div className="absolute top-20 right-10 w-16 h-16 border-r-2 border-t-2 border-blue-400/30 animate-corner-glow-2"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 border-l-2 border-b-2 border-teal-400/30 animate-corner-glow-3"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 border-r-2 border-b-2 border-cyan-400/30 animate-corner-glow-4"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-block animate-float-badge">
              <span className="text-cyan-400 text-sm md:text-base font-semibold px-5 py-2.5 bg-cyan-400/10 rounded-full border border-cyan-400/30 backdrop-blur-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300">
                ✨ Welcome to My Data Universe
              </span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-gray-100">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
                  Sharath Acharya
                </span>
              </h1>
              
              <div className="space-y-2">
                <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                  Data Analyst & Insights Architect
                </p>
                <p className="text-lg md:text-xl text-cyan-400/80 font-medium">
                  Transforming Complex Data into Strategic Business Intelligence
                </p>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              I specialize in uncovering hidden patterns and delivering actionable insights through advanced analytics. 
              Passionate about transforming complex datasets into strategic business intelligence that drives data-driven 
              decision making and accelerates business growth.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-cyan-400/50 rounded-xl font-semibold hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Connect
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-cyan-400/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>

            {/* Animated stats line */}
            <div className="flex items-center gap-6 pt-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span>Available for opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Open to collaboration</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center animate-slide-in-right">
            <div className="relative group">
              {/* Multiple animated rings */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition duration-1000 animate-pulse-slow"></div>
              <div className="absolute -inset-8 border-2 border-cyan-400/20 rounded-full animate-spin-slow"></div>
              <div className="absolute -inset-12 border-2 border-blue-400/10 rounded-full animate-spin-reverse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
              
              {/* Orbiting dots */}
              <div className="absolute -inset-8">
                <div className="absolute w-3 h-3 bg-cyan-400 rounded-full animate-orbit-1 shadow-lg shadow-cyan-500/50"></div>
                <div className="absolute w-3 h-3 bg-blue-400 rounded-full animate-orbit-2 shadow-lg shadow-blue-500/50"></div>
                <div className="absolute w-3 h-3 bg-teal-400 rounded-full animate-orbit-3 shadow-lg shadow-teal-500/50"></div>
              </div>

              <img
                src="/profile.jpeg"
                alt="Sharath Acharya - Data Analyst"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/50 group-hover:scale-105 transition-transform duration-500 z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        data-animate
        className={`relative py-20 px-4 z-10 transition-all duration-1000 ${
          isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">🎓 Education</h3>
                <div className="space-y-2">
                  <p className="text-xl font-semibold">Moodlakatte Institute of Technology Kundapura</p>
                  <p className="text-gray-300">BE in Computer Science and Engineering (Data Science)</p>
                  <p className="text-blue-400 font-semibold">CGPA: 8/10.0</p>
                  <p className="text-gray-400">2022 - 2026</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">🏆 Achievements</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▹</span>
                    <span>President - ANALYTICA (Data Science Forum): Organized workshops and hackathons to promote data-driven learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▹</span>
                    <span>Student Council Member: Coordinated college events and supported academic initiatives</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm an aspiring Data Analyst with strong foundations in data visualization, statistical analysis, 
                and database management. I have experience in building dashboards, predictive models, and applying 
                machine learning to solve real-world problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                As President of ANALYTICA (Data Science Forum), I organized workshops and hackathons to promote 
                data-driven learning. I'm passionate about leveraging analytics to support business decisions and 
                create impactful solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:acharyasharath2004@gmail.com"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors hover:scale-110 duration-300"
                >
                  <span>📧</span> acharyasharath2004@gmail.com
                </a>
                <a
                  href="tel:8792162273"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors hover:scale-110 duration-300"
                >
                  <span>📱</span> 8792162273
                </a>
                <span className="flex items-center gap-2 text-blue-400">
                  <span>📍</span> Udupi
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        data-animate
        className={`relative py-20 px-4 z-10 transition-all duration-1000 ${
          isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Skills & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">💻 Languages</h3>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-500/20 rounded-lg border border-blue-400/30 hover:bg-blue-500/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">🛠️ Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-purple-500/20 rounded-lg border border-purple-400/30 hover:bg-purple-500/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm hover:border-pink-500/50 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6 text-pink-400">📜 Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={cert.name} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <div>
                    <p className="font-semibold text-lg">{cert.name}</p>
                    <p className="text-gray-400">{cert.org}</p>
                  </div>
                  <span className="text-pink-400 font-semibold">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        data-animate
        className={`relative py-20 px-4 z-10 transition-all duration-1000 ${
          isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 rounded-full text-sm border border-blue-400/30 hover:bg-blue-500/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={`https://${project.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                  >
                    View Project <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        data-animate
        className={`relative py-20 px-4 z-10 transition-all duration-1000 ${
          isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:acharyasharath2004@gmail.com"
              className="group p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"/>
                  <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-lg">Email</h3>
              <p className="text-gray-400 text-sm break-all">acharyasharath2004@gmail.com</p>
            </a>
            <a
              href="tel:8792162273"
              className="group p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-lg">Phone</h3>
              <p className="text-gray-400 text-sm">+91 8792162273</p>
            </a>
            <a
              href="https://linkedin.com/in/sharath-acharya"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-[#0A66C2]/50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#0A66C2]/20"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 mx-auto text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-lg">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Connect with me</p>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/sharathAcharya"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-gray-400 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-gray-500/20"
              title="GitHub"
            >
              <svg className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="mailto:acharyasharath2004@gmail.com"
              className="group p-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-red-400 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-red-500/20"
              title="Gmail"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/sharath-acharya"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-[#0A66C2] transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#0A66C2]/20"
              title="LinkedIn"
            >
              <svg className="w-8 h-8 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-gray-800 z-10 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sharath Acharya
              </h3>
              <p className="text-gray-400 text-sm">
                Data Analyst passionate about transforming data into actionable insights.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-300">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-cyan-400 transition-colors text-left">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-cyan-400 transition-colors text-left">About</button>
                <button onClick={() => scrollToSection('projects')} className="text-gray-400 hover:text-cyan-400 transition-colors text-left">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-cyan-400 transition-colors text-left">Contact</button>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-300">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/sharathAcharya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/20"
                  title="GitHub"
                >
                  <svg className="w-6 h-6 text-gray-400 hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="mailto:acharyasharath2004@gmail.com"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/20"
                  title="Gmail"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/sharath-acharya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#0A66C2]/20"
                  title="LinkedIn"
                >
                  <svg className="w-6 h-6 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Sharath Acharya. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
