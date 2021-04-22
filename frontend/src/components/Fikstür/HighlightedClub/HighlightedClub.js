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
        (bestteam) => bestteam.w / bestteam.mp >= 0.6
      )
      const BestRatedTeamDetails = TeamHasBestWinRate.filter(
        (t) => t.team === TeamHasBestWinRate[0].team
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
            (tm) => tm.team_name === TeamHasBestWinRate[0].team
          )
          console.log(findMatchingTeam)
          return (
            <div className="highlightedclub-container">
              <div className="highlightedclub-player-image">
                <img
                  src="/images/highligtedplayer.png"
                  alt="öne çıkan futbolcular"
                />
              </div>
              <div className="highlightedclub-club-details">
                <h3>Haftanın Öne Çıkan Takımı</h3>
                {TeamHasBestWinRate[0].team}
                Win Rate:{BestRatedTeamWinRate}% Sıralama
                {TeamHasBestWinRate[0].pos}
                Galibiyet: {TeamHasBestWinRate[0].w}
                Form Durumu {TeamHasBestWinRate[0].last5}
                <img
                  alt="haftanın takımı"
                  src={findMatchingTeam[0].logo_link}
                />
              </div>
            </div>
          )
      }
  }
}
export default HighligtedClub
