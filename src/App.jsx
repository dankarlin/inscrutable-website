import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { lazy, Suspense } from 'react'
import Hero from './components/Hero'

const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Donate = lazy(() => import('./components/Donate'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<div className="d-flex justify-content-center p-5"><div className="spinner-border" role="status" aria-label="Loading content"><span className="visually-hidden">Loading...</span></div></div>}>
        <About />
        <Services />
        <Testimonials />
        <Donate />
        <Footer />
      </Suspense>
    </main>
  )
}

export default App