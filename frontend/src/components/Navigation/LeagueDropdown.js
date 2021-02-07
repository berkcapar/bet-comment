import { useState } from 'react'
import { LeagueDropdownItems } from './LeagueDropdownItems'
import { Link } from 'react-router-dom'
import './LeagueDropdown.css'

const LeagueDropdown = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

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
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.logo} {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LeagueDropdown
