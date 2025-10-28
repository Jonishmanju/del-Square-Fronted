import React, { useState } from 'react';
import { pageIcons, getPageIcon } from '../../utils/iconMapping';
import PageHeader from '../common/PageHeader';
import IconButton from '../common/IconButton';

const IconShowcase = () => {
  const [selectedLibrary, setSelectedLibrary] = useState('antd');
  const [selectedPage, setSelectedPage] = useState('home');

  const libraries = [
    { key: 'antd', name: 'Ant Design Icons', color: 'blue' },
    { key: 'lucide', name: 'Lucide Icons', color: 'green' }
  ];

  return (
    <div className="icon-showcase p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <PageHeader 
          page="home"
          title="Icon System Showcase"
          subtitle="Complete icon mapping for all pages and components"
          showDescription={false}
          className="mb-8"
        />

        {/* Library Selector */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Select Icon Library:</h3>
          <div className="flex gap-4">
            {libraries.map((lib) => (
              <button
                key={lib.key}
                onClick={() => setSelectedLibrary(lib.key)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedLibrary === lib.key
                    ? `bg-${lib.color}-600 text-white`
                    : `bg-white text-${lib.color}-600 border border-${lib.color}-600 hover:bg-${lib.color}-50`
                }`}
              >
                {lib.name}
              </button>
            ))}
          </div>
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {Object.entries(pageIcons).map(([pageKey, iconData]) => {
            const IconComponent = getPageIcon(pageKey, selectedLibrary);
            
            return (
              <div
                key={pageKey}
                className={`bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer border-2 ${
                  selectedPage === pageKey ? 'border-blue-500' : 'border-transparent'
                }`}
                onClick={() => setSelectedPage(pageKey)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 text-blue-600 flex justify-center">
                    {IconComponent && <IconComponent className="w-12 h-12" />}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {iconData.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {iconData.description}
                  </p>
                  <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {pageKey}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Icon Details */}
        {selectedPage && (
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Selected: {pageIcons[selectedPage]?.name}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Icon Variants */}
              <div>
                <h4 className="font-medium mb-3">Available Variants:</h4>
                <div className="space-y-3">
                  {libraries.map((lib) => {
                    const IconComponent = getPageIcon(selectedPage, lib.key);
                    return (
                      <div key={lib.key} className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center">
                          {IconComponent && <IconComponent className="w-6 h-6" />}
                        </div>
                        <span className="text-sm">{lib.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Usage Examples */}
              <div>
                <h4 className="font-medium mb-3">Usage Examples:</h4>
                <div className="space-y-3">
                  <IconButton page={selectedPage} iconLibrary={selectedLibrary}>
                    Primary Button
                  </IconButton>
                  <IconButton 
                    page={selectedPage} 
                    iconLibrary={selectedLibrary}
                    variant="outline"
                  >
                    Outline Button
                  </IconButton>
                  <IconButton 
                    page={selectedPage} 
                    iconLibrary={selectedLibrary}
                    variant="ghost"
                    size="small"
                  >
                    Ghost Button
                  </IconButton>
                </div>
              </div>
            </div>

            {/* Code Example */}
            <div className="mt-6">
              <h4 className="font-medium mb-3">Code Example:</h4>
              <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono">
                <div className="text-gray-700">
                  {`import { getPageIcon } from './utils/iconMapping';`}
                </div>
                <div className="text-gray-700 mt-2">
                  {`const IconComponent = getPageIcon('${selectedPage}', '${selectedLibrary}');`}
                </div>
                <div className="text-gray-700 mt-2">
                  {`<IconComponent className="w-6 h-6" />`}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IconShowcase;