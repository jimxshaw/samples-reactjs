// npm install --save react-google-maps@4.7.1
// Google Maps update often. We lock into a specific version to 
// prevent our app from breaking. 
import React from "react";
import {GoogleMapLoader, GoogleMap} from "react-google-maps";

export default (props) => {
  // Within GoogleMap JSX tag, defaultCenter attribute object has properties of lat
  // and lng. The reason lng is used in this specific case only as opposed to lon is 
  // because react-google-maps abbreviates longitude as lng while the weather API 
  // abbreviates with lon. 
  return (
    <GoogleMapLoader 
      containerElement={<div style={{height: '100%'}} />}
      googleMapElement={
        <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
      }
    />
  );
}


























