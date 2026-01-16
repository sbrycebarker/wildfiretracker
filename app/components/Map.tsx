'use client';

import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
import { NaturalEvent, LocationInfo } from '../types';
import { useState, useCallback } from 'react';

interface MapProps {
  eventData: NaturalEvent[];
  center: { lat: number; lng: number };
  zoom: number;
}

const WILDFIRE_CATEGORY_ID = 8;

export default function Map({ eventData, center, zoom }: MapProps) {
  const [locationInfo, setLocationInfo] = useState<LocationInfo | null>(null);
  const [mapReady, setMapReady] = useState(false);

  const handleApiLoaded = useCallback(() => {
    setMapReady(true);
  }, []);

  const wildfires = eventData
    .filter(ev => ev.categories.some(cat => cat.id === WILDFIRE_CATEGORY_ID))
    .filter(ev => {
      const geometry = ev.geometries?.[0];
      return geometry &&
             Array.isArray(geometry.coordinates) &&
             geometry.coordinates.length >= 2 &&
             typeof geometry.coordinates[0] === 'number' &&
             typeof geometry.coordinates[1] === 'number';
    });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '' }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={handleApiLoaded}
      >
        {mapReady && wildfires.map(ev => (
          <LocationMarker
            key={ev.id}
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          />
        ))}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
}
