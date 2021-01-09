import { Link, BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import './Navigation.css'
import LoginForm from '../LoginForm/LoginForm'

const Navigation = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <BrowserRouter>
      <div className="navigation-container">
        <div className="logo-login">
          <Link className="link logo" to="/">
            BET COMMENT
          </Link>
          <LoginForm />
        </div>
        <div className="icons">
          <div className="menu-icon" onClick={handleClick}>
            <i
              className={
                click
                  ? 'navigation-fas fas fa-times'
                  : 'navigation-fas fas fa-bars'
              }
            ></i>
          </div>
          <div>
            <i className="fas fa-user"></i>{' '}
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Navigation

/*
<ul className={click ? 'nav-elements active' : 'nav-elements'}>
<li>
  {' '}
  <Link
    className="link nav-links"
    to="/makeawish"
    onClick={closeMobileMenu}
  >
    Takım İnceleme
  </Link>
</li>
<li>
  <a
    className="link nav-links"
    href="#why-turkey"
    onClick={closeMobileMenu}
  >
    Lig İnceleme
  </a>
</li>
<li>
  {' '}
  <a
    className="link nav-links"
    href="#why-plan-emlak"
    onClick={closeMobileMenu}
  >
    Fikstür
  </a>
</li>
<li>
  {' '}
  <a
    className="link nav-links"
    href="#contact"
    onClick={closeMobileMenu}
  >
    Kazandıran Analizler
  </a>
</li>
</ul>
**/
