import { useState, useEffect } from 'react'
import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'

function App() {
  const [eventData, setEventData ] = useState([])
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvents()

    // console.log("Event Data: ", eventData)
  }, [])

  return (
    <div>
      <Header />
        { !loading ? <Map eventData={eventData} /> : <Loader /> }
    </div>
  );
}

export default App;

// https://api.nasa.gov/planetary/apod?api_key=t2buXAPOiQY7iYDfA5G1ocYgbrEaeOGzUa112nPb

// API KEY: t2buXAPOiQY7iYDfA5G1ocYgbrEaeOGzUa112nPb
