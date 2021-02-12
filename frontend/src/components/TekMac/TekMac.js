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
    paddingTop: '1rem'
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

      <Box className={classes.result}>
        <Typography>KG Var</Typography>
        <Typography>1.54</Typography>
        <Typography>95%</Typography>
      </Box>
    </Box>
  )
}

export default TekMac
