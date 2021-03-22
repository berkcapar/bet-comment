import './PopülerLigler.css'

const PopülerLigler = () => {
  return (
    <div className="popüler-ligler-container">
      <header>
        <h2>Popüler Ligler</h2>
      </header>
      <div className="lig-kartları-container">
        <div className="lig-kart">
          <img src="/images/ligler-yeşil/superlig.png" />
          <p>
            <b>Süper</b>Lig
          </p>
        </div>
        <div className="lig-kart">
          <img src="/images/ligler-yeşil/premierlig.png" />
          <p>
            <b>Premier</b>League
          </p>
        </div>
        <div className="lig-kart">
          <img src="/images/ligler-yeşil/laliga.png" />
          <p>
            <b>La Liga</b>
          </p>
        </div>
        <div className="lig-kart">
          <img src="/images/ligler-yeşil/bundesliga.png" />
          <p>
            <b>Bundesliga</b>
          </p>
        </div>
        <div className="lig-kart">
          <img src="/images/ligler-yeşil/seriea.png" />

          <p>
            <b>Serie A</b>
          </p>
        </div>
      </div>
    </div>
  )
}
export default PopülerLigler
