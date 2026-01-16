'use client';

import { Icon } from '@iconify/react';
import fireIcon from '@iconify/icons-mdi/fire';

interface LocationMarkerProps {
  lat: number;
  lng: number;
  onClick: () => void;
  // google-map-react injects these props
  $hover?: boolean;
  $dimensionKey?: string;
  $geoService?: unknown;
  $getDimensions?: unknown;
  $onMouseAllow?: unknown;
  $prerender?: boolean;
}

export default function LocationMarker({ onClick }: LocationMarkerProps) {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={fireIcon} className="location-icon" />
    </div>
  );
}
