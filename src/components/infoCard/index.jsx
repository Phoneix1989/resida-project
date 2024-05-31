import React from 'react'
import './infoCardStyle.css'
import Button from 'shared/button'
import { GoArrowRight } from "react-icons/go";
import circle1 from 'assets/circle1.svg'
import circle2 from 'assets/circle2.svg'
import circle3 from 'assets/circle3.svg'
import circle4 from 'assets/circle4.svg'
import CircleImage from './Components/CircleImage';




const InfoCard = ({ title, 
                    subtitle, 
                    body, 
                    image, 
                    imageStyle, 
                    imageHeight, 
                    button, 
                    infoCardTextStyle, 
                    circle,
                    circleStyleTitle,
                    circleStyleSubtitle,
                    reverse
                  }) => {
  return (
    <div className='infoCard_container'>
    <div className='infoCard_inner_container'>
      {reverse ? (
      <>
        <div className='infoCard_description' style={{marginTop: '-100px'}}>
          <div className={infoCardTextStyle}>
            {circle && <div className='infoCard_circle'>
                {/* <div className='infoCard_circle_img'> 
                  <img src={circle1} alt="infocardcircle" className='circle_img'/>
                </div> */}
                <CircleImage image={circle1}/>
                <CircleImage image={circle2} style={{marginLeft: '-30px'}}/>
                <CircleImage image={circle3} style={{zIndex: 30, marginLeft: '-30px'}}/>
                <CircleImage image={circle4} style={{marginLeft: '-30px', zIndex: 40}}/>
          </div>}
          {circleStyleTitle ? (
            <h1 className="infoCard_title" style={{ fontWeight: '600'}}>
              {title}
            </h1>
          ) : (
            <h1 className='infoCard_title'>
              {title}
            </h1>
          )}
            {circleStyleSubtitle ? (
              <h2 className='infoCard_subtitle' style={{ fontWeight: '300', textAlign: 'left'}}>
                {subtitle}
              </h2>
          ) : (
            <h2 className='infoCard_subtitle'>
              {subtitle}
            </h2>
          )}
            
            <p className='infoCard_body'>{body}{" "} 
              </p>
              {button ? (<Button 
            style={{
                backgroundColor: '#DBA94D',
                color: '#1F4B43',
                padding: " 8px",
                width: "185px"
            }}btnName={'Download our app'}
              rightIcon={<GoArrowRight size={22}/>}
            />
          ) : (
            ""
          )}
          </div>
        </div>
        <div className={imageStyle}>
            <img src={image} alt='infoCard-image' className={imageHeight}/>
        </div>
        </> 
      ) : ( 
      <>
        <div className={imageStyle}>
            <img src={image} alt='infoCard-image' className={imageHeight}/>
        </div>
        <div className='infoCard_description'>
          <div className={infoCardTextStyle}>
            {circle && <div className='infoCard_circle'>
                {/* <div className='infoCard_circle_img'> 
                  <img src={circle1} alt="infocardcircle" className='circle_img'/>
                </div> */}
                <CircleImage image={circle1}/>
                <CircleImage image={circle2} style={{marginLeft: '-30px'}}/>
                <CircleImage image={circle3} style={{zIndex: 30, marginLeft: '-30px'}}/>
                <CircleImage image={circle4} style={{marginLeft: '-30px', zIndex: 40}}/>
          </div>}
          {circleStyleTitle ? (
            <h1 className="infoCard_title" style={{ fontWeight: '600'}}>
              {title}
            </h1>
          ) : (
            <h1 className='infoCard_title'>
              {title}
            </h1>
          )}
            {circleStyleSubtitle ? (
              <h2 className='infoCard_subtitle' style={{ fontWeight: '300', textAlign: 'left'}}>
                {subtitle}
              </h2>
          ) : (
            <h2 className='infoCard_subtitle'>
              {subtitle}
            </h2>
          )}
            
            <p className='infoCard_body'>{body}{" "} 
              </p>
              {button ? (<Button 
            style={{
                backgroundColor: '#DBA94D',
                color: '#1F4B43',
                padding: " 8px",
                width: "185px"
            }}btnName={'Download our app'}
              rightIcon={<GoArrowRight size={22}/>}
            />
          ) : (
            ""
          )}
          </div>
        </div>
        </>
      )}

        
    </div>
</div>
  )
}

export default InfoCard