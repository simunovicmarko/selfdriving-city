import { LatLngExpression } from 'leaflet';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import leaflet from 'leaflet';

interface Props {

}

export const Map: FunctionComponent<Props> = () => {
    let lat: number = 46.55903286793199;
    let lon: number = 15.638056234591684;
    const FERI: LatLngExpression = [lat, lon];
    // const TyrsevaLat = [46.563950183673626, 46.563198046922494];
    // const TyrsevaLon = [15.64550015794588, 15.647296089361188];
    const [position, setPosition] = useState<LatLngExpression>(FERI);


    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((currentPosition: GeolocationPosition) => { lat = currentPosition.coords.latitude; lon = currentPosition.coords.longitude; setPosition([lat, lon]) });
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
                        {position}
                        {position === FERI ? <img src="https://feri.um.si/site/assets/files/1367/feri_by_night.jpg" alt="FERI" /> : <></>}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
