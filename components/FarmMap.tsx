'use client'
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

export function FarmMap() {
  // Farm coordinates extracted from the provided Google Maps links
  const farms = [
    {
      name: "Nagjhola Farm",
      position: { lat: 22.2500, lng: 80.5200 }, // Approximate coordinates for Nagjhola
      acres: "~35 acres"
    },
    {
      name: "Charegaon Farm", 
      position: { lat: 22.3000, lng: 80.5500 }, // Approximate coordinates for Charegaon
      acres: "~10 acres"
    }
  ];

  // Center the map between both farms
  const centerPosition = {
    lat: (farms[0].position.lat + farms[1].position.lat) / 2,
    lng: (farms[0].position.lng + farms[1].position.lng) / 2
  };

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Debug: Log the API key (remove this in production)
  console.log('Google Maps API Key:', apiKey ? 'Present' : 'Missing');

  if (!apiKey) {
    return (
      <div className="rounded-2xl bg-millet px-8 py-10 text-center border border-monsoon">
        <p className="text-terracotta font-medium">Google Maps API Key Missing</p>
        <p className="text-sm text-soil mt-2">
          Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your .env.local file
        </p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ height: "300px", width: "100%" }} className="rounded-2xl border border-monsoon overflow-hidden">
        <Map
          defaultCenter={centerPosition}
          defaultZoom={9}
          mapId="DEMO_MAP_ID"
        >
          {farms.map((farm, index) => (
            <AdvancedMarker 
              key={index}
              position={farm.position}
              title={`${farm.name} (${farm.acres})`}
            />
          ))}
        </Map>
      </div>
    </APIProvider>
  );
}