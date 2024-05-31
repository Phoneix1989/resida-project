import React from 'react'

const CircleImage = ({image, style}) => {
  return (
    <div className='infoCard_circle_img' style={style}> 
        <img src={image} alt="infoCardCircle" className='circle_img'/>
    </div>
  )
}

export default CircleImage