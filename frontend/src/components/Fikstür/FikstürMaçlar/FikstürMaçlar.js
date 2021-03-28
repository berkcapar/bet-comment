import FikstürTekMaç from '../FikstürTekMaç/FikstürTekMaç'
import './FikstürMaçlar.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  getPremierLigFikstürFromState,
  getSuperLigFiksturFromState
} from '../../../redux/selectors'
import { useEffect, useState } from 'react'
import { fetchSuperLeagueFikstür } from '../../../redux/reducers/fikstür/SuperLigFikstürReducer'
import { fetchPremierLeagueFikstür } from '../../../redux/reducers/fikstür/PremierLigFikstürReducer'
import Calendar from 'react-calendar'
import Tabs, { TabPane } from 'rc-tabs'
import '../../../../node_modules/rc-tabs/assets/index.css'

const FikstürMaçlar = () => {
  const SuperLigFixtureState = useSelector(getSuperLigFiksturFromState)
  const PremierLigFixtureState = useSelector(getPremierLigFikstürFromState)
  console.log(PremierLigFixtureState.data)

  const dispatch = useDispatch()
  const [date, setDate] = useState(new Date())
  const callback = function (key) {}

  useEffect(() => {
    dispatch(fetchSuperLeagueFikstür())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchPremierLeagueFikstür())
  }, [dispatch])

  switch (SuperLigFixtureState.status && PremierLigFixtureState.status) {
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
      const PremierLeagueGameDates = PremierLigFixtureState.data.map(
        (game) => game.tarih
      )
      const PremierLigSortedDates = PremierLeagueGameDates.sort((a, b) => a - b)
      const PremierLiguniqueSortedDates = [...new Set(PremierLigSortedDates)]

      return (
        <div>
          <div className="fikstür-lig">
            <div className="date-area">
              <p className="fikstür-text">Fikstür</p>
              <Tabs defaultActiveKey="2" onChange={callback}>
                <div className="fikstür-lig-header">
                  <div className="logo-name">
                    <img src="/images/ligler/superlig.jpg" alt="superlig" />
                    <p>Türkiye Süper Lig</p>
                  </div>
                  <div className="ihtimal">
                    <p>En İyi Seçim</p>
                    <p>İhtimal</p>
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
                    <div className="ihtimal">
                      <p>En İyi Seçim</p>
                      <p>İhtimal</p>
                    </div>
                  </div>
                  <div className="tek-mac">
                    <div className="tek-mac">
                      {PremierLigFixtureState.data.map(
                        (match) =>
                          match.tarih === PremierLiguniqueSortedDates[0] && (
                            <FikstürTekMaç key={match.link} match={match} />
                          )
                      )}
                    </div>
                  </div>
                </TabPane>
                <TabPane
                  tab={SuperLigFormatteduniqueSortedDates[1]}
                  className="date-single-slide"
                  key="2"
                >
                  <div className="fikstür-lig-header">
                    <div className="logo-name">
                      <img
                        src="/images/ligler/premierlig.jpg"
                        alt="premierlig"
                      />
                      <p>İngiltere Premier Lig</p>
                    </div>
                    <div className="ihtimal">
                      <p>En İyi Seçim</p>
                      <p>İhtimal</p>
                    </div>
                  </div>

                  <div className="tek-mac">
                    <FikstürTekMaç />
                  </div>
                </TabPane>
                <TabPane
                  tab={SuperLigFormatteduniqueSortedDates[2]}
                  className="date-single-slide"
                  key="3"
                >
                  third
                </TabPane>
              </Tabs>
            </div>

            <div className="fikstür-lig-header">
              <div className="logo-name">
                <img src="/images/ligler/premierlig.jpg" alt="premierlig" />
                <p>İngiltere Premier Lig</p>
              </div>
              <div className="ihtimal">
                <p>En İyi Seçim</p>
                <p>İhtimal</p>
              </div>
            </div>
            <div className="tek-mac">
              <FikstürTekMaç />
            </div>
            <div className="fikstür-lig-header">
              <div className="logo-name">
                <img src="/images/ligler/laliga.jpg" alt="laliga" />
                <p>İspanya La Liga</p>
              </div>
              <div className="ihtimal">
                <p>En İyi Seçim</p>
                <p>İhtimal</p>
              </div>
            </div>
            <div className="tek-mac">
              <FikstürTekMaç />
            </div>
            <div className="fikstür-lig-header">
              <div className="logo-name">
                <img alt="bundesliga" src="/images/ligler/bundesliga.jpg" />
                <p>Almanya Bundesliga</p>
              </div>
              <div className="ihtimal">
                <p>En İyi Seçim</p>
                <p>İhtimal</p>
              </div>
            </div>
            <div className="tek-mac">
              <FikstürTekMaç />
            </div>
            <div className="fikstür-lig-header">
              <div className="logo-name">
                <img src="/images/ligler/seriea.jpg" alt="serie a" />
                <p>İtalya Serie A</p>
              </div>
              <div className="ihtimal">
                <p>En İyi Seçim</p>
                <p>İhtimal</p>
              </div>
            </div>
            <div className="tek-mac">
              <FikstürTekMaç />
            </div>
            <div className="fikstür-lig-header">
              <div className="logo-name">
                <img alt="fransa ligi" src="/images/ligler/leagueone.jpg" />
                <p>Fransa Lig 1</p>
              </div>
              <div className="ihtimal">
                <p>En İyi Seçim</p>
                <p>İhtimal</p>
              </div>
            </div>
            <div className="tek-mac">
              <FikstürTekMaç />
            </div>
            <div className="fikstür-lig-header">
              <div className="logo-name">
                <img src="/images/ligler/eredevise.jpg" alt="hollanda ligi" />
                <p>Hollanda Eredevise</p>
              </div>
              <div className="ihtimal">
                <p>En İyi Seçim</p>
                <p>İhtimal</p>
              </div>
            </div>
            <div className="tek-mac">
              <FikstürTekMaç />
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
