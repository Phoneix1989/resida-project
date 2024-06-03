import React from 'react';
// import './landingPage.css';
import Header from 'shared/header'
import HeroSection from 'components/heroSection';
import SubHeroSection from 'components/subHeroSection';
import InfoCard from 'components/infoCard';
import OurExperience from 'components/ourExperience';
import FindYourSpace from 'components/findYourSpace';
import info_image from '../../assets/rsd-infoCard-image.png'
import guide_map from "../../assets/guide_map.svg";
import FeaturedProperties from 'components/featuredProperties';
import house from 'assets/house.svg'
import Discover from 'components/discover';
import Popular from 'components/popular';
import OfficeSpace from 'components/officeSpace';



const LandingPage = () => {
  return <div>
    <Header />
    <HeroSection/>
    <SubHeroSection />
    <InfoCard title='Resida is Not Just an App' 
              subtitle='We are an ecosystem with you at the center' 
              body="Resida aims to bridge the gap between potential tenants 
              and available properties. This app is not just a tool; it's a solution for 
              individuals and families who are navigating the challenging terrain of apartment 
              hunting in a new or familiar city."
              image={info_image}
              imageStyle={"infoCard_image"}
              imageHeight={'image'}
              infoCardTextStyle={'infoCard_text'}
    />
    <OurExperience />
    <FindYourSpace />
    <InfoCard title='Comprehensive' 
              subtitle='Neighborhood Guides' 
              body="The 'Neighborhood Guides' in Resida are like your friendly local experts, 
                    giving you the inside scoop on the vibe, hotspots, and quirks of each area 
                    so you can find your perfect match effortlessly! 🏡✨"
              imageHeight={'infoCard_comprehensive_imageheight'}
              image={guide_map}
              button={true}
              infoCardTextStyle={'infoCard_text_guide'}
    />
    <FeaturedProperties />
    {/* <Do You Have A Property /> */}
    <InfoCard title='Do you have a property?' 
              subtitle='Provide accommodation here in Lagos' 
              body="Own a property in Lagos? Join our platform to effortlessly 
                    list your accommodations and connect with eager tenants seeking their 
                    perfect home in the vibrant city of Lagos."
              imageHeight={'infoCard_comprehensive_imageheight'}
              image={house}
              button={true}
              infoCardTextStyle={'infoCard_text_guide'}
              circle={true}
              circleStyleTitle={true}
              circleStyleSubtitle={true}
              reverse
    />
    <Discover />
    <Popular />
    <OfficeSpace />
    </div>;
};

export default LandingPage