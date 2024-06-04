import React from 'react'
import './downloadAppStyles.css'
import da_image from 'assets/da-image.png'
import Button from 'shared/button'
import { IoLogoApple } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";



const DownloadApp = () => {
  return (
    <div className='da_container flex'>
        <section className='da_text_section'>
        <div>
            <h2 className='da_text1'>{'Download'} <br /> {'our App'}</h2>
        </div>
        <div>
            <p className='da_text2'> With intuitive search features and a curated selection of 
                properties tailored to your preferences, 
                finding your dream home has never been easier. 
                Join thousands of satisfied users who have unlocked the key to 
                their ideal living space with just a tap.</p>
        </div>
        <div className="btn_container">
            <Button
            leftIcon={<IoLogoApple size={27}
            style={{
                borderRight: '2px solid grey',
                paddingRight: '7px'
            }}
            />}
                style={{
                    width: "213px",
                    height: "70px",
                    borderRadius: "12px"
                }}
             btnName={
             <>
                <p className='btn_p'>Download on the</p> <br /> 
                <h1 className='btn_h1'>Apple Store</h1>
             </>
             } 
             />
            <Button
            leftIcon={<FaGooglePlay size={22} 
            style={{
                borderRight: '2px solid grey',
                paddingRight: '7px'
            }}
            />} 
            style={{
                width: "213px",
                height: "70px",
                borderRadius: "12px"
            }}
            btnName={
            <>
                <p className='get_p'>Get in on</p> <br />
                <h1 className='google_p'>Google Play</h1>
            </> 
            }
            />
          </div> 
    </section>
    <section className='da_image_section'>
        <img src={da_image} alt='info' className='phone_image' />
    </section>
    
</div>
  )
}

export default DownloadApp