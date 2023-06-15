import './App.css'
import quotes from '../src/assets/images/quotes.jpg'
import weather from '../src/assets/images/weatherapp.jpg'
import qatar from '../src/assets/images/qatar.jpg'
import rickmorty from '../src/assets/images/rickmorty.jpg'
import crud from '../src/assets/images/crudusers.jpg'
import ecommerce from '../src/assets/images/ecommerce.jpg'
import pokedex from '../src/assets/images/pokedexapp.jpg'
import countries from '../src/assets/images/countriesapp.jpg'
import sunnyside from '../src/assets/images/sunnyside.jpg'
import space from '../src/assets/images/space-tourism.jpg'
import news from '../src/assets/images/news-page.jpg'
import msdb from '../src/assets/images/msdb.jpg'
import logoDark from '../src/assets/LOGO_BNC.png'
import logoLight from '../src/assets/LOGO_CLR.png'
import iconDark from '../src/assets/ICONO_BN-01.png'
import iconLight from '../src/assets/ICONO_CLR-01.png'
import perfil from '../src/assets/images/perfil.png'
import { useEffect, useRef, useState } from 'react'
import ScrollButton from './components/ScrollButton'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import Modal from './components/Modal'
import AOS from 'aos'
import 'aos/dist/aos.css'



function App() {

  const [menu, setMenu] = useState(false)
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  )
  const [scrollY, setScrollY] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const { handleSubmit, register, reset } = useForm()


  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])


  const handleMenu = () => {
    setMenu(!menu)
  }

  const handleX = () => {
    setMenu(!menu)
  }

  const handleOption = () => {
    setMenu(!menu)
  }

  const handleTheme = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode))
    setDarkMode(!darkMode)
  }


  const formRef = useRef()


  const submitForm = () => {

    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(res => {
        console.log(res.text)
        setShowModal(true)
        reset()
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {

    AOS.init({
      duration: 900,
      delay: 150,
      disableMutationObserver: true,
      offset: 150
    })

  }, [])



  return (
    <main id='home' className={!darkMode ? "App" : "dark-App"}>

      <header className={!darkMode ? "navbar" : "dark-navbar"}>
        <div className='logo'>
          <img className='logoImg' src={!darkMode ? logoLight : logoDark} alt="" />
        </div>
        <div className='icons'>
          <div className={!menu ? "navbar-menu" : "show-menu"}>
            <div className='scape'>
              <div>
                <i onClick={handleX} className='bx bx-x-circle'></i>
              </div>

            </div>
            <div className='container-list'>
              <ul className="navbar-list" >
                <li onClick={handleOption}><a className={!darkMode ? "list" : "list-Dark"} href="#about">About</a></li>
                <li onClick={handleOption}><a className={!darkMode ? "list" : "list-Dark"} href="#skills">Skills</a></li>
                <li onClick={handleOption}><a className={!darkMode ? "list" : "list-Dark"} href="#projects">Projects</a></li>
                <li onClick={handleOption}><a className={!darkMode ? "list" : "list-Dark"} href="#contact">Contact</a></li>

              </ul>
            </div>


          </div>




          <div className={!darkMode ? 'social-media' : 'social-media-dark'}>
            <a href="https://www.linkedin.com/in/marcos-sigala-61944b145/" target="_blank"><i className='bx bxl-linkedin'></i></a>
            <a href="https://www.facebook.com/profile.php?id=100087189777099" target="_blank"><i className='bx bxl-facebook'></i></a>
            <a href="https://www.instagram.com/maro_slc/?igshid=ZDdkNTZiNTM%3D" target="_blank"><i className='bx bxl-instagram'></i></a>


          </div>

          <div className='iconstwo'>
            <div>
              <button className={!darkMode ? "btn" : "btn-dark"} onClick={handleTheme}>
                {
                  darkMode ? <i className='bx bxs-sun'></i> : <i className='bx bxs-moon'></i>
                }

              </button>
            </div>

            <div>
              <button onClick={handleMenu} className={!darkMode ? "menu" : "menu-dark"}>
                <i className='bx bx-menu'></i>

              </button>

            </div>
          </div>

        </div>



      </header>
      <section className='home'>
        <div className='home-container'>

          <div className='image-home' data-aos='fade-left'>
            <img src={perfil} className='perfil' alt="" />
          </div>
          <div className='info-home' data-aos='fade-right'>
            <div className='home-intro'>
              <h1>Desarrolador Web</h1>
              <h1><span className={!darkMode ? 'home-name' : "home-name-dark"}>Marcos Sigala</span></h1>
            </div>
            <div className='home-intro-two'>
              <h3 className='title'>Me especializo en React js</h3>
              <h3 className='title2'>para el desarrollo de aplicaciones web fullstack</h3>
            </div>
            <div className={!darkMode ? 'home-button' : 'home-button-dark'}>
              <a href="https://drive.google.com/file/d/1Zn_5ZFy2rzNmX-qKGvQyDfqPo59OQsqn/view?usp=share_link" target='_blank'><button>Descarga CV</button></a>

            </div>
          </div>

        </div>



      </section>
      <section id='about' className='about-section' data-aos='fade-up'>
        <div className={!darkMode ? 'about' : 'about-dark'}>
          <h3>About Me</h3>
          <p className=''>Soy Marcos Sigala, me especializo en el desarrollo de páginas web Front-End. Soy un apasionado de la tecnología y me encantaría formar parte de tu equipo o de tus proyectos, contáctame.</p>
        </div>


      </section>
      <section id='skills' className='skills' data-aos='fade-up'>
        <div className='skills-container'>
          <h3 className='skills-title'>Skills</h3>
          <div className='logo-skills'>
            <div className={!darkMode ? 'logo-container' : 'logo-container-dark'}>
              <i className='bx bxl-html5'></i>
              <h3>HTML</h3>
            </div>
            <div className={!darkMode ? 'logo-container' : 'logo-container-dark'}>
              <i className='bx bxl-css3'></i>
              <h3>CSS</h3>
            </div>
            <div className={!darkMode ? 'logo-container' : 'logo-container-dark'}>
              <i className='bx bxl-javascript'></i>
              <h3>Javascript</h3>
            </div>
            <div className={!darkMode ? 'logo-container' : 'logo-container-dark'}>
              <i className='bx bxl-react'></i>
              <h3>React</h3>
            </div>
            <div className={!darkMode ? 'logo-container' : 'logo-container-dark'}>
              <i className='bx bxl-tailwind-css'></i>
              <h3>Tailwindcss</h3>
            </div>
            <div className={!darkMode ? 'logo-container' : 'logo-container-dark'}>
              <i className='bx bxl-nodejs'></i>
              <h3>Node Js</h3>
            </div>
            <div className={!darkMode ? 'logo-container' : 'logo-container-dark'}>
              <i className='bx bxl-postgresql'></i>
              <h3>PostgreSQL</h3>
            </div>

          </div>

        </div>
      </section>

      <section id='projects' className='projects' data-aos='fade-up'>
        <div >
          <h3 className='projects-title' >Projects</h3>
        </div>
        <div className='projects-container'>

          <div data-aos='fade-up'>
            <div className='image-container'>
              <img className={!darkMode ? 'image-project' : 'image-project-dark'} src={msdb} alt="" />
            </div>

            <div className='info-container'>
              <h3>MSDB</h3>
              <div className='links-container'>
                <button>
                  <a href="https://msdb-msc.netlify.app/#/" target='_blank'><i className='bx bx-link-alt'></i></a>
                </button>
                <button>
                  <a href="https://github.com/marksc26/MSDB.git" target='_blank'><i className='bx bxl-github'></i></a>
                </button>
              </div>
            </div>
          </div>

          <div data-aos='fade-up'>
            <div className='image-container'>
              <img className={!darkMode ? 'image-project' : 'image-project-dark'} src={space} alt="" />
            </div>

            <div className='info-container'>
              <h3>Space Tourism</h3>
              <div className='links-container'>
                <button>
                  <a href="https://space-tourism-app-msc.netlify.app" target='_blank'><i className='bx bx-link-alt'></i></a>
                </button>
                <button>
                  <a href="https://github.com/marksc26/Space-Tourism-App.git" target='_blank'><i className='bx bxl-github'></i></a>
                </button>
              </div>
            </div>
          </div>

          <div data-aos='fade-up'>
            <div className='image-container'>
              <img className={!darkMode ? 'image-project' : 'image-project-dark'} src={sunnyside} alt="" />
            </div>

            <div className='info-container'>
              <h3>Sunnyside Agency</h3>
              <div className='links-container'>
                <button>
                  <a href="https://sunnyside-msc.netlify.app" target='_blank'><i className='bx bx-link-alt'></i></a>
                </button>
                <button>
                  <a href="https://github.com/marksc26/sunnyside-app.git" target='_blank'><i className='bx bxl-github'></i></a>
                </button>
              </div>
            </div>
          </div>

          <div data-aos='fade-up'>
            <div className='image-container'>
              <img className={!darkMode ? 'image-project' : 'image-project-dark'} src={countries} alt="" />
            </div>

            <div className='info-container'>
              <h3>Countries App</h3>
              <div className='links-container'>
                <button>
                  <a href="https://countries-app-msc.netlify.app" target='_blank'><i className='bx bx-link-alt'></i></a>

                </button>
                <button>
                  <a href="https://github.com/marksc26/Countries-App.git" target='_blank'><i className='bx bxl-github'></i></a>

                </button>
              </div>
            </div>
          </div>

          <div data-aos='fade-up'>
            <div className='image-container'>
              <img className={!darkMode ? 'image-project' : 'image-project-dark'} src={pokedex} alt="" />
            </div>

            <div className='info-container'>
              <h3>Pokedex</h3>
              <div className='links-container'>
                <button>
                  <a href="https://pokedex-app-msc.netlify.app" target='_blank'><i className='bx bx-link-alt'></i></a>

                </button>
                <button>
                  <a href="https://github.com/marksc26/Pokedex-App.git" target='_blank'><i className='bx bxl-github'></i></a>

                </button>

              </div>
            </div>
          </div>
          <div data-aos='fade-up'>
            <div className='image-container'>
              <img className={!darkMode ? 'image-project' : 'image-project-dark'} src={ecommerce} alt="" />

            </div>

            <div className='info-container'>
              <h3>E-Commerce</h3>
              <div className='links-container'>
                <button>
                  <a href="https://e-commerce-msc.netlify.app" target='_blank'><i className='bx bx-link-alt'></i></a>

                </button>
                <button>
                  <a href="https://github.com/marksc26/e-commerce.git" target='_blank'><i className='bx bxl-github'></i></a>
                </button>
              </div>
            </div>
          </div>
          <div data-aos='fade-up'>
            <div className='image-container'>
              <img className={!darkMode ? 'image-project' : 'image-project-dark'} src={crud} alt="" />
            </div>

            <div className='info-container'>
              <h3>Crud Users</h3>
              <div className='links-container'>
                <button>
                  <a href="https://create-users-msc.netlify.app" target='_blank'><i className='bx bx-link-alt'></i></a>

                </button>
                <button>
                  <a href="https://github.com/marksc26/crud-users.git" target='_blank'><i className='bx bxl-github'></i></a>

                </button>
              </div>
            </div>
          </div>
          <div data-aos='fade-up'>
            <div className='image-container'>
              <img className={!darkMode ? 'image-project' : 'image-project-dark'} src={rickmorty} alt="" />
            </div>

            <div className='info-container'>
              <h3>Rick and Morty App</h3>
              <div className='links-container'>
                <button>
                  <a href="https://rick-n-morty-msc.netlify.app" target='_blank'><i className='bx bx-link-alt'></i></a>
                </button>
                <button>
                  <a href="https://github.com/marksc26/Rick-n-Morty-App.git" target='_blank'><i className='bx bxl-github'></i></a>
                </button>
              </div>
            </div>
          </div>
          <div data-aos='fade-up'>
            <div className='image-container'>
              <img className={!darkMode ? 'image-project' : 'image-project-dark'} src={qatar} alt="" />

            </div>

            <div className='info-container'>
              <h3>Qatar Cards</h3>
              <div className='links-container'>
                <button>
                  <a href="https://qatar-cards-msc.netlify.app" target='_blank'><i className='bx bx-link-alt'></i></a>
                </button>
                <button>
                  <a href="https://github.com/marksc26/QatarCards.git" target='_blank'><i className='bx bxl-github'></i></a>
                </button>
              </div>
            </div>
          </div>
          <div data-aos='fade-up'>
            <div className='image-container'>
              <img className={!darkMode ? 'image-project' : 'image-project-dark'} src={news} alt="" />
            </div>
            <div className='info-container'>
              <h3>News-Page</h3>
              <div className='links-container'>
                <button>
                  <a href="https://news-homepage-msc.netlify.app/" target='_blank'><i className='bx bx-link-alt'></i></a>

                </button>
                <button>
                  <a href="https://github.com/marksc26/News-Homepage.git" target='_blank'><i className='bx bxl-github'></i></a>
                </button>
              </div>
            </div>
          </div>

          <div data-aos='fade-up'>
            <div className='image-container'>
              <img className={!darkMode ? 'image-project' : 'image-project-dark'} src={weather} alt="" />

            </div>

            <div className='info-container'>
              <h3>Weather App</h3>
              <div className='links-container'>
                <button>
                  <a href="https://weather-app-msc.netlify.app" target='_blank'><i className='bx bx-link-alt'></i></a>

                </button>
                <button>
                  <a href="https://github.com/marksc26/weather-app.git" target='_blank'><i className='bx bxl-github'></i></a>
                </button>
              </div>
            </div>
          </div>

          <div data-aos='fade-up'>
            <div className='image-container'>
              <img className={!darkMode ? 'image-project' : 'image-project-dark'} src={quotes} alt="" />
            </div>

            <div className='info-container'>
              <h3>Quotes</h3>
              <div className='links-container'>
                <button>
                  <a href="https://quotes-msc.netlify.app" target='_blank'><i className='bx bx-link-alt'></i></a>

                </button>
                <button>
                  <a href="https://github.com/marksc26/quotes.git" target='_blank'><i className='bx bxl-github'></i></a>
                </button>
              </div>
            </div>
          </div>
        </div>


      </section>
      <section id='contact' className='contact' data-aos='fade-up'>

        <div className={!darkMode ? 'contact-container' : 'contact-container-dark'}>
          <div className='contact-title'>
            <h3>Contact</h3>
          </div>
          <address className='info-contact'>
            <div>
              <i className='bx bx-phone'></i>
              <span>+55 332 588 7454</span>
            </div>

            <div>
              <i className='bx bx-envelope'></i>
              <span>
                <a className={!darkMode ? "email" : "email-dark"} href="mailto:marcos.webdev92@gmail.com">marcos.webdev92@gmail.com</a>
              </span>
            </div>

            <div>
              <i className='bx bx-map'></i>
              <span>Guadalajara, México</span>
            </div>

          </address>

          <form ref={formRef} onSubmit={handleSubmit(submitForm)}>
            <div className='contact-inputs'>
              <label htmlFor="">Nombre</label>
              <input type="text" name='name' {...register('name')} />
            </div>
            <div className='contact-inputs'>
              <label htmlFor="">Correo</label>
              <input type="email" name='email' {...register('email')} />
            </div>
            <div className='contact-inputs'>
              <label htmlFor="">Mensaje</label>
              <textarea name="message" id="" cols="30" rows="10" {...register('message')}></textarea>
            </div>
            <div className={!darkMode ? 'contact-button' : 'contact-button-dark'}>
              <button type='submit'>Enviar</button>
            </div>

          </form>
          {
            showModal && (<Modal setShowModal={setShowModal} />)
          }


        </div>
      </section>
      <hr />
      <footer>
        <div className='footer-container'>
          <div className='imgFooter'>
            <img className='logoFooter' src={!darkMode ? iconLight : iconDark} alt="" />
          </div>
          <div className={!darkMode ? "social-media-footer" : "social-media-footerDark"}>

            <a href="https://www.linkedin.com/in/marcos-sigala-61944b145/" target="_blank"><i className='bx bxl-linkedin'></i></a>
            <a href="https://www.facebook.com/profile.php?id=100087189777099" target="_blank"><i className='bx bxl-facebook'></i></a>
            <a href="https://www.instagram.com/maro_slc/?igshid=ZDdkNTZiNTM%3D" target='_blank'><i className='bx bxl-instagram'></i></a>

          </div>
        </div>

      </footer>
      {
        scrollY > 300 && !menu && <ScrollButton />
      }


    </main>
  )
}

export default App
