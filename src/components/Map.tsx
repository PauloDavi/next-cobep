import React from 'react';
import { useState } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';

const defaultCenter = { lat: -7.1001348, lng: -34.8365615 };

const defaultOptions = { scrollwheel: false };

const RegularMap = withScriptjs(
  withGoogleMap((props) => {
    const [open, setOpen] = useState(false);

    function onToggleOpen() {
      setOpen((e) => !e);
    }
    return (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={defaultCenter}
        defaultOptions={defaultOptions}
      >
        <Marker position={defaultCenter} onClick={onToggleOpen}>
          {open && (
            <InfoBox onCloseClick={onToggleOpen}>
              <div
                style={{
                  background: '#fff',
                  borderRadius: '4px',
                  padding: `12px`,
                }}
              >
                <div style={{ fontSize: `16px` }}>
                  080, Av. Gen. Edson Ramalho, 1131 - Manaíra, João Pessoa - PB,
                  58038-100
                </div>
              </div>
            </InfoBox>
          )}
        </Marker>
      </GoogleMap>
    );
  })
) as React.ComponentClass<
  {
    googleMapURL: any;
    loadingElement: any;
    containerElement: any;
    mapElement: any;
  },
  any
>;

const loadingElementStyle = { height: '100%' };
const containerElementStyle = {
  height: '32rem',
  width: '100%',
  marginTop: '1rem',
};
const mapElementStyle = { height: '100%' };

export default function GoogleMaps() {
  return (
    <RegularMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD4IjNwDvfD70VuEEYp2-oHpFkjLeUXmEc"
      loadingElement={<div style={loadingElementStyle} />}
      containerElement={<div style={containerElementStyle} />}
      mapElement={<div style={mapElementStyle} />}
    />
  );
}
