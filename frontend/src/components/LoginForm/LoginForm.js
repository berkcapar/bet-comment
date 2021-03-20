import Box from '@material-ui/core/Box'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import './LoginForm.css'

import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  '@media (max-width:675px)': {
    formContainer: {
      display: 'none'
    },
    active: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      margin: '1rem auto',
      paddingBottom: '2rem',
      paddingTop: '1.5rem',
      paddingLeft: '30%',
      borderTop: '0.1rem solid white'
    },
    icon: {
      color: 'white',
      fontSize: '1.5rem',
      width: '5%',
      marginLeft: '90%',
      marginTop: '0.5rem',
      paddingBottom: '0.5rem'
    },
    email: {
      marginLeft: '0.5rem',
      width: '100%'
    },
    password: {
      width: '100%',
      paddingTop: '0.5rem'
    },
    buttons: {
      marginTop: '1rem'
    }
  },
  '@media (min-width:675px)': {
    icon: {
      display: 'none'
    }
  }
})

const LoginForm = (loginclick) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleMouseDownPassword = () => setShowPassword(!showPassword)

  const handleLogin = (event) => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
  }

  const loginTheme = createMuiTheme({
    palette: { primary: { main: '#1CC84C' }, secondary: { main: '#F1F444' } }
  })
  const classes = useStyles()

  return (
    <form onSubmit={handleLogin} noValidate autoComplete="off">
      <Box
        className={loginclick ? classes.active : classes.formContainer}
        m={1}
        display="flex"
      >
        <Box display="flex" className={classes.buttons} ml={1}>
          <MuiThemeProvider theme={loginTheme}>
            <Box ml={1}>
              <button className="button-üyeol">HEMEN ÜYE OL</button>
            </Box>
            <Box ml={1}>
              <Link style={{ textDecoration: 'none' }} to="/kaydol">
                <button className="button-giriş">ÜYE GİRİŞİ </button>
              </Link>
            </Box>
          </MuiThemeProvider>
        </Box>
      </Box>
    </form>
  )
}

export default LoginForm
