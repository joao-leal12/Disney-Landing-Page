import image from '../assets/assets/original.png'; 
import combo from '../assets/assets/combo.png'; 
import comboTwo from '../assets/assets/combo-dois.png';  
import '../styles/components/Chooseplan.scss'; 
 function ChoosePlan(){ 
    const plan = [ 
        
        {   
            img: image , 
            price: `R$ 27,90/mês*`, 
            msg:'No Disney+ você encontra as últimas estreias do cinema, originais e clássicos inesquecíveis.', id: 0  }, 
            {   
                img: combo, 
                price: `R$ 45,90/mês*`, 
                msg:'Assine Disney+ e Star+ juntos, Economize e aproveite agora os dois serviços por um preço único', id: 1, name:'one'   }, 
                {   
                    img: comboTwo, 
                    price: `R$ 55,90/mês*`, 
                    msg:'Disney+, Star+ e STARZPLAY em um plano especial. Assine agora os três serviços juntos.', id: 2   }
    
        ] 

        
    return(
        <section id="Plan">
            
            <h2>Escolha o seu plano</h2>
            <div className="grid">
                { plan.map( Choose => ( 
                    <div className="choose-Style" id={Choose.name} key={Choose.id}> 
                        <img src={Choose.img} alt="image choose"/>  
                        <h3 className="priceAction">{Choose.price}</h3> 
                        <p className="message-Action">{Choose.msg}</p> 
                        <div className="containerAction-btn">
                             <button type="button" className="btn-action">
                                <span>ASSINE AGORA </span>
                             </button>
                        </div>
                    </div>
                ))}
            </div> {/* Fim center*/ }
              <p class="inforchoseSelect">
                    <br></br>
                *O preço pode variar caso a assinatura seja feita atráves de outras plataformas  </p>
        </section> 
    )
 } 

 export default ChoosePlan; 