import React, { useEffect, useRef } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";


const render = (status) => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};
const containerStyle = {
    width: '100%',
    height: '400px',
    margin: '0 auto'
};

function MyMap({ center, zoom }) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" style={containerStyle}/>;
}

export default function MapRend() {
  const center = {
    lat: 48.17401176471217,
    lng: 17.18074969192658,
  };

  const zoom = 17;

  return (
    <Wrapper apiKey="AIzaSyDw2Y6ehX1sVe7MTXLlbcIvL6awjZKJ1Jk" render={render}>
      <MyMap center={center} zoom={zoom} >
       
      </MyMap>
    </Wrapper>
  );
}

