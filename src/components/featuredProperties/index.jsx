import React from 'react'
import './featuredPropertiesStyles.css'
import fp_img1 from 'assets/fp-image1.svg'
import fp_img2 from 'assets/fp-image2.svg'
import fp_img3 from 'assets/fp-image3.svg'
import { GiHearts } from "react-icons/gi";
import Button from 'shared/button'


const FeaturedProperties = () => {
  return (
    <div className='fP_container'>
      <div className='fp_title'>Featured Properties</div>
      <div className='fp_subtitle'>
        <p>
          Explore our curated selection of premier properties, 
          meticulously chosen to suit every lifestyle and budget. 
          From luxurious penthouses to cozy family homes, 
          our featured listings showcase the best of Lagos living.
          </p>
      </div>
  <div className="box_container flex">
    {/* BOX 1 */}
    <div className="box1">
     <img src={fp_img1} alt='info' className='image' />
      <div className='lpe_title'>Lillian Pepple Estate <GiHearts /></div>
       <div className='lpe_buttons_container flex'>
        <div className='lpe_button1'><Button 
        style={{
           width: '70px',
           height: '30px',
           borderRadius: '5px',
           marginLeft: '-115px',
           backgroundColor: '#DEDEDE',
           color: '#011948',
           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }}btnName='Duplexes'/>
          </div>
        <div className='lpe_button2'><Button 
          style={{
            width: '70px',
            height: '30px',
            borderRadius: '5px',
            marginLeft: '-55px',
            backgroundColor: '#DEDEDE',
            color: '#011948',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }}btnName='Bungalows'/></div>
        <div className='lpe_button3'><Button 
          style={{
          width: '105px',
          height: '30px',
          marginLeft: '-5px',
          borderRadius: '5px',
          backgroundColor: '#DEDEDE',
          color: '#011948',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}btnName='Self-Contains'/>
        </div>
      </div>
        <div className='lpe_value'>From NGN1,500,000/year</div>
    </div>

      {/* BOX 2 */}
    <div className="box2">
    <img src={fp_img2} alt='info' className='image' />
      <div className='lpe_title'>Naanchin Homes <GiHearts /></div>
       <div className='lpe_buttons_container flex'>
        <div className='lpe_button1'><Button 
        style={{
           width: '124px',
           height: '30px',
           borderRadius: '5px',
           marginRight: '153px',
           backgroundColor: '#DEDEDE',
           color: '#011948'
          }}btnName='3 Bedrooms flats'/>
          </div>
        <div className='lpe_button2'><Button 
          style={{
            width: '70px',
            height: '30px',
            borderRadius: '5px',
            marginLeft: '-165px',
            backgroundColor: '#DEDEDE',
            color: '#011948'
          }}btnName='Bungalows'/></div>
        <div className='lpe_button3'><Button 
          style={{
          width: '176px',
          height: '30px',
          marginLeft: '-110px',
          borderRadius: '5px',
          backgroundColor: '#DEDEDE',
          color: '#011948'
        }}btnName='Student Accommodations'/>
        </div>
      </div>
        <div className='lpe_value'>From NGN500,000/year</div>
      </div>

      {/* BOX 3 */}
    <div className="box3">
    <img src={fp_img3} alt='info' className='image' />
      <div className='lpe_title'>Horeb Accomodations <GiHearts /></div>
       <div className='lpe_buttons_container flex'>
        <div className='lpe_button1'><Button 
        style={{
           width: '70px',
           height: '30px',
           borderRadius: '5px',
           marginLeft: '-115px',
           backgroundColor: '#DEDEDE',
           color: '#011948'
          }}btnName='Mansions'/>
          </div>
        <div className='lpe_button2'><Button 
          style={{
            width: '70px',
            height: '30px',
            borderRadius: '5px',
            marginLeft: '-55px',
            backgroundColor: '#DEDEDE',
            color: '#011948'
          }}btnName='Bungalows'/></div>
        <div className='lpe_button3'><Button 
          style={{
          width: '105px',
          height: '30px',
          marginLeft: '-5px',
          borderRadius: '5px',
          backgroundColor: '#DEDEDE',
          color: '#011948',
        }}btnName='Office spaces'/>
        </div>
      </div>
        <div className='lpe_value'>From NGN2,500,000/year</div>
    </div>
   </div>
  </div>
  )
}

export default FeaturedProperties