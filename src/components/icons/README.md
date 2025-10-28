# Icon System Documentation

## Overview

This project uses a comprehensive icon system that provides consistent iconography across all pages and components. The system supports multiple icon libraries and provides utilities for easy icon management.

## Available Icon Libraries

### 1. Ant Design Icons (`@ant-design/icons`)
- Professional, consistent design
- Optimized for business applications
- Extensive collection of icons

### 2. Lucide React (`lucide-react`)
- Modern, clean design
- Lightweight and customizable
- Open source icon library

### 3. React Icons (`react-icons`)
- Comprehensive collection from multiple icon sets
- Includes Font Awesome, Material Design, and more

## Icon Mapping System

### Core Files

- `src/utils/iconMapping.js` - Central icon configuration
- `src/components/common/PageHeader.jsx` - Page headers with icons
- `src/components/common/IconButton.jsx` - Buttons with icons
- `src/components/navigation/NavigationWithIcons.jsx` - Navigation with icons

### Page Icons

Each page has associated icons for different libraries:

```javascript
// Example: Home page icons
home: {
  antd: HomeOutlined,
  lucide: Home,
  name: 'Home',
  description: 'Homepage with company overview'
}
```

## Usage Examples

### 1. Using Page Icons

```jsx
import { getPageIcon } from '../utils/iconMapping';

const IconComponent = getPageIcon('home', 'antd');
return <IconComponent className="w-6 h-6" />;
```

### 2. Page Header with Icon

```jsx
import PageHeader from '../components/common/PageHeader';

<PageHeader 
  page="about" 
  showDescription={true}
  iconLibrary="lucide"
/>
```

### 3. Icon Button

```jsx
import IconButton from '../components/common/IconButton';

<IconButton 
  page="contact"
  variant="primary"
  onClick={handleClick}
>
  Contact Us
</IconButton>
```

### 4. Navigation with Icons

```jsx
import NavigationWithIcons from '../components/navigation/NavigationWithIcons';

<NavigationWithIcons 
  type="public"
  orientation="horizontal"
  iconLibrary="antd"
/>
```

## Available Pages and Icons

### Public Pages
- **Home** (`home`) - Homepage and landing
- **About** (`about`) - Company information
- **Services** (`services`) - Service offerings
- **Projects** (`projects`) - Portfolio showcase
- **Contact** (`contact`) - Contact information

### Admin Pages
- **Dashboard** (`dashboard`) - Admin overview
- **Appointments** (`appointments`) - Appointment management
- **Patients** (`patients`) - Patient records
- **Analytics** (`analytics`) - Data insights
- **Settings** (`settings`) - System configuration
- **Login** (`login`) - Authentication

### Special Pages
- **404 Not Found** (`notFound`) - Error page

## Customization

### Adding New Icons

1. Update `src/utils/iconMapping.js`:

```javascript
export const pageIcons = {
  // ... existing icons
  newPage: {
    antd: YourAntdIcon,
    lucide: YourLucideIcon,
    name: 'New Page',
    description: 'Description of the new page'
  }
};
```

2. Import the required icon components at the top of the file.

### Changing Icon Libraries

You can switch between icon libraries by changing the `iconLibrary` prop:

```jsx
// Use Ant Design icons
<PageHeader page="home" iconLibrary="antd" />

// Use Lucide icons
<PageHeader page="home" iconLibrary="lucide" />
```

## Components Reference

### PageHeader Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `page` | string | - | Page identifier for icon lookup |
| `title` | string | - | Custom title (overrides default) |
| `subtitle` | string | - | Custom subtitle |
| `iconLibrary` | string | 'antd' | Icon library to use |
| `showIcon` | boolean | true | Whether to show the icon |
| `showDescription` | boolean | false | Whether to show page description |

### IconButton Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `page` | string | - | Page identifier for icon lookup |
| `icon` | Component | - | Custom icon component |
| `iconLibrary` | string | 'antd' | Icon library to use |
| `variant` | string | 'primary' | Button style variant |
| `size` | string | 'medium' | Button size |
| `disabled` | boolean | false | Whether button is disabled |

### NavigationWithIcons Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | string | 'public' | Navigation type ('public' or 'admin') |
| `orientation` | string | 'horizontal' | Layout orientation |
| `showLabels` | boolean | true | Whether to show text labels |
| `iconLibrary` | string | 'antd' | Icon library to use |

## Best Practices

1. **Consistency**: Use the same icon library throughout a section
2. **Accessibility**: Always provide meaningful alt text and titles
3. **Performance**: Import only the icons you need
4. **Responsive**: Consider icon visibility on different screen sizes
5. **Semantic**: Choose icons that clearly represent their function

## Troubleshooting

### Icons Not Displaying
- Check that the icon library is installed
- Verify the icon name in the mapping
- Ensure proper import statements

### Performance Issues
- Use dynamic imports for large icon sets
- Consider icon bundling optimization
- Implement lazy loading for non-critical icons

## Future Enhancements

- [ ] Icon animation system
- [ ] Custom SVG icon support
- [ ] Icon theme variants
- [ ] Automatic favicon generation
- [ ] Icon accessibility improvements