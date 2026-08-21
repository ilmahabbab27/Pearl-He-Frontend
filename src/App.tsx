import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import logo from '@/assets/logo-BqvBdEiO.svg'
import { SiteHeader } from './components/site-header'
import { SiteFooter } from './components/site-footer'
import HomePage from './routes/index'
import AboutPage from './routes/about'
import ServicesPage from './routes/services'
import ProjectsPage from './routes/projects'
import ProjectDetailPage from './routes/project-detail'
import TeamPage from './routes/team'
import TestimonialsPage from './routes/testimonials'
import BlogsPage from './routes/blogs'
import BlogDetailPage from './routes/blog-detail'
import ContactPage from './routes/contact'

const queryClient = new QueryClient()

function SplashScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1400)
    return () => window.clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#003763] transition-opacity duration-700 ease-out">
      <div className="flex flex-col items-center gap-6 text-center text-white">
        <div className="relative animate-[pulse_1.4s_ease-in-out_infinite]">
          <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-accent/25 blur-3xl" />
          <img src={logo} alt="Pearl Heritance logo" className="h-16 w-auto md:h-20" />
        </div>
        <div className="space-y-3">
          <div className="font-mono text-[9px] uppercase tracking-[0.55em] text-[#8edcff]">
            PEARL HERITANCE
          </div>
          <div className="flex items-center justify-center gap-2 border-t border-white/15 pt-3">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white [animation-delay:-0.3s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white [animation-delay:-0.15s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white" />
          </div>
          <div className="text-[10px] uppercase tracking-[0.35em] text-white/75">
            Design • Build • Project Management
          </div>
        </div>
      </div>
    </div>
  )
}

function PageLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.pathname])

  return (
    <div className="relative min-h-screen technical-grid">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  )
}

function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! Ask about services, projects, design, build, or contact details.',
    },
  ])

  const getReply = (value: string) => {
    const query = value.toLowerCase()

    if (!query.trim()) {
      return 'Please type a question so I can help.'
    }

    if (/(hello|hi|hey|greetings)/.test(query)) {
      return 'Hello! We help with architecture, interior design, construction and project management.'
    }

    if (/(service|services|expertise|design|build|interior)/.test(query)) {
      return 'Pearl Heritance offers design, build, interior solutions, project coordination, and full-service delivery for residential and commercial spaces.'
    }

    if (/(project|portfolio|work|gallery|recent|completed)/.test(query)) {
      return 'You can view our recent projects in the portfolio section, including residential, commercial, and hospitality work.'
    }

    if (/(contact|call|email|book|appointment|quote|estimate)/.test(query)) {
      return 'You can contact us through the contact page to discuss your project requirements and request a consultation.'
    }

    if (/(price|cost|budget|estimate|quote)/.test(query)) {
      return 'Project cost depends on scope, size, and complexity. The best next step is to share your brief with our team for a tailored estimate.'
    }

    if (/(timeline|duration|how long|when)/.test(query)) {
      return 'Project timelines vary by scope, but we guide each client through a structured process from concept to handover.'
    }

    if (/(residential|home|villa|house)/.test(query)) {
      return 'We design and deliver residential projects with a focus on lifestyle, functionality, and long-term value.'
    }

    if (/(commercial|office|hospitality|retail)/.test(query)) {
      return 'Our team supports commercial and hospitality spaces with practical design, coordination, and delivery expertise.'
    }

    return 'I can help with services, project portfolio, budgets, timelines, and contact details. Ask me anything related to your project.'
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmed = input.trim()
    if (!trimmed) return

    setMessages((current) => [
      ...current,
      { sender: 'user', text: trimmed },
      { sender: 'bot', text: getReply(trimmed) },
    ])
    setInput('')
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-4 w-[340px] overflow-hidden border border-border bg-background shadow-2xl ring-1 ring-border/80">
          <div className="flex items-center justify-between border-b border-border bg-primary px-4 py-3 text-primary-foreground">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary-foreground/80">
                Chat
              </div>
              <div className="text-sm font-bold uppercase tracking-tight">Pearl Assistant</div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-lg font-semibold text-primary-foreground/80 transition-opacity hover:text-primary-foreground"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="max-h-[320px] space-y-3 overflow-y-auto bg-card p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.sender}-${index}`}
                className={`max-w-[85%] rounded-md border px-3 py-2 text-sm leading-relaxed ${
                  message.sender === 'bot'
                    ? 'border-border bg-background text-foreground'
                    : 'ml-auto border-accent/30 bg-primary text-primary-foreground'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-border bg-background p-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about our services..."
                className="w-full border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-accent"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-accent bg-primary text-xl text-primary-foreground shadow-lg transition-transform duration-200 hover:scale-105"
        aria-label="Toggle chat"
      >
        💬
      </button>
    </div>
  )
}

function App() {
  return (
    <>
      <SplashScreen />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageLayout><HomePage /></PageLayout>} />
            <Route path="/services" element={<PageLayout><ServicesPage /></PageLayout>} />
            <Route path="/projects" element={<PageLayout><ProjectsPage /></PageLayout>} />
            <Route path="/projects/:slug" element={<PageLayout><ProjectDetailPage /></PageLayout>} />
            <Route path="/team" element={<PageLayout><TeamPage /></PageLayout>} />
            <Route path="/testimonials" element={<PageLayout><TestimonialsPage /></PageLayout>} />
            <Route path="/blogs" element={<PageLayout><BlogsPage /></PageLayout>} />
            <Route path="/blogs/:slug" element={<PageLayout><BlogDetailPage /></PageLayout>} />
            <Route path="/about" element={<PageLayout><AboutPage /></PageLayout>} />
            <Route path="/contact" element={<PageLayout><ContactPage /></PageLayout>} />
            <Route path="*" element={<PageLayout><HomePage /></PageLayout>} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      <ChatbotWidget />
    </>
  )
}

export default App
