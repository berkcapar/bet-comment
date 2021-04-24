import Navigation from '../../components/Navigation/Navigation'
import { CarouselArea } from '../../components/CarouselArea/CarouselArea'
import HaftanınYuksek from '../../components/HaftanınYüksek/HaftanınYüksek'
import Footer from '../../components/Footer/Footer'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import AnaSayfaYarışma from '../../components/Yarışma/AnaSayfaYarışma/AnaSayfaYarışma'
import { GününMaçlarıCarouselArea } from '../../components/GününMaçlarıCarouselArea/GününMaçlarıCarouselArea'
import LigBazlıCarousel from '../../components/LigBazlıCarousel/LigBazlıCarousel'
import BPKartlar from '../../components/BPKartlar/BPKartlar'
import PopülerLigler from '../../components/PopülerLigler/PopülerLigler'

const useStyle = makeStyles({
  firsthomecontainer: {
    width: '80%',
    margin: '1rem auto',
    flexDirection: 'column'
  },
  secondhomecontainer: {
    width: '87%',

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
      justifyContent: 'space-between',
      width: '100%',
      display: 'flex',
      marginTop: '1rem'
    },
    carousel: {
      width: '100%'
    },
    yuksek: {
      width: '40%'
    },
    ligbazlıcontainer: {
      width: '100%',
      maxWidth: '1000px'
    },
    günümüzmaçları: {
      width: '50%'
    },
    yarışma: {
      width: '47%'
    },
    altbant: {
      width: '100%'
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
          <Box className={classes.günümüzmaçları}>
            <GününMaçlarıCarouselArea />
          </Box>
          <Box className={classes.yarışma}>
            <AnaSayfaYarışma className={classes.anasayfayarışma} />
          </Box>
        </Box>
        <div className={classes.ligbazlıcontainer}>
          <BPKartlar />
        </div>
        <div className={classes.ligbazlıcontainer}>
          <PopülerLigler />
        </div>
      </Box>
      <div className={classes.altbant}>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
