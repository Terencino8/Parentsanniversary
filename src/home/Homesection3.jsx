import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homesection3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
  }, [])
  return (
    <div className='section three'>
      <div className="sectionText"data-aos="zoom-in" >
        <h1 className="sectionthreeHead" data-aos="fade-right">

            Toast
            <hr />
            </h1>
          <p className="sectionthreeDesc" data-aos="fade-left">
          To my parents, your love story is not just a chapter in your lives, but the very essence of who you are as individuals and as partners. In the highs and lows, through laughter and tears, you have remained steadfast in your love and unwavering in your support for one another. Your marriage is a testament to the beauty of companionship, the strength of unity, and the resilience of the human spirit. <br/>
          Throughout the years, you have demonstrated to us the true meaning of commitment, sacrifice, and selflessness. Your love has been a source of guidance, comfort, and inspiration for our family, showing us the power of patience, understanding, and forgiveness in building a harmonious and enduring relationship. <br/>
          As we celebrate this significant milestone today, let us not only rejoice in the love that has flourished between my parents but also express our heartfelt gratitude for the countless blessings and cherished memories they have bestowed upon us. From the laughter shared around the dinner table to the quiet moments of solace and reflection, every experience has shaped us and enriched our lives in ways words cannot adequately express.
          <br />
          <br />
          To my parents, on this special day, I want to thank you for being the epitome of love, resilience, and grace. Your unwavering devotion to each other and to our family is a source of inspiration for us all. May your journey together continue to be filled with laughter, joy, and boundless love as you embark on the next chapter of your adventure hand in hand.

          As we raise our glasses in celebration, let us toast to twenty-five years of love, laughter, and cherished memories, and to many more years of happiness and togetherness yet to come.

<br />
<br />
          Happy 25th Wedding Anniversary, Mom and Dad! Thank you for showing us the true meaning of love.
          
    
          </p>
          
        </div>
    </div>
  )
}

export default Homesection3