import './App.scss'
import profileImg from './assets/profile__img.png'
import shareIcon from './assets/shareIcon.svg'
import menuIcon from './assets/menuIcon.svg'
import slackIcon from './assets/slack.svg'
import githubIcon from './assets/github.svg'
import zuriLogo from './assets/zuri.svg'
import i4gLogo from './assets/I4G.png'
import cameraIcon from './assets/cameraIcon.svg'
import { useEffect, useRef } from 'react'

function App() {
  const profileRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    //change profile image on file select
    const inputElement = profileRef.current?.querySelector("#inputImage") as HTMLInputElement
    const handleClick = ()=>{
      inputElement?.click()
    }
    const handleChange = (event: Event)=>{
      const reader  = new FileReader()
      reader.onload = event => {
        (profileRef.current?.querySelector("#profile__img") as HTMLImageElement).src = event.target?.result as string;
      }
      reader.readAsDataURL((event.target as HTMLInputElement)?.files?.[0] as Blob)
    }
    profileRef.current?.querySelector("#inputImage")?.addEventListener("change", handleChange)
    profileRef.current?.addEventListener("click", handleClick)

    return ()=>{ //cleanup
      profileRef.current?.querySelector("#inputImage")?.removeEventListener("change", handleChange)
      profileRef.current?.removeEventListener("click", handleClick)
    }
  },[])

  type TuserLinks = {
    id: string,
    url: string,
    text: string,
    disabled: boolean
  }[]

  // using an array to hold links will make it easier to change things or replace with an api Call in the future
  const userLinks: TuserLinks = [
    {id: "btn__zuri", url: "https://training.zuri.team/", text: "Zuri Team", disabled: false},
    {id: "books", url: "https://books.zuri.team/", text: "Zuri Books", disabled: false},
    {id: "book__python", url: "https://books.zuri.team/python-for-beginners?ref_id=tochibedford", text: "Python Books", disabled: false},
    {id: "pitch", url: "https://background.zuri.team", text: "Background Check for Coders", disabled: false},
    {id: "book__design", url: "https://books.zuri.team/design-rules", text: "Design Books", disabled: false},
  ]
  return (
    <div className="App">
      <header role="heading" className="profile">
        <div ref={profileRef} className="profile__img__container" tabIndex={0}>
          <img id="profile__img" src={profileImg} alt="profile picture" />
          <div className="profile__img__edit__container" tabIndex={0}>
            <img src={cameraIcon} alt="profile image edit icon" className="profile__img__camera" />
            <input id="inputImage" type="file" accept="image/*"/>
          </div>
        </div>
        <div id="twitter">Tochibedford</div>
        <div id="slack" hidden>
          Member ID: U0488QM0BUL
          Display Name: tochibedford
        </div>
        <div className="share__icon__container" tabIndex={0}>
          <img src={shareIcon} alt="share button" className="share__icon" />
        </div>
        <div className="menu__icon__container" tabIndex={0}>
          <img src={menuIcon} alt="menu button" className="menu__icon" />
        </div>
      </header>
      <main className="links">
        {userLinks.map((link, index)=>{
          return <a key={`${link.id + index}`} id={link.id} className="link__button" href={link.url} >{link.text}</a>
        })}
        <div className="social__links">
          <a className="social__icon__container" href="https://app.slack.com/client/T042F7V19Q8/D0483CKLBHB/rimeto_profile/U0488QM0BUL">
            <img src={slackIcon} alt="slack icon" className="social__icon" />
          </a>
          <a className="social__icon__container" href="https://github.com/tochibedford/hng-frontend-1">
            <img src={githubIcon} alt="github icon" className="social__icon" />
          </a>
        </div>
      </main>
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
