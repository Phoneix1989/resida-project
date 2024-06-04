import React from 'react'
import './buttonStyle.css';


const Button = ({style, btnName, outline, rightIcon, leftIcon}) => {
  return (
  <button style={style} className={`${outline ? "outline" : "btn"} `}>
    {leftIcon && <span className='left_icon'>{leftIcon}</span>}
    <span className="btn_text">
      {btnName}
    </span>
    
    {rightIcon && <span className='right_icon'>{rightIcon}</span>}
    </button>
  );
}

export default Button