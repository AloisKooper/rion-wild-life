import React from "react";

const BlogSection: React.FC = () => {
  // Blog post data for easier management
  const blogPosts = [
    {
      id: 1,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/7f1da177c9286098bd786bbd7ecc6aabf6c49f973b12f6401d9028e93fe9954b?placeholderIfAbsent=true",
      category: "ADVENTURE TRAVEL",
      date: "04/10/2025",
      title: "Namibia Safari Season Starts Soon",
      description: "Join Rion Haraeb for thrilling Namibia safaris this spring. Explore Sossusvlei dunes and Etosha wildlife on guided tours, starting April 2025. Book now for an unforgettable adventure.",
      featured: true
    },
    {
      id: 2,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/3a8568440706a7cd0c7ea3e4d55bb28e5d4ca4d8d9d4b030318babfa8b051ed4?placeholderIfAbsent=true",
      category: "SAFARI TOUR",
      date: "04/24/2025",
      title: "Botswana Big Five Tour Launch",
      description: "Exciting Botswana wildlife tours with Rion Haraeb begin in May. Spot Chobe elephants and Okavango lions on our 19-day trip.",
      featured: false
    },
    {
      id: 3,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/77af816577ec86a837750034a5474f76042240401d1632258c9388198f46d800?placeholderIfAbsent=true",
      category: "COAST TRAVEL",
      date: "06/24/2025",
      title: "Walvisbay Cruise Excursions Open",
      description: "New Walvisbay photo tours start June 2025 with Rion. See Pink Lake, Dune 7, and lagoons on half-day or full-day trips.",
      featured: false
    },
    {
      id: 4,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/f7a17ca60d3136aefbf7472433deb4ce8bdf967cdac7132b35462695bfcb4202?placeholderIfAbsent=true",
      category: "ETOSHA/DUNES",
      date: "11/09/2024",
      title: "Namibia Safari Thrilled Last Fall",
      description: "Rion Haraeb's Namibia Highlights tour in October 2024 wowed guests. Sossusvlei dunes and Etosha wildlife amazed on guided safaris.",
      featured: false
    }
  ];

  // Arrow SVG component - horizontal arrow
  const ArrowIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="text-[rgba(192,91,42,1)] shrink-0"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );

  // Section header is shared between both layouts
  const SectionHeader = () => (
    <>
      <div className="z-10 flex gap-2.5 text-base text-[rgba(192,91,42,1)] font-bold leading-[29px] p-2.5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/6c0d89f877af1dcc6732f857c943f6e250e8b1d1986a6a99370e80a012207347?placeholderIfAbsent=true"
          alt="Icon"
          className="aspect-[1] object-contain w-[31px] fill-[#A86747] shrink-0"
        />
        <div>Up To Date</div>
      </div>
      <h2 className="text-[#3D3E48] text-[26px] font-normal mt-[-5px]">
        News & Blog
      </h2>
      <p className="text-[#2A2A2F] text-center text-sm font-light leading-6 tracking-[0.14px] mt-[33px] max-md:max-w-full">
        Travel has helped us to understand the meaning of life and it has helped
        us become better people. Each time we travel, we see the world with new
        eyes.
      </p>
    </>
  );

  // Desktop layout - matching Figma exactly
  const DesktopLayout = () => (
    <div className="w-full max-md:hidden">
      <div className="flex">
        {/* Left column - Main featured post */}
        <div className="w-1/2 pr-5">
          <img
            src={blogPosts[0].imageSrc}
            alt="Blog post"
            className="w-full object-cover rounded-[10px]"
          />

          <div className="mt-4">
            <div className="text-[#949494] text-xs uppercase">
              {blogPosts[0].category} {blogPosts[0].date}
            </div>
            <h3 className="text-[#17171B] text-xl mt-2">
              {blogPosts[0].title}
            </h3>
            <div className="flex items-center justify-between mt-3">
              <p className="text-[#2A2A2F] text-sm pr-3 flex-1">
                {blogPosts[0].description}
              </p>
              <ArrowIcon />
            </div>
            <button className="bg-[rgba(192,91,42,1)] shadow-[0px_8px_11px_rgba(192,91,42,0.88)] text-base text-white font-extrabold text-center leading-none mt-6 px-[34px] py-[15px] rounded-[39px]">
              VIEW ALL
            </button>
          </div>
        </div>

        {/* Right column - Three smaller posts with side-by-side layout */}
        <div className="w-1/2 pl-5">
          {/* First small post */}
          <div className="flex mb-4">
            <div className="w-[40%]">
              <img
                src={blogPosts[1].imageSrc}
                alt="Blog post"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="w-[60%] pl-4">
              <div className="text-[#949494] text-xs uppercase">
                {blogPosts[1].category} {blogPosts[1].date}
              </div>
              <h3 className="text-[#17171B] text-lg mt-2">
                {blogPosts[1].title}
              </h3>
              <div className="flex items-center justify-between mt-2">
                <p className="text-[#2A2A2F] text-sm pr-2 flex-1">
                  {blogPosts[1].description}
                </p>
                <ArrowIcon />
              </div>
            </div>
          </div>

          {/* Second small post */}
          <div className="flex mb-4">
            <div className="w-[40%]">
              <img
                src={blogPosts[2].imageSrc}
                alt="Blog post"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="w-[60%] pl-4">
              <div className="text-[#949494] text-xs uppercase">
                {blogPosts[2].category} {blogPosts[2].date}
              </div>
              <h3 className="text-[#17171B] text-lg mt-2">
                {blogPosts[2].title}
              </h3>
              <div className="flex items-center justify-between mt-2">
                <p className="text-[#2A2A2F] text-sm pr-2 flex-1">
                  {blogPosts[2].description}
                </p>
                <ArrowIcon />
              </div>
            </div>
          </div>

          {/* Third small post */}
          <div className="flex">
            <div className="w-[40%]">
              <img
                src={blogPosts[3].imageSrc}
                alt="Blog post"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="w-[60%] pl-4">
              <div className="text-[#949494] text-xs uppercase">
                {blogPosts[3].category} {blogPosts[3].date}
              </div>
              <h3 className="text-[#17171B] text-lg mt-2">
                {blogPosts[3].title}
              </h3>
              <div className="flex items-center justify-between mt-2">
                <p className="text-[#2A2A2F] text-sm pr-2 flex-1">
                  {blogPosts[3].description}
                </p>
                <ArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Mobile-specific layout - unchanged
  const MobileLayout = () => (
    <div className="hidden max-md:block">
      <div className="flex flex-col gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="w-full">
            {/* Image Container */}
            <div className="w-full mb-4">
              <img
                src={post.imageSrc}
                alt={post.title}
                className="w-full aspect-[1.6] object-cover rounded-[10px]"
              />
            </div>
            
            {/* Text Container */}
            <div className="w-full">
              <div className="text-[#949494] text-sm font-light leading-loose tracking-[0.14px]">
                {post.category} {post.date}
              </div>
              <h3 className="text-[#17171B] text-xl font-normal mt-2">
                {post.title}
              </h3>
              <div className="flex items-center mt-3">
                <p className="text-[#2A2A2F] text-sm font-light leading-6 tracking-[0.14px] flex-1 pr-2">
                  {post.description}
                </p>
                <ArrowIcon />
              </div>
            </div>
          </div>
        ))}
        
        {/* View All Button */}
        <button className="bg-[rgba(192,91,42,1)] shadow-[0px_8px_11px_rgba(192,91,42,0.88)] text-base text-white font-extrabold text-center leading-none mt-4 px-[34px] py-[15px] rounded-[39px] self-center">
          VIEW ALL
        </button>
      </div>
    </div>
  );

  return (
    <section className="bg-white self-stretch flex w-full flex-col overflow-hidden items-center mt-[45px] px-20 py-[25px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <SectionHeader />
      <div className="self-stretch w-full mt-[47px] max-md:mt-10">
        <DesktopLayout />
        <MobileLayout />
      </div>
    </section>
  );
};

export default BlogSection;
