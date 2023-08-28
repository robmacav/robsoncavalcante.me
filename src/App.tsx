import { BrowserRouter as Switch, Route } from 'react-router-dom';

import Home from './pages/home.tsx';

import Experiences from './pages/experiences.tsx';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />

      <Route exact path="/experiences" component={ Experiences } />
    </Switch>
  )
}

export default App
