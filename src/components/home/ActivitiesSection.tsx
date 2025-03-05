import React from "react";
import ActivityCard from "./ActivityCard";

const ActivitiesSection: React.FC = () => {
  const activities = [
    {
      id: 1,
      imageSrc:
        "/activities/etosha-wildlife.jpeg",
      title: "Wildlife Viewing",
      price: "Included in safaris",
      days: 3,
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/75652d288f6ef7af85fb93e291fb87fd26435c9c4f69eef3701bc3dcbfceb459?placeholderIfAbsent=true",
      description: "Observe Africa's magnificent wildlife in their natural habitat at Etosha National Park, including elephants, lions, and rare black rhinos."
    },
    {
      id: 2,
      imageSrc:
        "/activities/desert-exploration.jpeg",
      title: "Desert Exploration",
      price: "Included in safaris",
      days: 2,
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/412dbcc288a3e1c63cbaeb8de1c598a6a47b2cc553b97a8d22e1a121d5ea1457?placeholderIfAbsent=true",
      description: "Experience the breathtaking beauty of Sossusvlei's red sand dunes and the ancient Namib Desert, the world's oldest desert."
    },
    {
      id: 3,
      imageSrc:
        "/activities/cultural-experiences.jpeg",
      title: "Cultural Experiences",
      price: "Included in safaris",
      days: 1,
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/173bab94a454344683d88880ab121fd318adaf4434d56cef2a97c8cf47fef3a8?placeholderIfAbsent=true",
      description: "Engage with local communities to learn about indigenous cultures, traditional practices, and the rich heritage of Southern Africa."
    },
    {
      id: 4,
      imageSrc:
        "/tour-images/victoria-falls.jpeg",
      title: "Victoria Falls",
      price: "€450 add-on",
      days: 2,
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/75652d288f6ef7af85fb93e291fb87fd26435c9c4f69eef3701bc3dcbfceb459?placeholderIfAbsent=true",
      description: "Marvel at the spectacular Victoria Falls, known locally as 'The Smoke That Thunders' - one of the Seven Natural Wonders of the World."
    },
    {
      id: 5,
      imageSrc:
        "/activities/photography.jpeg",
      title: "Safari Photography",
      price: "€80 per session",
      days: 1,
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/412dbcc288a3e1c63cbaeb8de1c598a6a47b2cc553b97a8d22e1a121d5ea1457?placeholderIfAbsent=true",
      description: "Capture the perfect shots of wildlife and landscapes with specialized photography excursions led by experienced guides."
    },
    {
      id: 6,
      imageSrc:
        "/activities/okavango-delta.jpeg",
      title: "Okavango Delta",
      price: "Included in selected tours",
      days: 3,
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/75652d288f6ef7af85fb93e291fb87fd26435c9c4f69eef3701bc3dcbfceb459?placeholderIfAbsent=true",
      description: "Explore the unique Okavango Delta ecosystem by traditional mokoro canoe, encountering hippos, crocodiles, and abundant birdlife."
    },
  ];

  return (
    <section className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8">
      <div className="flex w-[119px] max-w-full items-stretch gap-2.5 text-base text-[rgba(192,91,42,1)] font-bold whitespace-nowrap leading-[29px] mt-[90px] max-md:mt-16">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/6c0d89f877af1dcc6732f857c943f6e250e8b1d1986a6a99370e80a012207347?placeholderIfAbsent=true"
          alt="Icon"
          className="aspect-[1] object-contain w-[31px] fill-[#A86747] shrink-0"
        />
        <div>Activities</div>
      </div>
      <h2 className="text-[#3D3E48] text-[28px] max-md:text-[24px] font-normal leading-[1.2] mt-2 text-center">
        Explore Southern Africa's Wonders
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mt-3">
        Join Professor Rion Haraeb for these unforgettable safari experiences, all available as part of our comprehensive tour packages or as individual activities.
      </p>

      {/* Single responsive grid for all activities */}
      <div className="w-full max-w-[1180px] mt-[50px] max-md:mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="w-full px-2"
            >
              <ActivityCard
                imageSrc={activity.imageSrc}
                title={activity.title}
                price={activity.price}
                days={activity.days}
                iconSrc={activity.iconSrc}
                description={activity.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
