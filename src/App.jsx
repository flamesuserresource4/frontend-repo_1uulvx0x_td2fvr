import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Github, Linkedin, Mail, ChevronRight, ExternalLink } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/60 border-b border-white/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-fuchsia-600">
          MyPortfolio
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          <a href="/test" className="ml-2 px-3 py-1.5 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors text-xs">System Test</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-8 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-indigo-50 to-fuchsia-50" />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Available for freelance work
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Building modern, playful, interactive experiences
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl">
            I’m a developer and designer crafting delightful products with React, Three/Spline, and clean, accessible design.
          </p>

          <div className="flex items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors">
              See my work <ChevronRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-300 bg-white hover:bg-slate-50 text-slate-800">
              Get in touch <Mail size={18} />
            </a>
          </div>

          <div className="flex items-center gap-4 pt-2 text-slate-700">
            <a href="#" aria-label="GitHub" className="hover:text-slate-900"><Github /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-slate-900"><Linkedin /></a>
            <a href="#contact" aria-label="Email" className="hover:text-slate-900"><Mail /></a>
          </div>
        </div>

        <div className="relative h-[360px] sm:h-[420px] md:h-[520px]">
          <div className="absolute inset-0 rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden bg-white">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const projects = [
    {
      title: 'Interactive 3D Landing',
      desc: 'Hero section with Spline/Three.js, responsive and high-perf.',
      tech: ['React', 'Spline', 'Tailwind'],
      link: '#',
    },
    {
      title: 'Dashboard UI Kit',
      desc: 'Accessible components with a modern, minimal aesthetic.',
      tech: ['React', 'Tailwind'],
      link: '#',
    },
    {
      title: 'API + UI Boilerplate',
      desc: 'FastAPI backend with a clean React front-end scaffold.',
      tech: ['FastAPI', 'MongoDB', 'React'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Featured Projects</h2>
            <p className="text-slate-600 mt-2">A selection of things I loved building recently.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">All projects <ExternalLink size={16} /></a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <div key={idx} className="group rounded-xl border border-slate-200 p-5 bg-white hover:shadow-lg transition-shadow">
              <div className="h-36 rounded-lg bg-gradient-to-br from-sky-100 via-indigo-100 to-fuchsia-100 mb-4" />
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">{t}</span>
                ))}
              </div>
              <a href={p.link} className="inline-flex items-center gap-1 text-sm text-slate-700 mt-4 hover:text-slate-900">
                View project <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50/60 via-transparent to-fuchsia-50/60" />
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-bold mb-2">About Me</h3>
          <p className="text-slate-600 leading-relaxed">
            I design and build engaging interfaces with a focus on performance, 
            accessibility, and delightful motion. I enjoy translating ideas into clean, 
            maintainable code and polished experiences.
          </p>
          <ul className="mt-4 text-slate-700 text-sm grid sm:grid-cols-2 gap-2">
            <li>• React, TypeScript</li>
            <li>• Tailwind, Design Systems</li>
            <li>• Spline / Three.js</li>
            <li>• FastAPI, MongoDB</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-bold mb-2">Highlights</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Stat kpi="20+" label="Projects shipped" />
            <Stat kpi="5y" label="Experience" />
            <Stat kpi="100%" label="Client satisfaction" />
            <Stat kpi="∞" label="Curiosity" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ kpi, label }) {
  return (
    <div className="rounded-lg border border-slate-200 p-4 bg-slate-50">
      <div className="text-2xl font-extrabold">{kpi}</div>
      <div className="text-slate-600 text-sm">{label}</div>
    </div>
  )
}

function Contact() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.detail || 'Failed to send')
      setStatus({ type: 'success', message: 'Thanks! Your message has been sent.' })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center">Let’s work together</h2>
        <p className="text-slate-600 text-center mt-2 mb-8">Have a project in mind? Drop a message and I’ll get back to you.</p>

        <form onSubmit={onSubmit} className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input name="name" required value={form.name} onChange={onChange} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" name="email" required value={form.email} onChange={onChange} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Subject</label>
            <input name="subject" value={form.subject} onChange={onChange} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="What’s this about?" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea name="message" required rows={5} value={form.message} onChange={onChange} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Tell me a bit about your project..." />
          </div>

          {status && (
            <div className={`text-sm rounded-md px-3 py-2 ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
              {status.message}
            </div>
          )}

          <button disabled={loading} className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-md bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60">
            {loading ? 'Sending...' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-sm">© {new Date().getFullYear()} MyPortfolio — Crafted with care.</p>
        <div className="flex items-center gap-4 text-slate-700">
          <a href="#" className="hover:text-slate-900"><Github size={18} /></a>
          <a href="#" className="hover:text-slate-900"><Linkedin size={18} /></a>
          <a href="#contact" className="hover:text-slate-900"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
