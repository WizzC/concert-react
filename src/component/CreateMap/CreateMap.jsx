import React from 'react';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from 'react-leaflet';

import styles from './CreateMap.module.css';
import "leaflet/dist/leaflet.css";

function CreateMap({coordinates}) {
   return (
        <>
            <MapContainer className={styles.mapContainer} center={[46.6031, 1.8883]} zoom={5} minZoom={4}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

               { 
               (typeof coordinates[0]=="number" && <Marker position={[coordinates[0],coordinates[1]]}>
                </Marker>) ||
                
            coordinates.length > 0 &&
            coordinates.map((marker,index) => (
              <Marker key={index}
                position={marker}
              >
              </Marker>
            ))} 
               
            </MapContainer>
        </>
        
    )
}

export default CreateMap;
