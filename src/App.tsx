import AdminPage from './routes/admin'
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
import ContractDocumentationPage from './routes/contract-documentation'
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

function App() {
  return (
    <>
      <SplashScreen />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/" element={<PageLayout><HomePage /></PageLayout>} />
            <Route path="/services" element={<PageLayout><ServicesPage /></PageLayout>} />
            <Route path="/projects" element={<PageLayout><ProjectsPage /></PageLayout>} />
            <Route path="/projects/:slug" element={<PageLayout><ProjectDetailPage /></PageLayout>} />
            <Route path="/team" element={<PageLayout><TeamPage /></PageLayout>} />
            <Route path="/contract-documentation" element={<PageLayout><ContractDocumentationPage /></PageLayout>} />
            <Route path="/testimonials" element={<PageLayout><TestimonialsPage /></PageLayout>} />
            <Route path="/blogs" element={<PageLayout><BlogsPage /></PageLayout>} />
            <Route path="/blogs/:slug" element={<PageLayout><BlogDetailPage /></PageLayout>} />
            <Route path="/about" element={<PageLayout><AboutPage /></PageLayout>} />
            <Route path="/contact" element={<PageLayout><ContactPage /></PageLayout>} />
            <Route path="*" element={<PageLayout><HomePage /></PageLayout>} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
