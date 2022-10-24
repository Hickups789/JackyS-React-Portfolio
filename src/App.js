import React, { useState } from "react";
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";


function App() {

  const [section, setSection] = useState("About");
  console.log(section)


  const renderSection=()=>{
    switch (section) {
      case "Contact":
         return <ContactForm/>
         break;
      case "Projects":
      return <ProjectList/>
      break;
      default:
        return <About/>
        break;
    }
  }

  return (
  <div>
    <Nav
      section = {section}
      setSection={setSection}>
    </Nav>
    <main>
      {renderSection()}
    </main>
    <div>
    <Footer></Footer>
    </div>
  </div>

  );
}

export default App;
