import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import TekMac from '../TekMac/TekMac'
import { Link, BrowserRouter } from 'react-router-dom'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

const useStyle = makeStyles({
  header: {
    borderBottom: '1px solid lightgray',
    paddingLeft: '1rem',
    fontWeight: '600',
    marginTop: '1rem',
    paddingBottom: '1rem'
  },
  link: {
    textDecoration: 'none',
    color: '#0B7723',
    fontWeight: '600',
    paddingLeft: '1rem',
    display: 'flex',
    '&:hover': {
      background: '#B4FCCD'
    }
  },
  haftanınyuksek: {
    width: '80%',
    backgroundColor: '#FFF8F8'
  },
  icon: {
    marginLeft: '0.3rem',
    marginTop: '0.9rem'
  },
  '@media(min-width:675px)': {
    haftanınyuksek: {
      width: '30%',
      marginLeft: '1rem'
    }
  }
})

const HaftanınYuksek = () => {
  const classes = useStyle()
  return (
    <Box className={classes.haftanınyuksek}>
      <Typography className={classes.header}>
        Yaklaşan Yüksek İhtimaller
      </Typography>
      <TekMac />
      <TekMac />
      <TekMac />

      <BrowserRouter>
        <Typography>
          <Link className={classes.link} to="/butun-ihtimaller">
            <p className={classes.p}> Bütün İhtimallere Göz At!</p>
            <ArrowForwardIcon className={classes.icon} />
          </Link>
        </Typography>
      </BrowserRouter>
    </Box>
  )
}

export default HaftanınYuksek
