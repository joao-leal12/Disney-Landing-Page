import '../styles/components/Navbar.scss'; 

function NavBarShow({handleShow}) { 

    return (
        <nav id="navShow" className={handleShow}>  
            <a href="#" id="linkShow">Entrar</a> 
        </nav>
    )
} 

export default NavBarShow; 