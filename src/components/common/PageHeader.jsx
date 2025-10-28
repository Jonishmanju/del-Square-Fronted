import React from 'react';
import { getPageIcon, getPageMetadata } from '../../utils/iconMapping';

const PageHeader = ({ 
  page, 
  title, 
  subtitle, 
  iconLibrary = 'antd',
  className = '',
  showIcon = true,
  showDescription = false 
}) => {
  const IconComponent = getPageIcon(page, iconLibrary);
  const metadata = getPageMetadata(page);
  
  const displayTitle = title || metadata?.name || 'Page';
  const displaySubtitle = subtitle || (showDescription ? metadata?.description : '');

  return (
    <div className={`page-header flex items-center gap-4 mb-6 ${className}`}>
      {showIcon && IconComponent && (
        <div className="page-icon text-3xl text-blue-600">
          <IconComponent className="w-8 h-8" />
        </div>
      )}
      
      <div className="page-title-section">
        <h1 className="text-3xl font-bold text-gray-800 mb-1">
          {displayTitle}
        </h1>
        {displaySubtitle && (
          <p className="text-gray-600 text-lg">
            {displaySubtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;