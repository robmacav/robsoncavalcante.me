import Header from './components/layout/header.tsx'

import About from './components/layout/sections/about.tsx'
import Experiences from './components/layout/sections/experiences.tsx'
import Projects from './components/layout/sections/projects.tsx'
import Writing from './components/layout/sections/writing.tsx'

function App() {
  return (
    <div className="container mt-5">
      <div className="row p-5">
        < Header />
        <main className="col-12 col-lg-8">
          < About />
          < Experiences />
          < Projects />
          < Writing />
        </main>
      </div>
    </div>
  )
}

export default App
