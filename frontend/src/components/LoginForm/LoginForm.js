import { TextField, InputAdornment, IconButton } from '@material-ui/core/'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
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
        <Box className={classes.email} width="35%">
          <TextField
            style={{ backgroundColor: 'HONEYDEW' }}
            size="small"
            name="email"
            label="Email"
            variant="outlined"
            InputProps={{
              style: {
                color: 'black'
              }
            }}
          />
        </Box>
        <Box className={classes.password} ml={1} width="35%">
          <MuiThemeProvider theme={loginTheme}>
            <TextField
              style={{ backgroundColor: 'HONEYDEW' }}
              size="small"
              name="password"
              label="Şifre"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              InputProps={{
                style: {
                  color: 'black',
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }
              }}
            />
          </MuiThemeProvider>
        </Box>
        <Box display="flex" className={classes.buttons} ml={1}>
          <MuiThemeProvider theme={loginTheme}>
            <Box ml={1}>
              <Button color="primary" variant="contained">
                Giriş
              </Button>
            </Box>
            <Box ml={1}>
              <Link style={{ textDecoration: 'none' }} to="/kaydol">
                <Button color="secondary" variant="contained">
                  Kaydol
                </Button>
              </Link>
            </Box>
          </MuiThemeProvider>
        </Box>
      </Box>
    </form>
  )
}

export default LoginForm
