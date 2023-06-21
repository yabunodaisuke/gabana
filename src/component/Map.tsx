import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from "react";

// マップの大きさを指定
const Map = () => {
   const mapStyles = {
    height: "80%",
        width: "100%"
   };
// 地図の緯度・経度を指定
   const defaultCenter = {
    lat: 35.689481, lng: 139.691686
}
// loadscriptでapiを格納
return (
  <LoadScript
  googleMapsApiKey='AIzaSyCWLHSuC0jp33VE7tmlsD8y7J3N8qzGwGo'>
  <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={13}
      center={defaultCenter}
  />
</LoadScript>
)

}

// eslint-disable-next-line import/no-default-export
export default Map;