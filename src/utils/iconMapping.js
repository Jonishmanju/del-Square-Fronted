// Icon mapping for all pages and components
import {
  HomeOutlined,
  InfoCircleOutlined,
  CustomerServiceOutlined,
  ProjectOutlined,
  PhoneOutlined,
  DashboardOutlined,
  CalendarOutlined,
  UserOutlined,
  SettingOutlined,
  BarChartOutlined,
  LoginOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';

import {
  Home,
  Info,
  Phone,
  Settings,
  Calendar,
  Users,
  BarChart3,
  LogIn,
  AlertCircle,
  Briefcase,
  ServiceIcon,
  Layout
} from 'lucide-react';

// Page icon mappings
export const pageIcons = {
  // Public Pages
  home: {
    antd: HomeOutlined,
    lucide: Home,
    name: 'Home',
    description: 'Homepage with company overview'
  },
  about: {
    antd: InfoCircleOutlined,
    lucide: Info,
    name: 'About Us',
    description: 'Company information and team'
  },
  services: {
    antd: CustomerServiceOutlined,
    lucide: ServiceIcon,
    name: 'Services',
    description: 'Our service offerings'
  },
  projects: {
    antd: ProjectOutlined,
    lucide: Briefcase,
    name: 'Projects',
    description: 'Portfolio and case studies'
  },
  contact: {
    antd: PhoneOutlined,
    lucide: Phone,
    name: 'Contact',
    description: 'Get in touch with us'
  },
  
  // Private/Admin Pages
  dashboard: {
    antd: DashboardOutlined,
    lucide: Layout,
    name: 'Dashboard',
    description: 'Admin dashboard overview'
  },
  appointments: {
    antd: CalendarOutlined,
    lucide: Calendar,
    name: 'Appointments',
    description: 'Manage appointments'
  },
  patients: {
    antd: UserOutlined,
    lucide: Users,
    name: 'Patients',
    description: 'Patient management'
  },
  analytics: {
    antd: BarChartOutlined,
    lucide: BarChart3,
    name: 'Analytics',
    description: 'Data and insights'
  },
  settings: {
    antd: SettingOutlined,
    lucide: Settings,
    name: 'Settings',
    description: 'System configuration'
  },
  login: {
    antd: LoginOutlined,
    lucide: LogIn,
    name: 'Login',
    description: 'User authentication'
  },
  
  // Error Pages
  notFound: {
    antd: ExclamationCircleOutlined,
    lucide: AlertCircle,
    name: '404 Not Found',
    description: 'Page not found'
  }
};

// Get icon component by page and library
export const getPageIcon = (page, library = 'antd', props = {}) => {
  const iconConfig = pageIcons[page];
  if (!iconConfig) return null;
  
  const IconComponent = iconConfig[library];
  if (!IconComponent) return null;
  
  return IconComponent;
};

// Get all page metadata
export const getPageMetadata = (page) => {
  return pageIcons[page] || null;
};

// Navigation items with icons
export const navigationItems = [
  {
    key: 'home',
    path: '/',
    ...pageIcons.home
  },
  {
    key: 'about',
    path: '/about',
    ...pageIcons.about
  },
  {
    key: 'services',
    path: '/services',
    ...pageIcons.services
  },
  {
    key: 'projects',
    path: '/projects',
    ...pageIcons.projects
  },
  {
    key: 'contact',
    path: '/contact',
    ...pageIcons.contact
  }
];

// Admin navigation items
export const adminNavigationItems = [
  {
    key: 'dashboard',
    path: '/admin/dashboard',
    ...pageIcons.dashboard
  },
  {
    key: 'appointments',
    path: '/admin/appointments',
    ...pageIcons.appointments
  },
  {
    key: 'patients',
    path: '/admin/patients',
    ...pageIcons.patients
  },
  {
    key: 'analytics',
    path: '/admin/analytics',
    ...pageIcons.analytics
  },
  {
    key: 'settings',
    path: '/admin/settings',
    ...pageIcons.settings
  }
];

export default pageIcons;