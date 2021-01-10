import Navigation from '../../components/Navigation/Navigation'
import { CarouselArea } from '../../components/CarouselArea/CarouselArea'
import HaftanınYuksek from '../../components/HaftanınYüksek/HaftanınYüksek'
import Box from '@material-ui/core/Box'

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <Box display="flex">
        <CarouselArea />
        <HaftanınYuksek />
      </Box>
    </div>
  )
}

export default HomePage
