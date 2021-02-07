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
  '@media(max-width:675px)': {
    firsthomecontainer: {
      flexDirection: 'column',
      minHeight: 'calc(100vh - 180px)'
    },
    secondhomecontainer: {
      flexDirection: 'column',
      minHeight: 'calc(100vh - 180px)'
    }
  },
  firsthomecontainer: {
    flexDirection: 'row',
    width: '90%',
    margin: '1rem auto'
  },
  secondhomecontainer: {
    flexDirection: 'row',
    width: '98%',
    margin: '1rem auto'
  }
})

const HomePage = () => {
  const classes = useStyle()
  return (
    <div className="container">
      <Navigation />
      <Box display="flex" className={classes.firsthomecontainer}>
        <CarouselArea />
        <HaftanınYuksek />
      </Box>
      <Box display="flex" className={classes.secondhomecontainer}>
        <AnaSayfaFikstür />
        <GecenHafta />
      </Box>
      <Box>
        <LigBazlıCarousel />
      </Box>

      <Footer className="footer" />
    </div>
  )
}

export default HomePage
