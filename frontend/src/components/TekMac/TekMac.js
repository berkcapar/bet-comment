import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'

const TekMac = () => {
  return (
    <Box borderBottom={1} display="flex" justifyContent="space-between">
      <Box ml={1}>
        <Typography variant="body2">İtalya Serie A</Typography>
        <Typography variant="body2">Milan</Typography>
        <Typography variant="body2">Juventus</Typography>
      </Box>
      <Box
        bgcolor="success.main"
        color="white"
        pr={1}
        pl={1}
        pt={0.5}
        border={1}
      >
        <Typography>KG Var</Typography>
        <Typography>95%</Typography>
      </Box>
    </Box>
  )
}

export default TekMac
