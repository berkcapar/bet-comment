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
    marginTop: '0.5rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem'
  },
  link: {
    textDecoration: 'none',
    color: '#0B7723',
    fontWeight: '600',
    paddingLeft: '1rem',
    paddingBottom: '0.5rem',
    display: 'flex',
    '&:hover': {
      background: '#B4FCCD'
    }
  },
  haftanınyuksek: {
    width: '100%',

    backgroundColor: '#FFF8F8'
  },
  icon: {
    marginLeft: '0.3rem',
    marginTop: '0.5rem'
  },
  p: {
    marginTop: '0.6rem'
  },
  '@media(min-width:675px)': {
    haftanınyuksek: {
      width: '100%',

      marginTop: '0'
    },
    header: {
      marginTop: '0'
    },
    p: {
      marginTop: '0.5rem'
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
            <p className={classes.p}> Bütün Maçlara Göz At!</p>
            <ArrowForwardIcon className={classes.icon} />
          </Link>
        </Typography>
      </BrowserRouter>
    </Box>
  )
}

export default HaftanınYuksek
