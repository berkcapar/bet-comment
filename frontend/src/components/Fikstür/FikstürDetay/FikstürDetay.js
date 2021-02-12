import './FikstürDetay.css'
import FikstürMaçlar from '../FikstürTekMaç/FikstürMaçlar'

const FikstürDetay = () => {
  return (
    <div className="fikstürdetay-container">
      <div className="fikstür">
        <FikstürMaçlar />
      </div>
      <div className="fikstürdetay-other"></div>
    </div>
  )
}
export default FikstürDetay
