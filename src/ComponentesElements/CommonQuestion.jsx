import '../styles/components/CommonQuestion.scss'; 
import {useState} from 'react'; 


export function CommonQuestion(){ 
        const [ShowAnswer , setShowAnswer] = useState(''); 
        const [ShowAnswerTwo , setShowAnswerTwo] = useState(''); 
        const [ShowAnswerThree , setShowAnswerThree] = useState(''); 
        const [ShowAnswerFour , setShowAnswerFour] = useState('');
        
        
    return (
        <section id="Questions">
            <h2>Perguntas Frequentes</h2>
            <div className="answers-area">
           
                <div className={`answer ${ShowAnswer}`}>
                    <button type="button" onClick={() => setShowAnswer(ShowAnswer == ''? 'open' : '')}>
                        <span>O que está incluido no disney+? </span>
                    </button>
                    <div className="list-answers">
                        <p className="first-child">O Disney+ oferece: </p>
                        <p className="item-answers">Experiência premium sem intervalos comerciais.</p>
                        <p className="item-answers">As melhores histórias da Disney, Pixar, Marvel, Star Wars e National Geographic, tudo em um só lugar.</p>
                        <p className="item-answers">Groupwatch: assista junto com amigos ou familiares, mesmo separados.</p>
                        <p className="item-answers">Downloads ilimitados em até 10 dispositivos compatíveis.</p>
                        <p className="item-answers"> Mais de 300 títulos em 4K UHD e HDR.</p>
                        <p className="item-answers">A possibilidade de assistir em até 4 dispositivos compatíveis simultaneamente sem custo adicional.</p>
                        <p className="item-answers">IMAX Enhanced: disponível para alguns títulos da Marvel em dispositivos compatíveis com o Disney+.</p>
                    </div>
                </div>
                <div className={`answer ${ShowAnswerTwo}`  }>
                    <button type="button" onClick={()=> setShowAnswerTwo(ShowAnswerTwo == ''? 'open' : '')}> 
                        <span>Já tem o Disney+ ou o Star+ e quer o Combo+? </span>
                    </button>
                    <div className="list-answers">
                        <p className="first-child">Ao assinar o Combo+: </p>
                        <p className="item-answers">O valor da sua assinatura existente (anual ou mensal) será descontado do preço do Combo+.</p>
                        <p className="item-answers">Se você assina o plano mensal, o valor que você paga mensalmente será descontado do preço do Combo+.</p>
                        <p className="item-answers">Se você assina o plano anual, dividiremos o valor que você já pagou em 12 vezes e descontaremos esse valor do preço do Combo+ mensalmente.</p>
                        <p className="item-answers">Você vai receber um e-mail com os valores detalhados assim que finalizar o pagamento.</p>
                        <p className="item-answers">  Lembre-se: você pode cancelar a assinatura quando quiser.</p>
                        <p>No momento, apenas a assinatura mensal do Combo+ está disponível.</p>
                        
                    </div>
                </div>
                <div className={`answer ${ShowAnswerThree}`}>
                    <button type="button" onClick={()=> setShowAnswerThree(ShowAnswerThree == ''? 'open' : '')}>
                        <span>Que formas de pagamento eu posso usar? </span>
                    </button>
                    <div className="list-answers">
                        <p className="first-child">Você pode utilizar: cartão de débito, crédito, PayPal, Mercado Pago e também aplicativos de terceiros: App Store da Apple e Google Play da Google.</p>
                    </div>
                </div>
                <div className={`answer ${ShowAnswerFour}`}>
                    <button type="button" onClick={() => setShowAnswerFour(ShowAnswerFour == ''? 'open':'')}>
                        <span>Como posso ver conteúdo com classificação indicativa até 16 e 18?</span>
                    </button>
                    <div className="list-answers">
                        <p className="first-child"  >Para poder acessar o catálogo completo que inclui conteúdo com classificação indicativa até 16 e 18, todos os usuários do Disney+ na América Latina devem atualizar as configurações de controle parental do perfil. É possível restringir o conteúdo de cada perfil e também adicionar um PIN de bloqueio. Os usuários que preferirem manter a configuração atual vão continuar aproveitando o Disney+ com a classificação indicativa até 14, podendo alterá-la a qualquer momento em "Editar Perfis".</p>
                       
                    </div>
                </div>


            </div>
          
        </section>

    )

}