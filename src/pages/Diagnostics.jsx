import React from 'react'
import DiagnosticsTesting from '../components/diagnostics/DiagnosticsTesting'
import DiagnosticsHeader from '../components/diagnostics/DiagnosticsHeader'
import DiaWhyChooseUs from '../components/diagnostics/DiaWhyChoose'

const Diagnostics = () => {
  return (
    <div>
      <DiagnosticsHeader />
      <DiagnosticsTesting />
      <DiaWhyChooseUs />
    </div>
  )
}

export default Diagnostics
