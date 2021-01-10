import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import TekMac from '../TekMac/TekMac'

const useStyle = makeStyles({
  header: {
    borderBottom: '1px solid black',
    paddingLeft: '0.3rem'
  }
})

const HaftanınYuksek = () => {
  const classes = useStyle()
  return (
    <Box width="30%" bgcolor="white" mt={4} ml={2} border={1}>
      <Typography className={classes.header} variant="h6">
        Yaklaşan Yüksek İhtimaller
      </Typography>
      <TekMac />
      <TekMac />
      <TekMac />
    </Box>
  )
}

export default HaftanınYuksek
