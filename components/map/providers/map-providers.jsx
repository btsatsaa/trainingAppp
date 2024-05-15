'use client'
import { Libraries, useJsApiLoader } from '@react-google-maps/api';
import { ReactNode, useMemo } from 'react';

// Define a list of libraries to load from the Google Maps API
const libraries = ['places', 'drawing', 'geometry'];

export function MapProvider({ children }) {
    const loader = useJsApiLoader({
        googleMapsApiKey: String(process.env.NEXT_PUBLIC_GOOGLE_MAP_API),
        libraries: libraries,
    });

    const loadError = loader.loadError;

    if (loadError) return <p>Encountered error while loading google maps</p>;

    // Ensure loader is not null before accessing its properties
    const isLoaded = loader ? loader.isLoaded : false;

    if (!isLoaded) return <p>Map Script is loading ...</p>;

    return children;
}
