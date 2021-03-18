import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid lightgray',
    '&:hover': {
      background: '#B4FCCD'
    }
  },
  result: {
    backgroundColor: '#0B7723',
    color: 'white',
    paddingRight: '1rem',
    paddingLeft: '1rem',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '0.4rem',
    fontWeight: '550'
  },
  lig: {
    color: 'gray',
    marginBottom: '0.2rem'
  },
  takım: {
    fontWeight: '550'
  },
  ligtakım: {
    marginTop: '0.5rem',
    marginLeft: '1rem',
    paddingBottom: '0.5rem'
  },
  secimresultcontainer: {
    display: 'flex',
    borderLeft: '1px solid lightgray',
    paddingLeft: '0.8rem'
  },
  iddiasecim: {
    marginTop: '0.4rem'
  },
  iddiasecimheader: {
    color: 'gray'
  },
  iddiasecimdetails: {
    marginRight: '0.5rem',
    marginTop: '0.3rem'
  },
  secim: {
    fontWeight: '550'
  }
})

const TekMac = () => {
  const classes = useStyle()

  return (
    <Box className={classes.container}>
      <Box className={classes.ligtakım}>
        <Typography className={classes.lig} variant="body2">
          İtalya Serie A
        </Typography>
        <Typography className={classes.takım} variant="body2">
          Milan
        </Typography>
        <Typography className={classes.takım} variant="body2">
          Juventus
        </Typography>
      </Box>

      <Box className={classes.secimresultcontainer}>
        <Box className={classes.iddiasecim}>
          <Box className={classes.iddiasecimheader}>
            <Typography variant="body2">Seçim</Typography>
          </Box>
          <Box className={classes.iddiasecimdetails}>
            <Typography className={classes.secim} variant="body2">
              KG Var
            </Typography>
            <Typography className={classes.secim} variant="body2">
              1.54
            </Typography>
          </Box>
        </Box>
        <Box className={classes.result}>
          <Box>
            <p>Analiz</p>
          </Box>
          <Box classname={classes.oran}>
            <Typography style={{ marginTop: '0.3rem' }}>%95</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default TekMac
