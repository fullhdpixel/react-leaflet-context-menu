import React from 'react'
import {render} from 'react-dom'
import {Map, TileLayer} from 'react-leaflet'

import LeafletContextMenu from '../../src/LeafletContextMenu'

import './leaflet/leaflet.js'
import './leaflet/leaflet.css'

import '../../src/index'

const App = () => {
  console.log(LeafletContextMenu)

  return <Map style={{
    height: '100vh'
  }} zoom={13} center={[51.505, -0.09]}>
    <TileLayer
      attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
  </Map>
}

render(
  <App/>, document.getElementById('root'))