import React from 'react'
import splashImg from "../../images/splash_Img.png"
import { Link } from 'react-router-dom'
import './splash.css'

const Splash = () => {
  return (
    <div className='splashModal'>

    <img src={splashImg} alt="" className='splashImg'/>


    <Link to="/home">
        <button className='splashBtn'>Toast</button>

    </Link>


    </div>
  )
}

export default Splash