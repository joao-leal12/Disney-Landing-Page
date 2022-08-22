import CardDownload from '../assets/assets/card-lion-king.png';  
import CardDownloadMed from '../assets/assets/img-media-lion-king.png'; 
import '../styles/components/InforDownload.scss'; 
export function InforDownload(){ 

        return( 
           
           <section id="inforDownload">
                <div className="container-elements-download">
                   
                        <picture>
                            <source media="(max-width: 768px)" srcset={CardDownloadMed} type="image/png"/>
                            <img src={CardDownload} alt="Main Image" title="Lion King"/>
                        </picture>
                    
                    <div className="text-infor-download">
                    <h3>Baixe filmes e séries</h3>
                        <p>Baixe e assista quando e onde quiser. Assim,seus favoritos estão sempre com você, até mesmo sem internet. </p>
                    </div>
                </div> {/*Container-elements-download*/ }
               
           </section>
         )
}; 