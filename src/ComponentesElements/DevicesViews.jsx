import '../styles/components/DeviceViews.scss'; 
import NootBook from '../assets/assets/device-nootbook.png'; 
import Gamer from '../assets/assets/device-gamer.png'; 
import SmartPhone from '../assets/assets/device-smartphone.png'; 
import TV from '../assets/assets/device-tv.png'; 

export function DevicesViews(){ 


        return(
            <section id="devViews">
                <h2>Disponivel nos seus dispositivos móveis </h2>

                <ul id="deviceComponents">
                    <li class="device-component-item">
                        <div className="img-device">
                            <img src={NootBook} title="nootbook" alt="nootbook"/>     
                        </div>

                        <div className="inforDevices">
                            <h3>Computador</h3>
                            <ul>
                                <li>Chrome OS </li>
                                <li>MacOs</li>
                                <li>PC Windows</li>
                            </ul>
                        </div>
                    </li>
                    <li class="device-component-item">
                    <div className="img-device">
                            <img src={TV} title="nootbook" alt="nootbook"/>     
                        </div>

                        <div className="inforDevices">
                            <h3>TV</h3>
                            <ul>
                                <li>Amazon Fire TV </li>
                                <li>Android TV</li>
                                <li>Apple TV</li>
                                <li>Chromecast</li>
                                <li>TVs lG</li>
                                <li>Roku</li>
                                <li>Samsung</li>
                            </ul>
                        </div>
                    </li>
                    <li class="device-component-item">
                    <div className="img-device">
                            <img src={Gamer} title="nootbook" alt="nootbook"/>     
                        </div>

                        <div className="inforDevices">
                            <h3>Videogames</h3>
                            <ul>
                                <li>PS4</li>
                                <li>PS5</li>
                                <li>Xbox One</li>
                                <li>Xbos Series X</li>
                                <li>Xbox Series S</li> 
                            </ul>
                        </div>
                    </li>
                    <li class="device-component-item">
                    <div className="img-device">
                            <img src={SmartPhone} title="nootbook" alt="nootbook"/>     
                        </div>

                        <div className="inforDevices">
                            <h3>Celulares e Tablets</h3>
                            <ul>
                                <li>Tablets Amazon Fire</li>
                                <li>Celulares e Tablets Android</li>
                                <li>Iphone e Ipad</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </section>
        ); 
}