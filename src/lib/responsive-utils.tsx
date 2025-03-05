import React, { ReactNode } from 'react';

// Responsive container component that enforces consistent padding and width constraints
export const ResponsiveContainer: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`container-custom ${className}`}>
      {children}
    </div>
  );
};

// Card container with mobile-optimized size
export const ResponsiveCard: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`w-full max-md:max-w-card-mobile max-md:mx-auto ${className}`}>
      {children}
    </div>
  );
};

// Responsive grid that changes columns based on screen size
export const ResponsiveGrid: React.FC<{
  children: ReactNode;
  columns: {
    mobile: number;
    tablet?: number;
    desktop: number;
  };
  gap?: string;
  className?: string;
}> = ({ children, columns, gap = 'gap-6', className = '' }) => {
  const mobileClass = `grid-cols-${columns.mobile}`;
  const tabletClass = columns.tablet ? `md:grid-cols-${columns.tablet}` : '';
  const desktopClass = `lg:grid-cols-${columns.desktop}`;
  
  return (
    <div className={`grid ${gap} ${mobileClass} ${tabletClass} ${desktopClass} ${className}`}>
      {children}
    </div>
  );
};

// Two-column layout that stacks on mobile
export const ResponsiveTwoColumn: React.FC<{
  left: ReactNode;
  right: ReactNode;
  className?: string;
  reverse?: boolean;
}> = ({ left, right, className = '', reverse = false }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-8 ${className}`}>
      <div className="w-full md:w-1/2">{left}</div>
      <div className="w-full md:w-1/2">{right}</div>
    </div>
  );
};

// Section title component with consistent styling
export const SectionTitle: React.FC<{
  title: string;
  subtitle?: string;
  icon?: string;
  className?: string;
}> = ({ title, subtitle, icon, className = '' }) => {
  return (
    <div className={`mb-8 ${className}`}>
      {subtitle && (
        <div className="flex items-center gap-2.5 text-base text-[rgba(192,91,42,1)] font-bold leading-normal mb-1">
          {icon && <img src={icon} alt="" className="w-[31px] aspect-square" />}
          <span>{subtitle}</span>
        </div>
      )}
      <h2 className="text-[#3D3E48] text-[28px] max-md:text-[24px] font-normal leading-tight">
        {title}
      </h2>
    </div>
  );
};

// Responsive Image that maintains aspect ratio
export const ResponsiveImage: React.FC<{
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
}> = ({ src, alt, aspectRatio = 'aspect-video', className = '' }) => {
  return (
    <div className={`overflow-hidden w-full ${aspectRatio} ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

// Helper hook for responsive values
export const getResponsiveValue = (
  mobileValue: string | number,
  tabletValue?: string | number,
  desktopValue?: string | number
) => {
  return {
    mobile: mobileValue,
    tablet: tabletValue || mobileValue,
    desktop: desktopValue || tabletValue || mobileValue,
  };
};

// Common spacing values for consistent layout
export const spacing = {
  section: {
    marginTop: 'mt-16 md:mt-24',
    marginBottom: 'mb-16 md:mb-24',
    padding: 'py-12 md:py-20',
  },
  container: {
    padding: 'px-4 sm:px-6 md:px-8',
  },
}; 