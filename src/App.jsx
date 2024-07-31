import NavBar from './NavBar'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import {Route, Routes} from "react-router-dom"
import './App.css'

function App() {
  return (
    <>
      <NavBar/> 
      <div className = "container">
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/projects" element = {<Projects/>} />
          <Route path = "/about-me" element = {<AboutMe/>} />
          <Route path = "/resume" element = {<Resume/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;