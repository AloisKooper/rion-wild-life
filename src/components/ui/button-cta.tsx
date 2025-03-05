import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonCTAProps {
  to?: string;
  onClick?: () => void;
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

/**
 * ButtonCTA Component
 * 
 * A call-to-action button component that can be either a link or a button.
 * 
 * @param {Object} props - Component props
 * @param {string} [props.to] - Optional URL to navigate to (makes it a Link)
 * @param {Function} [props.onClick] - Optional click handler
 * @param {'primary' | 'secondary'} props.variant - Button style variant
 * @param {React.ReactNode} props.children - Button content
 * @param {string} [props.className] - Optional additional CSS classes
 */
const ButtonCTA: React.FC<ButtonCTAProps> = ({ 
  to, 
  onClick, 
  variant, 
  children, 
  className = '' 
}) => {
  const baseClasses = "px-6 md:px-8 py-3 md:py-4 text-base font-extrabold leading-none text-center transition-colors duration-300";
  
  const variantClasses = variant === 'primary'
    ? "text-white bg-[rgba(192,91,42,1)] rounded-[40px] shadow-[0px_8px_20px_rgba(192,91,42,0.8)] hover:bg-[rgba(172,81,32,1)]"
    : "bg-white text-[#3D3E48] border-2 border-[#3D3E48] rounded-[40px] hover:bg-[#3D3E48] hover:text-white";
  
  const buttonClasses = `${baseClasses} ${variantClasses} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button type="button" onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default ButtonCTA; 