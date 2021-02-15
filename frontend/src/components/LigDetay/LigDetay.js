import { useRouteMatch } from 'react-router'
import { LeagueDropdownItems } from '../Navigation/LeagueDropdownItems'
import '../Navigation/LeagueDropdownItems'
import './LigDetay.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import TekMac from '../AnaSayfaFikstür/TekMac'
import Navigation from '../Navigation/Navigation'

const LigDetay = () => {
  let match = useRouteMatch('/ligler/:path')
  const item = match
    ? LeagueDropdownItems.find((item) => item.path === match.params.path)
    : null

  return (
    <div>
      <Navigation />
      <div className="item-logo-container">
        <img alt={item.alt} src={item.logo} />
        <h2>{item.name}</h2>
      </div>
      <div className="standing-info-container">
        <div className="info-container">
          <div className="info-header">
            <img alt={item.alt} src={item.logo} />
            <h2>Lige Dair Genel Bakış</h2>
          </div>
          <div className="info-main">
            <div className="kuruluş">
              <p>Kuruluş Tarihi:</p> <p className="info-answer">1900</p>
            </div>
            <div className="piyasa">
              <p>Toplam Piyasa Değeri:</p>{' '}
              <p className="info-answer">16.15 mil£</p>
            </div>
            <div className="endeğerli">
              <p>En Değerli Oyuncu:</p>{' '}
              <p className="info-answer">Raheem Sterling</p>
            </div>
          </div>
        </div>
      </div>
      <div className="standing">
        <div className="standing-header">
          <p>Puan Durumu</p>
          <p className="sezon">Sezon Seçiniz </p>
        </div>
        <table>
          <tr className="head">
            <th>#</th>
            <th>Kulüp</th>
            <th>Maç</th>
            <th>G</th>
            <th>B</th>
            <th>M</th>
            <th>Gol</th>
            <th>Avg</th>
            <th>Puan</th>
          </tr>
          <tr>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
          </tr>
          <tr>
            <td>5</td>
          </tr>
          <tr>
            <td>6</td>
          </tr>
          <tr>
            <td>7</td>
          </tr>
          <tr>
            <td>8</td>
          </tr>
          <tr>
            <td>9</td>
          </tr>
          <tr>
            <td>10</td>
          </tr>
          <tr>
            <td>11</td>
          </tr>
          <tr>
            <td>12</td>
          </tr>
          <tr>
            <td>13</td>
          </tr>
          <tr>
            <td>14</td>
          </tr>
          <tr>
            <td>15</td>
          </tr>
          <tr>
            <td>16</td>
          </tr>
          <tr>
            <td>17</td>
          </tr>
          <tr>
            <td>18</td>
          </tr>
        </table>
      </div>
      <Tabs className="tab-container">
        <div className="tab-title">
          <TabList>
            <Tab>
              <p>Önceki Hafta</p>
            </Tab>
            <Tab>
              <p>Bu Hafta</p>
            </Tab>
            <Tab>
              <p>Sonraki Hafta</p>
            </Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className="tarih-maclar">
            <p className="date">06.02.21</p>
            <div className="maclar">
              <TekMac />
              <TekMac />
              <TekMac />
            </div>
          </div>
          <div className="tarih-maclar">
            <p className="date">07.02.21</p>
            <div className="maclar">
              <TekMac />
              <TekMac />
              <TekMac />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>

        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  )
}
export default LigDetay
