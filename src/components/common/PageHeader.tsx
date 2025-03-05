import React from "react";

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, imageSrc }) => {
  return (
    <div className="relative bg-amber-800 bg-cover bg-center">
      {imageSrc && (
        <div className="absolute inset-0">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      )}
      <div className="relative py-20 md:py-32 text-center z-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80">
              {subtitle}
            </p>
          )}
          <div className="mt-6 w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader; 