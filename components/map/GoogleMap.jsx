import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api'
import { useState, useEffect } from 'react'

const defaultMapContainerStyle = {
    width: '100%',
    height: '100vh',
    borderRadius: '15px 0px 0px 15px',
}

const defaultMapZoom = 18

const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'auto',
    mapTypeId: 'roadmap',
}

const MapComponent = () => {
    const lats = [0, 47.92537595122, 47.914946417816786, 47.92382000400115]
    const lets = [0, 106.9716112028, 106.99577717068445, 106.93412168867263]
    const namesa = ['voll', 'merit', 'Nomun', 'Чех'] // Fixed array name
    const [mapCenter, setMapCenter] = useState({
        lat: 35.8799866,
        lng: 76.5048004,
    })
    const [nearTarget, setNearTarget] = useState(false)
    const [selectedMarker, setSelectedMarker] = useState(null)

    useEffect(() => {
        const requestGeolocation = () => {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(({ coords }) => {
                    const { latitude, longitude } = coords
                    setMapCenter({ lat: latitude, lng: longitude })

                    const id = parseInt(localStorage.getItem('id'))
                    if (
                        !isNaN(id) &&
                        id >= 0 &&
                        id < lats.length &&
                        id < lets.length
                    ) {
                        const distance = getDistance(
                            latitude,
                            longitude,
                            lats[id],
                            lets[id]
                        )
                        setNearTarget(distance < 50000)
                    }
                })
            }
        }
        requestGeolocation()
    }, [])

    const getDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371 // Radius of the Earth in kilometers
        const dLat = deg2rad(lat2 - lat1)
        const dLon = deg2rad(lon2 - lon1)
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) *
                Math.cos(deg2rad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2)
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
        const distance = R * c * 1000 // Convert to meters
        return distance
    }

    const deg2rad = (deg) => {
        return deg * (Math.PI / 180)
    }

    return (
        <div className="w-full">
            <GoogleMap
                mapContainerStyle={defaultMapContainerStyle}
                center={mapCenter}
                zoom={defaultMapZoom}
                options={defaultMapOptions}
            >
                {nearTarget && (
                    <Marker
                        position={{
                            lat: lats[localStorage.getItem('id')],
                            lng: lets[localStorage.getItem('id')],
                        }}
                        label={{
                            text: namesa[localStorage.getItem('id')],
                            className:
                                'text-white bg-indigo-500 p-2 rounded-full transition duration-300 transform hover:scale-110',
                        }}
                        onClick={() => {
                            setSelectedMarker(
                                namesa[localStorage.getItem('id')]
                            )
                        }}
                    />
                )}
                <Marker position={mapCenter} label="You are here" />
                {selectedMarker && (
                    <InfoWindow
                        position={{
                            lat: lats[localStorage.getItem('id')],
                            lng: lets[localStorage.getItem('id')],
                        }}
                        onCloseClick={() => setSelectedMarker(null)}
                    >
                        <div>
                            <h2 className="text-lg font-bold">
                                {selectedMarker}
                            </h2>
                            <p>Амжилт хүсье</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    )
}

export default MapComponent
