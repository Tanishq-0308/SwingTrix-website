import React from 'react'
import HeroSection from '../components/about/heroSection'
import OurMissionSection from '../components/about/ourMissionSection'
import TimelineSection from '../components/about/TimelineSection'

const About = () => {
  return (
    <div className='min-h-screen'>
        <HeroSection/>
        <OurMissionSection/>
        <TimelineSection/>
    </div>
  )
}

export default About