import React from 'react'
import './heroSectionStyle.css'
import Button from 'shared/button';
import bgImage from 'assets/hero-section-bg.jpeg'

const HeroSection = () => {
  return (
    <div className={'hero_section_container'}
        style={{
            backgroundImage:` url(${bgImage})`
        }}
        >

        <div className="hero_section_content">
            <p>Finding the perfect home has never been this easy!</p>
            <div>{`Eliminate stressful house searches. 
                   We link you with the Lagos’s finest and most affordable 
                   residences`} - <strong>Zero agent fees, 
                   middle men payments & hassles</strong>.
            </div>
            
          <div className="btn_container">
            <Button 
            // style={{
            //     width: "33%"
            // }}
            btnName={"Download our app"}/>
            <Button 
            // style={{
            //     width: "33%"
            // }}
             outline btnName={"Learn more"}/>
          </div>   
        </div>
    </div>
  )
};

export default HeroSection