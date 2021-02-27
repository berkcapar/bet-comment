import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LigDetay from './components/LigDetay/LigDetay'
import HomePage from './pages/HomePage/HomePage'
import FikstürDetay from './components/Fikstür/FikstürDetay/FikstürDetay'
import TakımDetay from './components/Takımİnceleme/TakımDetay/TakımDetay'
import Macİncele from './components/Macİncele/Macİncele'
import SignupForm from './components/Signup/SignupForm'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/ligler/:path">
          <LigDetay />
        </Route>
        <Route path="/fikstur">
          <FikstürDetay />
        </Route>
        <Route path="/takım-incele">
          <TakımDetay />
        </Route>
        <Route path="/mac-incele">
          <Macİncele />
        </Route>
        <Route path="/profil"></Route>
        <Route path="/kaydol">
          <SignupForm />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
