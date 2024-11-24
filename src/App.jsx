import Hero from './components/Hero'
import About from './components/About'

const App = () => {
  return (
    <main>
      <h1 className="relative min-h-screen w-screen overflow-x-hidden">
        <Hero />
        <About />
      </h1>
    </main>
  )
}

export default App
