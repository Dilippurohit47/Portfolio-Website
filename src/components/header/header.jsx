import React, { useState } from 'react'
import "./header.css"

const Header = () => {


//change bg
    window.addEventListener("scroll" ,function(){
        const header = this.document.querySelector(".header");
        if(this.scrollY >= 80) header.classList.add("scroll-header");
    
        else header.classList.remove("scroll-header")
    
    
    })



    const [Toggle ,showMenu] = useState(false);

    const [activeNav ,  setactiveNav] = useState("#home")


  return (
<header className="header">
    <nav className="nav container">

    <a href="index.html" className="nav__logo">Dilip</a>

<div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>

<ul className="nav__list grid">
    
    <li className="nav__item">
        <a href="#home" className={activeNav === "#home" ? "nav__link  active-link" : "nav__link "} onClick={() =>setactiveNav('#home')}>
            <i className="uil uil-estate nav__icon"></i>
            Home
        </a>
    </li>


    <li className="nav__item">
        <a href="#about" className={activeNav === "#about" ? "nav__link active-link" : "nav__link"} onClick={() =>setactiveNav("#about")}>
            <i className="uil uil-user nav__icon"></i>
            About
        </a>
    </li>


    <li className="nav__item">
        <a href="#skills"  className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"} onClick={() =>setactiveNav("#skills")}>
            <i className="uil uil-file-alt nav__icon"></i>
            Skills
        </a>
    </li>
    
    {/* <li className="nav__item">
        <a href="#services" className={activeNav === "#services" ? "nav__link active-link" : "nav__link"} onClick={() =>setactiveNav("#services")}>
            <i className="uil uil-briefcase-alt nav__icon"></i>
            Services
        </a>
    </li> */}

    <li className="nav__item">
        <a href="#portfolio" className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"} onClick={() =>setactiveNav("#portfolio")}>
            <i className="uil uil-scenery nav__icon"></i>
            Projects
        </a>
    </li>

    <li className="nav__item">
        <a href="#contact"  className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"} onClick={() =>setactiveNav("#contact")}>
            <i className="uil uil-message nav__icon"></i>
            Contact
        </a>
    </li>

<i class="uil uil-times nav__close" onClick={() =>showMenu(!Toggle)}></i>
</ul>

</div>

<div className="nav__toggle" onClick={() =>showMenu(!Toggle)}>
<i class="uil uil-apps  nav__icon"></i>
    
</div>

    </nav>
</header>
  )
}

export default Header
