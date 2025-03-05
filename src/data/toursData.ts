import { TourData } from '../components/tours/TourDetail';

export const toursData: TourData[] = [
  {
    id: 'namibia-highlights',
    title: 'Namibia Highlights Safari',
    subtitle: 'Experience the best of Namibia from deserts to wildlife',
    description: 'Explore the diverse landscapes of Namibia on this comprehensive 14-day safari. From the towering dunes of Sossusvlei to the wildlife-rich plains of Etosha National Park, this tour showcases the best of Namibia. Visit UNESCO World Heritage sites, encounter desert elephants, and immerse yourself in the cultures of this magnificent country.',
    highlights: [
      {
        title: 'Sossusvlei Dunes',
        description: 'Experience the towering red dunes of Sossusvlei, a UNESCO World Heritage site with some of the highest sand dunes in the world.'
      },
      {
        title: 'Desert Elephants',
        description: 'Encounter the rare desert-adapted elephants around Spitzkoppe and observe their unique behaviors in this harsh environment.'
      },
      {
        title: 'Twyfelfontein Rock Art',
        description: 'Discover ancient San rock engravings at the UNESCO World Heritage site of Twyfelfontein, dating back thousands of years.'
      },
      {
        title: 'Etosha Wildlife',
        description: 'Enjoy game drives in Etosha National Park, home to lions, elephants, rhinos, and numerous other species around the famous salt pan.'
      },
      {
        title: 'Bushman Experience',
        description: 'Meet with the indigenous San people and learn about their traditional way of life in the Kalahari.'
      },
      {
        title: 'Coastal Adventures',
        description: 'Explore the coastal town of Swakopmund with optional activities like quad biking, sandboarding, or dolphin cruises.'
      }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Windhoek',
        description: 'Arrive in Windhoek and transfer to Okapuka Ranch. Meet your guide, Professor Rion Haraeb, for a welcome dinner and briefing about the exciting journey ahead.'
      },
      {
        day: 2,
        title: 'Kalahari Desert',
        description: 'Drive to the Kalahari Desert and check in at Kalahari Anib Lodge. Afternoon cheetah drive and visit with local Bushman community to learn about their traditional way of life.'
      },
      {
        day: 3,
        title: 'Journey to Sossusvlei',
        description: 'Travel to the spectacular Namib Desert. Stay at Namib Desert Lodge with views of ancient fossilized dunes.'
      },
      {
        day: 4,
        title: 'Sossusvlei Exploration',
        description: 'Full day exploring the iconic red dunes of Sossusvlei and Deadvlei. Climb Dune 45 for panoramic views and visit Sesriem Canyon.'
      },
      {
        day: 5,
        title: 'Swakopmund Coastal Town',
        description: 'Drive through the Namib Desert to the coastal town of Swakopmund. Check in at Delight Hotel and enjoy a free afternoon to explore this German colonial town.'
      },
      {
        day: 6,
        title: 'Swakopmund Activities',
        description: 'Optional activities in Swakopmund including dolphin cruises, quad biking, sandboarding, or museum visits. Dinner at a local seafood restaurant.'
      },
      {
        day: 7,
        title: 'Spitzkoppe Mountains',
        description: 'Travel to the dramatic Spitzkoppe mountains. Stay at White Lady Lodge and search for desert-adapted elephants in the afternoon.'
      },
      {
        day: 8,
        title: 'Twyfelfontein Rock Art',
        description: 'Visit the UNESCO World Heritage site of Twyfelfontein to see ancient rock engravings. Check in at Damara Mopani Lodge.'
      },
      {
        day: 9,
        title: 'Damaraland Exploration',
        description: 'Full day exploring the unique landscapes of Damaraland, including the Petrified Forest and Burnt Mountain. Optional visit to a Himba village.'
      },
      {
        day: 10,
        title: 'Etosha South',
        description: 'Travel to Etosha National Park and check in at a safari camp in the southern section. Afternoon game drive searching for diverse wildlife.'
      },
      {
        day: 11,
        title: 'Etosha Central',
        description: 'Full day game driving through central Etosha, visiting waterholes where animals gather, especially during the dry season.'
      },
      {
        day: 12,
        title: 'Etosha North',
        description: 'Explore the northern section of Etosha and stay at King Nehale Lodge. Night game drive to spot nocturnal animals.'
      },
      {
        day: 13,
        title: 'Return to Windhoek',
        description: 'Return to Windhoek and stay at Okapuka Ranch for a farewell dinner, sharing memories of the journey.'
      },
      {
        day: 14,
        title: 'Departure',
        description: 'Transfer to Windhoek airport for departure, or optional extension to other destinations.'
      }
    ],
    duration: 14,
    price: 3600,
    image: '/tour-images/namibia-highlights.jpeg',
    location: 'Namibia'
  },
  {
    id: 'big-five-safari',
    title: 'Big Five Safari (Nambovic)',
    subtitle: 'Experience the magnificent Big Five across Namibia and Botswana',
    description: 'This extraordinary 19-day safari takes you through the diverse ecosystems of Namibia and Botswana in search of Africa\'s iconic Big Five - lion, leopard, elephant, buffalo, and rhino. From the stunning landscapes of Sossusvlei to the wildlife-rich Chobe National Park, this comprehensive journey offers unparalleled wildlife viewing opportunities and unforgettable experiences.',
    highlights: [
      {
        title: 'Big Five Encounters',
        description: 'Maximize your chances of seeing all of Africa\'s Big Five: lion, leopard, elephant, buffalo, and rhino across multiple national parks.'
      },
      {
        title: 'Sossusvlei Dunes',
        description: 'Experience the towering red dunes of Sossusvlei and the hauntingly beautiful Deadvlei clay pan.'
      },
      {
        title: 'Chobe River Cruise',
        description: 'Enjoy a sunset cruise on the Chobe River, famous for its huge elephant herds and abundant wildlife along the riverbanks.'
      },
      {
        title: 'Etosha National Park',
        description: 'Spend quality time in Etosha, one of Africa\'s greatest wildlife viewing destinations centered around a vast salt pan.'
      },
      {
        title: 'Okavango Delta',
        description: 'Explore the waterways of the magnificent Okavango Delta, a UNESCO World Heritage site and unique inland delta system.'
      },
      {
        title: 'Cultural Experiences',
        description: 'Interact with local communities across two countries and gain insights into different cultures and traditions.'
      }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Windhoek',
        description: 'Arrive in Windhoek, Namibia. Meet your guide, Professor Rion Haraeb, and transfer to your accommodation for a welcome dinner and safari briefing.'
      },
      {
        day: 2,
        title: 'Kalahari Desert',
        description: 'Journey to the Kalahari Desert. Afternoon game drive with chances to see meerkats, oryx, and other desert-adapted species.'
      },
      {
        day: 3,
        title: 'Sossusvlei',
        description: 'Drive to the Namib Desert. Afternoon exploration of smaller dunes and spectacular desert vistas.'
      },
      {
        day: 4,
        title: 'Sossusvlei and Deadvlei',
        description: 'Full day exploring the iconic red dunes of Sossusvlei and the white clay pan of Deadvlei. Climb Dune 45 for incredible views.'
      },
      {
        day: 5,
        title: 'Swakopmund',
        description: 'Travel to the coastal town of Swakopmund. Afternoon at leisure to explore this German colonial town.'
      },
      {
        day: 6,
        title: 'Swakopmund Activities',
        description: 'Optional activities including dolphin cruises, quad biking, sand boarding, or desert tours.'
      },
      {
        day: 7,
        title: 'Damaraland',
        description: 'Drive to Damaraland. Visit the ancient rock engravings at Twyfelfontein and search for desert-adapted elephants.'
      },
      {
        day: 8,
        title: 'Etosha South',
        description: 'Travel to Etosha National Park. Afternoon game drive looking for elephants, giraffes, and potentially your first big cats.'
      },
      {
        day: 9,
        title: 'Etosha Central',
        description: 'Full day game driving in Etosha, visiting multiple waterholes where predators and prey gather.'
      },
      {
        day: 10,
        title: 'Etosha East',
        description: 'Continue exploring Etosha, focusing on the eastern section with different habitats and wildlife.'
      },
      {
        day: 11,
        title: 'Transfer to Caprivi',
        description: 'Long drive day to the Caprivi Strip, the narrow panhandle of Namibia that reaches toward Victoria Falls.'
      },
      {
        day: 12,
        title: 'Caprivi Region',
        description: 'Explore the lush Caprivi region, a stark contrast to the earlier desert landscapes. Boat cruise on the river.'
      },
      {
        day: 13,
        title: 'Chobe National Park',
        description: 'Cross into Botswana and reach Kasane. Afternoon boat cruise on the Chobe River to see large elephant herds and hippos.'
      },
      {
        day: 14,
        title: 'Chobe Game Drives',
        description: 'Full day of game drives in Chobe National Park, famous for its enormous elephant population and diverse predators.'
      },
      {
        day: 15,
        title: 'Transfer to Okavango',
        description: 'Travel to Maun, the gateway to the Okavango Delta. Evening preparation for delta excursion.'
      },
      {
        day: 16,
        title: 'Okavango Delta',
        description: 'Explore the magnificent Okavango Delta by mokoro (traditional canoe) and on foot with local guides.'
      },
      {
        day: 17,
        title: 'Okavango Activities',
        description: 'Continue activities in the delta, including nature walks and wildlife spotting in this unique ecosystem.'
      },
      {
        day: 18,
        title: 'Return to Maun',
        description: 'Return to Maun. Farewell dinner celebrating the incredible journey across two countries.'
      },
      {
        day: 19,
        title: 'Departure',
        description: 'Transfer to Maun airport for departure flights or connection to other destinations.'
      }
    ],
    duration: 19,
    price: 4800,
    image: '/tour-images/bigfive.jpeg',
    location: 'Namibia & Botswana'
  },
  {
    id: 'namwild',
    title: 'Namwild',
    subtitle: 'Experience Namibia\'s incredible wildlife in just 9 days',
    description: 'The Namwild safari is perfect for wildlife enthusiasts with limited time. This focused 9-day itinerary takes you to Namibia\'s premier wildlife destinations, including Etosha National Park. Encounter elephants, lions, rhinos, and many other species while enjoying comfortable accommodations and expert guiding by Professor Rion Haraeb.',
    highlights: [
      {
        title: 'Etosha Wildlife',
        description: 'Extensive game drives in both southern and northern Etosha National Park to maximize wildlife sightings.'
      },
      {
        title: 'Swakopmund Coast',
        description: 'Experience the charming coastal town of Swakopmund with its German colonial architecture and nearby wildlife.'
      },
      {
        title: 'Monte Etjo',
        description: 'Visit the private Monte Etjo reserve with close-up wildlife viewing opportunities and night drives.'
      },
      {
        title: 'Desert Landscapes',
        description: 'Drive through diverse Namibian landscapes, from mountains to deserts, with stunning photographic opportunities.'
      },
      {
        title: 'Expert Guiding',
        description: 'Benefit from Professor Rion Haraeb\'s extensive wildlife knowledge throughout the safari experience.'
      },
      {
        title: 'Comfortable Lodging',
        description: 'Stay in comfortable, well-located accommodations throughout the journey.'
      }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Windhoek',
        description: 'Arrive in Windhoek and meet your guide, Professor Rion Haraeb. Transfer to your accommodation for a welcome dinner and safari briefing.'
      },
      {
        day: 2,
        title: 'Transfer to Swakopmund',
        description: 'Drive through spectacular desert landscapes to reach the coastal town of Swakopmund. Afternoon at leisure to explore this charming German colonial town.'
      },
      {
        day: 3,
        title: 'Swakopmund Activities',
        description: 'Morning visit to nearby attractions including Walvis Bay lagoon to see flamingos. Afternoon optional activities or relaxation time.'
      },
      {
        day: 4,
        title: 'Journey to Etosha South',
        description: 'Travel to southern Etosha National Park. Afternoon game drive for first wildlife encounters around the famous Etosha salt pan.'
      },
      {
        day: 5,
        title: 'Etosha South Exploration',
        description: 'Full day of game drives in southern Etosha, visiting multiple waterholes where animals congregate, especially during dry season.'
      },
      {
        day: 6,
        title: 'Etosha Central to North',
        description: 'Game drive through central Etosha as we move to accommodations in northern Etosha. Different habitats offer varied wildlife viewing opportunities.'
      },
      {
        day: 7,
        title: 'Etosha North',
        description: 'Explore northern Etosha National Park with its unique landscapes and wildlife populations, including chances for rhino sightings.'
      },
      {
        day: 8,
        title: 'Monte Etjo',
        description: 'Travel to Monte Etjo Safari Lodge, a private reserve. Afternoon and evening game drives with opportunities for close wildlife encounters.'
      },
      {
        day: 9,
        title: 'Return to Windhoek & Departure',
        description: 'Morning activity at Monte Etjo before returning to Windhoek for departure flights.'
      }
    ],
    duration: 9,
    price: 1900,
    image: '/tour-images/namwild.jpeg',
    location: 'Namibia'
  },
  {
    id: 'namibia-botswana-victoria',
    title: 'Namibia, Botswana, Victoria Falls',
    subtitle: 'Three countries, one extraordinary safari experience',
    description: 'This comprehensive 18-day safari takes you through three of southern Africa\'s most spectacular destinations. From the unique landscapes of Namibia to the wildlife-rich Okavango Delta and Chobe in Botswana, and finally to the awe-inspiring Victoria Falls in Zimbabwe. Experience diverse ecosystems, incredible wildlife, and one of the world\'s natural wonders in a single unforgettable journey.',
    highlights: [
      {
        title: 'Three Country Experience',
        description: 'Travel through Namibia, Botswana, and Zimbabwe, experiencing the unique landscapes, wildlife, and cultures of each country.'
      },
      {
        title: 'Victoria Falls',
        description: 'Witness the spectacular Victoria Falls, one of the Seven Natural Wonders of the World, with optional adventure activities.'
      },
      {
        title: 'Okavango Delta',
        description: 'Explore the unique ecosystem of the Okavango Delta, a UNESCO World Heritage site, by traditional mokoro canoe.'
      },
      {
        title: 'Chobe River Cruise',
        description: 'Experience a sunset cruise on the Chobe River, home to the world\'s largest concentration of elephants.'
      },
      {
        title: 'Namibian Highlights',
        description: 'Visit key Namibian attractions including Etosha National Park and the scenic landscapes of Damaraland.'
      },
      {
        title: 'Cultural Interactions',
        description: 'Engage with local communities across three countries and gain insights into the diverse cultures of southern Africa.'
      }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Windhoek',
        description: 'Arrive in Windhoek, Namibia. Meet your guide, Professor Rion Haraeb, and transfer to your accommodation for a welcome dinner and safari briefing.'
      },
      {
        day: 2,
        title: 'Transfer to Etosha',
        description: 'Travel to Etosha National Park. Afternoon game drive to begin your wildlife viewing experience.'
      },
      {
        day: 3,
        title: 'Etosha National Park',
        description: 'Full day exploring Etosha, visiting numerous waterholes to observe elephants, lions, rhinos, and many other species.'
      },
      {
        day: 4,
        title: 'Continue in Etosha',
        description: 'Second full day in Etosha, focusing on different areas of this vast national park known for its exceptional wildlife viewing.'
      },
      {
        day: 5,
        title: 'Damaraland',
        description: 'Travel to the scenic Damaraland region. Visit Twyfelfontein rock engravings and search for desert-adapted elephants.'
      },
      {
        day: 6,
        title: 'Journey to Caprivi',
        description: 'Long drive day to reach the lush Caprivi Strip, the narrow panhandle of Namibia extending eastward.'
      },
      {
        day: 7,
        title: 'Caprivi Region',
        description: 'Explore the riverine environment of the Caprivi region, a stark contrast to the earlier desert landscapes.'
      },
      {
        day: 8,
        title: 'Transfer to Botswana',
        description: 'Cross into Botswana and reach Kasane, the gateway to Chobe National Park. Afternoon at leisure.'
      },
      {
        day: 9,
        title: 'Chobe River Cruise',
        description: 'Morning game drive in Chobe National Park. Afternoon boat cruise on the Chobe River to observe elephants, hippos, and crocodiles.'
      },
      {
        day: 10,
        title: 'Chobe Game Drives',
        description: 'Full day of game drives in Chobe, known for its enormous elephant herds and abundant predators.'
      },
      {
        day: 11,
        title: 'Victoria Falls Transfer',
        description: 'Travel to Victoria Falls, Zimbabwe. Afternoon guided tour of the magnificent falls, known locally as "The Smoke That Thunders."'
      },
      {
        day: 12,
        title: 'Victoria Falls Activities',
        description: 'Free day at Victoria Falls for optional activities such as helicopter flights, white water rafting, bungee jumping, or cultural visits.'
      },
      {
        day: 13,
        title: 'Return to Botswana',
        description: 'Return to Botswana and travel to Maun, the gateway to the Okavango Delta. Evening preparation for delta excursion.'
      },
      {
        day: 14,
        title: 'Okavango Delta',
        description: 'Transfer into the heart of the Okavango Delta. Explore by mokoro (traditional canoe) and on guided walks.'
      },
      {
        day: 15,
        title: 'Okavango Activities',
        description: 'Full day of activities in the delta, including wildlife viewing, bird watching, and learning about this unique ecosystem.'
      },
      {
        day: 16,
        title: 'Continue Delta Exploration',
        description: 'Second full day in the Okavango Delta, with more opportunities for unique wildlife encounters in this pristine wilderness.'
      },
      {
        day: 17,
        title: 'Return to Maun',
        description: 'Return to Maun from the delta. Farewell dinner celebrating your journey through three countries.'
      },
      {
        day: 18,
        title: 'Departure',
        description: 'Transfer to Maun airport for departure flights or connection to other destinations.'
      }
    ],
    duration: 18,
    price: 4500,
    image: '/tour-images/victoria-falls.jpeg',
    location: 'Namibia, Botswana & Zimbabwe'
  },
  {
    id: 'walvisbay-excursions',
    title: 'Walvisbay Excursions',
    subtitle: 'Photography-focused day tours around Walvis Bay',
    description: 'These specialized half-day or full-day excursions around Walvis Bay are perfect for photography enthusiasts and travelers with limited time. Visit the stunning Pink Lake, climb the massive Dune 7, discover ancient Welwitschia plants, and explore the otherworldly Moonlandscape, all guided by Professor Rion Haraeb\'s expert knowledge.',
    highlights: [
      {
        title: 'Pink Lake',
        description: 'Photograph the stunning Pink Lake (Sandwich Harbour) with its vivid pink waters caused by specific algae and salt-loving microorganisms.'
      },
      {
        title: 'Dune 7',
        description: 'Climb one of the highest sand dunes in the world for panoramic views of the surrounding desert landscape.'
      },
      {
        title: 'Welwitschia Plants',
        description: 'Discover the ancient Welwitschia plants, some estimated to be over 1,500 years old, that survive in the harsh Namib Desert.'
      },
      {
        title: 'Moonlandscape',
        description: 'Explore the surreal eroded valleys and hills of the Moonlandscape that resemble the surface of the moon.'
      },
      {
        title: 'Expert Photography Guidance',
        description: 'Receive tips on capturing the best images of these unique natural features from an experienced guide.'
      },
      {
        title: 'Flexible Timing',
        description: 'Choose between half-day and full-day options based on your schedule and interests.'
      }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Morning Departure',
        description: 'Early morning pickup from your Walvis Bay or Swakopmund accommodation. Brief overview of the day\'s itinerary and photography opportunities.'
      },
      {
        day: 1,
        title: 'Pink Lake Visit',
        description: 'First stop at the Pink Lake to capture the vivid colors during optimal morning light. Learn about the unique ecosystem that creates this natural phenomenon.'
      },
      {
        day: 1,
        title: 'Dune 7 Exploration',
        description: 'Visit the towering Dune 7, with optional climb to the summit for those feeling energetic. Plenty of time for photography and enjoying the desert landscape.'
      },
      {
        day: 1,
        title: 'Welwitschia Drive',
        description: 'Drive to the protected Welwitschia plains to see these remarkable ancient plants that can live for thousands of years in one of Earth\'s harshest environments.'
      },
      {
        day: 1,
        title: 'Moonlandscape Panorama',
        description: 'Explore the otherworldly Moonlandscape, a deeply eroded valley that creates surreal vistas. Perfect for unique landscape photography.'
      },
      {
        day: 1,
        title: 'Lunch Stop',
        description: 'For full-day tours, enjoy a picnic lunch in a scenic location. Half-day tours return to Walvis Bay or Swakopmund around this time.'
      },
      {
        day: 1,
        title: 'Afternoon Activities',
        description: 'Full-day tours continue with additional desert exploration or extended time at favorite locations based on group preferences.'
      },
      {
        day: 1,
        title: 'Return Transfer',
        description: 'Return to your accommodation in Walvis Bay or Swakopmund with memory cards full of incredible desert landscape photos.'
      }
    ],
    duration: 1,
    price: 80,
    image: '/tour-images/namwild.jpeg',
    location: 'Walvis Bay, Namibia'
  }
];

export default toursData; 