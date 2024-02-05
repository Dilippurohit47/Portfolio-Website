import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
 import Home from "./components/home/home"
import About from './components/About/About'
import Skills from './components/skills/skills'
import Services from './components/Services/Services'
import Qualification from './components/Qualificaion/Qualification'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/footer'
import Scroll from './components/scrollup/scroll'



function App() {






  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <main className='main'>
<Home/>
<About/>
<Skills/>
<Services/>
<Qualification/>
<Contact/>

     </main>
     <Footer/>
     <Scroll/>
    </>
  )
}

export default App
