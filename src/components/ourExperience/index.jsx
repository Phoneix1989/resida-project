import React from 'react'
import './ourExperienceStyles.css'
import oe_i1 from 'assets/oe-image1.jpeg'
import oe_i2 from 'assets/oe-image2.jpeg'
import oe_i3 from 'assets/oe-image3.jpeg'

const OurExperience = () => {
  return (
    <main className='our_exp_container'>
      <section className='cards_container flex'>
        <div className='card1'>
          <img src={oe_i1} alt='info' className='image' />
        </div>
        <div className="card2">
          <img src={oe_i2} alt='info' className='image' />
        </div>
        <div className='card3'>
          <img src={oe_i3} alt='info' className='image' />
        </div>
      </section>
      <section className='text flex'>
          <p> {`Our Experience guarantees 
          unmatched proficiency 
          and excellence.`} 
          </p>
      </section>
    </main>
  )
}

export default OurExperience