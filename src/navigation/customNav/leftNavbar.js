export default [
  {
    title: 'Dashboard',
    route: 'dashboard-ecommerce',
    icon: 'HomeIcon',
    action: 'view',
    resource: 'navbar',
  },
  {
    title: 'OnBoarding',
    route: 'onboardings',
    icon: 'BriefcaseIcon',
    action: 'view',
    resource: 'navbar',
  },
  {
    title: 'Categories',
    route: 'categories',
    icon: 'ToolIcon',
    action: 'view',
    resource: 'navbar',
  },
  {
    title: 'Sliders',
    route: 'sliders',
    icon: 'BarChartIcon',
    action: 'view',
    resource: 'navbar',
  },
  {
    title: 'Users',
    icon: 'FileTextIcon',
    action: 'view',
    resource: 'navbar',
    children: [{
      title: 'Residential',
      route: 'residentialUsers',
      action: 'view',
      resource: 'Settings',
    },
    {
      title: 'Commercial',
      route: 'residentialUsers1',
      action: 'view',
      resource: 'user',
    },
    ],
  },
]
