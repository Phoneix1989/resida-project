import React from 'react'
import './discoverStyles.css'
import Button from 'shared/button'
import { GoArrowRight } from "react-icons/go";
// import bgImage from 'assets/discover-bg-image.jpeg'


const Discover = () => {
  return (
    <div>
        <div className='discover_container'>
            <div className='discover_title flex'>
                <p>Discover a place you'll
                love to live</p>
            </div>
            <div className='discover_button flex' >
                <Button 
                 style={{
                    backgroundColor: '#E7C873',
                    color: '#1A1A1A',
                    padding: " 8px",
                    width: "185px",
                    borderRadius: '10px',
                    marginTop: '-1px'
                    }}btnName={'Download App'}
                 rightIcon={<GoArrowRight size={22}/>}
                />
            </div>
        </div>
        
    </div>
  )
}

export default Discover