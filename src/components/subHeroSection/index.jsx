import React from 'react';
import './subHeroSectionStyle.css';
import Button from 'shared/button';
// import { GoArrowRight } from "react-icons/go";


const subHeroSection = () => {
  return (
    <section className='sub_hero_section_container'>
        <div className='sub_hero_text'>
            <h1>Resida nullifies the hassles of agents </h1>
            <p>Save properties, create alerts and keep track of the enquiries you send to agents.</p>
        </div>
        <div className='sub_hero_cta'>
        <Button 
            style={{
                backgroundColor: '#DBA94D',
                color: '#1F4B43',
                padding: "7px 12px",
                width: "227px"
            }}btnName={'Download our app'}
            rightIcon={<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3344_194)">
            <path d="M1.37549 6.3975H13.3862L8.78707 2.01825C8.54625 1.78893 8.53692 1.40795 8.76629 1.1672C8.99537 0.926748 9.37647 0.917118 9.61759 1.14643L14.8699 6.14802C15.0972 6.37552 15.2227 6.67766 15.2227 6.99937C15.2227 7.32077 15.0972 7.62321 14.8593 7.86065L9.61729 12.852C9.5008 12.963 9.35149 13.0181 9.20218 13.0181C9.04324 13.0181 8.8843 12.9555 8.766 12.8313C8.53662 12.5905 8.54595 12.2098 8.78677 11.9805L13.4051 7.60125H1.37549C1.04316 7.60125 0.773438 7.33161 0.773438 6.99937C0.773438 6.66714 1.04316 6.3975 1.37549 6.3975Z" fill="#1F4B43"/>
            </g>
            <defs>
            <clipPath id="clip0_3344_194">
            <rect width="15" height="12.84" fill="white" transform="translate(0.5 0.578125)"/>
            </clipPath>
            </defs>
            </svg>            
            }
            />
        </div>
    </section>
  )
}

export default subHeroSection