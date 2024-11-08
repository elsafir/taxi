import React from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Trip {
  pickup_longitude: number;
  pickup_latitude: number;
  dropoff_longitude: number;
  dropoff_latitude: number;
}

const MapComponent: React.FC<{ trips: Trip[] }> = ({ trips }) => {
  return (
    <MapContainer center={[40.7128, -74.0060]} zoom={12} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {trips.map((trip, idx) => (
        <Polyline
          key={idx}
          positions={[
            [trip.pickup_latitude, trip.pickup_longitude] as LatLngExpression,
            [trip.dropoff_latitude, trip.dropoff_longitude] as LatLngExpression,
          ]}
          color="blue"
        />
      ))}
    </MapContainer>
  );
};

export default MapComponent;
