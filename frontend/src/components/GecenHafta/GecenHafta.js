import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import TekMac from '../TekMac/TekMac'

const useStyle = makeStyles({
  header: {
    borderBottom: '1px solid lightgray',
    paddingLeft: '1rem',
    fontWeight: '600',
    marginTop: '0.5rem',
    paddingBottom: '0.5rem'
  },
  gecenhaftanın: {
    width: '80%',
    backgroundColor: '#FFF8F8'
  },
  '@media(min-width:675px)': {
    gecenhaftanın: {
      width: '30.5%',
      border: '1px solid gray'
    }
  }
})

const GecenHafta = () => {
  const classes = useStyle()
  return (
    <Box className={classes.gecenhaftanın}>
      <Typography className={classes.header}>
        Kazandıran Geçmiş Tahminler
      </Typography>
      <TekMac />
      <TekMac />
      <TekMac />
      <TekMac />
    </Box>
  )
}

export default GecenHafta
