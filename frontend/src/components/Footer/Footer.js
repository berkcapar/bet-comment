import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { BrowserRouter, Link } from 'react-router-dom'

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#48b42c',
    display: 'flex',
    height: '80px',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: '10rem'
  },
  footerlink: {
    textDecoration: 'none',
    color: 'white',
    marginLeft: '1rem'
  },
  footerlogo: {
    fontSize: '1.3rem',
    textDecoration: 'none',
    color: 'white',
    marginLeft: '20%'
  },
  footerlinkcontainer: {
    width: '30%',
    display: 'flex'
  },
  '@media(max-width:675px)': {
    footerlinkcontainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '30%'
    }
  }
})

const Footer = () => {
  const classes = useStyles()
  return (
    <Box className={classes.footer}>
      <BrowserRouter>
        <Box width="50%">
          <Link className={classes.footerlogo} to="/">
            <img src="/images/logo3.png" alt="bahis peşinde" />
          </Link>
        </Box>
        <Box className={classes.footerlinkcontainer}>
          <Link className={classes.footerlink} to="/hakkında">
            Hakkında
          </Link>
          <Link className={classes.footerlink} to="/gizlilik">
            Gizlilik
          </Link>
          <Link className={classes.footerlink} to="/iletisim">
            İletişim
          </Link>
        </Box>
      </BrowserRouter>
    </Box>
  )
}

export default Footer
