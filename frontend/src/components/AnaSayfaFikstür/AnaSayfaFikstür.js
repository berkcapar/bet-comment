import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { LeagueDropdownItems } from '../Navigation/LeagueDropdownItems'
import './AnaSayfaFikstür.css'
import TekMac from './TekMac.js'

const AnaSayfaFikstür = () => {
  return (
    <Tabs className="tab-container">
      <p className="title">24.Haftanın Maçları</p>
      <TabList>
        {LeagueDropdownItems.slice(0, 3).map((item, index) => {
          return <Tab key={index}>{item.name}</Tab>
        })}
      </TabList>
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
  )
}
export default AnaSayfaFikstür
