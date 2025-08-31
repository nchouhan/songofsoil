'use client'
    import { Map } from "react-map-gl"
    import "mapbox-gl/dist/mapbox-gl.css"

    const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

    export function FarmMap(){
      return (
        <Map
          mapboxAccessToken={MAPBOX_TOKEN}
          initialViewState={{
            longitude: 80.52,
            latitude: 22.25,
            zoom: 10
          }}
          style={{width: "100%", height: 300}}
          mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
        />
      )
    }