import { TextField, InputAdornment, IconButton } from '@material-ui/core/'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { useState } from 'react'
import Navigation from '../Navigation/Navigation'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
  formcontainer: {
    margin: '2rem auto',
    width: '70%'
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
  }
})

const SignupForm = () => {
  const classes = useStyle()
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
        <Box className={classes.adsoyad}>
          <TextField
            className={classes.ad}
            name="email"
            required
            label="Email Adresi"
          />
          <TextField
            className={classes.soyad}
            name="username"
            required
            label="Kullanıcı Adı"
          />
        </Box>
        <Box>
          <TextField></TextField>
        </Box>
      </form>
    </Box>
  )
}

export default SignupForm
