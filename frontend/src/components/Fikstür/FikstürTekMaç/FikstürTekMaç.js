import './FikstürTekMaç.css'
import { NavLink } from 'react-router-dom'

const FikstürTekMaç = ({ match }) => {
  if (match) {
    return (
      <NavLink to={`mac-incele/${match.takim1}/${match.takim2}/${match.tarih}`}>
        {' '}
        <div className="tekmac-container">
          <div className="mac-detay">
            <div>
              <p>{match.saat}</p>
            </div>
            <div className="ev-deplasman">
              <div className="ev-sahibi">
                <img />
                <p>{match.takim1}</p>
              </div>
              <div className="deplasman">
                <img />
                <p>{match.takim2}</p>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    )
  }

  return <>BANA MATCH PASSLE</>
}

export default FikstürTekMaç
