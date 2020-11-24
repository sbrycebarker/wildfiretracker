import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import Locationinfobox from './Locationinfobox'


const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)



    const markers = eventData.map(ev => {
        if(ev.categories[0].id == 8) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} 
            lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title})}/>
        }
        return null
    })
    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 
                    'AIzaSyAVm3NBTBy9e5GkX3XwJP7smPKSZKnlPkU' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
           {locationInfo && <Locationinfobox info={locationInfo} />} 
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 40.7608,
        lng: -111.8910
    },
    zoom: 6
}



export default Map
