import { useState } from 'react'

import './App.css'
import Header from './components/header/header.jsx'
 import Home from "./components/home/home.jsx"
import About from './components/About/About.jsx'
import Skills from "./components/skills/Skills.jsx"
import Qualification from './components/Qualificaion/Qualification.jsx'
import Contact from './components/Contact/Contact.jsx'

import Scroll from './components/scrollup/scroll.jsx'
import Footer from "./components/Footer/Footer.jsx"



function App() {






  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <main className='main'>
<Home/>
<About/>
<Skills/>

<Qualification/>
<Contact/>

     </main>
     <Footer/>
     <Scroll/>
    </>
  )
}

export default App
