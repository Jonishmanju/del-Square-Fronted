// Favicon and page icon utilities
import { pageIcons } from './iconMapping';

// Generate favicon based on page
export const generateFavicon = (page = 'home', size = 32) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = size;
  canvas.height = size;
  
  // Background
  ctx.fillStyle = '#3B82F6'; // Blue background
  ctx.fillRect(0, 0, size, size);
  
  // Icon placeholder (you can enhance this with actual icon rendering)
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${size * 0.6}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  const iconData = pageIcons[page];
  const text = iconData ? iconData.name.charAt(0) : 'D';
  
  ctx.fillText(text, size / 2, size / 2);
  
  return canvas.toDataURL();
};

// Update page favicon dynamically
export const updatePageFavicon = (page) => {
  const favicon = document.querySelector('link[rel="icon"]') || 
                  document.querySelector('link[rel="shortcut icon"]');
  
  if (favicon) {
    favicon.href = generateFavicon(page);
  } else {
    const newFavicon = document.createElement('link');
    newFavicon.rel = 'icon';
    newFavicon.href = generateFavicon(page);
    document.head.appendChild(newFavicon);
  }
};

// Update page title with icon
export const updatePageTitle = (page, customTitle = null) => {
  const iconData = pageIcons[page];
  if (!iconData) return;
  
  const title = customTitle || iconData.name;
  const emoji = getPageEmoji(page);
  
  document.title = `${emoji} ${title} | Del Square`;
};

// Get emoji representation for page
export const getPageEmoji = (page) => {
  const emojiMap = {
    home: '🏠',
    about: 'ℹ️',
    services: '🛠️',
    projects: '📁',
    contact: '📞',
    dashboard: '📊',
    appointments: '📅',
    patients: '👥',
    analytics: '📈',
    settings: '⚙️',
    login: '🔐',
    notFound: '❌'
  };
  
  return emojiMap[page] || '🏢';
};

// Hook to use in components
export const usePageIcon = (page) => {
  React.useEffect(() => {
    updatePageFavicon(page);
    updatePageTitle(page);
    
    // Cleanup on unmount
    return () => {
      updatePageFavicon('home');
      updatePageTitle('home');
    };
  }, [page]);
};

export default {
  generateFavicon,
  updatePageFavicon,
  updatePageTitle,
  getPageEmoji,
  usePageIcon
};