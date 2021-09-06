import React, { useState } from "react"
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps"
import map from '../styles/map'

function GoogleMaps() {

    const [clicked, setClicked] = useState(null)

    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 31.7916125479, lng: 34.6441230243 }}
            defaultOptions={{ styles: map }}
        >
            <Marker position={{ lat: 31.7916125479, lng: 34.6441230243 }}
                onClick={() => setClicked(true)}
                icon={{
                    url: 'https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667',
                    scaledSize: new window.google.maps.Size(25, 25)
                }}
            />

            {
                clicked && <InfoWindow position={{ lat: 31.7916125479, lng: 34.6441230243 }}
                    onCloseClick={() => setClicked(null)}
                >
                    <div>Details</div>
                </InfoWindow>
            }
        </GoogleMap>
    )
}

export const WrappedMap = withScriptjs(withGoogleMap(GoogleMaps))