// AIzaSyDh9ljTVq46uUICVGCQT4DYGlT80-WV7HI
import { GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api"
import './Map.css'

const mapContainerStyles = {
    width: "100%",
    height: "100%",
}

export default function Map() {
    const  { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPS_APIKEY
    })
    // if (loadError) return "Error loading maps";
    if(!isLoaded) return "Loading Maps";

    return (
        <div className="googlemapsDiv">
            <GoogleMap mapContainerStyle={mapContainerStyles}
                       zoom={8}
                       center={{lat: 43.653225, lng: -79.383186}}
            >
            </GoogleMap>
        </div>
    )
}
