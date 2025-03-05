import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix the marker icon issue
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// Configure Leaflet icon
function iconConfig() {
  // Define default icon
  const defaultIcon = new L.Icon({
    iconUrl: icon,
    iconRetinaUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  // Set the default icon for all markers
  L.Marker.prototype.options.icon = defaultIcon;
}

// Call the function to configure icons
iconConfig();

// Type definitions
interface Destination {
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
  description?: string;
}

interface Route {
  id: string;
  name: string;
  description: string;
  color: string;
  destinations: Destination[];
}

interface SafariMapSectionProps {
  className?: string;
  title?: string;
  subtitle?: string;
  location?: {
    lat: number;
    lng: number;
    name: string;
  };
}

// Sample safari routes in Namibia
const safariRoutes: Route[] = [
  {
    id: "namibia-highlights",
    name: "Namibia Highlights Tour",
    description: "Experience the best of Namibia's diverse landscapes and wildlife",
    color: "#FF4500",
    destinations: [
      {
        name: "Windhoek",
        coordinates: [-22.5597, 17.0832],
        description: "Starting point of our journey"
      },
      {
        name: "Etosha National Park",
        coordinates: [-18.8555, 16.3272],
        description: "Famous for its abundant wildlife and salt pan"
      },
      {
        name: "Swakopmund",
        coordinates: [-22.6784, 14.5258],
        description: "Coastal town with German colonial architecture"
      },
      {
        name: "Sossusvlei",
        coordinates: [-24.7285, 15.3456],
        description: "Known for its towering red sand dunes"
      },
      {
        name: "Fish River Canyon",
        coordinates: [-27.5777, 17.6014],
        description: "One of the largest canyons in the world"
      },
      {
        name: "Windhoek",
        coordinates: [-22.5597, 17.0832],
        description: "Return to the capital"
      }
    ]
  }
];

const SafariMapSection: React.FC<SafariMapSectionProps> = ({
  className,
  title = "Explore Our Safari Route",
  subtitle = "Follow our journey through the diverse landscapes of Namibia, featuring iconic destinations and incredible wildlife viewing opportunities.",
  location
}) => {
  const [selectedRoute] = useState<Route>(safariRoutes[0]);
  
  // Use the default route or create a custom one if location is provided
  const currentRoute = location ? {
    ...safariRoutes[0],
    destinations: [
      {
        name: location.name,
        coordinates: [location.lat, location.lng] as [number, number],
        description: "Our safari destination"
      }
    ]
  } : selectedRoute;
  
  // Center of the map - either based on location prop or first destination
  const mapCenter = location 
    ? [location.lat, location.lng] as [number, number]
    : currentRoute.destinations[0].coordinates;

  return (
    <section className={`py-12 ${className || ''}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
          <MapContainer 
            center={mapCenter} 
            zoom={6} 
            style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {/* Draw route line */}
            <Polyline 
              positions={currentRoute.destinations.map(d => d.coordinates)}
              pathOptions={{ color: currentRoute.color, weight: 3 }}
            />
            
            {/* Add markers for each destination */}
            {currentRoute.destinations.map((destination, idx) => (
              <Marker 
                key={`${destination.name}-${idx}`} 
                position={destination.coordinates}
              >
                <Popup>
                  <div>
                    <h3 className="font-bold text-lg">{destination.name}</h3>
                    {destination.description && (
                      <p className="text-gray-600">{destination.description}</p>
                    )}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default SafariMapSection; 