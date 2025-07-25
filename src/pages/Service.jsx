import React from 'react'
import ServiceHeader from '../components/service/ServiceHeader'
import ServiceTesting from '../components/service/ServiceTesting'
import ServiceEngine from '../components/service/ServiceEngine'
import ServiceWhyChooseUs from '../components/service/ServiceWhyChoose'

const Service = () => {
  return (
    <div>
      <ServiceHeader />
      <ServiceTesting />
      <ServiceEngine />
      <ServiceWhyChooseUs />
    </div>
  )
}

export default Service
