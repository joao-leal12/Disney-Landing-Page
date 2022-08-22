import '../styles/components/Cards.scss'; 
import DiaryOf from '../assets/assets/cards/DiariodeUmbanan.jpg'; 
import Frozen from '../assets/assets/cards/frozen.jpg'; 
import Gavion from '../assets/assets/cards/GavionArqueiro.jpg'; 
import Luca from '../assets/assets/cards/luca.jpg'; 
import MonstroSA from '../assets/assets/cards/monstrossa.jpg'; 
import Und from '../assets/assets/cards/original.jpg'; 
import StarWars from '../assets/assets/cards/starwars.jpg'; 
import WhatIf from '../assets/assets/cards/wathif.jpg'; 
import Welcome from '../assets/assets/cards/welcometheplan.jpg'; 
function Cards() { 
   const     cards = [ 
        {id:1 , image: Gavion}, 
        {id:2 , image: Luca}, 
        {id:3 , image: MonstroSA}, 
        {id:4 , image: Und}, 
        {id:5 , image: StarWars}, 
        {id:6 , image: WhatIf}, 
        {id:7 , image: Welcome}, 
        {id:8 , image: Frozen}, 
        {id:9 , image: DiaryOf}, 


   ]
    return (

        <section id="Cards">
            <h2>Originais Disney+ exclusivos</h2>
            <p>Só no Disney+ você vê os melhores filmes, séries, curtas e outros conteúdos ineditos</p> 
            <div className="ContainerCards">
               {cards.map(Element => ( 
                    <div className={`ContainerElementCard id-${Element.id}`} key={Element.id}>
                        <img src={Element.image} /> 
                    </div>

               ))}
            </div>
        </section>

    )
}; 

export default Cards; 