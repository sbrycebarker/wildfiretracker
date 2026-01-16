import { LocationInfo } from '../types';

interface LocationInfoBoxProps {
  info: LocationInfo;
}

export default function LocationInfoBox({ info }: LocationInfoBoxProps) {
  return (
    <div className="location-info">
      <h2>Event Location Info</h2>
      <ul>
        <li>ID: <strong>{info.id}</strong></li>
        <li>TITLE: <strong>{info.title}</strong></li>
      </ul>
    </div>
  );
}
