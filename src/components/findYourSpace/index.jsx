import React from 'react'
import './fysStyles.css'
import space from 'assets/fyh.png'
import Button from 'shared/button'

const FindYourSpace = () => {
  return (
    <div className='fys_container flex'>
        <section className='fys_image_section'>
        <img src={space} alt='info' className='image' />
        </section>
        <section className='fys_text_section'>
            <div>
                <p>{'Your dream home is only a few clicks away'}</p>
            </div>
            <div>
                <span>{'- Find your space now!'}</span>
            </div>
            <div className='fys_button'>
                    <Button 
                    style={{
                    borderRadius: '10px',
                    backgroundColor: '#ffffff',
                    color: '#0000ff',
                    padding: '20px 34px',
                    width: '29%'


                }}btnNames='Download app'/>
            </div>
        </section>
    </div>
  )
}

export default FindYourSpace