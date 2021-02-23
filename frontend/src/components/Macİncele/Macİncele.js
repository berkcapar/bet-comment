import './Macİncele.css'
import Navigation from '../Navigation/Navigation'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import ProgressBar from 'react-animated-progress-bar'

const Macİncele = () => {
  return (
    <div>
      <Navigation />
      <div className="macincele-allpage">
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
              <Tab className="macincele-tabs-tablist-kadro-incele-tab">
                Kadrolar
              </Tab>
              <Tab className="macincele-tabs-tablist-karsılastırma-tab">
                Karşılaştırma
              </Tab>
              <Tab className="macincele-tabs-tablist-sonmaclar-tab">
                Son Maçlar
              </Tab>
            </TabList>
            <div className="tabpanel-content">
              <TabPanel className="tabpanel-container">
                <div className="macsonu-container">
                  <h3 className="tabpanel-header">Maç Sonu İstatistikleri</h3>
                  <div className="ev-kazanır">
                    <p className="ev-kazanır-seçim">MS 1</p>
                    <div className="ev-kazanır-progressbar-second">
                      <ProgressBar
                        width="10rem"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="70"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                      />
                    </div>
                  </div>
                  <div className="ev-kaybetmez">
                    <div className="ev-kaybetmez-progressbar">
                      <ProgressBar
                        width="10rem"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="70"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                      />{' '}
                    </div>
                    <p className="ev-kaybetmez-seçim">1-X</p>
                  </div>
                  <div className="ev-kazanır">
                    <p className="ev-kazanır-seçim">MS 2</p>
                    <div className="ev-kazanır-progressbar-second">
                      <ProgressBar
                        width="10rem"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="70"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                      />
                    </div>
                  </div>
                  <div className="deplasman-kaybetmez">
                    <div className="deplasman-kaybetmez-progressbar">
                      <ProgressBar
                        width="10rem"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="70"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                      />{' '}
                    </div>
                    <p className="deplasman-kaybetmez-seçim">X-2</p>
                  </div>
                </div>
                <div className="macsonu-container">
                  <h3 className="tabpanel-header">Alt/Üst İstatistikleri</h3>
                  <div className="alt-üst-container">
                    <p>Alt</p>
                    <p>Üst</p>
                  </div>
                  <div className="ev-kazanır">
                    <div className="ev-kazanır-progressbar">
                      <ProgressBar
                        width="8rem"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="70"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                      />{' '}
                    </div>
                    <p className="ev-kazanır-seçim">1.5 Gol</p>
                    <div className="ev-kazanır-progressbar-second">
                      <ProgressBar
                        width="8rem"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="70"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                      />
                    </div>
                  </div>
                  <div className="ev-kazanır">
                    <div className="ev-kazanır-progressbar">
                      <ProgressBar
                        width="8rem"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="70"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                      />{' '}
                    </div>
                    <p className="ev-kazanır-seçim">2.5 Gol</p>
                    <div className="ev-kazanır-progressbar-second">
                      <ProgressBar
                        width="8rem"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="70"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                      />
                    </div>
                  </div>
                  <div className="ev-kazanır">
                    <div className="ev-kazanır-progressbar">
                      <ProgressBar
                        width="8rem"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="70"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                      />{' '}
                    </div>
                    <p className="ev-kazanır-seçim">3.5 Gol</p>
                    <div className="ev-kazanır-progressbar-second">
                      <ProgressBar
                        width="8rem"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="70"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                      />
                    </div>
                  </div>
                </div>
                <div className="macsonu-container">
                  <h3 className="tabpanel-header">Toplam Gol İstatistikleri</h3>
                  <div className="ev-kazanır">
                    <p className="ev-kazanır-seçim">0-1 Gol</p>
                    <div className="ev-kazanır-progressbar-second">
                      <ProgressBar
                        width="10rem"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="70"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                      />
                    </div>
                  </div>
                  <div className="ikiüç-gol">
                    <div className="ikiüç-gol-progressbar">
                      <ProgressBar
                        width="10rem"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="70"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                      />{' '}
                    </div>
                    <p className="ikiüç-gol-seçim">2-3 Gol</p>
                  </div>
                  <div className="ev-kazanır">
                    <p className="ev-kazanır-seçim">4-6 Gol</p>
                    <div className="ev-kazanır-progressbar-second">
                      <ProgressBar
                        width="10rem"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="70"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                      />
                    </div>
                  </div>
                  <div className="artıyedi-gol">
                    <div className="artıyedi-gol-progressbar">
                      <ProgressBar
                        width="10rem"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="70"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                      />{' '}
                    </div>
                    <p className="artıyedi-gol-seçim">+7 Gol</p>
                  </div>
                </div>
                <div className="macsonu-container">
                  <h3 className="tabpanel-header">Karşılıklı Gol </h3>
                  <div className="ev-kazanır">
                    <p className="ev-kazanır-seçim">Var</p>
                    <div className="ev-kazanır-progressbar-second">
                      <ProgressBar
                        width="10rem"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="70"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                      />
                    </div>
                  </div>
                  <div className="kg-yok">
                    <div className="kg-yok-progressbar">
                      <ProgressBar
                        width="10rem"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="70"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                      />{' '}
                    </div>
                    <p className="kg-yok-seçim">Yok</p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <Tabs>
                  <TabList>
                    <Tab>Tottenham</Tab>
                    <Tab>Chelsea</Tab>
                  </TabList>
                  <div className="evsahibi-deplasman-tabpanel-header">
                    <p>Son Maç İlk 11</p>
                    <p>Ort. Puan</p>
                  </div>
                  <TabPanel className="tabpanel-evsahibi-container">
                    <div className="evsahibi-tek-oyuncu">
                      <div className="evsahibi-tek-oyuncu-info">
                        <img src="/images/altayfoto.png" />
                        <p className="evsahibi-forma">1</p>
                        <p className="evsahibi-mevki">KAL</p>
                        <p className="evsahibi-isim">Altay Bayındır</p>
                      </div>
                      <div className="evsahibi-tek-oyuncu-performans">
                        <p>57</p>
                      </div>
                    </div>
                    <div className="evsahibi-tek-oyuncu">
                      <div className="evsahibi-tek-oyuncu-info">
                        <img src="/images/altayfoto.png" />
                        <p className="evsahibi-forma">1</p>
                        <p className="evsahibi-mevki">KAL</p>
                        <p className="evsahibi-isim">Altay Bayındır</p>
                      </div>
                      <div className="evsahibi-tek-oyuncu-performans">
                        <p>57</p>
                      </div>
                    </div>
                    <div className="evsahibi-tek-oyuncu">
                      <div className="evsahibi-tek-oyuncu-info">
                        <img src="/images/altayfoto.png" />
                        <p className="evsahibi-forma">1</p>
                        <p className="evsahibi-mevki">KAL</p>
                        <p className="evsahibi-isim">Altay Bayındır</p>
                      </div>
                      <div className="evsahibi-tek-oyuncu-performans">
                        <p>57</p>
                      </div>
                    </div>
                    <div className="evsahibi-tek-oyuncu">
                      <div className="evsahibi-tek-oyuncu-info">
                        <img src="/images/altayfoto.png" />
                        <p className="evsahibi-forma">1</p>
                        <p className="evsahibi-mevki">KAL</p>
                        <p className="evsahibi-isim">Altay Bayındır</p>
                      </div>
                      <div className="evsahibi-tek-oyuncu-performans">
                        <p>57</p>
                      </div>
                    </div>

                    <div className="evsahibi-deplasman-tabpanel-header">
                      <p>Son Maç Yedekler</p>
                      <p>Ort. Puan</p>
                    </div>
                    <div className="evsahibi-tek-oyuncu">
                      <div className="evsahibi-tek-oyuncu-info">
                        <img src="/images/altayfoto.png" />

                        <p className="evsahibi-forma">1</p>
                        <p className="evsahibi-mevki">KAL</p>
                        <p className="evsahibi-isim">Deniz Erden</p>
                      </div>
                      <div className="evsahibi-tek-oyuncu-performans">
                        <p>57</p>
                      </div>
                    </div>
                    <div className="evsahibi-tek-oyuncu">
                      <div className="evsahibi-tek-oyuncu-info">
                        <img src="/images/altayfoto.png" />
                        <p className="evsahibi-forma">1</p>
                        <p className="evsahibi-mevki">KAL</p>
                        <p className="evsahibi-isim">Altay Bayındır</p>
                      </div>
                      <div className="evsahibi-tek-oyuncu-performans">
                        <p>57</p>
                      </div>
                    </div>
                    <div className="evsahibi-deplasman-tabpanel-header">
                      <p>Sakat ve Cezalılar</p>
                      <p>Ort. Puan</p>
                    </div>
                  </TabPanel>
                  <TabPanel className="tabpanel-evsahibi-container">
                    <div className="evsahibi-tek-oyuncu">
                      <div className="evsahibi-tek-oyuncu-info">
                        <img src="/images/altayfoto.png" />
                        <p className="evsahibi-forma">1</p>
                        <p className="evsahibi-mevki">KAL</p>
                        <p className="evsahibi-isim">Altay Bayındır</p>
                      </div>
                      <div className="evsahibi-tek-oyuncu-performans">
                        <p>57</p>
                      </div>
                    </div>
                    <div className="evsahibi-tek-oyuncu">
                      <div className="evsahibi-tek-oyuncu-info">
                        <img src="/images/altayfoto.png" />
                        <p className="evsahibi-forma">1</p>
                        <p className="evsahibi-mevki">KAL</p>
                        <p className="evsahibi-isim">Altay Bayındır</p>
                      </div>
                      <div className="evsahibi-tek-oyuncu-performans">
                        <p>57</p>
                      </div>
                    </div>
                    <div className="evsahibi-tek-oyuncu">
                      <div className="evsahibi-tek-oyuncu-info">
                        <img src="/images/altayfoto.png" />
                        <p className="evsahibi-forma">1</p>
                        <p className="evsahibi-mevki">KAL</p>
                        <p className="evsahibi-isim">Altay Bayındır</p>
                      </div>
                      <div className="evsahibi-tek-oyuncu-performans">
                        <p>57</p>
                      </div>
                    </div>
                    <div className="evsahibi-tek-oyuncu">
                      <div className="evsahibi-tek-oyuncu-info">
                        <img src="/images/altayfoto.png" />
                        <p className="evsahibi-forma">1</p>
                        <p className="evsahibi-mevki">KAL</p>
                        <p className="evsahibi-isim">Altay Bayındır</p>
                      </div>
                      <div className="evsahibi-tek-oyuncu-performans">
                        <p>57</p>
                      </div>
                    </div>

                    <div className="evsahibi-deplasman-tabpanel-header">
                      <p>Son Maç Yedekler</p>
                      <p>Ort. Puan</p>
                    </div>
                    <div className="evsahibi-tek-oyuncu">
                      <div className="evsahibi-tek-oyuncu-info">
                        <img src="/images/altayfoto.png" />

                        <p className="evsahibi-forma">1</p>
                        <p className="evsahibi-mevki">KAL</p>
                        <p className="evsahibi-isim">Deniz Erden</p>
                      </div>
                      <div className="evsahibi-tek-oyuncu-performans">
                        <p>57</p>
                      </div>
                    </div>
                    <div className="evsahibi-tek-oyuncu">
                      <div className="evsahibi-tek-oyuncu-info">
                        <img src="/images/altayfoto.png" />
                        <p className="evsahibi-forma">1</p>
                        <p className="evsahibi-mevki">KAL</p>
                        <p className="evsahibi-isim">Altay Bayındır</p>
                      </div>
                      <div className="evsahibi-tek-oyuncu-performans">
                        <p>57</p>
                      </div>
                    </div>
                    <div className="evsahibi-deplasman-tabpanel-header">
                      <p>Sakat ve Cezalılar</p>
                      <p>Ort. Puan</p>
                    </div>
                  </TabPanel>
                </Tabs>
              </TabPanel>
              <TabPanel>
                <div className="takım-karşılaştırması-container">
                  <div className="onbir-karşılaştırması">
                    <h3>Muhtemel İlk 11 Karşılaştırması</h3>
                    <Tabs>
                      <TabList>
                        <Tab>Performans</Tab>
                        <Tab>Güç</Tab>
                        <Tab>Yetenek</Tab>
                      </TabList>
                      <TabPanel>
                        <div className="performans-karşılaştırması-container">
                          <table>
                            <tr className="karşılaştırma-tek-container">
                              <td className="karşılaştırma-ev">1</td>
                              <td className="karşılaştırma-title">
                                Bet Comment Puanı
                              </td>
                              <td className="karşılaştırma-deplasman">1</td>
                            </tr>
                            <tr className="karşılaştırma-tek-container">
                              <td className="karşılaştırma-ev">1</td>
                              <td className="karşılaştırma-title">
                                İlk 11 Maç Sayısı
                              </td>
                              <td className="karşılaştırma-deplasman">1</td>
                            </tr>
                            <tr className="karşılaştırma-tek-container">
                              <td className="karşılaştırma-ev">1</td>
                              <td className="karşılaştırma-title">
                                Toplam Dakika
                              </td>
                              <td className="karşılaştırma-deplasman">1</td>
                            </tr>
                            <tr className="karşılaştırma-tek-container">
                              <td className="karşılaştırma-ev">1</td>
                              <td className="karşılaştırma-title">
                                Sezon Formu
                              </td>
                              <td className="karşılaştırma-deplasman">1</td>
                            </tr>
                            <tr className="karşılaştırma-tek-container">
                              <td className="karşılaştırma-ev">1</td>
                              <td className="karşılaştırma-title">
                                İç Saha Formu
                              </td>
                              <td className="karşılaştırma-deplasman">1</td>
                            </tr>
                            <tr className="karşılaştırma-tek-container">
                              <td className="karşılaştırma-ev">1</td>
                              <td className="karşılaştırma-title">
                                Deplasman Formu
                              </td>
                              <td className="karşılaştırma-deplasman">1</td>
                            </tr>
                          </table>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="performans-karşılaştırması-container">
                          <table>
                            <tr className="karşılaştırma-tek-container">
                              <td className="karşılaştırma-ev">1</td>
                              <td className="karşılaştırma-title">
                                Bet Comment Puanı
                              </td>
                              <td className="karşılaştırma-deplasman">1</td>
                            </tr>
                            <tr className="karşılaştırma-tek-container">
                              <td className="karşılaştırma-ev">1</td>
                              <td className="karşılaştırma-title">
                                Piyasa Değeri
                              </td>
                              <td className="karşılaştırma-deplasman">1</td>
                            </tr>
                            <tr className="karşılaştırma-tek-container">
                              <td className="karşılaştırma-ev">1</td>
                              <td className="karşılaştırma-title">Kalecilik</td>
                              <td className="karşılaştırma-deplasman">1</td>
                            </tr>
                            <tr className="karşılaştırma-tek-container">
                              <td className="karşılaştırma-ev">1</td>
                              <td className="karşılaştırma-title">Defans</td>
                              <td className="karşılaştırma-deplasman">1</td>
                            </tr>
                            <tr className="karşılaştırma-tek-container">
                              <td className="karşılaştırma-ev">1</td>
                              <td className="karşılaştırma-title">Hücum</td>
                              <td className="karşılaştırma-deplasman">1</td>
                            </tr>
                            <tr className="karşılaştırma-tek-container">
                              <td className="karşılaştırma-ev">1</td>
                              <td className="karşılaştırma-title">
                                Fiziksel Güç
                              </td>
                              <td className="karşılaştırma-deplasman">1</td>
                            </tr>
                            <tr className="karşılaştırma-tek-container">
                              <td className="karşılaştırma-ev">1</td>
                              <td className="karşılaştırma-title">
                                Boy Ortalaması
                              </td>
                              <td className="karşılaştırma-deplasman">1</td>
                            </tr>
                            <tr className="karşılaştırma-tek-container">
                              <td className="karşılaştırma-ev">1</td>
                              <td className="karşılaştırma-title">
                                Yaş Ortalaması
                              </td>
                              <td className="karşılaştırma-deplasman">1</td>
                            </tr>
                          </table>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="performans-karşılaştırması-container">
                          <table>
                            <tr className="karşılaştırma-tek-container">
                              <td className="karşılaştırma-ev">1</td>
                              <td className="karşılaştırma-title">
                                Yetenek Ortalaması
                              </td>
                              <td className="karşılaştırma-deplasman">1</td>
                            </tr>
                            <tr className="karşılaştırma-tek-container">
                              <td className="karşılaştırma-ev">1</td>
                              <td className="karşılaştırma-title">
                                Teknik Kapasite
                              </td>
                              <td className="karşılaştırma-deplasman">1</td>
                            </tr>
                            <tr className="karşılaştırma-tek-container">
                              <td className="karşılaştırma-ev">1</td>
                              <td className="karşılaştırma-title">
                                Zihinsel Kapasite
                              </td>
                              <td className="karşılaştırma-deplasman">1</td>
                            </tr>
                            <tr className="karşılaştırma-tek-container">
                              <td className="karşılaştırma-ev">1</td>
                              <td className="karşılaştırma-title">
                                Hız Ortalaması
                              </td>
                              <td className="karşılaştırma-deplasman">1</td>
                            </tr>
                            <tr className="karşılaştırma-tek-container">
                              <td className="karşılaştırma-ev">1</td>
                              <td className="karşılaştırma-title">
                                İç Saha Formu
                              </td>
                              <td className="karşılaştırma-deplasman">1</td>
                            </tr>
                            <tr className="karşılaştırma-tek-container">
                              <td className="karşılaştırma-ev">1</td>
                              <td className="karşılaştırma-title">
                                Deplasman Formu
                              </td>
                              <td className="karşılaştırma-deplasman">1</td>
                            </tr>
                          </table>
                        </div>
                      </TabPanel>
                    </Tabs>
                  </div>
                  <div className="istatistik-karşılaştırması"></div>
                  <div className="en-iyi-oyuncular"></div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="sonmaçlar-container">
                  <div className="sonmaçlar-aralarındaki">
                    <p> Aralarındaki Son 5 Maç</p>
                    <table className="sonmaçlar-aralarındaki-table">
                      <tr className="sonmaçlar-aralarındaki-table-head">
                        <th>Tarih</th>
                        <th>Hafta</th>
                        <th>Ev</th>
                        <th>MS</th>
                        <th>Deplasman</th>
                        <th>Hakem</th>
                      </tr>
                      <tr>
                        <td>16.02.21</td>
                        <td>17.</td>
                        <td>Fenerbahçe</td>
                        <td>3-3</td>
                        <td>Galatasaray</td>
                        <td>Cüneyt Çakır</td>
                      </tr>
                      <tr>
                        <td>16.02.21</td>
                        <td>17.</td>
                        <td>Fenerbahçe</td>
                        <td>3-3</td>
                        <td>Galatasaray</td>
                        <td>Cüneyt Çakır</td>
                      </tr>
                      <tr>
                        <td>16.02.21</td>
                        <td>17.</td>
                        <td>Fenerbahçe</td>
                        <td>3-3</td>
                        <td>Galatasaray</td>
                        <td>Cüneyt Çakır</td>
                      </tr>
                      <tr>
                        <td>16.02.21</td>
                        <td>17.</td>
                        <td>Fenerbahçe</td>
                        <td>3-3</td>
                        <td>Galatasaray</td>
                        <td>Cüneyt Çakır</td>
                      </tr>
                    </table>
                  </div>

                  <div className="sonmaçlar-aralarındaki">
                    <p> Ev Sahibi Son 5 Maçı</p>
                    <table className="sonmaçlar-aralarındaki-table">
                      <tr className="sonmaçlar-aralarındaki-table-head">
                        <th>Tarih</th>
                        <th>Hafta</th>
                        <th>Ev</th>
                        <th>MS</th>
                        <th>Deplasman</th>
                        <th>Hakem</th>
                      </tr>
                      <tr>
                        <td>16.02.21</td>
                        <td>17.</td>
                        <td>Fenerbahçe</td>
                        <td>3-3</td>
                        <td>Galatasaray</td>
                        <td>Cüneyt Çakır</td>
                      </tr>
                      <tr>
                        <td>16.02.21</td>
                        <td>17.</td>
                        <td>Fenerbahçe</td>
                        <td>3-3</td>
                        <td>Galatasaray</td>
                        <td>Cüneyt Çakır</td>
                      </tr>
                      <tr>
                        <td>16.02.21</td>
                        <td>17.</td>
                        <td>Fenerbahçe</td>
                        <td>3-3</td>
                        <td>Galatasaray</td>
                        <td>Cüneyt Çakır</td>
                      </tr>
                      <tr>
                        <td>16.02.21</td>
                        <td>17.</td>
                        <td>Fenerbahçe</td>
                        <td>3-3</td>
                        <td>Galatasaray</td>
                        <td>Cüneyt Çakır</td>
                      </tr>
                    </table>
                  </div>

                  <div className="sonmaçlar-aralarındaki">
                    <p> Deplasman Son 5 Maç</p>
                    <table className="sonmaçlar-aralarındaki-table">
                      <tr className="sonmaçlar-aralarındaki-table-head">
                        <th>Tarih</th>
                        <th>Hafta</th>
                        <th>Ev</th>
                        <th>MS</th>
                        <th>Deplasman</th>
                        <th>Hakem</th>
                      </tr>
                      <tr>
                        <td>16.02.21</td>
                        <td>17.</td>
                        <td>Fenerbahçe</td>
                        <td>3-3</td>
                        <td>Galatasaray</td>
                        <td>Cüneyt Çakır</td>
                      </tr>
                      <tr>
                        <td>16.02.21</td>
                        <td>17.</td>
                        <td>Fenerbahçe</td>
                        <td>3-3</td>
                        <td>Galatasaray</td>
                        <td>Cüneyt Çakır</td>
                      </tr>
                      <tr>
                        <td>16.02.21</td>
                        <td>17.</td>
                        <td>Fenerbahçe</td>
                        <td>3-3</td>
                        <td>Galatasaray</td>
                        <td>Cüneyt Çakır</td>
                      </tr>
                      <tr>
                        <td>16.02.21</td>
                        <td>17.</td>
                        <td>Fenerbahçe</td>
                        <td>3-3</td>
                        <td>Galatasaray</td>
                        <td>Cüneyt Çakır</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
        <div className="other-container">
          <div className="en-iyi-oyuncular-container">
            <div className="en-iyi-oyuncular-header">
              <h3>En İyi Oyuncular</h3>
              <div className="en-iyi-oyuncular-header-takımlar">
                <p>Tottenham</p>
                <p>Chelsea</p>
              </div>
            </div>
            <div className="en-iyi-oyuncular-sub-header">Piyasa Değeri</div>
            <div className="en-iyi-oyuncular-content">
              <div className="en-iyi-oyuncular-content-ev-sahibi">
                <p> Harry Kane </p> <p>150Mil£</p>
              </div>
              <div className="en-iyi-oyuncular-content-ev-sahibi">
                <p> Timo Werner </p> <p>140Mil£</p>
              </div>
            </div>
            <div className="en-iyi-oyuncular-sub-header">Piyasa Değeri</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Macİncele
