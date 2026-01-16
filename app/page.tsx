'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Map from './components/Map';
import Loader from './components/Loader';
import { NaturalEvent } from './types';

const EONET_API_URL = 'https://eonet.gsfc.nasa.gov/api/v2.1/events';

export default function Home() {
  const [eventData, setEventData] = useState<NaturalEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(EONET_API_URL);
        const data = await res.json();
        setEventData(data.events || []);
      } catch (error) {
        console.error('Error fetching event data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <Map
          eventData={eventData}
          center={{ lat: 42.3265, lng: -122.8756 }}
          zoom={6}
        />
      )}
    </div>
  );
}
