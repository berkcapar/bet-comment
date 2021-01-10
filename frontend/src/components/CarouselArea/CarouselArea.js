import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import Box from '@material-ui/core/Box'

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

  return (
    <Box width="31%" ml="10%" mt="2rem">
      <Carousel>
        {items.map((item, i) => (
          <CarouselItem key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  )
}

export const CarouselItem = ({ item }) => {
  return (
    <Paper>
      <img alt={item.alt} src={item.imageSrc} />
    </Paper>
  )
}
