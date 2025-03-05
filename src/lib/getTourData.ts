import { TourData } from '../components/tours/TourDetail';
import { toursData } from '../data/toursData';

/**
 * Fetches all tours from the data source
 */
export async function getAllTours(): Promise<TourData[]> {
  // When CMS is implemented, we would fetch from the API here
  // Example:
  // try {
  //   const response = await fetch(`${process.env.API_URL}/api/tours`);
  //   if (response.ok) {
  //     const data = await response.json();
  //     return data.docs.map(formatTourData);
  //   }
  // } catch (error) {
  //   console.error('Error fetching tours from CMS:', error);
  // }
  
  // Fallback to static data
  return toursData;
}

/**
 * Fetches a specific tour by ID
 */
export async function getTourById(id: string): Promise<TourData | null> {
  // When CMS is implemented, we would fetch from the API here
  // Example:
  // try {
  //   const response = await fetch(`${process.env.API_URL}/api/tours/${id}`);
  //   if (response.ok) {
  //     const data = await response.json();
  //     return formatTourData(data);
  //   }
  // } catch (error) {
  //   console.error(`Error fetching tour ${id} from CMS:`, error);
  // }

  // Fallback to static data
  const tour = toursData.find(tour => tour.id === id);
  return tour || null;
}

/**
 * Helper function to format CMS data to match the TourData interface
 * This will be used when transitioning to the CMS
 */
function formatTourData(cmsData: any): TourData {
  return {
    id: cmsData.id,
    title: cmsData.title,
    subtitle: cmsData.subtitle,
    description: cmsData.description,
    highlights: cmsData.highlights,
    itinerary: cmsData.itinerary,
    duration: cmsData.duration,
    price: cmsData.price,
    image: cmsData.image?.url || cmsData.image,
    location: cmsData.location
  };
} 