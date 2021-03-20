import FikstürTekMaç from '../FikstürTekMaç/FikstürTekMaç'
import './FikstürMaçlar.css'

const FikstürMaçlar = () => {
  return (
    <div>
      <div className="fikstür-lig">
        <div className="fikstür-lig-header">
          <div className="logo-name">
            <img src="/images/ligler/superlig.jpg" alt="superlig" />
            <p>Türkiye Süper Lig</p>
          </div>
          <div className="ihtimal">
            <p>En İyi Seçim</p>
            <p>İhtimal</p>
          </div>
        </div>
        <div className="tek-mac">
          <FikstürTekMaç />
        </div>
        <div className="fikstür-lig-header">
          <div className="logo-name">
            <img src="/images/ligler/premierlig.jpg" alt="premierlig" />
            <p>İngiltere Premier Lig</p>
          </div>
          <div className="ihtimal">
            <p>En İyi Seçim</p>
            <p>İhtimal</p>
          </div>
        </div>
        <div className="tek-mac">
          <FikstürTekMaç />
        </div>
        <div className="fikstür-lig-header">
          <div className="logo-name">
            <img src="/images/ligler/laliga.jpg" alt="laliga" />
            <p>İspanya La Liga</p>
          </div>
          <div className="ihtimal">
            <p>En İyi Seçim</p>
            <p>İhtimal</p>
          </div>
        </div>
        <div className="tek-mac">
          <FikstürTekMaç />
        </div>
        <div className="fikstür-lig-header">
          <div className="logo-name">
            <img alt="bundesliga" src="/images/ligler/bundesliga.jpg" />
            <p>Almanya Bundesliga</p>
          </div>
          <div className="ihtimal">
            <p>En İyi Seçim</p>
            <p>İhtimal</p>
          </div>
        </div>
        <div className="tek-mac">
          <FikstürTekMaç />
        </div>
        <div className="fikstür-lig-header">
          <div className="logo-name">
            <img src="/images/ligler/seriea.jpg" alt="serie a" />
            <p>İtalya Serie A</p>
          </div>
          <div className="ihtimal">
            <p>En İyi Seçim</p>
            <p>İhtimal</p>
          </div>
        </div>
        <div className="tek-mac">
          <FikstürTekMaç />
        </div>
        <div className="fikstür-lig-header">
          <div className="logo-name">
            <img alt="fransa ligi" src="/images/ligler/leagueone.jpg" />
            <p>Fransa Lig 1</p>
          </div>
          <div className="ihtimal">
            <p>En İyi Seçim</p>
            <p>İhtimal</p>
          </div>
        </div>
        <div className="tek-mac">
          <FikstürTekMaç />
        </div>
        <div className="fikstür-lig-header">
          <div className="logo-name">
            <img src="/images/ligler/eredevise.jpg" alt="hollanda ligi" />
            <p>Hollanda Eredevise</p>
          </div>
          <div className="ihtimal">
            <p>En İyi Seçim</p>
            <p>İhtimal</p>
          </div>
        </div>
        <div className="tek-mac">
          <FikstürTekMaç />
        </div>
      </div>
    </div>
  )
}

export default FikstürMaçlar

// takımlardan birinin oynadığı ligin adıyla, ilgili lige conditional render yap.
// <div>
//{properties.map((property) => (
//    <AdminPanelPropertyItem key={property.id} property={property} />
//  ))}
//</div>
