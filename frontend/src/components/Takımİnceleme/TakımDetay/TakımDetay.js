import Navigation from '../../Navigation/Navigation'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import './TakımDetay.css'

const TakımDetay = () => {
  return (
    <div>
      <Navigation />
      <div className="takımdetay-container">
        <div className="games-squad">
          <div className="games">
            <p>Takımın bu sezonki maçları</p>
            <table>
              <tr>
                <th>Tarih</th>
                <th>Hafta</th>
                <th>Ev Sahibi</th>
                <th>Maç Sonu</th>
                <th>Deplasman</th>
                <th>Yüksek İhtimal</th>
                <th>Oran</th>
                <th>Sonuç</th>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </table>
          </div>
          <Tabs className="squad-container"></Tabs>
        </div>
        <div className="overallinfo-standing">
          <div className="overallinfo">
            <div className="overallinfo-header">
              <img src="https://upload.wikimedia.org/wikipedia/tr/thumb/8/85/200px-Fenerbah%C3%A7e.png/300px-200px-Fenerbah%C3%A7e.png" />
              <p>Fenerbahçe </p>
            </div>
            <div className="text-info">
              <div>
                <div className="lig">
                  <p>Bulunduğu Lig:</p>
                  <p className="lig-answer">Türkiye Süper Ligi</p>
                </div>
                <div className="hoca">
                  <p>Teknik Direktör:</p>
                  <p className="hoca-answer">Erol Bullet</p>
                </div>
                <div className="stat">
                  <p>Stadyum:</p>
                  <p className="stat-answer">Şükrü Saraçoğlu Stadyumu</p>
                </div>
              </div>
            </div>
          </div>
          <div className="standing">
            <div className="standing-header">
              <p className="puan-durumu">Türkiye Süper Lig Puan Durumu</p>
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
        </div>
      </div>
    </div>
  )
}
export default TakımDetay
