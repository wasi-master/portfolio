// gitprofile.config.js

const config = {
  github: {
    username: 'wasi-master', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 20, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'wasimaster',
    twitter: 'wasi_master',
    mastodon: 'wasimaster@mastodon.social',
    facebook: '',
    instagram: 'wasi_master',
    youtube: 'WasiMaster', // example: 'pewdiepie'
    dribbble: 'WasiMaster',
    behance: 'WasiMaster',
    medium: 'wasimaster',
    dev: 'wasimaster',
    stackoverflow: '13123877/wasi-master', // example: '1/jeff-atwood'
    skype: '',
    telegram: 'WasiMaster',
    website: 'https://wasi-master.github.io',
    phone: '',
    email: 'arianmollik323@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'HTML',
    'CSS',
    'JavaScript',
    'Node.js',
    'C',
    'C++',
    'C#',
    'Java',
    'Git',
    'Docker',
  ],
  experiences: [
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'September 2021',
    //   to: 'Present',
    //   companyLink: 'https://example.com',
    // },
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'July 2019',
    //   to: 'August 2021',
    //   companyLink: 'https://example.com',
    // },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Pabna Zilla School',
      degree: 'Secondary School Certificate',
      from: '2016',
      to: '2024',
    },
    // {
    //   institution: 'Institution Name',
    //   degree: 'Degree',
    //   from: '2012',
    //   to: '2014',
    // },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Fastero',
      description:
        'Python timeit CLI for the 21st century.',
      imageUrl: 'https://fastero.readthedocs.io/en/latest/_static/logo.png',
      link: 'https://fastero.readthedocs.io',
    },
    {
      title: 'Typesplainer',
      description:
        'A Python typehint explainer!',
      imageUrl: 'https://i.imgur.com/5IFkzIf.png',
      link: 'https://github.com/typesplainer/typesplainer',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'wasimaster', // to hide blog section, keep it empty
    limit: 4, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,
};

export default config;
