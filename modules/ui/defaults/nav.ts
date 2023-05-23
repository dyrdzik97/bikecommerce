export const CATEGORY_TREE = [
  {
    key: 'bikes',
    imageUrl: null,
    href: {
      en: '/catalog',
      pl: '/katalog',
    },
  },
  {
    key: 'bikesExtend',
    imageUrl: null,
    href: {
      en: '/catalog',
      pl: '/katalog',
    },
    // links
    children: [
      {
        key: 'allProducts',
        href: {
          en: '/',
          pl: '/',
        },
        subText: 'allProductsSubText',
        imageUrl: null,
      },
      {
        key: 'road',
        href: {
          en: '/?category=road',
          pl: '/?category=road',
        },
        subText: 'roadSubtext',
        imageUrl: null,
      },
      {
        key: 'gravel',
        imageUrl: null,
        href: {
          en: '/catalog?category=gravel',
          pl: '/katalog?category=gravel',
        },
        subText: 'gravelSubText',
      },
      {
        key: 'street',
        imageUrl: null,
        href: {
          en: '/catalog?category=street',
          pl: '/katalog?category=street',
        },
        subText: 'streetSubText',
      },
      {
        key: 'cross',
        imageUrl: null,
        href: {
          en: '/catalog?category=cross',
          pl: '/katalog?category=cross',
        },
        subText: 'crossSubText',
      },
    ],
  },
  {
    key: 'accesories',
    imageUrl: null,
    href: {
      en: '/',
      pl: '/katalog?category=gravel',
    },
  },
  {
    key: 'blog',
    imageUrl: null,
    href: {
      en: '/',
      pl: '/',
    },
  },
];
