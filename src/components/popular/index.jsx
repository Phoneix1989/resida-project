import React from 'react'
import './popularStyles.css'
import p_image1 from 'assets/p-image1.svg'
import p_image2 from 'assets/p-image2.svg'
import p_image3 from 'assets/p-image3.svg'
import p_image4 from 'assets/p-image4.svg'
import p_image5 from 'assets/p-image5.svg'


const Popular = () => {
  return (
    <div className='popular_container'>
        <div className='popular_text'>
            <h2>Find homes in popular neighbourhoods</h2>
            <p>Apartments in Lekki, Obalende, Agege & Yaba </p>
            
          <div className="grid_container">
            <div class="item1">
                <img src={p_image1} alt='info' className='image1' />
            </div>
            <div class="item2">
                <img src={p_image2} alt='info' className='image2' />
            </div>
            <div class="item3">
                <img src={p_image3} alt='info' className='image3' />
            </div>
            <div class="item4">
                <img src={p_image4} alt='info' className='image4' />
            </div>
            <div class="item5">
                <img src={p_image5} alt='info' className='image5' />
            </div>       
          </div>
        </div>
    </div>
  )
}

export default Popular