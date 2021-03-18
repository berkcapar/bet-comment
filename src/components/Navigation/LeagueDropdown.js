import { useState } from 'react'
import { LeagueDropdownItems } from './LeagueDropdownItems'
import { Link, useHistory } from 'react-router-dom'
import './LeagueDropdown.css'

const LeagueDropdown = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const history = useHistory()

  return (
    <div>
      <ul
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        onClick={handleClick}
      >
        {LeagueDropdownItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="dropdown-link"
                to={`/ligler/${item.path}`}
                onClick={() => {
                  history.push(`/ligler/${item.path}`)
                  setClick(false)
                }}
              >
                <div className="text-logo">
                  <img className="lig-logo" alt="logo" src={item.logo}></img>
                  <div className="text">{item.name} </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LeagueDropdown
