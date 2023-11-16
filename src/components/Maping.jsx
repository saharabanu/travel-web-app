/* eslint-disable react/prop-types */
import { Map, Marker } from "google-maps-react";

const Maping = (props) => {
  return (
    <div>
      <Map className= "w-10 h-10"
        google={props?.google}
        zoom={1}
        
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      >
        <Marker position={{ lat: 48.0, lng: -122.0 }} />
      </Map>
    </div>
  );
};

export default Maping;
