import FikstürTekMaç from '../FikstürTekMaç/FikstürTekMaç'

const FikstürMaçlar = () => {
  return (
    <div className="fikstür-lig">
      <div className="fikstür-lig-header">
        <img />
        <p>Türkiye Süper Lig</p>
      </div>
      <FikstürTekMaç />
      <div className="fikstür-lig-header">
        <img />
        <p>İngiltere Premier Lig</p>
        <FikstürTekMaç />
      </div>
      <div className="fikstür-lig-header">
        <img />
        <p>İspanya La Liga</p>
        <FikstürTekMaç />
      </div>
      <div className="fikstür-lig-header">
        <img />
        <p>Almanya Bundesliga</p>
        <FikstürTekMaç />
      </div>
      <div className="fikstür-lig-header">
        <img />
        <p>İtalya Serie A</p>
        <FikstürTekMaç />
      </div>
      <div className="fikstür-lig-header">
        <img />
        <p>Fransa Lig 1</p>
        <FikstürTekMaç />
      </div>
      <div className="fikstür-lig-header">
        <img />
        <p>Hollanda Eredevise</p>
        <FikstürTekMaç />
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
