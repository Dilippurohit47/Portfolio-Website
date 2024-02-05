import React from 'react'
import { FaLinkedin } from "react-icons/fa";

const Social = () => {
  return (
<div className="home__social">
<a href="https://www.instagram.com/dilip_purohit47/" className="home__social-icon" target="_blank">
    <i class="uil uil-instagram"></i>
</a>
<a href="https://www.linkedin.com/in/dileep47/" className="home__social-icon linkedin" target="_blank">
<i><FaLinkedin/></i>

</a>
<a href="https://github.com/Dilippurohit47" className="home__social-icon" target="_blank">
<i class="uil uil-github-alt"></i>

</a>



</div>
  )
}

export default Social
