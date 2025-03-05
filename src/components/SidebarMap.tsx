import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Polyline, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Import Leaflet marker icons
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadowUrl from "leaflet/dist/images/marker-shadow.png";

// Initialize Leaflet icons configuration once
const iconConfig = () => {
  // Delete default icon references
  delete (L.Icon.Default.prototype as any)._getIconUrl;

  // Configure default icons
  L.Icon.Default.mergeOptions({
    iconUrl,
    shadowUrl: iconShadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
};

// Call the icon configuration once outside the component
iconConfig();

// Simplified destination and route interfaces
interface Destination {
  name: string;
  coordinates: [number, number];
}

interface Route {
  id: number;
  name: string;
  destinations: Destination[];
  color: string;
}

const SidebarMap: React.FC = () => {
  // Center map on Southern Africa
  const mapCenter: [number, number] = [-22, 22]; // latitude, longitude
  const defaultZoom = 3.5;

  // Simplified safari routes data
  const safariRoutes: Route[] = [
    {
      id: 1,
      name: "Namibia Highlights",
      color: "#E57C23",
      destinations: [
        { name: "Windhoek", coordinates: [-22.5609, 17.0658] },
        { name: "Kalahari", coordinates: [-24.1, 18.5] },
        { name: "Sossusvlei", coordinates: [-24.7275, 15.3356] },
        { name: "Swakopmund", coordinates: [-22.6467, 14.5052] },
        { name: "Twyfelfontein", coordinates: [-20.5962, 14.3721] },
        { name: "Etosha", coordinates: [-18.8555, 16.3272] },
        { name: "Waterberg", coordinates: [-20.4380, 17.2543] },
        { name: "Windhoek", coordinates: [-22.5609, 17.0658] },
      ]
    },
    {
      id: 2,
      name: "Namibia & Botswana",
      color: "#43B97F",
      destinations: [
        { name: "Windhoek", coordinates: [-22.5609, 17.0658] },
        { name: "Etosha", coordinates: [-18.8555, 16.3272] },
        { name: "Rundu", coordinates: [-17.9182, 19.7669] },
        { name: "Maun", coordinates: [-19.9857, 23.4186] },
        { name: "Chobe", coordinates: [-17.8249, 25.1349] },
        { name: "Ghanzi", coordinates: [-21.6978, 21.6453] },
        { name: "Windhoek", coordinates: [-22.5609, 17.0658] },
      ]
    },
    {
      id: 3,
      name: "Victoria Falls",
      color: "#AA5656",
      destinations: [
        { name: "Windhoek", coordinates: [-22.5609, 17.0658] },
        { name: "Caprivi", coordinates: [-17.6874, 24.2465] },
        { name: "Victoria Falls", coordinates: [-17.9244, 25.8567] },
        { name: "Chobe", coordinates: [-17.8249, 25.1349] },
        { name: "Windhoek", coordinates: [-22.5609, 17.0658] },
      ]
    }
  ];

  // Function to render route lines
  const renderRouteLines = (route: Route) => {
    const coordinates = route.destinations.map(dest => dest.coordinates);
    
    return (
      <Polyline
        key={`route-line-${route.id}`}
        positions={coordinates}
        pathOptions={{ color: route.color, weight: 3 }}
      />
    );
  };

  // Function to render markers for a route
  const renderDestinationMarkers = (route: Route) => {
    return route.destinations.map((destination, index) => (
      <Marker
        key={`route-${route.id}-marker-${index}`}
        position={destination.coordinates}
      />
    ));
  };

  return (
    <div className="rounded-lg overflow-hidden">
      <div className="bg-white p-3 border-b border-gray-200">
        <h3 className="text-[#3D3E48] text-center text-base font-semibold">Safari Tour Routes</h3>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2 text-xs">
          {safariRoutes.map(route => (
            <div key={`legend-${route.id}`} className="flex items-center gap-1">
              <span className="block w-3 h-3 rounded-full" style={{ backgroundColor: route.color }}></span>
              <span className="text-gray-700">{route.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[280px] w-full relative">
        <MapContainer 
          center={mapCenter} 
          zoom={defaultZoom} 
          style={{ height: "100%", width: "100%" }}
          zoomControl={false}
          className="z-10"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* Zoom Control in better position for small map */}
          <ZoomControl position="bottomright" />
          
          {/* Render all routes */}
          {safariRoutes.map(route => (
            <React.Fragment key={`route-${route.id}`}>
              {renderRouteLines(route)}
              {renderDestinationMarkers(route)}
            </React.Fragment>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default SidebarMap; 