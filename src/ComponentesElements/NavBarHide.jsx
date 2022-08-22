import Logo from '../assets/assets/logo.svg'; 
import '../styles/components/Navbar.scss'; 


function NavBarHide({handleShow}){ 
    
    
    return (
        <nav id="nav" className={handleShow}>
            <div className="logo" >
                <a href="#" className="logoImg">
                    <img src={Logo} alt="logo disney"/> 
                </a>
            </div>  
            <div className="btns">
                <a href="#" className="btnSubscribre">Assine agora</a>
                <a href="#" className="btnLogin">Entrar</a>
            </div>  
        </nav>

    )
} 

export default NavBarHide; 