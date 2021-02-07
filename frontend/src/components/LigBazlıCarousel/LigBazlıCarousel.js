import Carousel from 'react-material-ui-carousel'
import { makeStyles, Paper } from '@material-ui/core'
import Box from '@material-ui/core/Box'

const useStyle = makeStyles({
  ligbazlıcontainer: {
    display: 'flex',
    width: '79%',
    margin: '0 auto'
  },
  ligcarouselitem: {
    display: 'flex'
  },
  carouseltext: {
    margin: 'auto 0',
    border: '1px solid red'
  }
})

const LigBazlıCarousel = () => {
  const items = [
    {
      text: 'Türkiye Ligine dair hiçbir yerde olmayan akıllı analizler burada!',
      imageSrc: '/images/carousel/carousel1.jpeg',
      alt: 'Probably the most random thing you have ever seen!'
    },
    {
      text:
        'İngiltere Ligine dair hiçbir yerde olmayan akıllı analizler burada!',
      imageSrc: '/images/carousel/carousel1.jpeg',
      alt: 'Hello World!'
    },
    {
      text: 'Türkiye Ligine dair hiçbir yerde olmayan akıllı analizler burada!',
      imageSrc: '/images/carousel/carousel1.jpeg',
      alt: 'Hello World!'
    },
    {
      text: 'Türkiye Ligine dair hiçbir yerde olmayan akıllı analizler burada!',
      imageSrc: '/images/carousel/carousel1.jpeg',
      alt: 'Hello World!'
    },
    {
      text: 'Türkiye Ligine dair hiçbir yerde olmayan akıllı analizler burada!',
      imageSrc: '/images/carousel/carousel1.jpeg',
      alt: 'Hello World!'
    },
    {
      text: 'Türkiye Ligine dair hiçbir yerde olmayan akıllı analizler burada!',
      imageSrc: '/images/carousel/carousel1.jpeg',
      alt: 'Hello World!'
    },
    {
      text: 'Türkiye Ligine dair hiçbir yerde olmayan akıllı analizler burada!',
      imageSrc: '/images/carousel/carousel1.jpeg',
      alt: 'Hello World!'
    },
    {
      text: 'Türkiye Ligine dair hiçbir yerde olmayan akıllı analizler burada!',
      imageSrc: '/images/carousel/carousel1.jpeg',
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
        <Box>
          <img alt={item.alt} src={item.imageSrc} />
        </Box>
      </Paper>
    </Box>
  )
}

export default LigBazlıCarousel
