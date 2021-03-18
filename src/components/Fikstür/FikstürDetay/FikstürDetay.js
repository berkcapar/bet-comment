import './FikstürDetay.css'
import FikstürMaçlar from '../FikstürMaçlar/FikstürMaçlar'
import HaftanınYuksek from '../../HaftanınYüksek/HaftanınYüksek'
import Navigation from '../../Navigation/Navigation'

const FikstürDetay = () => {
  return (
    <div>
      <Navigation />
      <div className="fikstürdetay-container">
        <div className="fikstür">
          <FikstürMaçlar />
        </div>
        <div className="fikstürdetay-other">
          <HaftanınYuksek className="haftanın-yuksek" />
        </div>
      </div>
    </div>
  )
}
export default FikstürDetay
