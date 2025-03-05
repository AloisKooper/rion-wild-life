import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TourDetail, { TourData } from '../../components/tours/TourDetail';
import { getTourById } from '../../lib/getTourData';
import { Helmet } from 'react-helmet-async';
import NotFound from '../NotFound';

// List of tours with dedicated pages
const DEDICATED_TOUR_PAGES = [
  'big-five-safari',
  'namibia-highlights'
];

const TourPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const [tourData, setTourData] = useState<TourData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadTourData = async () => {
      try {
        if (!id) {
          setError(true);
          setLoading(false);
          return;
        }
        
        // If this is one of our dedicated tour pages, we shouldn't be here
        // as those routes have their own components in App.tsx
        if (DEDICATED_TOUR_PAGES.includes(id)) {
          navigate(`/tours/${id}`, { replace: true });
          return;
        }

        const tour = await getTourById(id);
        
        if (tour) {
          setTourData(tour);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error loading tour data:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadTourData();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  if (error || !tourData) {
    return <NotFound />;
  }

  return (
    <>
      <Helmet>
        <title>{tourData.title} | Rion Wildlife Safaris</title>
        <meta name="description" content={tourData.description.substring(0, 160)} />
      </Helmet>
      <TourDetail tourData={tourData} />
    </>
  );
};

export default TourPage; 