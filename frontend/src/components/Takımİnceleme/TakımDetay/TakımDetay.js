import Navigation from '../../Navigation/Navigation'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import './TakımDetay.css'
import Footer from '../../Footer/Footer'

const TakımDetay = () => {
  return (
    <div>
      <Navigation />
      <div className="takımdetay-container">
        <div className="games-squad">
          <div className="games">
            <p>Takımın bu sezonki maçları</p>
            <table className="games-table">
              <tr className="games-table-head">
                <th className="games-tarih">Tarih</th>
                <th className="games-hafta">Hafta</th>
                <th>Ev</th>
                <th>MS</th>
                <th>Deplasman</th>
                <th>İhtimal</th>
                <th>Seçim</th>
                <th>Oran</th>
              </tr>
              <tr>
                <td className="games-tarih">16.02.21</td>
                <td className="games-hafta">17.</td>
                <td>Fenerbahçe</td>
                <td>3-3</td>
                <td>Galatasaray</td>
                <td>%88</td>
                <td>MS 2</td>
                <td>1.6</td>
              </tr>
              <tr>
                <td className="games-tarih">16.02.21</td>
                <td className="games-hafta">17.</td>
                <td>Fenerbahçe</td>
                <td>3-3</td>
                <td>Galatasaray</td>
                <td>%88</td>
                <td>MS 2</td>
                <td>1.6</td>
              </tr>
              <tr>
                <td className="games-tarih">16.02.21</td>
                <td className="games-hafta">17.</td>
                <td>Fenerbahçe</td>
                <td>3-3</td>
                <td>Galatasaray</td>
                <td>%88</td>
                <td>MS 2</td>
                <td>1.6</td>
              </tr>
              <tr>
                <td className="games-tarih">16.02.21</td>
                <td className="games-hafta">17.</td>
                <td>Fenerbahçe</td>
                <td>3-3</td>
                <td>Galatasaray</td>
                <td>%88</td>
                <td>MS 2</td>
                <td>1.6</td>
              </tr>
              <tr>
                <td className="games-tarih">16.02.21</td>
                <td className="games-hafta">17.</td>
                <td>Fenerbahçe</td>
                <td>3-3</td>
                <td>Galatasaray</td>
                <td>%88</td>
                <td>MS 2</td>
                <td>1.6</td>
              </tr>
            </table>
          </div>
          <Tabs className="squad-container">
            <TabList>
              <Tab>Genel Görüntü</Tab>
              <Tab>Sahaya Diziliş</Tab>
            </TabList>
            <TabPanel>
              <table className="oyuncu-table">
                <tr className="oyuncu-header">
                  <th>Oyuncu</th>
                  <th>Pozisyon</th>
                  <th>Doğum Tarihi/Yaş</th>
                  <th>Piyasa Dğr</th>
                  <th>Uyruk</th>
                </tr>
                <tr>
                  <td>Altay Bayındır</td>
                  <td>Kaleci</td>
                  <td>14 Nisan 1998 / 22</td>
                  <td>11.00 mil£</td>
                  <td>Türkiye</td>
                </tr>
                <tr>
                  <td>Altay Bayındır</td>
                  <td>Kaleci</td>
                  <td>14 Nisan 1998 / 22</td>
                  <td>11.00 mil£</td>
                  <td>Türkiye</td>
                </tr>
                <tr>
                  <td>Altay Bayındır</td>
                  <td>Kaleci</td>
                  <td>14 Nisan 1998 / 22</td>
                  <td>11.00 mil£</td>
                  <td>Türkiye</td>
                </tr>
                <tr>
                  <td>Altay Bayındır</td>
                  <td>Kaleci</td>
                  <td>14 Nisan 1998 / 22</td>
                  <td>11.00 mil£</td>
                  <td>Türkiye</td>
                </tr>
              </table>
            </TabPanel>
            <TabPanel>
              <div className="saha-container">
                <img src="/images/futbolsahasi.jpg" alt="futbol sahası" />
                <div className="futbolcular">
                  <div className="kaleci">
                    <p>Altay</p>
                    <p>Altay</p>
                    <p>Altay</p>
                  </div>
                  <div className="stoper">
                    <p>Sergio Ramos</p>
                    <p>Sergio Ramos</p>
                    <p>Sergio Ramos</p>
                    <p>Sergio Ramos</p>
                    <p>Sergio Ramos</p>
                  </div>
                  <div className="sağbek">
                    <p>Nazım Sangare</p>
                    <p>Nazım Sangare</p>
                    <p>Nazım Sangare</p>
                  </div>
                  <div className="solbek">
                    <p>Roberto Carlos</p>
                    <p>Roberto Carlos</p>
                    <p>Roberto Carlos</p>
                  </div>
                  <div className="ortasaha">
                    <p> Messi</p>
                    <p> Messi</p>
                    <p> Messi</p>
                    <p> Messi</p>
                    <p> Messi</p>
                  </div>
                  <div className="sağkanat">
                    <p>Kylian Mbappe</p>
                    <p>Kylian Mbappe</p>
                    <p>Kylian Mbappe</p>
                    <p>Kylian Mbappe</p>
                    <p>Kylian Mbappe</p>
                  </div>
                  <div className="solkanat">
                    <p>Enner Valencia</p>
                    <p>Enner Valencia</p>
                    <p>Enner Valencia</p>
                    <p>Enner Valencia</p>
                    <p>Enner Valencia</p>
                  </div>
                  <div className="ofansif-ortasaha">
                    <p>Mesut Özil</p>
                    <p>Mesut Özil</p>
                    <p>Mesut Özil</p>
                    <p>Mesut Özil</p>
                  </div>
                  <div className="forvet">
                    <p>Michael Frey</p>
                    <p>Michael Frey</p>
                    <p>Michael Frey</p>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
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
          <div className="standing-takım">
            <div className="standing-takım-header">
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
      <Footer />
    </div>
  )
}
export default TakımDetay

// Eski maçlar için tek bir component yaz. Map ve slice ile render et.
// Mobilde tutan maçları hover edince yeşil, yatanları hover edince kırmızı olsun.
