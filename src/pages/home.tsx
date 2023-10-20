import Header from '../components/layout/header'

import About from '../components/layout/sections/about'
import Experiences from '../components/layout/sections/experiences'
import Projects from '../components/layout/sections/projects'

function Home() {
    return (
        <div className="container mt-5">
            <div className="row p-5">
                < Header />
            <main className="col-12 col-lg-8">
                < About />
                < Experiences />
                < Projects />
            </main>
            </div>
        </div>
    )
}

export default Home;