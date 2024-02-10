import React, { useEffect } from 'react'
import './header.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <div className='header' data-aos="fade-down">
    
<h2>Happy 25years Anniversary EUNIAN & JOAN</h2>

    </div>
  )
}

export default Header