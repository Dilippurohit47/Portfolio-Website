import React, { useEffect } from 'react'
import "./scroll.css"

const ScrollUp = () => {


    window.addEventListener("scroll" ,function(){
        const scrollUp = this.document.querySelector(".scrollup");
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");

        else scrollUp.classList.remove("show-scroll")


    })

    // useEffect(() => {
    //     const handleScroll = () => {
    //       const scrollUp = document.querySelector(".scrollup");
    //       if (window.scrollY >= 560) {
    //         scrollUp.classList.add("show-scroll");
    //       } else {
    //         scrollUp.classList.remove("show-scroll");
    //       }
    //     };
    
    //     // Add scroll event listener
    //     window.addEventListener("scroll", handleScroll);
    
    //     // Remove the event listener when the component is unmounted
    //     return () => {
    //       window.removeEventListener("scroll", handleScroll);
    //     };
    //   }, []);

  return (
<a href="#" className="scrollup">
    <i className="uil uil-arrow-up scrollup__icon"></i>
</a>
  )
}

export default ScrollUp
