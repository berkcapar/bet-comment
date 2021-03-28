import './FikstürTekMaç.css'

const FikstürTekMaç = ({ match }) => {
  if (match) {
    return (
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
    )
  }

  return <>BANA MATCH PASSLE</>
}

export default FikstürTekMaç
