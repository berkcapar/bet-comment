import './FikstürDetay.css'
import FikstürMaçlar from '../FikstürMaçlar/FikstürMaçlar'
import HaftanınYuksek from '../../HaftanınYüksek/HaftanınYüksek'
import Navigation from '../../Navigation/Navigation'
import HighlightedClub from '../HighlightedClub/HighlightedClub'
import DetaySayfaYarışma from '../../Yarışma/DetaySayfaYarışma/DetaySayfaYarışma'

const FikstürDetay = () => {
  return (
    <div>
      <Navigation />
      <div className="fikstürdetay-container">
        <div className="fikstür">
          <HighlightedClub />
          <FikstürMaçlar />
        </div>
        <div className="fikstürdetay-other">
          <DetaySayfaYarışma />
          <HaftanınYuksek className="haftanın-yuksek" />
        </div>
      </div>
    </div>
  )
}
export default FikstürDetay
