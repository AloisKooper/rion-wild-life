import React, { useState, useEffect } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, Polyline, ZoomControl, LayersControl, ScaleControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Import Leaflet marker icons
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadowUrl from "leaflet/dist/images/marker-shadow.png";

// Initialize Leaflet icons configuration once
// This needs to be done before the component renders
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

// Safari tour routes and destinations data
interface Destination {
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
  description: string;
  country: string;
}

interface Route {
  id: number;
  name: string;
  description: string;
  destinations: Destination[];
  color: string;
  duration: string;
  highlights?: string[];
  price?: string;
  difficulty?: string;
}

const SafariMapSection: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
  
  // Center map on Southern Africa
  const mapCenter: [number, number] = [-22, 22]; // latitude, longitude
  const defaultZoom = 4;

  // Safari routes data
  const safariRoutes: Route[] = [
    {
      id: 1,
      name: "Namibia Highlights Safari",
      description: "Experience the best of Namibia on this comprehensive 14-day tour led by Professor Rion Haraeb.",
      color: "#E57C23",
      duration: "14 days",
      price: "€3,600",
      difficulty: "Moderate",
      highlights: [
        "UNESCO World Heritage Sossusvlei sand dunes",
        "Coastal exploration in Swakopmund",
        "Desert elephants at Twyfelfontein",
        "Abundant wildlife in Etosha National Park"
      ],
      destinations: [
        { 
          name: "Windhoek", 
          coordinates: [-22.5609, 17.0658], // [latitude, longitude]
          description: "Capital city and starting point at Okapuka Ranch",
          country: "Namibia"
        },
        { 
          name: "Kalahari Desert", 
          coordinates: [-24.1, 18.5], 
          description: "Kalahari Anib Lodge - Cheetah drive and Bushman visit",
          country: "Namibia" 
        },
        { 
          name: "Sossusvlei", 
          coordinates: [-24.7275, 15.3356], 
          description: "Namib Desert Lodge - UNESCO dunes",
          country: "Namibia" 
        },
        { 
          name: "Swakopmund", 
          coordinates: [-22.6467, 14.5052], 
          description: "Delight Hotel - Coastal tours",
          country: "Namibia" 
        },
        { 
          name: "Twyfelfontein", 
          coordinates: [-20.5962, 14.3721], 
          description: "Damara Mopani Lodge - UNESCO rock art",
          country: "Namibia"
        },
        { 
          name: "Etosha National Park", 
          coordinates: [-18.8555, 16.3252], 
          description: "Safari Camp and King Nehale Lodge - Game drives",
          country: "Namibia"
        },
        { 
          name: "Windhoek", 
          coordinates: [-22.5609, 17.0658], 
          description: "Return to capital city via Okapuka Ranch",
          country: "Namibia"
        }
      ]
    },
    {
      id: 2,
      name: "Big Five Safari (Nambovic)",
      description: "An epic 19-day journey through Namibia and Botswana focused on spotting the Big Five.",
      color: "#2E97A7",
      duration: "19 days",
      price: "€4,800",
      difficulty: "Moderate",
      highlights: [
        "Track all Big Five animals (lion, leopard, elephant, buffalo, rhino)",
        "Experience Etosha's abundant wildlife",
        "Explore Chobe River and surrounding ecosystems",
        "Visit Sossusvlei and Swakopmund"
      ],
      destinations: [
        { 
          name: "Windhoek", 
          coordinates: [-22.5609, 17.0658], 
          description: "Starting point of the tour",
          country: "Namibia" 
        },
        { 
          name: "Sossusvlei", 
          coordinates: [-24.7275, 15.3356], 
          description: "Iconic red sand dunes",
          country: "Namibia" 
        },
        { 
          name: "Swakopmund", 
          coordinates: [-22.6467, 14.5052], 
          description: "Coastal city with German colonial architecture",
          country: "Namibia" 
        },
        { 
          name: "Etosha National Park", 
          coordinates: [-18.8555, 16.3252], 
          description: "Premier wildlife viewing location",
          country: "Namibia"
        },
        { 
          name: "Kasane", 
          coordinates: [-17.8279, 25.1637], 
          description: "Gateway to Chobe National Park",
          country: "Botswana"
        },
        { 
          name: "Chobe River", 
          coordinates: [-17.8, 24.9], 
          description: "Famous for its large elephant populations",
          country: "Botswana"
        },
        { 
          name: "Maun", 
          coordinates: [-19.9833, 23.4167], 
          description: "Gateway to the Okavango Delta",
          country: "Botswana"
        },
        { 
          name: "Windhoek", 
          coordinates: [-22.5609, 17.0658], 
          description: "Return to Namibia's capital",
          country: "Namibia"
        }
      ]
    },
    {
      id: 3,
      name: "Namwild Safari",
      description: "A focused 9-day wildlife safari through Namibia's most exciting natural habitats.",
      color: "#8D7B68",
      duration: "9 days",
      price: "€1,900",
      difficulty: "Easy",
      highlights: [
        "Coastal wildlife in Swakopmund",
        "Explore Etosha South and North regions",
        "Visit Monte Etjo Safari Lodge",
        "Focus on Namibian wildlife species"
      ],
      destinations: [
        { 
          name: "Windhoek", 
          coordinates: [-22.5609, 17.0658], 
          description: "Starting point of the wildlife tour",
          country: "Namibia" 
        },
        { 
          name: "Swakopmund", 
          coordinates: [-22.6467, 14.5052], 
          description: "Marine wildlife and coastal habitats",
          country: "Namibia" 
        },
        { 
          name: "Etosha South", 
          coordinates: [-19.0, 15.9], 
          description: "Southern section of Etosha National Park",
          country: "Namibia"
        },
        { 
          name: "Etosha North", 
          coordinates: [-18.7, 16.5], 
          description: "Northern region with different wildlife patterns",
          country: "Namibia"
        },
        { 
          name: "Monte Etjo", 
          coordinates: [-21.3935, 16.8733], 
          description: "Safari lodge with diverse wildlife",
          country: "Namibia"
        },
        { 
          name: "Windhoek", 
          coordinates: [-22.5609, 17.0658], 
          description: "Return to capital",
          country: "Namibia"
        }
      ]
    },
    {
      id: 4,
      name: "Victoria Falls Adventure",
      description: "An 18-day multi-country expedition through Namibia, Botswana, and Victoria Falls.",
      color: "#A267AC",
      duration: "18 days",
      price: "€4,500",
      difficulty: "Moderate",
      highlights: [
        "Experience the magnificent Victoria Falls",
        "Explore the Okavango Delta ecosystem",
        "Cruise the wildlife-rich Chobe River",
        "Visit multiple countries in one adventure"
      ],
      destinations: [
        { 
          name: "Windhoek", 
          coordinates: [-22.5609, 17.0658], 
          description: "Starting point in Namibia",
          country: "Namibia" 
        },
        { 
          name: "Various Namibia Locations", 
          coordinates: [-21.0, 16.0], 
          description: "Multiple stops throughout Namibia",
          country: "Namibia" 
        },
        { 
          name: "Chobe National Park", 
          coordinates: [-18.65, 24.7], 
          description: "Famous for large elephant herds",
          country: "Botswana"
        },
        { 
          name: "Okavango Delta", 
          coordinates: [-19.2500, 22.7500], 
          description: "Unique inland delta with abundant wildlife",
          country: "Botswana"
        },
        { 
          name: "Victoria Falls", 
          coordinates: [-17.9244, 25.8567], 
          description: "One of the world's largest waterfalls",
          country: "Zimbabwe"
        },
        { 
          name: "Windhoek", 
          coordinates: [-22.5609, 17.0658], 
          description: "Return to Namibia's capital",
          country: "Namibia"
        }
      ]
    },
    {
      id: 5,
      name: "Walvisbay Excursions",
      description: "Half or full-day photography-focused excursions around Walvis Bay.",
      color: "#4F709C",
      duration: "Half/Full day",
      price: "€80",
      difficulty: "Easy",
      highlights: [
        "Visit the stunning Pink Lake",
        "Climb massive Dune 7",
        "See ancient Welwitschia plants",
        "Photograph the unique Moonlandscape"
      ],
      destinations: [
        { 
          name: "Walvis Bay", 
          coordinates: [-22.9575, 14.5053], 
          description: "Starting point of excursions",
          country: "Namibia" 
        },
        { 
          name: "Pink Lake", 
          coordinates: [-23.0, 14.5], 
          description: "Naturally pink salt lake",
          country: "Namibia" 
        },
        { 
          name: "Dune 7", 
          coordinates: [-22.9696, 14.5549], 
          description: "One of the highest dunes in Namibia",
          country: "Namibia"
        },
        { 
          name: "Welwitschia Plains", 
          coordinates: [-22.7, 14.9], 
          description: "Home to ancient Welwitschia plants",
          country: "Namibia"
        },
        { 
          name: "Moonlandscape", 
          coordinates: [-22.7, 14.8], 
          description: "Unique eroded landscape",
          country: "Namibia"
        },
        { 
          name: "Walvis Bay", 
          coordinates: [-22.9575, 14.5053], 
          description: "Return to starting point",
          country: "Namibia"
        }
      ]
    }
  ];

  // Render route lines
  const renderRouteLines = (route: Route) => {
    const positions = route.destinations.map(dest => dest.coordinates);
    
    return (
      <Polyline 
        key={`path-${route.id}`}
        positions={positions}
        className="safari-route-line"
        pathOptions={{
          color: route.color,
          weight: 4,
          opacity: 0.8
        }}
      />
    );
  };

  // Render destination markers
  const renderDestinationMarkers = (route: Route) => {
    return route.destinations.map((destination, index) => (
      <Marker 
        key={`marker-${route.id}-${index}`}
        position={destination.coordinates}
        icon={createCustomIcon(route.color, index + 1)}
      >
        <Popup>
          <div className="p-2">
            <h3 className="font-bold text-lg" style={{ color: route.color }}>{destination.name}</h3>
            <p className="text-sm mt-1">{destination.description}</p>
            <div className="flex items-center mt-2">
              <svg className="w-4 h-4 mr-1 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
              <p className="text-xs text-gray-600">{destination.country}</p>
            </div>
            <div className="mt-3 pt-2 border-t border-gray-100">
              {index > 0 && index < route.destinations.length - 1 ? (
                <span className="inline-block px-3 py-1 bg-gray-100 text-xs rounded-full font-medium">Stop {index}</span>
              ) : index === 0 ? (
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">Start Point</span>
              ) : (
                <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full font-medium">End Point</span>
              )}
            </div>
          </div>
        </Popup>
      </Marker>
    ));
  };

  // Create custom icon for markers
  const createCustomIcon = (color: string, number?: number) => {
    return L.divIcon({
      className: 'custom-marker-icon',
      html: `
        <div style="
          background-color: ${color};
          width: 28px;
          height: 28px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          color: white;
          font-weight: bold;
          border: 2px solid white;
          box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        ">
          ${number || ''}
        </div>
      `,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -14]
    });
  };

  return (
    <section className="w-full mt-[120px] max-md:mt-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Title section - centered */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex min-h-11 gap-2.5 text-base text-[rgba(192,91,42,1)] font-bold leading-[29px] pt-2.5 pb-[3px] px-2.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/84b71a0015ec61dbd5f6146d18b7020235ff3e05b76dce0afbc2e273452ad73a?placeholderIfAbsent=true"
              alt="Icon"
              className="aspect-[1] object-contain w-[31px] fill-[#A86747] shrink-0"
            />
            <div>Discover Our Routes</div>
          </div>
          <h2 className="text-[#3D3E48] text-center text-[26px] md:text-[30px] font-bold mt-1">
            Interactive Safari Map
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mt-4">
            Explore our popular safari routes across Southern Africa. Click on a route to see detailed information and destinations.
          </p>
        </div>

        {/* Map and route selection section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Route selection */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg text-[#3D3E48] font-bold mb-6">Safari Routes</h3>
              <div className="space-y-4">
                {safariRoutes.map(route => (
                  <div 
                    key={route.id}
                    className={`
                      p-4 rounded-lg cursor-pointer transition-all duration-200 
                      ${selectedRoute?.id === route.id 
                        ? 'bg-white shadow-md transform scale-[1.02]' 
                        : 'bg-gray-50 hover:bg-gray-100'
                      }
                      border-l-4
                    `}
                    style={{
                      borderLeftColor: route.color
                    }}
                    onClick={() => setSelectedRoute(route)}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-[#3D3E48] flex items-center">
                        <span
                          className="inline-block w-3 h-3 rounded-full mr-2"
                          style={{ backgroundColor: route.color }}
                        ></span>
                        {route.name}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-0.5 bg-gray-200 rounded-full">
                          {route.duration}
                        </span>
                        {route.price && (
                          <span className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full font-medium">
                            {route.price}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{route.description}</p>
                    {selectedRoute?.id === route.id && route.difficulty && (
                      <div className="mt-3 flex items-center text-xs text-gray-500">
                        <span className="mr-2">Difficulty:</span>
                        <span 
                          className={`px-2 py-0.5 rounded-full font-medium ${
                            route.difficulty.includes("Easy") ? "bg-green-50 text-green-700" :
                            route.difficulty.includes("Moderate") ? "bg-yellow-50 text-yellow-700" :
                            "bg-red-50 text-red-700"
                          }`}
                        >
                          {route.difficulty}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {selectedRoute && (
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-[fadeIn_0.3s_ease-in]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg text-[#3D3E48] font-bold">Route Details</h3>
                  <span 
                    className="w-8 h-8 flex items-center justify-center rounded-full"
                    style={{ backgroundColor: selectedRoute.color }}
                  >
                    <span className="text-white text-xs font-bold">{selectedRoute.id}</span>
                  </span>
                </div>
                
                {/* Route highlights */}
                {selectedRoute.highlights && (
                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      Trip Highlights
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {selectedRoute.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-xs text-gray-600">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Route destinations */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-1 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                    Itinerary
                  </h4>
                  <div className="space-y-3 relative">
                    {selectedRoute.destinations.map((destination, index) => (
                      <div key={index} className="flex relative">
                        {/* Connector lines */}
                        {index < selectedRoute.destinations.length - 1 && (
                          <div 
                            className="absolute top-6 left-3 w-[2px] h-[calc(100%+8px)]" 
                            style={{ backgroundColor: selectedRoute.color, opacity: 0.4 }}
                          ></div>
                        )}
                        
                        {/* Circle marker */}
                        <div 
                          className="w-6 h-6 mt-0.5 flex-shrink-0 flex items-center justify-center rounded-full z-10"
                          style={{ backgroundColor: index === 0 || index === selectedRoute.destinations.length - 1 
                            ? selectedRoute.color 
                            : 'white', 
                            border: `2px solid ${selectedRoute.color}` 
                          }}
                        >
                          <span 
                            className={`text-xs font-bold ${
                              index === 0 || index === selectedRoute.destinations.length - 1 
                                ? 'text-white' 
                                : 'text-gray-700'
                            }`}
                          >
                            {index + 1}
                          </span>
                        </div>
                        
                        {/* Content */}
                        <div className="ml-3">
                          <div className="flex items-center">
                            <h4 className="font-medium text-[#3D3E48] text-sm">{destination.name}</h4>
                            <span className="ml-2 px-1.5 py-0.5 text-[10px] bg-gray-100 rounded text-gray-600">
                              {destination.country}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 mt-0.5">{destination.description}</p>
                          {index === 0 && (
                            <span className="inline-block mt-1 px-2 py-0.5 bg-green-100 text-green-800 text-[10px] rounded-full">
                              Day 1: Start
                            </span>
                          )}
                          {index === selectedRoute.destinations.length - 1 && (
                            <span className="inline-block mt-1 px-2 py-0.5 bg-red-100 text-red-800 text-[10px] rounded-full">
                              Day {selectedRoute.duration.split(' ')[0]}: End
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Book now button */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button 
                    className="w-full py-2.5 rounded-lg font-medium text-white flex items-center justify-center gap-2"
                    style={{ backgroundColor: selectedRoute.color }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    Book This Tour
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Map container */}
          <div className="w-full lg:w-2/3 h-[600px] bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
            <MapContainer 
              center={mapCenter} 
              zoom={defaultZoom} 
              style={{ height: "100%", width: "100%" }}
              zoomControl={false}
              className="z-10"
            >
              <LayersControl position="topright">
                <LayersControl.BaseLayer checked name="Street Map">
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </LayersControl.BaseLayer>
                
                <LayersControl.BaseLayer name="Satellite">
                  <TileLayer
                    attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                  />
                </LayersControl.BaseLayer>
                
                <LayersControl.BaseLayer name="Terrain">
                  <TileLayer
                    attribution='&copy; <a href="https://www.opentopomap.org">OpenTopoMap</a>'
                    url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                  />
                </LayersControl.BaseLayer>
              </LayersControl>
              
              {/* Custom position for zoom controls */}
              <ZoomControl position="bottomright" />
              
              {/* Scale indicator */}
              <ScaleControl position="bottomleft" imperial={false} />
              
              {/* Render selected route or all routes */}
              {selectedRoute 
                ? (
                  <>
                    {renderRouteLines(selectedRoute)}
                    {renderDestinationMarkers(selectedRoute)}
                  </>
                ) 
                : safariRoutes.map(route => (
                  <React.Fragment key={`route-${route.id}`}>
                    {renderRouteLines(route)}
                    {renderDestinationMarkers(route)}
                  </React.Fragment>
                ))
              }
            </MapContainer>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 mb-6">
            Ready to embark on an unforgettable safari adventure? Contact us to book your journey today!
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[rgba(192,91,42,1)] shadow-[0px_11px_16px_rgba(192,91,42,0.88)] text-white py-[23px] px-[33px] rounded-[57px] text-center font-extrabold text-[23px] hover:bg-[rgba(172,81,32,1)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Plan Your Safari
          </a>
        </div>
      </div>
    </section>
  );
};

export default SafariMapSection; 