import { Icon } from '@iconify/react';
import fireIcon from '@iconify/icons-mdi/fire';

export default function Header() {
  return (
    <header className="header">
      <Icon icon={fireIcon} className="header-icon" />
      <h1>Wildfire Tracker</h1>
      <p>Powered by NASA EONET API</p>
    </header>
  );
}
