import FikstürTekMaç from '../FikstürTekMaç/FikstürTekMaç'
import './FikstürMaçlar.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  getSuperLigFiksturFromState,
  getAllFikstürFromState
} from '../../../redux/selectors'
import { useEffect, useState } from 'react'
import { fetchSuperLeagueFikstür } from '../../../redux/reducers/fikstür/SuperLigFikstürReducer'
import { fetchAllFikstür } from '../../../redux/reducers/fikstür/AllFikstürReducer'
import Tabs, { TabPane } from 'rc-tabs'
import '../../../../node_modules/rc-tabs/assets/index.css'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const FikstürMaçlar = () => {
  const SuperLigFixtureState = useSelector(getSuperLigFiksturFromState)
  const AllLigFixtureState = useSelector(getAllFikstürFromState)

  const [startDate, setStartDate] = useState(new Date())

  const dispatch = useDispatch()
  const callback = function (key) {}

  useEffect(() => {
    dispatch(fetchSuperLeagueFikstür())
  }, [dispatch])

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
      const SuperLeagueGameDates = SuperLigFixtureState.data.map(
        (game) => game.tarih
      )
      const SuperLigSortedDates = SuperLeagueGameDates.sort((a, b) => a - b)
      const SuperLiguniqueSortedDates = [...new Set(SuperLigSortedDates)]
      const SuperLigFormatteduniqueSortedDates = SuperLiguniqueSortedDates.map(
        (uniqueSortedDate) => uniqueSortedDate.slice(5, 12)
      )
      const SelectedDatesGames = AllLigFixtureState.data.filter(
        (sdg) => sdg.tarih
      )
      console.log(SelectedDatesGames)

      return (
        <div>
          <div className="fikstür-lig-container">
            <div className="date-area">
              <p className="fikstür-text">Karşılaşmalar</p>
              <CalendarTodayIcon />

              <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />

              <Tabs defaultActiveKey="1" onChange={callback}>
                <div className="fikstür-lig-header">
                  <div className="logo-name">
                    <img src="/images/ligler/superlig.jpg" alt="superlig" />
                    <p>Türkiye Süper Lig</p>
                  </div>
                </div>

                <TabPane tab={SuperLigFormatteduniqueSortedDates[0]} key="1">
                  <div className="tek-mac">
                    {SuperLigFixtureState.data.map(
                      (match) =>
                        match.tarih === SuperLiguniqueSortedDates[0] && (
                          <FikstürTekMaç key={match.link} match={match} />
                        )
                    )}
                  </div>
                  <div className="fikstür-lig-header">
                    <div className="logo-name">
                      <img
                        src="/images/ligler/premierlig.jpg"
                        alt="premierlig"
                      />
                      <p>İngiltere Premier Lig</p>
                    </div>
                  </div>
                  <div className="tek-mac">
                    <div className="tek-mac"></div>
                  </div>
                  <div className="fikstür-lig-header">
                    <div className="logo-name">
                      <img
                        alt="bundesliga"
                        src="/images/ligler/bundesliga.jpg"
                      />
                      <p>Almanya Bundesliga</p>
                    </div>
                  </div>
                  <div className="tek-mac"></div>
                  <div className="fikstür-lig-header">
                    <div className="logo-name">
                      <img src="/images/ligler/laliga.jpg" alt="laliga" />
                      <p>İspanya La Liga</p>
                    </div>
                  </div>
                  <div className="tek-mac"></div>
                  <div className="fikstür-lig-header">
                    <div className="logo-name">
                      <img src="/images/ligler/seriea.jpg" alt="serie a" />
                      <p>İtalya Serie A</p>
                    </div>
                  </div>
                  <div className="tek-mac">
                    <FikstürTekMaç />
                  </div>
                  <div className="fikstür-lig-header">
                    <div className="logo-name">
                      <img
                        alt="fransa ligi"
                        src="/images/ligler/leagueone.jpg"
                      />
                      <p>Fransa Lig 1</p>
                    </div>
                  </div>
                  <div className="tek-mac"></div>
                  <div className="fikstür-lig-header">
                    <div className="logo-name">
                      <img
                        src="/images/ligler/eredevise.jpg"
                        alt="hollanda ligi"
                      />
                      <p>Hollanda Eredevise</p>
                    </div>
                  </div>
                  <div className="tek-mac">
                    <FikstürTekMaç />
                  </div>
                </TabPane>
              </Tabs>
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
