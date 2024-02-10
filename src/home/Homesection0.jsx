import React, { useEffect } from 'react'
import './home.css'
import pImg from '../images/image 1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homesection0 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <div className='section zero'>
    <div className="left" data-aos="fade-right">
    <img src={pImg} alt="" className='pImg'/>

    </div>
    <div className="right" data-aos="fade-left">
      <div className="zerotext">
          <h1>Gratitude <hr /></h1>
          <p className="textdesc">
          Today, with hearts full of joy and gratitude I celebrate a remarkable milestone in the lives of two extraordinary individuals: my beloved parents, <b>Sir & Lady Ukachukwu Okeke</b>. Twenty-five years ago, they embarked on a journey together, hand in hand, promising to cherish each other through every twist and turn that life had in store. <br />
          As we reflect on the journey of love, commitment, and unwavering dedication that my parents have shared over the past quarter of a century, it fills us with profound admiration and inspiration. Their union serves as a beacon of hope and a testament to the enduring power of love in a world that often tests the bonds between souls.

          {/* 

 */}

          </p>
      </div>
                        
   

    

   
    </div>

    </div>
  )
}

export default Homesection0