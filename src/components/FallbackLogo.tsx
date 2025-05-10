import React from 'react';

// Fallback logo component that renders a simple SVG logo when the actual logo image is not available
const FallbackLogo: React.FC<{ className?: string }> = ({ className = 'h-12 w-auto' }) => {
  return (
    <svg 
      className={className}
      width="200" 
      height="60" 
      viewBox="0 0 200 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200" height="60" rx="4" fill="#FFFFFF"/>
      <path d="M20 15H40V20H20V15Z" fill="#C7372F"/>
      <path d="M45 15H65V20H45V15Z" fill="#C7372F"/>
      <path d="M70 15H90V20H70V15Z" fill="#C7372F"/>
      <path d="M20 25H90V30H20V25Z" fill="#C7372F"/>
      <path d="M20 35H40V40H20V35Z" fill="#C7372F"/>
      <path d="M20 45H90V50H20V45Z" fill="#C7372F"/>
      <text x="100" y="35" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#333333">Abhijit</text>
      <text x="100" y="50" fontFamily="Arial" fontSize="14" fill="#666666">Power</text>
    </svg>
  );
};

export default FallbackLogo;
