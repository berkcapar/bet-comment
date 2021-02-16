import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { BrowserRouter, Link } from 'react-router-dom'

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#0A581B',
    display: 'flex',
    height: '80px',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '10rem'
  },
  footerlink: {
    textDecoration: 'none',
    color: 'white',
    marginLeft: '1rem'
  },
  footerlogo: {
    fontSize: '2rem',
    textDecoration: 'none',
    color: 'white',
    marginLeft: '1.5rem'
  },
  footerlinkcontainer: {
    width: '25%',
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
            BET COMMENT
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
