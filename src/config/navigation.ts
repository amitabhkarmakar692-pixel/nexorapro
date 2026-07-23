export type NavItem = {
  label: string;
  href: string;
  icon?: string;
  roles?: string[];
  children?: NavItem[];
};

export const adminNavigation: NavItem[] = [
  { label: 'Dashboard', href: '/admin', roles: ['admin'] },
  { label: 'Users', href: '/admin/users', roles: ['admin'] },
  { label: 'Stores', href: '/admin/stores', roles: ['admin'] },
  { label: 'Categories', href: '/admin/categories', roles: ['admin'] },
  { label: 'Subscriptions', href: '/admin/subscriptions', roles: ['admin'] },
  { label: 'Revenue', href: '/admin/revenue', roles: ['admin'] },
  { label: 'Settings', href: '/admin/settings', roles: ['admin'] },
];

export const sellerNavigation: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', roles: ['seller'] },
  { label: 'Products', href: '/dashboard/products', roles: ['seller'] },
  { label: 'Orders', href: '/dashboard/orders', roles: ['seller'] },
  { label: 'Customers', href: '/dashboard/customers', roles: ['seller'] },
  { label: 'Settings', href: '/dashboard/settings', roles: ['seller'] },
];

export const buyerNavigation: NavItem[] = [
  { label: 'Dashboard', href: '/buyer', roles: ['buyer'] },
  { label: 'Orders', href: '/buyer/orders', roles: ['buyer'] },
  { label: 'Settings', href: '/buyer/settings', roles: ['buyer'] },
];

export const publicNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Explore', href: '/explore' },
  { label: 'Pricing', href: '/pricing' },
];
