import { LatLngExpression } from 'leaflet';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import leaflet from 'leaflet';

interface Props {

}

export const Map: FunctionComponent<Props> = () => {
    const FERI: LatLngExpression = [46.55903286793199, 15.638056234591684];
    const [position, setPosition] = useState<LatLngExpression>(FERI);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((currentPosition: GeolocationPosition) => {setPosition([currentPosition.coords.latitude, currentPosition.coords.longitude]) });
        }
    }

    useEffect(() => {
        getLocation();
    }, [])

    return (
        <div>
            <MapContainer id="map" className="w-full h-full" center={position} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        {position === FERI ? <img src="https://feri.um.si/site/assets/files/1367/feri_by_night.jpg" /> : <></>}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
