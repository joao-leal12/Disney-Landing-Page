import ImageWatch from '../assets/assets/watch.png'; 
import '../styles/components/WatchNow.scss'; 
function WatchNow(){ 

    return(
        <section id="watchNow">
            <div className="picture">
                <img src={ImageWatch} alt="Watch Now"/> 
            </div> 
            <div className="text-Container">
                <h3>Assista do seu jeito</h3>
                <p>Aproveite a tela grande da TV ou assista no tablet, laptop, celular e outros aparelhos. Nossa seleção de títulos em 4K não para de crescer. Além disso, para a felicidade de todos, é possível assistir em até 4 telas ao mesmo tempo.</p>
            </div>
        </section>
    )   
} 

export default WatchNow; 