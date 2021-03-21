import Navigation from '../../components/Navigation/Navigation'
import { CarouselArea } from '../../components/CarouselArea/CarouselArea'
import HaftanınYuksek from '../../components/HaftanınYüksek/HaftanınYüksek'
import Footer from '../../components/Footer/Footer'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import GecenHafta from '../../components/GecenHafta/GecenHafta'
import AnaSayfaFikstür from '../../components/AnaSayfaFikstür/AnaSayfaFikstür'
import LigBazlıCarousel from '../../components/LigBazlıCarousel/LigBazlıCarousel'

const useStyle = makeStyles({
  firsthomecontainer: {
    width: '80%',
    margin: '1rem auto',
    flexDirection: 'column'
  },
  secondhomecontainer: {
    width: '87%',
    margin: '1rem auto',
    display: 'flex',
    flexDirection: 'column'
  },
  allcontainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  '@media(min-width:675px)': {
    allcontainer: {
      width: '70%',
      margin: '1rem auto'
    },
    firsthomecontainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      maxWidth: '1000px'
    },
    secondhomecontainer: {
      flexDirection: 'row',
      maxWidth: '1000px',
      width: '80%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '1rem'
    },
    carousel: {
      width: '100%'
    },
    yuksek: {
      width: '40%'
    },
    ligbazlıcontainer: {
      width: '80%',
      margin: '1rem auto',
      maxWidth: '1000px'
    }
  }
})

const HomePage = () => {
  const classes = useStyle()
  return (
    <div className="container">
      <Navigation />
      <Box className={classes.allcontainer}>
        <div className={classes.carousel}>
          <CarouselArea />
          <img
            style={{ width: '100%', borderRadius: '0.3rem' }}
            alt="istatistikler"
            src="/images/istatistiklerbanner.png"
          />
        </div>
        <Box display="flex" className={classes.secondhomecontainer}>
          <AnaSayfaFikstür />
          <GecenHafta />
        </Box>
        <div className={classes.ligbazlıcontainer}>
          <LigBazlıCarousel />
        </div>
      </Box>
      <Footer className="footer" />
    </div>
  )
}

export default HomePage
