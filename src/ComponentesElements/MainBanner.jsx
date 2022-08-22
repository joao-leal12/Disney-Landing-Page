import '../styles/components/MainBanner.scss'; 
import imgAction from '../assets/assets/disneyone.svg'; 
import ChoosePlan from '../ComponentesElements/ChoosePlan.jsx'; 
function MainBanner(){ 
    
    return (
        <section id="Banner">
            <div className="Hero"></div>
            <div className="ContentHero">
                <h3>As melhores histórias em um só lugar</h3> 
                <div className="picture">
                    <img src={imgAction} alt="Disney logo"/> 
                </div>
                <div className="btnAction">
                    <div className="ContainerButton">
                       
                        <a href="#" className="btn">Escolha seu plano</a>
                    
                    </div>
                </div>
            </div> 
            <a href="#Plan" id="buttonaction">
               
                    <span>
                      <svg class="down" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" fill="none"></rect><path d="M36.63,18.37a1.37,1.37,0,0,1,2.15.37,1.7,1.7,0,0,1-.3,2.06L25.4,32.64a1.37,1.37,0,0,1-1.85,0l-13-11.84a1.71,1.71,0,0,1-.29-2.06,1.37,1.37,0,0,1,2.15-.37l12.11,11ZM24.25,31.42a.38.38,0,0,1,.46,0l-.23-.21ZM11.71,19.55s0,.06,0,0Zm25.61,0h0Z"></path>
                      </svg>
                    </span>
                
            </a>
        </section>
    )

} 


export default MainBanner; 