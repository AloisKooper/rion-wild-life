import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TripGalleryProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
}

export function TripGallery({ images }: TripGalleryProps) {
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(Array(images.length).fill(false));
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const imagePromises = images.map((image, index) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = image.src;
        img.onload = () => {
          setImagesLoaded(prev => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
          resolve();
        };
        img.onerror = () => {
          console.error(`Failed to preload image: ${image.src}`);
          // Initialize as loaded even on error to allow the component to render with placeholders
          setImagesLoaded(prev => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
          resolve();
        };
      });
    });

    Promise.all(imagePromises);
  }, [images]);

  return (
    <div className="my-16">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">
          Trip Gallery
        </h2>
        <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full mb-8"></div>
      </div>

      <div className="bg-white rounded-xl overflow-hidden border border-amber-100 shadow-md">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          speed={800}
          loop={true}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="w-full h-full bg-amber-50 flex items-center justify-center">
                <div className={`absolute inset-0 transition-opacity duration-500 ${imagesLoaded[index] ? 'opacity-100' : 'opacity-0'}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    onError={(e) => { 
                      console.error(`Failed to load image: ${image.src}`); 
                      e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Safari+Image'; 
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`absolute inset-0 bg-amber-100 flex items-center justify-center transition-opacity duration-500 ${imagesLoaded[index] ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="w-12 h-12 border-4 border-amber-700 border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-xl font-medium">{image.alt}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`relative cursor-pointer rounded-md overflow-hidden h-20 transition-all ${currentSlide === index ? 'ring-2 ring-amber-700' : 'opacity-70 hover:opacity-100'}`}
            onClick={() => {
              if(swiperRef.current) {
                swiperRef.current.slideToLoop(index, 800);
              }
            }}
          >
            <img 
              src={image.src} 
              alt={`Thumbnail ${index + 1}`}
              onError={(e) => { 
                console.error(`Failed to load thumbnail: ${image.src}`); 
                e.currentTarget.src = 'https://via.placeholder.com/150?text=Safari';
              }}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Custom styles for pagination bullets using a brown-ish orange color */}
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination .swiper-pagination-bullet {
          background: rgb(192,91,42) !important;
        }
        .swiper-pagination .swiper-pagination-bullet-active {
          background: rgb(192,91,42) !important;
        }
        .swiper-button-next, .swiper-button-prev {
          color: rgb(192,91,42) !important;
        }
      ` }} />
    </div>
  );
}

export default TripGallery; 