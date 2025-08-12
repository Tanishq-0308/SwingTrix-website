import React from 'react'
import HeroSection from '../components/home/HeroSection'
import GolfFeatureSection from '../components/home/GolfFeatureSection'
import AboutSection from '../components/home/About'
import PowerfulFeaturesSection from '../components/home/PowerfulFeatureSection'
import CallToActionSection from '../components/home/CallToActionSection'

const Home = () => {
  return (
    <div className='min-h-screen'>
      {/* < GolfBallOrbit /> */}
      <HeroSection />
      <GolfFeatureSection/>
      <AboutSection />
      <PowerfulFeaturesSection/>
      <CallToActionSection/>
      {/* <Membership /> */}
      {/* < GolfBallOrbit /> */}
    </div>
  )
}

export default Home