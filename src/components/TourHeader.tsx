import { MapPin, Phone, Calendar, Star } from "lucide-react"
import { useState, useEffect } from "react"

interface TourHeaderProps {
  tourName: string
  location: string
  description: string
  imageSrc: string
}

export function TourHeader({ tourName, location, description, imageSrc }: TourHeaderProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = imageSrc
    img.onload = () => setImageLoaded(true)
  }, [imageSrc])

  return (
    <section className="relative w-full h-[85vh] md:h-[65vh] mt-0">
      {/* Hero content */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center">
        {/* Left column content */}
        <div className="w-full md:w-1/2 bg-amber-900 text-white flex flex-col justify-center h-full pt-20 pb-8 md:py-16 px-4 md:px-8">
          <div className="animate-fade-up animation-delay-100">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 md:w-5 h-4 md:h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white/90 text-xs md:text-sm">100+ Reviews</span>
            </div>

            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="bg-amber-700/20 p-1.5 md:p-2 rounded-full">
                <MapPin className="text-amber-400 h-4 w-4 md:h-5 md:w-5" />
              </div>
              <span className="text-white font-medium text-base md:text-lg">{location}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 text-white leading-tight">
              {tourName}
            </h1>
            
            <p className="text-white/90 text-base md:text-xl mb-6 md:mb-8 max-w-xl">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-3 md:gap-4">
              <button className="px-6 md:px-8 py-3 md:py-4 text-base font-extrabold leading-none text-center text-white bg-[rgba(192,91,42,1)] rounded-[40px] shadow-[0px_8px_20px_rgba(192,91,42,0.8)] hover:bg-[rgba(192,91,42,0.9)] transition-all">
                <span>Contact Us</span>
              </button>
              <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-4 md:px-6 py-3 md:py-4 rounded-[40px] hover:bg-white/20 transition-all shadow-lg hover:shadow-xl font-medium text-base md:text-lg">
                <Calendar className="h-4 w-4 md:h-5 md:w-5" />
                <span>View Availability</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Right column with image that fills the column */}
        <div className="w-full md:w-1/2 h-full bg-amber-100 order-first md:order-last">
          <img 
            src={imageSrc}
            alt={tourName}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default TourHeader 