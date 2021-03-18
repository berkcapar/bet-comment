import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navigation.css'
import LoginForm from '../LoginForm/LoginForm'
import LeagueDropdown from './LeagueDropdown'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'

const Navigation = () => {
  const [menuclick, setMenuclick] = useState(false)
  const handlemenuClick = () => setMenuclick(!menuclick)
  const closeMobileMenu = () => setMenuclick(false)

  const [loginclick, setLoginclick] = useState(false)
  const handleloginClick = () => setLoginclick(!loginclick)
  const [dropdown, setDropdown] = useState(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }

  return (
    <div className="navigation-container">
      <div className="navigation-ustbant">
        <div className="navigation-ustbant-icons-text">
          <div className="navigation-ustbant-icons">
            <FacebookIcon />
            <TwitterIcon style={{ marginLeft: '1rem' }} />
            <InstagramIcon style={{ marginLeft: '1rem' }} />
          </div>
          <p>Bizi sosyal medya hesaplarımızdan da takip edin!</p>
        </div>
        <div className="navigation-ustbant-links">
          <a>Hakkımızda</a>
          <a>Biz Ulaşın</a>
        </div>
      </div>
      <div className="logo-login-link">
        <div className="logo-login">
          <div className="logo-icon">
            <Link className="link logo" to="/">
              <img src="/images/logo1.png" alt="bahis peşinde" />
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
              <i onClick={handleloginClick} className="fas fa-user"></i>
            </div>
          </div>
          <div className={loginclick ? 'loginform active' : 'loginform'}>
            <LoginForm />
          </div>
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
          <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link
              className="link nav-links"
              to="/lig-incele"
              onClick={closeMobileMenu}
            >
              Lig İnceleme <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <LeagueDropdown />}
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
  )
}

export default Navigation
