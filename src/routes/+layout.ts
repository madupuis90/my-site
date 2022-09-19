import type { LayoutLoadEvent, LayoutParams } from './$types';

interface NavItem {
  path: string;
  name: string;
  icon?: string;
}
export function load(event: LayoutLoadEvent) {


  const navItems: NavItem[] = [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/about',
      name: 'About'
    },
    {
      path: '/stuff',
      name: 'Stuff'
    },
  ];
  console.log(`layout event: ${JSON.stringify(event)}`);

  return { navItems, routeId: `/${event.routeId}` };
}