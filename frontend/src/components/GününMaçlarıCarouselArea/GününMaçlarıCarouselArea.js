import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { LeagueDropdownItems } from '../Navigation/LeagueDropdownItems'
import './GününMaçlarıCarouselArea.css'
import TekMac from './TekMac.js'
import Carousel from 'react-material-ui-carousel'
import { makeStyles, Paper } from '@material-ui/core'

export const GününMaçlarıCarouselArea = () => {
  const items = [
    {
      team1LogoSrc:
        'https://secure.cache.images.core.optasports.com/soccer/teams/150x150/2214.png',
      team1Name: 'Beşiktaş',
      team2LogoSrc:
        'https://secure.cache.images.core.optasports.com/soccer/teams/150x150/2212.png',
      team2Name: 'Fenerbahçe',
      league: 'TÜRKİYE SÜPER LİG',
      time: '19:00',
      MS1İddia: '1.65',
      MS1Algoritma: '%60',
      MS2İddia: '1.65',
      MS2Algoritma: '%25',
      KGİddia: '1.65',
      KGAlgoritma: '%40'
    }
  ]
  return (
    <div>
      <Carousel>
        {items.map((item, i) => (
          <GününMaçlarıCarouselItem key={i} item={item} />
        ))}
      </Carousel>
    </div>
  )
}

export const GününMaçlarıCarouselItem = ({ item }) => {
  return (
    <div>
      <Paper>
        <div className="carousel-container">
          <p className="günün-maçları-header">GÜNÜN MAÇLARI</p>
          <img src={item.team1LogoSrc} />
          <img src={item.team2LogoSrc} />
          <div className="league-time">
            <p>{item.league}</p>
            <div className="seperator"></div>
            <p>{item.time}</p>
          </div>
          <div className="team-names">
            <h3>{item.team1Name}</h3>
            <h3>v</h3>
            <h3>{item.team2Name}</h3>
            <h2></h2>
          </div>
          <div className="sonuçlar-container">
            <div className="sonuçlar-ms1">
              <p>MS1</p>
              <div className="sonuçlar">
                <p className="iddia">{item.MS1İddia}</p>
                <div className="sonuçlar-seperator"></div>
                <p className="algoritma">{item.MS1Algoritma}</p>
              </div>
            </div>
            <div className="sonuçlar-ms2">
              <p>MS2</p>
              <div className="sonuçlar">
                <p className="iddia">{item.MS2İddia}</p>
                <div className="sonuçlar-seperator"></div>
                <p className="algoritma">{item.MS2Algoritma}</p>
              </div>
            </div>
            <div className="sonuçlar-kg">
              <p>KG VAR</p>
              <div className="sonuçlar">
                <p className="iddia">{item.KGİddia}</p>
                <div className="sonuçlar-seperator"></div>
                <p className="algoritma">{item.KGAlgoritma}</p>
              </div>
            </div>
            <div className="sonuçlar-daha-fazlası">+Daha Fazla</div>
          </div>
        </div>
      </Paper>
    </div>
  )
}
