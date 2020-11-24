import GoogleMapReact from 'google-map-react'
import Locationmarker from './LocationMarker'


const Map = ({ center, zoom }) => {
    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={
                    { key: 'AIzaSyAVm3NBTBy9e5GkX3XwJP7smPKSZKnlPkU' }
                }
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                <Locationmarker lat={center.lat} lng={center.lng} />
            </GoogleMapReact>
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
