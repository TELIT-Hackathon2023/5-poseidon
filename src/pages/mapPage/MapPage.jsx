import PlacesMap from "../../components/placesMap/PlacesMap";

import './mapPage.scss';

const MapPage = () => {
    return (
        <>
            <p className="map-page__title">Enrer your place</p>
            <PlacesMap />
        </>
    )
}

export default MapPage;