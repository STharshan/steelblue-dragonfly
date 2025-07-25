import React from 'react'
import Hero from '../components/Home/HeroSection'
import AboutSection from '../components/Home/AboutSection'
import WhatSetsUsApart from '../components/Home/WhatSetsUsApart'
import ServiceArea from '../components/Home/ServiceArea'
import ContactBanner from '../components/Home/ContactBanner'
import CompanyStats from '../components/Home/CompanyStats'
import TestimonialSlider from '../components/Home/TestimonialSlider'
import ContactSection from '../components/Home/Contact'
import MapLocation from '../components/Home/MapLocation'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <WhatSetsUsApart />
      <ServiceArea />
      <ContactBanner />
      <CompanyStats />
      <TestimonialSlider />
      <ContactSection />
      <MapLocation />
    </div>
  )
}

export default Home
