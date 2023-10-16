export const CATEGORY_TREE = [
  {
    key: 'bikes',
    imageUrl: null,
    href: {
      en: '/category',
      pl: '/kategoria',
    },
  },
  {
    key: 'category',
    imageUrl: null,
    href: {
      en: 'category',
      pl: 'kategoria',
    },
    children: [
      {
        key: 'road',
        href: {
          en: 'road',
          pl: 'road',
        },
        subText: 'roadSubText',
        imageUrl: null,
      },
      {
        key: 'gravel',
        imageUrl: null,
        href: {
          en: 'gravel',
          pl: 'gravel',
        },
        subText: 'gravelSubText',
      },
      {
        key: 'city',
        imageUrl: null,
        href: {
          en: 'city',
          pl: 'city',
        },
        subText: 'streetSubText',
      },
      {
        key: 'cross',
        imageUrl: null,
        href: {
          en: 'cross',
          pl: 'cross',
        },
        subText: 'crossSubText',
      },
    ],
  },
  {
    key: 'account',
    imageUrl: null,
    href: {
      en: '/account',
      pl: '/konto',
    },
  },
];
