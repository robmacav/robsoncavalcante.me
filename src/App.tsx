import { BrowserRouter as Switch, Route } from 'react-router-dom';

import Home from './pages/home.tsx';

import Experiences from './pages/experiences.tsx';
import Projects from '../src/pages/projects.tsx';
import Writing from './pages/writing.tsx';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />

      <Route exact path="/projects" component={ Projects } />
      <Route exact path="/experiences" component={ Experiences } />
      <Route exact path="/posts" component={ Writing } />
    </Switch>
  )
}

export default App
