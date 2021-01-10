import { Link, BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import './Navigation.css'
import LoginForm from '../LoginForm/LoginForm'

const Navigation = () => {
  const [menuclick, setMenuclick] = useState(false)
  const handlemenuClick = () => setMenuclick(!menuclick)

  const closeMobileMenu = () => setMenuclick(false)

  return (
    <BrowserRouter>
      <div className="navigation-container">
        <div className="logo-login-link">
          <div className="logo-login">
            <div className="logo-icon">
              <Link className="link logo" to="/">
                BET COMMENT
              </Link>
              <div className="icons">
                <div className="menu-icon" onClick={handlemenuClick}>
                  <i
                    className={
                      menuclick
                        ? 'navigation-fas fas fa-times'
                        : 'navigation-fas fas fa-bars'
                    }
                  ></i>
                </div>
              </div>
            </div>
            <LoginForm />
          </div>
          <ul className={menuclick ? 'nav-elements active' : 'nav-elements'}>
            <li>
              {' '}
              <Link
                className="link nav-links"
                to="/takım-incele"
                onClick={closeMobileMenu}
              >
                Takım İnceleme
              </Link>
            </li>
            <li>
              <Link
                className="link nav-links"
                to="lig-incele"
                onClick={closeMobileMenu}
              >
                Lig İnceleme
              </Link>
            </li>
            <li>
              {' '}
              <Link
                className="link nav-links"
                to="fikstur"
                onClick={closeMobileMenu}
              >
                Fikstür
              </Link>
            </li>
            <li>
              {' '}
              <Link
                className="link nav-links"
                to="kazandıran-analizler"
                onClick={closeMobileMenu}
              >
                Kazandıran Analizler
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Navigation
