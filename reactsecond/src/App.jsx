// import '../src/components/navbar.css'; // Adjust the path based on the location of the CSS file
// import { Education } from './components/Education';
import { Navbar } from './components/Navbar';
import { Profile } from './components/Profile';
import { Skills } from './components/Skills';
import './components/education.css'
import EducationTimeline from './components/EducationTimeline';
import { Footer } from './components/Footer';
import  { Projects} from './components/Projects'
import { Certificates } from './components/Certificates';
import { ContactForm } from './components/ContactForm';


const App = () => {
  return (
    <>
       <Navbar />
      <Profile/>
      <Skills/>
      <div className="App">
      <EducationTimeline />
     </div> 
     <Projects/>
     <Certificates/>
     <ContactForm/>
     <hr style={{width:'85%',marginLeft:'7%',height:'4px',border:'none',backgroundColor:'cyan',opacity: '0.6'}}/>
     <Footer/> 
                  
    
    </>
  );
};

export default App;
