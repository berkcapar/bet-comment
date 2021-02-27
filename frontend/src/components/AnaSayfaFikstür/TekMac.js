import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
  tekmaccontainer: {
    borderBottom: '0.1rem solid lightgray',
    justifyContent: 'center'
  },
  evsahibi: {
    fontSize: 'small'
  },
  macsaati: {
    marginLeft: '1rem',
    fontSize: 'small'
  },
  deplasman: {
    marginLeft: '1rem',
    fontSize: 'small'
  },
  '@media(min-width:675px)': {
    evsahibi: {
      fontSize: 'medium'
    },
    macsaati: {
      fontSize: 'medium'
    },
    deplasman: {
      fontSize: 'medium'
    }
  }
})

const TekMac = () => {
  const classes = useStyle()
  return (
    <Box className={classes.tekmaccontainer} display="flex">
      <Typography className={classes.evsahibi}>Fenerbahçe</Typography>
      <Typography className={classes.macsaati}>19:00</Typography>
      <Typography className={classes.deplasman}>Galatasaray</Typography>
    </Box>
  )
}

export default TekMac
