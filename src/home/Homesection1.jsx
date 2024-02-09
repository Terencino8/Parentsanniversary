import React from 'react'
import './home.css'
import dad from '../images/dad.png'

const Homesection1 = () => {
  return (
    <div className='section one'>
      <div className="left">
      <img src={dad} alt=""  className='dadImg'/>

      </div>
      <div className="right">

      <div className="zerotext">
        <div className="sectiononeHead">
          <h1>My Dad <hr /></h1>
          <h3 className="sectionsubHead"> Mr Ukachukwu Okeke</h3>
            
          </div>
        <p className="textdesc">
        on his 25th Wedding Anniversary. Dad, your unwavering love, dedication, and commitment to Mom over the past quarter-century have been nothing short of inspiring. You've shown us the true meaning of partnership, respect, and perseverance through every twist and turn.
        <br />
        Here's to you, Dad, for being the rock of our family, for your enduring love, and for the beautiful example you've set for all of us. May the coming years be filled with even more love, joy, and cherished memories for you and Mom.
        <br />
        Cheers! 🥂

        </p>
      </div>  
       

      </div>
    </div>
  )
}

export default Homesection1