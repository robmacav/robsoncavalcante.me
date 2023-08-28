import { BrowserRouter as Switch, Route } from 'react-router-dom';

import Home from './pages/home.tsx';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
    </Switch>
  )
}

export default App
