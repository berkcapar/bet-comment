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
    width: '90%',
    margin: '1rem auto',
    flexDirection: 'column'
  },
  secondhomecontainer: {
    width: '90%',
    margin: '1rem auto',
    display: 'flex',
    flexDirection: 'column'
  },
  allcontainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  '@media(min-width:675px)': {
    firsthomecontainer: {
      display: 'flex',
      flexDirection: 'row'
    },
    secondhomecontainer: {
      flexDirection: 'row',
      width: '90%',
      display: 'flex'
    },
    carousel: {
      width: '48%'
    },
    yuksek: {
      width: '30%'
    }
  }
})

const HomePage = () => {
  const classes = useStyle()
  return (
    <div className="container">
      <Navigation />
      <Box className={classes.allcontainer}>
        <Box display="flex" className={classes.firsthomecontainer}>
          <div className={classes.carousel}>
            <CarouselArea />
          </div>
          <div className={classes.yuksek}>
            <HaftanınYuksek />
          </div>
        </Box>
        <Box display="flex" className={classes.secondhomecontainer}>
          <AnaSayfaFikstür />
          <GecenHafta />
        </Box>
        <Box>
          <LigBazlıCarousel />
        </Box>
      </Box>

      <Footer className="footer" />
    </div>
  )
}

export default HomePage
