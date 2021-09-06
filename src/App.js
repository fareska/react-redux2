import React from 'react'
import ReduxExample from './components/ReduxExample'
import { WrappedMap } from './components/GoogleMaps'

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }} >
      {/* <ReduxExample /> */}
      <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}
