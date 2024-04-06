/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'MHG-AI',
    Common: (process.env.NODE_ENV === 'development' ? '[MHG] ' : '') + 'AI',
  },
  Meta: {
    Description: 'Launch mhg-ai to unlock the full potential of AI, with precise control over your data and models. Voice interface, AI personas, advanced features, and fun UX.',
    SiteName: 'mhg-ai | Precision AI for You',
    ThemeColor: '#006eb6',
    TwitterSite: '',
  },
  URIs: {
    Home: 'http://marketing-home.com/',
    // App: 'https://get.big-agi.com',
    CardImage: '',
    OpenRepo: '',
    OpenProject: '',
    SupportInvite: '',
    // Twitter: '',
    PrivacyPolicy: '',
  },
} as const;