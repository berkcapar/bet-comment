import FikstürTekMaç from '../FikstürTekMaç/FikstürTekMaç'
import './FikstürMaçlar.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFikstürFromState } from '../../../redux/selectors'
import { useEffect, useState } from 'react'
import { fetchAllFikstür } from '../../../redux/reducers/fikstür/AllFikstürReducer'
import '../../../../node_modules/rc-tabs/assets/index.css'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const FikstürMaçlar = (date) => {
  const AllLigFixtureState = useSelector(getAllFikstürFromState)
  const [startDate, setStartDate] = useState(new Date())

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllFikstür())
  }, [dispatch])

  switch (AllLigFixtureState.status) {
    case 'failure':
      return 'oopsanerror'
    case 'loading':
    default:
      return 'loading goster'

    case 'success':
      const formattedDate = startDate.toISOString().slice(0, 10)
      const SelectedDatesGames = AllLigFixtureState.data.filter((sdg) => {
        return sdg.tarih === formattedDate
      })
      return (
        <div>
          <div className="fikstür-lig-container">
            <p className="fikstür-text">Karşılaşmalar</p>
            <div className="date-area">
              <CalendarTodayIcon />
              <div className="date-area-data-arrows">
                <ArrowBackIosIcon />
                <DatePicker
                  dateFormat="yyyy-MM-dd"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
                <ArrowForwardIosIcon />
              </div>
            </div>
            <div className="fikstür-lig-header">
              <div className="logo-name">
                <img src="/images/ligler/superlig.jpg" alt="superlig" />
                <p>Türkiye Süper Lig</p>
              </div>
            </div>
            <div className="tek-mac">
              {SelectedDatesGames.map(
                (match) =>
                  match.lig === 'Süper Lig' && <FikstürTekMaç match={match} />
              )}
            </div>
            <div className="fikstür-lig-header">
              <div className="logo-name">
                <img src="/images/ligler/premierlig.jpg" alt="premierlig" />
                <p>İngiltere Premier Lig</p>
              </div>
            </div>
            <div className="tek-mac">
              {SelectedDatesGames.map(
                (match) =>
                  match.lig === 'Premier League' && (
                    <FikstürTekMaç match={match} />
                  )
              )}
            </div>
            <div className="fikstür-lig-header">
              <div className="logo-name">
                <img alt="bundesliga" src="/images/ligler/bundesliga.jpg" />
                <p>Almanya Bundesliga</p>
              </div>
            </div>
            <div className="tek-mac">
              {SelectedDatesGames.map(
                (match) =>
                  match.lig === 'Bundesliga' && <FikstürTekMaç match={match} />
              )}
            </div>
            <div className="fikstür-lig-header">
              <div className="logo-name">
                <img src="/images/ligler/laliga.jpg" alt="laliga" />
                <p>İspanya La Liga</p>
              </div>
            </div>
            <div className="tek-mac">
              {SelectedDatesGames.map(
                (match) =>
                  match.lig === 'La Liga' && <FikstürTekMaç match={match} />
              )}
            </div>
            <div className="fikstür-lig-header">
              <div className="logo-name">
                <img src="/images/ligler/seriea.jpg" alt="serie a" />
                <p>İtalya Serie A</p>
              </div>
            </div>
            <div className="tek-mac">
              {SelectedDatesGames.map(
                (match) =>
                  match.lig === 'Serie A ' && <FikstürTekMaç match={match} />
              )}
            </div>
            <div className="fikstür-lig-header">
              <div className="logo-name">
                <img alt="fransa ligi" src="/images/ligler/leagueone.jpg" />
                <p>Fransa Lig 1</p>
              </div>
            </div>
            <div className="tek-mac">
              {SelectedDatesGames.map(
                (match) =>
                  match.lig === 'Ligue 1' && <FikstürTekMaç match={match} />
              )}
            </div>
          </div>
        </div>
      )
  }
}

export default FikstürMaçlar

// takımlardan birinin oynadığı ligin adıyla, ilgili lige conditional render yap.
// <div>
//{properties.map((property) => (
//    <AdminPanelPropertyItem key={property.id} property={property} />
//  ))}
//</div>

//{SuperLigFixtureState.data.filter(
// (match) =>
// match.tarih === { setStartDate } && (
// <FikstürTekMaç key={match.link} match={match} />
// )
//)}
