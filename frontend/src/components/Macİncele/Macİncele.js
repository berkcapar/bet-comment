import './Macİncele.css'
import Navigation from '../Navigation/Navigation'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useRouteMatch } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import {
  getAllFikstürFromState,
  getTeamDetailsFromState
} from '../../redux/selectors'
import { useEffect } from 'react'

import { fetchAllFikstür } from '../../redux/reducers/fikstür/AllFikstürReducer'
import { fetchTeamDetails } from '../../redux/reducers/teamReducer'

const Macİncele = ({ HomeTeamDetails, AwayTeamDetails, game }) => {
  return (
    <div>
      <Navigation />
      <div className="macincele-allpage">
        <div className="macincele-header">
          <div className="macincele-sonuc">
            <div className="home-team-container">
              <div className="home-team-image-container">
                <img alt="ev sahibi logo" src={HomeTeamDetails[0].logo_link} />
              </div>
              <div className="home-team-text-details">
                <div className="home-team-point-avg"></div>
                <div className="home-team-last-games"></div>
                <div className="home-team-name">
                  <p>{game.takim1}</p>
                </div>
              </div>
            </div>
            <div className="game-result-container">
              <div className="game-result-date-hafta">
                <p className="game-result-date">
                  {game.tarih} {game.saat}
                </p>
                <p className="game-result-hafta">{game.hafta}.Hafta</p>
              </div>
              <div className="game-result-skor">
                <div className="game-result-skor-hometeam">
                  <p>{game.takim1}</p>
                  <h2>2</h2>
                </div>
                <div className="game-result-seperator">
                  <h2>-</h2>
                </div>
                <div className="game-result-skor-awayteam">
                  <h2>1</h2>
                  <p>{game.takim2}</p>
                </div>
              </div>
              <div className="game-result-lig-stad">
                <p className="game-result-lig">{game.lig}</p>
                <p className="game-result-stadyum">{game.stadyum}</p>
              </div>
            </div>
            <div className="away-team-container">
              <div className="away-team-text-details">
                <div className="away-team-point-avg"></div>
                <div className="away-team-last-games"></div>
                <div className="away-team-name">
                  <p>{game.takim2}</p>
                </div>
              </div>
              <div className="away-team-image-container">
                <img alt="ev sahibi logo" src={AwayTeamDetails[0].logo_link} />
              </div>
            </div>
          </div>
          <div className="macincele-ust-menu">
            <Tabs>
              <TabList>
                <Tab>Title 1</Tab>
                <Tab>Title 2</Tab>
              </TabList>
              <TabPanel>
                <h2>Any content 1</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </Tabs>
          </div>
          <div className="macincele-alt-menu"></div>
        </div>
        <div className="macincele-content-container">
          <div className="macincele-detay">
            <div className="macincele-ozet-bilgi"></div>
            <div className="macincele-tahmin"></div>
            <div className="macincele-istatistikler"></div>
            <div className="macincele-atılan-goller"></div>
            <div className="macincele-yenilen-goller"></div>
          </div>
          <div className="macincele-other">
            <div className="macincele-puan-durumu"></div>
            <div className="macincele-yaklasan-diger"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const MacInceleContainer = () => {
  const AllLigFixtureState = useSelector(getAllFikstürFromState)
  const TeamDetailsState = useSelector(getTeamDetailsFromState)

  let match = useRouteMatch('/mac-incele/:takim1/:takim2/:tarih')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllFikstür())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchTeamDetails())
  }, [dispatch])

  switch (AllLigFixtureState.status) {
    case 'failure':
      return 'error'
    case 'loading':
    default:
      return 'loading'
    case 'success':
      const game = match
        ? AllLigFixtureState.data.find(
            (game) =>
              game.takim1 === match.params.takim1 &&
              game.takim2 === match.params.takim2 &&
              game.tarih === match.params.tarih
          )
        : null
      switch (TeamDetailsState.status) {
        case 'failure':
          return 'error'
        case 'loading':
        default:
          return 'loading'
        case 'success':
          console.log(game.takim1)
          const HomeTeamDetails = TeamDetailsState.data.filter(
            (team) => team.team_name === game.takim1
          )
          const AwayTeamDetails = TeamDetailsState.data.filter(
            (team) => team.team_name === game.takim2
          )

          return (
            <Macİncele
              game={game}
              HomeTeamDetails={HomeTeamDetails}
              AwayTeamDetails={AwayTeamDetails}
            />
          )
      }
  }
}

export default MacInceleContainer

// switch (SuperLigPlayerState.status) {
//   case 'failure':
//     return 'error'
//   case 'loading':
//   default:
//     return 'loading'
//   case 'success':
//     const playersteam = SuperLigPlayerState.data.map(
//       (players) => players.takim_adi
//     )
//     const uniqueplayersteam = [...new Set(playersteam)]

//     const matchingteam1 = uniqueplayersteam.filter(
//       (playerteam) => playerteam === game.takim1
//     )

//     const matchingtest1 = SuperLigPlayerState.data.filter(
//       (teamname) =>
//         teamname.takim_adi.toString() === matchingteam1.toString()
//     )
//     switch (SuperLigPlayedGames.status) {
//       case 'failure':
//         return 'error'
//       case 'loading':
//       default:
//         return 'loading'
//       case 'success':
//         const playedGamesTeamOne = SuperLigPlayedGames.data.map(
//           (playedgameone) => playedgameone.takim1
//         )
//         const uniquePlayedGamesTeamOne = [...new Set(playedGamesTeamOne)]

//         const playedGamesTeamTwo = SuperLigPlayedGames.data.map(
//           (playedgametwo) => playedgametwo.takim2
//         )
//         const uniquePlayedGamesTeamTwo = [...new Set(playedGamesTeamTwo)]

//         const playedGamesTarih = SuperLigPlayedGames.data.map(
//           (playedgameDate) => playedgameDate.tarih
//         )
//         const uniquePlayedGamesTarih = [...new Set(playedGamesTarih)]

//         const testa =
//           game.takim1 === uniquePlayedGamesTeamOne &&
//           game.takim2 === uniquePlayedGamesTeamTwo &&
//           game.tarih === uniquePlayedGamesTarih ? (
//             <Macİncele matchingtest1={matchingtest1} game={game} />
//           ) : null

//         return [testa]
//     }
// }

// {matchingtest1.map((x) => {
//   return (
//     <li
//       style={{
//         border: '1px solid red',
//         display: 'flex'
//       }}
//     >
//       <div clas>{x.oyuncu_pozisyon}</div>
//       {x.oyuncu_adi} {x.oyuncu_soyadi}
//     </li>
//   )
// })}
