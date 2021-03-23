import './FikstürTekMaç.css'

const FikstürTekMaç = ({ superLigfixture }) => {
  return (
    <div className="tekmac-container">
      <div className="mac-detay">
        <div>
          <p>Maç Saati</p>
        </div>
        <div className="ev-deplasman">
          <div className="ev-sahibi">
            <img />
            <p>{superLigfixture.takim1}</p>
          </div>
          <div className="deplasman">
            <img />
            <p>{superLigfixture.takim2}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FikstürTekMaç
