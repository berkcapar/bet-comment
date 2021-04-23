import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getLaLigaPuanDurumuFromState,
  getTeamDetailsFromState
} from '../../../redux/selectors'
import './HighlightedClub.css'
import { fetchLaLigaPuanDurumu } from '../../../redux/reducers/puandurumu/LaLigaPuanDurumuReducer'
import { fetchTeamDetails } from '../../../redux/reducers/teamReducer'

const HighligtedClub = () => {
  const LaLigaPuanDurumu = useSelector(getLaLigaPuanDurumuFromState)
  const TeamDetails = useSelector(getTeamDetailsFromState)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchLaLigaPuanDurumu())
  }, [dispatch])
  useEffect(() => {
    dispatch(fetchTeamDetails())
  }, [dispatch])

  switch (LaLigaPuanDurumu.status) {
    case 'failure':
      return 'oops an error'
    case 'loading':
    default:
      return 'loading'
    case 'success':
      const TeamHasBestWinRate = LaLigaPuanDurumu.data.filter(
        (bestteam) => bestteam.w / bestteam.mp >= 0.5
      )
      const BestRatedTeamDetails = TeamHasBestWinRate.filter(
        (t) => t.team === TeamHasBestWinRate[3].team
      )
      const BestRatedTeamWinRate = Math.floor(
        (BestRatedTeamDetails[0].w / BestRatedTeamDetails[0].mp) * 100
      )
      switch (TeamDetails.status) {
        case 'failure':
          return 'oops an error'
        case 'loading':
        default:
          return 'loading'
        case 'success':
          const findMatchingTeam = TeamDetails.data.filter(
            (tm) => tm.team_name === TeamHasBestWinRate[3].team
          )
          return (
            <div className="highlightedclub-container">
              <div className="highlightedclub-player-image">
                <img
                  src="/images/highligtedplayer.png"
                  alt="öne çıkan futbolcular"
                />
              </div>
              <div className="highlightedclub-club-details">
                <h3>HAFTANIN ÖNE ÇIKAN TAKIMI</h3>
                <div className="highlightedclub-club-header">
                  <div className="highlightedclub-club-image">
                    <img
                      alt="haftanın takımı"
                      src={findMatchingTeam[0].logo_link}
                    />
                  </div>

                  <div className="highlightedclub-club-header-rate-container">
                    <p className="highlightedclub-club-header-name">
                      {TeamHasBestWinRate[3].team}
                    </p>
                    <h2 className="highlightedclub-club-header-rate">
                      {BestRatedTeamWinRate}%
                    </h2>
                    <p className="highlightedclub-club-header-rate-text">
                      Win Rate
                    </p>
                  </div>
                </div>
                <div className="highlighted-club-subdetails">
                  <div className="hightlighted-club-pos">
                    <h1>{TeamHasBestWinRate[3].pos}</h1>
                    <p>SIRALAMA</p>
                  </div>
                  <div className="hightlighted-club-win">
                    <h1>{TeamHasBestWinRate[3].w}</h1>
                    <p>GALİBİYET</p>
                  </div>
                  <div className="hightlighted-club-form">
                    <h1>{TeamHasBestWinRate[3].last5.replace(/,/g, '')}</h1>
                    <p>FORM</p>
                  </div>
                </div>
                <div className="highlighted-club-cta">
                  <p>TAKIM DETAYI</p>
                </div>
              </div>
            </div>
          )
      }
  }
}
export default HighligtedClub
