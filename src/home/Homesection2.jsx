import React, { useEffect } from 'react'
import mum from '../images/mum.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homesection2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <div className='section two'>
      <div className="left" data-aos="fade-right">
      <div className="zerotext">
        <div className="sectiononeHead">
          <h1>My Mum <hr /></h1>
          <h3 className="sectionsubHead"> Mrs Joan Okeke</h3>
            
          </div>
        <p className="textdesc">
        Today, i celebrate my remarkable mother on her 25th wedding anniversary. Mom, your unwavering love, strength, and grace have been the cornerstone of our family's happiness and success.
        <br />
        Through the highs and lows, you have been the steady force that held us together, the heart that infused warmth into our home, and the guiding light that led us through life's journey. Your commitment to Dad and to our family has been an inspiration to us all.
        <br />
        As we toast to 25 years of your beautiful union with Dad, may the years ahead be filled with even more love, laughter, and cherished memories. Here's to you, Mom, and to the incredible love story you've written with Dad. Cheers to your enduring love and many more years of happiness together!
        <br />
        To Mom! 🥂


        </p>
      </div>  
       
        <div className="sectionDesc">
  
  
        </div>

      </div>
      <div className="right" data-aos="fade-left">
      <img src={mum} alt="" className='mumImg'/>
        
      </div>
    </div>
  )
}

export default Homesection2