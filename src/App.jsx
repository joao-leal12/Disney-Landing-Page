import Navbar from './ComponentesElements/Navbar'
import MainBanner from './ComponentesElements/MainBanner' 
import PlannArea from './ComponentesElements/ChoosePlan'; 
import Watch from './ComponentesElements/WatchNow' ;
import Cards from './ComponentesElements/Cards'; 
import { InforDownload } from './ComponentesElements/InforDownload'; 
import { DevicesViews } from './ComponentesElements/DevicesViews'; 
import {CommonQuestion} from './ComponentesElements/CommonQuestion';  
import {Footer} from './ComponentesElements/Footer'; 
function App() { 
   

  return (
    <div>
      <Navbar/>
      <main id="mainDiv">
        <MainBanner/> 
        <PlannArea/> 
        <Watch/>  
        <Cards/> 
        <InforDownload/> 
        <DevicesViews/> 
        <CommonQuestion/> 
        <Footer/>   
      </main>
    </div>
  )
}

export default App
