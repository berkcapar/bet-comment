import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

const LoginForm = () => {
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
      <Box m={1} display="flex">
        <Box width="35%">
          <TextField
            size="small"
            name="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
        </Box>
        <Box width="35%">
          <TextField
            size="small"
            name="password"
            id="outlined-basic"
            label="Şifre"
            variant="outlined"
          />
        </Box>
        <Box display="flex" ml={1}>
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
}

export default LoginForm
