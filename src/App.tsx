import './App.scss'
import Home from './components/Pages/Home'
import { Route, Routes } from 'react-router-dom'

import zuriLogo from './assets/zuri.svg'
import i4gLogo from './assets/I4G.png'
import Contact from './components/Pages/Contact'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <footer className="footer__info">
        <div className="footer__logo__container">
          <img src={zuriLogo} alt="zuri logo" />
        </div>
        <div className="footer__text">
          HNG Internship 9 Frontend Task
        </div>
        <div className="footer__logo__container">
          <img src={i4gLogo} alt="I4g logo" />
        </div>
      </footer>
    </div>
  )
}

export default App
