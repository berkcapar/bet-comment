import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { createStyles, withStyles } from '@material-ui/core'

const styles = createStyles({
  '@media (max-width:675px)': {
    formContainer: {
      display: 'flex',
      flexDirection: 'column'
    }
  }
})

const LoginForm = withStyles(styles)(({ classes }) => {
  const handleLogin = (event) => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
  }

  const loginTheme = createMuiTheme({
    palette: { primary: { main: '#1CC84C' }, secondary: { main: '#F1F444' } }
  })

  return (
    <form onSubmit={handleLogin} noValidate autoComplete="off">
      <Box className={classes.formContainer} m={1} display="flex">
        <Box width="35%">
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
        <Box ml={1} width="35%">
          <MuiThemeProvider theme={loginTheme}>
            <TextField
              style={{ backgroundColor: 'HONEYDEW' }}
              size="small"
              name="password"
              label="Şifre"
              variant="outlined"
              InputProps={{
                style: {
                  color: 'black'
                }
              }}
            />
          </MuiThemeProvider>
        </Box>
        <Box className={classes.formContainer} display="flex" ml={1}>
          <MuiThemeProvider theme={loginTheme}>
            <Box ml={1}>
              <Button color="primary" variant="contained">
                Giriş
              </Button>
            </Box>
            <Box ml={1}>
              <Button color="secondary" variant="contained">
                Kaydol
              </Button>
            </Box>
          </MuiThemeProvider>
        </Box>
      </Box>
    </form>
  )
})

export default LoginForm
