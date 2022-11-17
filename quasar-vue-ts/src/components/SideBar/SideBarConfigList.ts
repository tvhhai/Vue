export const SideBarConfigList = {
  dashboard: {
    id: 'dashboard',
    i18nKey: 'sidebar.dashboard',
    url: '/dashboard',
    icon: 'home',
  },
  home: {
    icon: 'home',
    id: 'home',
    i18nKey: 'sidebar.home',
    apps: [{
      i18nKey: 'sidebar.about',
      url: '/about',
      icon: '',
      child: [],
      expand: false,
      active: false,
    }, {
      i18nKey: 'Collapse',
      url: '',
      icon: '',
      child: [{
        'i18nKey': 'Collapse',
        'url': '/collapse'
      }],
      expand: false,
      active: false
    }],
  },
};
