import {
  TextField,
  InputAdornment,
  IconButton,
  FormControl
} from '@material-ui/core/'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Navigation from '../Navigation/Navigation'
import { makeStyles } from '@material-ui/core/styles'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600]
    }
  },
  checked: {}
})((props) => <Checkbox color="default" {...props} />)

const useStyle = makeStyles({
  formcontainer: {
    margin: '2rem auto',
    width: '70%',
    maxWidth: '1000px',
    backgroundColor: 'white',
    padding: '2rem'
  },
  adsoyad: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  ad: {
    width: '40%'
  },
  soyad: {
    width: '40%'
  },
  doğumtarihi: {
    width: '100%'
  },
  doğumtarihicontainer: {
    marginTop: '1rem'
  },

  telefoncontainer: {
    marginTop: '1rem'
  },
  email: {
    width: '100%'
  },
  passwordcontainer: {
    width: '100%'
  },
  checkboxcontainer: {
    marginTop: '2rem'
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem'
  },
  '@media(min-width:675px)': {
    formcontainer: {
      width: '40%',
      maxWidth: '1000px'
    }
  }
})

const signupTheme = createMuiTheme({
  palette: { primary: { main: '#1CC84C' }, secondary: { main: '#F1F444' } }
})

const SignupForm = () => {
  const classes = useStyle()
  const [showPassword, setShowPassword] = useState(false)
  const [checkedA, setCheckedA] = useState(false)
  const [checkedB, setCheckedB] = useState(false)
  const [checkedC, setCheckedC] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  const handleCheckA = (event) => {
    setCheckedA(!checkedA)
  }
  const handleCheckB = (event) => {
    setCheckedB(!checkedB)
  }
  const handleCheckC = (event) => {
    setCheckedC(!checkedC)
  }

  return (
    <Box>
      <Navigation />
      <form className={classes.formcontainer}>
        <Box className={classes.adsoyad}>
          <TextField className={classes.ad} name="ad" required label="Ad" />
          <TextField
            className={classes.soyad}
            name="soyad"
            required
            label="Soyad"
          />
        </Box>
        <Box className={classes.emailcontainer}>
          <TextField
            className={classes.email}
            name="email"
            required
            label="Email Adresi"
          />
        </Box>
        <Box className={classes.doğumtarihicontainer}>
          <p className={classes.doğumtarihip}>Doğum Tarihi</p>
          <TextField
            name="doğumtarihi"
            required
            className={classes.doğumtarihi}
            type="date"
          ></TextField>
        </Box>
        <Box className={classes.telefoncontainer}>
          <p>Telefon Numarası:</p>
          <PhoneInput
            name="telefon"
            className={classes.telefon}
            country={'tr'}
          />
        </Box>
        <FormControl className={classes.passwordcontainer}>
          <InputLabel>Password</InputLabel>
          <Input
            label="Şifre"
            type={showPassword ? 'text' : 'password'}
            name="password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Box className={classes.checkboxcontainer}>
          <FormControlLabel
            control={
              <GreenCheckbox
                checkedA={checkedA}
                onClick={handleCheckA}
                name="checkedA"
              />
            }
            label="Betcomment’te bulunan kişisel verilerin işlenmesine ilişkin genel  KVKK Aydınlatma Metni’ni okudum, anladım."
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                checkedB={checkedB}
                onClick={handleCheckB}
                name="checkedB"
              />
            }
            label="Kampanyalardan haberdar olmak için ileti istiyorum."
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                checkedC={checkedC}
                onClick={handleCheckC}
                name="checkedC"
              />
            }
            label="Üyelik sözleşmesini okudum, kabul ediyorum."
          />
        </Box>
        <MuiThemeProvider theme={signupTheme}>
          <Box className={classes.button}>
            <Button color="primary" variant="contained">
              Hemen Kaydol!
            </Button>
          </Box>
        </MuiThemeProvider>
      </form>
    </Box>
  )
}

export default SignupForm
