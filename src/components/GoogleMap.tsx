import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix the marker icon issue
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface GoogleMapProps {
  // Support both the original interface and the new location-based one
  center?: [number, number];
  zoom?: number;
  markers?: Array<{
    position: [number, number];
    title: string;
    description?: string;
  }>;
  // New location-based prop from the safari-page-builder repo
  location?: {
    lat: number;
    lng: number;
    name: string;
  };
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  center = [-22.5597, 17.0832], // Default to Windhoek, Namibia
  zoom = 6,
  markers = [],
  location
}) => {
  // If location is provided, use it instead of center
  const mapCenter: [number, number] = location 
    ? [location.lat, location.lng] 
    : center;
  
  // Create marker from location if provided
  const mapMarkers = location 
    ? [...markers, {
        position: [location.lat, location.lng] as [number, number],
        title: location.name,
        description: "Our safari destination"
      }]
    : markers;

  // Create position array for the polyline from markers
  const routePositions = mapMarkers.map(marker => marker.position);

  // Style for the polyline
  const routeStyle = {
    color: 'rgb(192,91,42)',
    weight: 3,
    opacity: 0.8,
    dashArray: '5, 5',
  };

  return (
    <MapContainer
      center={mapCenter}
      zoom={zoom}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Add a polyline to connect the markers */}
      {routePositions.length > 1 && (
        <Polyline positions={routePositions} pathOptions={routeStyle} />
      )}
      
      {mapMarkers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>
            <div>
              <h3 className="font-bold">{marker.title}</h3>
              {marker.description && <p>{marker.description}</p>}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default GoogleMap; 