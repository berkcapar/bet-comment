import './BPKartlar.css'
const BPKartlar = () => {
  return (
    <div className="kartlar-container">
      <div className="kart-container">
        <div className="kart">
          <img src="/images/yuzdesel.png" />
          <p>Yüzdesel Yaklaşımlar</p>
        </div>
      </div>
      <div className="kart-container">
        <div className="kart">
          <img src="/images/sakat.png" />
          <p>Sakat ve Cezalı Futbolcular</p>
        </div>
      </div>
      <div className="kart-container">
        <div className="kart">
          <img src="/images/form.png" />
          <p>Puan ve Form Tabloları</p>
        </div>
      </div>
    </div>
  )
}
export default BPKartlar
