import React from 'react'
import './officeSpaceStyles.css'
import os_image from 'assets/os-image.png'

const OfficeSpace= () => {
  return (
    <div className='os_container flex'>
        <section className='os_image_section'>
        <img src={os_image} alt='info' className='image' />
        </section>
        <section className='os_text_section'>
            <div>
                <h2>{'Need an office space?'}</h2>
            </div>
            <div>
                <p>'Seeking office space in Lagos? Look no further! Our accommodations 
                    offer tailored solutions to meet your workspace needs, ensuring 
                    productivity and comfort in the heart of Lagos'</p>
            </div>
        </section>
    </div>
  )
}

export default OfficeSpace