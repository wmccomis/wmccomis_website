import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import mapStyles from "./mapStyles";


const markers = [
  {
    id: 1,
    name: "KORD",
    position: { lat: 41.98020022367206, lng: -87.90884769713394}
  },
  {
    id: 2,
    name: "KRAL",
    position: { lat: 33.95044558296074, lng: -117.44589791443268}
  },
  {
    id: 3,
    name: "KSDL",
    position: {lat: 33.62032177076607, lng: -111.91534814512586}
  },
  {
    id: 4,
    name: "KSBM",
    position: { lat: 43.76449051338826, lng: -87.85111713943682 }
  },
  {
    id: 5,
    name: "KSBN",
    position: { lat: 41.707784984771806, lng: -86.31584227200801 }
  },
  {
    id: 6,
    name: "KSEZ",
    position: { lat: 34.85061494894007, lng: -111.78835864748336 }
  },
  {
    id: 7,
    name: "05C",
    position: { lat: 41.52221702697772, lng: -87.39784565110592}
  },
  {
    id: 8,
    name: "KMDW",
    position: { lat: 41.78688787549057, lng: -87.75210257015367}
  },
  {
    id: 9,
    name: "KIGQ",
    position: { lat: 41.53436072088404, lng: -87.53152189343336}
  },
  {
    id: 10,
    name: "KLAS",
    position: { lat: 36.08384370994329, lng: -115.1538247316058}
  },
  {
    id: 11,
    name: "KPHX",
    position: { lat: 33.43723276836161, lng: -112.00764862607667}
  },
  {
    id: 12,
    name: "KCID",
    position: { lat: 41.88627, lng: -91.70692}
  },
  {
    id: 13,
    name: "KBJJ",
    position: { lat: 40.87318, lng: -81.88295}
  },
  {
    id: 14,
    name: "CYTZ",
    position: { lat: 43.62840, lng: -79.39598}
  },{
    id: 15,
    name: "KBUF",
    position: { lat: 42.93959, lng: -78.72949}
  },{
    id: 16,
    name: "KSCA",
    position: { lat: 40.23784, lng: -84.15223}
  },{
    id: 17,
    name: "KEKM",
    position: { lat: 41.72383, lng: -84.99766}
  },{
    id: 18,
    name: "06C",
    position: { lat: 41.99091, lng: -88.10170}
  },
  {
    id: 19,
    name: "KBMG",
    position: { lat: 39.15311, lng: -86.61545}
  },
  {
    id: 20,
    name: "KGYY",
    position: { lat: 41.61795, lng: -87.40841}
  },
];

const mapContainerStyle = {
    width: '90vw',
    height: '50vh',
  };

  const center = {
    lat: 39.0119,
    lng: -98.4842,
  }

  const options = {
    styles: mapStyles,
  }


function Map() {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };


  var zoomVal = window.innerWidth > 400 ? 5 : 2

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      zoom={zoomVal} 
    //   center={center}
      options={options}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={mapContainerStyle}
    >
      {markers.map(({ id, name, position }) => (
        <Marker
          key={id}
          position={position}
          icon={{
                      url: '/plane.svg',
                      scaledSize: new window.google.maps.Size(30,30),
                      origin: new window.google.maps.Point(0,0),
                      anchor: new window.google.maps.Point(15,15),
                  }}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  );
}

export default Map;