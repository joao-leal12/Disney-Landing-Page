import '../styles/components/Footer.scss';  
import logo from '../assets/assets/image-footer.svg'; 


export function Footer() { 

    return (
        <section id="Footer">
                <div className="Wrapper-footer">
                    <div className="picture-Footer">
                        <img src={logo} alt="" className="img-footer" />
                    </div>
                    <div className="links-footer">
                        <ul className="list-footer">
                            {/* <li>
                                <select name="Language" className="Language-footer">
                                   <option value="/">Português</option>
                                </select>
                            </li> */}
                            <li>
                                <a href="#">Termos e condições de uso</a>
                            </li>
                            <li>
                                <a href="#">Politica de Privacidade</a>
                            </li>
                            <li>
                                <a href="#">Proteção de dados no Brasil</a>
                            </li>''
                            <li>
                                <a href="#">Anúncios Personalizados</a>
                            </li>
                            <li>
                                <a href="#">Dispositivos Compativeis</a>
                            </li>
                            <li>
                                <a href="#">Ajuda</a>
                            </li>
                            <li>
                                <a href="#">Sobre o Disney+ </a>
                            </li>
                        </ul>
                    </div>
                    
                      <p className="rights-reserved">
                    
                        ® 2022 Disney, Disney+ e The Walt Disney Company. Todos os direitos reservados. Serviço de assinatura paga. Conteúdo sujeito a disponibilidade
                    
                      </p>
                    <p className="copy-footer">
                    
                        Disney+ é um serviço pago, baseado em assinatura e sujeito a termos e condições. O serviço Disney+ é comercializado por The Walt Disney Company (Brasil) Ltda., World Trade Center, Av. Das Nações Unidas, 12.551, 12.555, 12.559, Piso 10, São Paulo/SP – CEP 04578-903, Brasil e CNPJ/M 73.042.962/0004-20
                    </p>
                </div>
                
        </section>
    )
}