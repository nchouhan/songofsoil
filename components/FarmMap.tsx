'use client'
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

export function FarmMap() {
  const position = { lat: 22.25, lng: 80.52 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <div style={{ height: "300px", width: "100%" }}>
        <Map
          defaultCenter={position}
          defaultZoom={10}
          mapId="a2b2e7a3f3a2a74"
        >
          <AdvancedMarker position={position} />
        </Map>
      </div>
    </APIProvider>
  );
}