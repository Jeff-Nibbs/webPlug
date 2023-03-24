import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import Header from './components/Header/Header'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Header />
      <AboutUs />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
