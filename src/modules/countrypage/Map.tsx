import React from 'react';
import {MapContainer, Marker, TileLayer, GeoJSON, Tooltip} from "react-leaflet";
import {LatLngExpression} from 'leaflet';

import 'leaflet/dist/images/marker-shadow.png';


interface MapProps {
  location: LatLngExpression,
  lang: string,
  coordinates: Array<LatLngExpression[]>,
  country: string,
  capital: string
}

export default function Map(props: MapProps): JSX.Element {

  const {location, lang, coordinates, capital, country} = props;

  const GeoJsonData = {
    geometry: {
      coordinates: coordinates,
      type: 'Polygon' as "Polygon",
    },
    properties: {
      name: country
    },
    type: 'Feature' as "Feature",
  }

  const stylesBorder = {
    color: '#30BD1D',
    weight: 4
  }

  function selectLang(lang:string):string {
    switch (lang) {
      case 'ru': return 'Столица';
      case 'en': return 'Capital';
      case 'de': return 'Hauptstadt';
      default: return 'Столица';
    }
  }

  return (
    <div className='map-wrapper'>
      <MapContainer className='map-content' center={location} minZoom={2} zoom={5}
                    maxBounds={[[-89.98155760646617, -180], [89.99346179538875, 180]]} maxBoundsViscosity={1}>
        <TileLayer
          updateInterval={20}
          attribution='<a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors'
          url={`https://tile.jawg.io/jawg-streets/{z}/{x}/{y}.png?lang=${lang}&access-token=hjwgVWeFpBZKCpiJuubyxLQTlfaKby0nFconlrJRUxRilidPFenqyUvzELqTeEjR`}
        />
        <Marker position={location}>
          <Tooltip className='tooltip'>{`${selectLang(lang)}:${capital}`}</Tooltip>
        </Marker>
        <GeoJSON data={GeoJsonData} style={stylesBorder}>
          <Tooltip className='tooltip'>{country}</Tooltip>
        </GeoJSON>
      </MapContainer>
    </div>
  );
}
