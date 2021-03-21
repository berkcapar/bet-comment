import Carousel from 'react-material-ui-carousel'
import { makeStyles, Paper } from '@material-ui/core'
import Box from '@material-ui/core/Box'

const useStyle = makeStyles({
  carousel: {},
  image: {
    width: '100%'
  },
  carouselitem: {},
  '@media(min-width:675px)': {
    carousel: {},
    image: {
      width: '100%'
    }
  }
})

export const CarouselArea = () => {
  const items = [
    {
      imageSrc: '/images/carousel/carousel1.jpeg',
      alt: 'Probably the most random thing you have ever seen!'
    },
    {
      imageSrc: '/images/carousel/carousel1.jpeg',
      alt: 'Hello World!'
    }
  ]
  const classes = useStyle()
  return (
    <Box className={classes.carousel}>
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
    <Box className={classes.carouselitem}>
      <Paper>
        <img className={classes.image} alt={item.alt} src={item.imageSrc} />
      </Paper>
    </Box>
  )
}
