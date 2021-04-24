import Navigation from '../Navigation/Navigation'
import './Contact.css'
import EmailIcon from '@material-ui/icons/Email'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Footer from '../Footer/Footer'

const Contact = () => {
  return (
    <div>
      <Navigation />
      <div className="contact-form-container">
        <div className="contact-form-bize-ulaşın">
          <h2 className="contact-form-bize-ulaşın-header">Bize Ulaşın</h2>
          <div className="contact-form-bize-ulaşın-email">
            <EmailIcon />
            <p>contact@bahispesinde.com</p>
          </div>
          <div className="contact-form-sosyal-medya">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>
        <div className="contact-form-mesaj-gönderin">
          <h2 className="contact-form-mesaj-gönderin-header">Mesaj Gönderin</h2>
          <form noValidate autoComplete="off">
            <div className="contact-form-ad-email">
              <TextField style={{ width: '40%' }} label="Adınız" />
              <TextField
                style={{ width: '40%', marginLeft: '1rem' }}
                label="Email Adresiniz"
              />
            </div>
            <div clasName="contact-form-mesaj">
              <TextField
                style={{ width: '82%', marginTop: '1rem' }}
                label="Mesajınız"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
