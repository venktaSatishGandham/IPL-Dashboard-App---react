import {Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './components/Home/index'
import TeamMatches from './components/TeamMatches/index'
import NotFound from './components/NotFound/index'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/team-matches/:id" component={TeamMatches} />
    <Route component={NotFound} />
  </Switch>
)

export default App
