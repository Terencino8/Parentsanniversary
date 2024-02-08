import React from 'react'
import './home.css'
import Homesection1 from './Homesection1'
import Homesection2 from './Homesection2'
import Homesection3 from './Homesection3'
import Header from '../components/header/Header'
import Homesection4 from './Homesection4'

const Home = () => {
  return (
    <div className='home'>
    
      <Header/>
      <Homesection1/>
      <Homesection2/>
      <Homesection3/>
      <Homesection4/>
    </div>
  )
}

export default Home