import L from 'leaflet'
// import {Polyline} from 'react-leaflet'

// Converts leaflet-contextmenu to a React Component
// extends Polyline
export default class LeafletContextMenu {
  createLeafletElement(props) {
    // const {positions, ...otherProps} = props
    const {map} = this.context

    this.map = new L.map(map, {
      contextmenu: true,
      contextmenuWidth: 140,
      contextmenuItems: [{
          text: 'Show coordinates',
          callback: this.showCoordinates
      }]
    //   , {
    //       text: 'Center map here',
    //       callback: centerMap
    //   }, '-', {
    //       text: 'Zoom in',
    //       icon: 'images/zoom-in.png',
    //       callback: zoomIn
    //   }, {
    //       text: 'Zoom out',
    //       icon: 'images/zoom-out.png',
    //       callback: zoomOut
    //   }
    
    })
    
    return this.map
  }


  showCoordinates = e => alert(e.latlng)

  updateLeafletElement(fromProps, toProps) {
    const {map} = this.context

    this.polyline.removeFrom(map) // Resets
    this.createLeafletElement(toProps) // To redraw Distance Markers
  }

  // addDistanceMarkers = () => {
  //   this.polyline.addDistanceMarkers()
  // }

  // removeDistanceMarkers = () => {
  //   this.polyline.removeDistanceMarkers()
  // }
}

// import PropTypes from 'prop-types'

// LeafletContextMenu.propTypes = {

// }