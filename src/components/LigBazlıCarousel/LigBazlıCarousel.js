import Carousel from 'react-material-ui-carousel'
import { makeStyles, Paper } from '@material-ui/core'
import Box from '@material-ui/core/Box'

const useStyle = makeStyles({
  ligbazlıcontainer: {
    display: 'flex',
    width: '78%',
    margin: '0 auto'
  },
  ligcarouselitem: {
    display: 'flex',
    height: '200px'
  },
  carouseltext: {
    margin: 'auto 1rem',
    width: '50%',
    maxWidth: '310px'
  },
  logoarea: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoareaimage: {
    width: '168px',
    heigth: '100px'
  },
  '@media(min-width:675px)': {
    ligbazlıcontainer: {
      display: 'flex',
      marginLeft: '2rem'
    }
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
    <Box className={classes.ligcarouselitemcontainer}>
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
