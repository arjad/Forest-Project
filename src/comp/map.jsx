import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import { MappingsContext } from 'source-list-map'

class Mapcomp extends Component {
    render() {
        return (
            <div>
                <Map google ={this.props.google} zoom={14}>
                    <Marker onClick={this.onMarkerClick} name={'Current location'}/>
                    <InfoWindow onClose={this.InfoWindowClose}>
                        
                    </InfoWindow>
                </Map>
        
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey:('AIzaSyAnG-u7YUhNLFEdR1XzbP-y1wL3srNrPsk')
})(Mapcomp)