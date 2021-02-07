import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/lig-incele">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
