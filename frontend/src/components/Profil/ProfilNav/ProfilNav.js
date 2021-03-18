import { Link } from 'react-router-dom'

const ProfilNav = () => {
  return (
    <div className="profilnav-container">
      <div className="profilnav-header">
        <p>Merhaba Berk Çapar</p>
      </div>
      <div className="profilnav-links">
        <Link to="profil/kuponların">Kuponların</Link>
        <Link to="profil/kuponların">Kuponların</Link>
        <Link to="profil/kuponların">Kuponların</Link>
        <Link to="profil/kuponların">Kuponların</Link>
      </div>
      <div className="profilnav-çıkış"></div>
      <div className="profilnav-logo"></div>
    </div>
  )
}

export default ProfilNav
