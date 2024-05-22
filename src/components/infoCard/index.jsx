import React from 'react'
import './infoCardStyle.css'
import info_image from '../../assets/rsd-infoCard-image.png'


const InfoCard = () => {
  return (
    <div className='infoCard_container'>
        <div className='infoCard_inner_container'>
            <div className='infoCard_image'>
                <img src={info_image} alt='infoCard-image' className='image'/>
            </div>
            <div className='infoCard_description'>
              <div className='infoCard_text'>
                <h1 className='infoCard_title'>Resida is Not Just an App</h1>
                <h2 className='infoCard_subtitle'>We are an ecosystem with you at the center</h2>
                <p className='infoCard_body'>Resida aims to bridge the gap between potential tenants and available properties. This app is not just a tool; it's a solution for individuals and families who are navigating the challenging terrain of apartment hunting in a new or familiar city. </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default InfoCard