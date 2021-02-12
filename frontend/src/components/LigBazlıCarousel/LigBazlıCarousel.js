import Carousel from 'react-material-ui-carousel'
import { makeStyles, Paper } from '@material-ui/core'
import Box from '@material-ui/core/Box'

const useStyle = makeStyles({
  ligbazlıcontainer: {
    display: 'flex',
    width: '79.5%',
    margin: '0 auto'
  },
  ligcarouselitem: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  carouseltext: {
    margin: 'auto 0',
    width: '40%',
    maxWidth: '310px'
  },
  logoarea: {
    width: '40%'
  },
  logoareaimage: {
    height: '200px',
    width: '200px'
  }
})

const LigBazlıCarousel = () => {
  const items = [
    {
      text: 'Türkiye Ligine dair hiçbir yerde olmayan akıllı analizler burada!',
      imageSrc: '/images/ligler/superlig.jpg',
      alt: 'Probably the most random thing you have ever seen!'
    },
    {
      text:
        'İngiltere Ligine dair hiçbir yerde olmayan akıllı analizler burada!',
      imageSrc: '/images/ligler/premierlig.jpg',
      alt: 'İngiltere Premier Lig'
    },
    {
      text: `Bundesliga'da haftanın maçlarına dair akıllı analizler burada!`,
      imageSrc: '/images/ligler/bundesliga.jpg',
      alt: 'Hello World!'
    },
    {
      text: `Serie A'da nefes kesen maçlara dair kazandıran akıllı analizlere göz at!`,
      imageSrc: '/images/ligler/seriea.jpg',
      alt: 'Hello World!'
    },
    {
      text: `La Liga'da haftanın kazandıran akıllı analizlerine göz at!`,
      imageSrc: '/images/ligler/laliga.jpg',
      alt: 'Hello World!'
    },
    {
      text: 'Fransa Ligine dair hiçbir yerde olmayan akıllı analizler burada!',
      imageSrc: '/images/ligler/leagueone.jpg',
      alt: 'Hello World!'
    },
    {
      text:
        'Sürprizlerle dolu Hollanda Ligine dair hiçbir yerde olmayan akıllı analizler burada!',
      imageSrc: '/images/ligler/eredevise.jpg',
      alt: 'Hello World!'
    }
  ]

  const classes = useStyle()

  return (
    <Box className={classes.ligbazlıcontainer}>
      <Carousel>
        {items.map((item, i) => (
          <CarouselItem key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  )
}

export const CarouselItem = ({ item }) => {
  const classes = useStyle()
  return (
    <Box>
      <Paper className={classes.ligcarouselitem}>
        <Box className={classes.carouseltext}>
          <p>{item.text}</p>
        </Box>
        <Box className={classes.logoarea}>
          <img
            className={classes.logoareaimage}
            alt={item.alt}
            src={item.imageSrc}
          />
        </Box>
      </Paper>
    </Box>
  )
}

export default LigBazlıCarousel
