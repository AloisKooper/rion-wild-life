import React from "react";
import { useLanguage } from "../../hooks/useLanguage";

const AboutSection: React.FC = () => {
  const { translations } = useLanguage();
  const { about } = translations;

  return (
    <section className="w-full max-w-[1198px] mt-[99px] mb-16 max-md:mb-8 max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/5a325bb80359a2cb75f9da976bd985963e255dcf83b93a46e3e78031ed242f6c?placeholderIfAbsent=true"
            alt="Professor Rion Haraeb, Safari Guide"
            className="aspect-[1.3] object-contain w-full grow rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-[22px]"
          />
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col items-stretch max-md:max-w-full max-md:mt-5">
            <div className="z-10 flex gap-2.5 text-base text-[rgba(192,91,42,1)] font-bold leading-[29px] p-2.5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/84b71a0015ec61dbd5f6146d18b7020235ff3e05b76dce0afbc2e273452ad73a?placeholderIfAbsent=true"
                alt="Icon"
                className="aspect-[1] object-contain w-[31px] fill-[#A86747] shrink-0"
              />
              <div>Southern African Safaris</div>
            </div>
            <div className="w-[578px] z-10 gap-2.5 text-[28px] text-[#3d3e48] font-bold uppercase leading-[33px] p-2.5 max-md:max-w-full">
              <span
                style={{
                  fontFamily:
                    "Aboreto, -apple-system, Roboto, Helvetica, sans-serif",
                  fontWeight: 400,
                }}
              >
                {about.title}{" "}
              </span>
            </div>
            <div className="w-[575px] gap-2.5 text-base text-[#767676] font-normal leading-[29px] -mt-3 pl-2.5 py-2.5 max-md:max-w-full max-md:mr-2.5">
              {about.description}
            </div>
            <div className="z-10 w-full max-w-full mt-4">
              {/* Horizontally centered stats */}
              <div className="flex flex-row justify-center items-start flex-wrap gap-x-8 gap-y-6 max-md:px-2.5">
                {/* First stat - 20+ */}
                <div className="flex flex-col items-center text-center">
                  <div className="text-[28px] text-[#C05B2A] font-bold leading-[1.2] whitespace-nowrap text-center">
                    20+
                  </div>
                  <div className="text-[#3D3E48] text-base font-normal leading-[29px] text-center">
                    {about.stats.experience}
                  </div>
                </div>
                
                {/* Second stat - 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="text-[28px] text-[rgba(192,91,42,1)] font-bold leading-[1.2] whitespace-nowrap text-center">
                    2
                  </div>
                  <div className="text-[#3D3E48] text-base font-normal leading-[29px] text-center">
                    {about.stats.languages}
                  </div>
                </div>
                
                {/* Third stat - 5 */}
                <div className="flex flex-col items-center text-center">
                  <div className="text-[28px] text-[#C05B2A] font-bold leading-[1.2] whitespace-nowrap text-center">
                    5
                  </div>
                  <div className="text-[#3D3E48] text-base font-normal leading-[29px] text-center">
                    {about.stats.tours}
                  </div>
                </div>
                
                {/* Fourth stat - 3 */}
                <div className="flex flex-col items-center text-center">
                  <div className="text-[28px] text-[rgba(192,91,42,1)] font-bold leading-[1.2] whitespace-nowrap text-center">
                    3
                  </div>
                  <div className="text-[#3D3E48] text-base font-normal leading-[29px] text-center">
                    {about.stats.countries}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
