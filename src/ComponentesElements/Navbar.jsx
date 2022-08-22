    import NavbarHide from './NavBarHide'
    import NavBarShow from '../ComponentesElements/NavBarShow'
    import { useState } from 'react';
    import '../styles/components/Navbar.scss'; 
    function Navbar(){ 
        const [stateElement , setStateElement] = useState('Show')
        const [secondStateElement, setSecondStateElement] = useState('hidden'); 
        document.addEventListener('scroll', handleNav) 


        function handleNav(){ 
            
            let cordinates = window.scrollY; 
            
            if(cordinates >= 590){ 
             
               
                setStateElement('hidden'); 
                setSecondStateElement('show'); 
            }else{ 
                
                setStateElement('show'); 
                setSecondStateElement('hidden')
            }

        }

     

        return (
            <header id="navbar">
             
                
                    <NavBarShow handleShow={stateElement}/> 
                
                 
                   
                    <NavbarHide handleShow={secondStateElement}/>
                 
               

            </header>
        )
    } 

    export default Navbar; 