import './global.css'
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Info from "./components/Info/Info.jsx";
import Contact from "./components/contact/Contact.jsx";

function App() {
  return (
    <div className='app-container'>
      <Header/>
        <Hero/>
        <Info/>
      <Contact/>
    </div>
  )
}

export default App
