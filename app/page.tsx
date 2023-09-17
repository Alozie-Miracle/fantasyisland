import About from '@/components/About'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="h-ful">
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}
