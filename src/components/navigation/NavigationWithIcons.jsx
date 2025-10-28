import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems, adminNavigationItems } from '../../utils/iconMapping';

const NavigationWithIcons = ({ 
  type = 'public', 
  orientation = 'horizontal',
  showLabels = true,
  iconLibrary = 'antd',
  className = '' 
}) => {
  const location = useLocation();
  const items = type === 'admin' ? adminNavigationItems : navigationItems;
  
  const orientationClasses = {
    horizontal: 'flex flex-row space-x-1',
    vertical: 'flex flex-col space-y-1'
  };
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navigation-with-icons ${className}`}>
      <ul className={orientationClasses[orientation]}>
        {items.map((item) => {
          const IconComponent = item[iconLibrary];
          const active = isActive(item.path);
          
          return (
            <li key={item.key}>
              <Link
                to={item.path}
                className={`
                  flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200
                  ${active 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  }
                  ${orientation === 'vertical' ? 'w-full' : ''}
                `}
                title={item.description}
              >
                {IconComponent && (
                  <IconComponent className="w-5 h-5 flex-shrink-0" />
                )}
                {showLabels && (
                  <span className={orientation === 'horizontal' ? 'hidden md:inline' : ''}>
                    {item.name}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationWithIcons;