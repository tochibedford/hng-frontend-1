import './App.scss'
import profileImg from './assets/profile__img.png'
import shareIcon from './assets/shareIcon.svg'

function App() {
  return (
    <div className="App">
      <header className="profile">
        <div className="profile__img__container">
          <img className="profile__img" src={profileImg} alt="profile picture" />
        </div>
        <div className="twitter">Tochibedford</div>
        <div className="slack" hidden>tochi bedford</div>
        <div className="share__icon__container">
          <img src={shareIcon} alt="share button" className="share__icon" />
        </div>
      </header>
    </div>
  )
}

export default App
