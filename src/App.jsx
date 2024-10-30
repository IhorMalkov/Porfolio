import './global.css'
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Info from "./components/Info/Info.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className='app-container'>
      <Header/>
        <Hero/>
        <Info/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
