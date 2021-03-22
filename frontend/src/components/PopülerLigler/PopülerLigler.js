import './PopülerLigler.css'

const PopülerLigler = () => {
  return (
    <div className="popüler-ligler-container">
      <header>
        <h2>Popüler Ligler</h2>
      </header>
      <div className="lig-kartları-container">
        <div className="lig-kart">
          <div className="lig-kart-image">
            <img src="/images/ligler-yeşil/superlig.png" />
          </div>
          <div className="lig-kart-header">
            <p>
              <b>Süper</b> Lig
            </p>
          </div>
        </div>

        <div className="lig-kart">
          <div className="lig-kart-image">
            <img src="/images/ligler-yeşil/premierlig.png" />
          </div>
          <div className="lig-kart-header">
            <p>
              <b>Premier</b> Lig
            </p>
          </div>
        </div>

        <div className="lig-kart">
          <div className="lig-kart-image">
            <img src="/images/ligler-yeşil/laliga.png" />
          </div>
          <div className="lig-kart-header">
            <p>
              <b>La Liga</b>
            </p>
          </div>
        </div>

        <div className="lig-kart">
          <div className="lig-kart-image">
            <img src="/images/ligler-yeşil/superlig.png" />
          </div>
          <div className="lig-kart-header">
            <p>
              <b>Bundesliga</b>
            </p>
          </div>
        </div>
        <div className="lig-kart">
          <div className="lig-kart-image">
            <img src="/images/ligler-yeşil/superlig.png" />
          </div>
          <div className="lig-kart-header">
            <p>
              <b>Serie A</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PopülerLigler
