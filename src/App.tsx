import './App.scss'
import profileImg from './assets/profile__img.png'
import shareIcon from './assets/shareIcon.svg'
import menuIcon from './assets/menuIcon.svg'

function App() {

  type TuserLinks = {
    id: string,
    url: string,
    text: string
  }[]

  // using an array to hold links will make it easier to change things or replace with an api Call in the future
  const userLinks: TuserLinks = [
    {id: "btn", url: "https://training.zuri.team/", text: "Zuri Team"},
    {id: "books", url: "https://training.zuri.team/", text: "Zuri Books"},
    {id: "book__python", url: "https://books.zuri.team/python-for-beginners?ref_id=tochibedford", text: "Python Books"},
    {id: "pitch", url: "https://background.zuri.team", text: "Background Check for Coders"},
    {id: "book__design", url: "https://background.zuri.team", text: "Design Books"},
  ]
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
        <div className="menu__icon__container">
          <img src={menuIcon} alt="menu button" className="menu__icon" />
        </div>
      </header>
      <main className="links">
        {userLinks.map((link, index)=>{
          return <a key={`${link.id + index}`} id={link.id} className="link__button" href={link.url}>{link.text}</a>
        })}
      </main>
    </div>
  )
}

export default App
