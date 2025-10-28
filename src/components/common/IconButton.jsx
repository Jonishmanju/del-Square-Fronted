import React from 'react';
import { getPageIcon } from '../../utils/iconMapping';

const IconButton = ({ 
  page,
  icon,
  iconLibrary = 'antd',
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  ...props 
}) => {
  // Get icon component
  const IconComponent = icon || getPageIcon(page, iconLibrary);
  
  // Size classes
  const sizeClasses = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    ghost: 'text-blue-600 hover:bg-blue-50',
    danger: 'bg-red-600 hover:bg-red-700 text-white'
  };
  
  const baseClasses = 'inline-flex items-center gap-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabledClasses}
    ${className}
  `.trim();

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {IconComponent && (
        <IconComponent className="w-5 h-5" />
      )}
      {children}
    </button>
  );
};

export default IconButton;