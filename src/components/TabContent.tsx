import { useState } from "react"
import { Route, Map, Bed, Check } from "lucide-react"

interface TabContentProps {
  tourRoute: Array<{ day: string; description: string }>
  itinerary: Array<{ time: string; activity: string }>
  accommodation: {
    description: string
    features: string[]
  }
}

export function TabContent({ tourRoute, itinerary, accommodation }: TabContentProps) {
  const [activeTab, setActiveTab] = useState('route')
  
  return (
    <div className="mt-16">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">
          Safari Details
        </h2>
        <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full mb-8"></div>
      </div>
      
      <div className="flex justify-center mb-6">
        <div className="bg-white rounded-full p-1 shadow-md inline-flex">
          <button
            onClick={() => setActiveTab('route')}
            className={`flex items-center px-6 py-3 rounded-full transition-all ${
              activeTab === 'route' 
                ? 'bg-amber-700 text-white shadow-md' 
                : 'text-gray-600 hover:text-amber-800'
            }`}
          >
            <Route className="h-5 w-5 mr-2" />
            Tour Route
          </button>
          
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`flex items-center px-6 py-3 rounded-full transition-all ${
              activeTab === 'itinerary' 
                ? 'bg-amber-700 text-white shadow-md' 
                : 'text-gray-600 hover:text-amber-800'
            }`}
          >
            <Map className="h-5 w-5 mr-2" />
            Itinerary
          </button>
          
          <button
            onClick={() => setActiveTab('accommodation')}
            className={`flex items-center px-6 py-3 rounded-full transition-all ${
              activeTab === 'accommodation' 
                ? 'bg-amber-700 text-white shadow-md' 
                : 'text-gray-600 hover:text-amber-800'
            }`}
          >
            <Bed className="h-5 w-5 mr-2" />
            Accommodation
          </button>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md border border-amber-100">
        {activeTab === 'route' && (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-display font-bold mb-6 text-black">Tour Route</h3>
            <div className="space-y-6">
              {tourRoute.map((item, index) => (
                <div key={index} className="relative pl-8 pb-6">
                  {index < tourRoute.length - 1 && (
                    <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-amber-700"></div>
                  )}
                  <div className="absolute left-0 top-0 h-6 w-6 rounded-full bg-amber-700 flex items-center justify-center text-white text-sm">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-black mb-2">{item.day}</h4>
                  <p className="text-gray-800">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'itinerary' && (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-display font-bold mb-6 text-black">Detailed Itinerary</h3>
            <div className="space-y-4">
              {itinerary.map((item, index) => (
                <div key={index} className="flex">
                  <div className="w-24 font-medium text-amber-800">{item.time}</div>
                  <div className="flex-1 text-gray-800">{item.activity}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'accommodation' && (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-display font-bold mb-6 text-black">Accommodation Details</h3>
            <p className="text-gray-800 mb-6">{accommodation.description}</p>
            
            <h4 className="text-lg font-semibold text-black mb-4">Accommodation Features:</h4>
            <ul className="space-y-3">
              {accommodation.features.map((feature, index) => (
                <li key={index} className="flex">
                  <Check className="h-5 w-5 mr-3 text-amber-700 flex-shrink-0" />
                  <span className="text-gray-800">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default TabContent 