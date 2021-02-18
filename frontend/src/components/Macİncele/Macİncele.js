import './Macİncele.css'
import Navigation from '../Navigation/Navigation'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const Macİncele = () => {
  return (
    <div>
      <Navigation />
      <div className="macincele-container">
        <div className="macincele-header">
          <div className="macincele-header-hometeam">
            <img src="https://tot-tmp.azureedge.net/media/2280/spurs-blue-no-text-300x300.png" />
            <p>Tottenham </p>
          </div>
          <div className="macincele-header-macinfo">
            <div className="macincele-header-macinfo-time">
              <p className="macincele-header-macinfo-time-hafta">13.Hafta</p>
              <p className="macincele-header-macinfo-time-hafta-tarih">
                20.12.2020
              </p>
              <p>16.00</p>
            </div>
            <div className="macincele-header-macinfo-skor">
              <h1>2</h1> <h1>-</h1>
              <h1>0</h1>
            </div>
            <div className="macincele-header-macinfo-hakemstat">
              <p className="macincele-header-macinfo-hakemstat-hakem">
                <img src="/images/refree.png" />
                <p>Cüneyt Çakır</p>
              </p>
              <p className="macincele-header-macinfo-hakemstat-stat">
                <img src="/images/stad.png" />
                <p> San Siro</p>
              </p>
            </div>
          </div>
          <div className="macincele-header-deplasmanteam">
            <img src="https://upload.wikimedia.org/wikipedia/tr/thumb/2/27/Chelsea_FC_arma.svg/1200px-Chelsea_FC_arma.svg.png" />
            <p>Chelsea</p>
          </div>
        </div>
        <Tabs className="macincele-tabs-container">
          <TabList className="macincele-tabs-tablist">
            <Tab className="macincele-tabs-tablist-analiz-tab">
              Akıllı Analiz
            </Tab>
            <Tab className="macincele-tabs-tablist-evsahibi-tab">Ev Sahibi</Tab>
            <Tab className="macincele-tabs-tablist-deplasman-tab">
              Deplasman
            </Tab>
            <Tab className="macincele-tabs-tablist-karsılastırma-tab">
              Karşılaştırma
            </Tab>
          </TabList>
          <TabPanel>selam</TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  )
}
export default Macİncele
