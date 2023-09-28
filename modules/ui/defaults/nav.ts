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
    // links
    children: [
      {
        key: 'allProducts',
        href: {
          en: '',
          pl: '',
        },
        subText: 'allProductsSubText',
        imageUrl: null,
      },
      {
        key: 'road',
        href: {
          en: 'road',
          pl: 'road',
        },
        subText: 'roadSubtext',
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
        key: 'street',
        imageUrl: null,
        href: {
          en: 'street',
          pl: 'street',
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
  //   {
  //     key: 'accesories',
  //     imageUrl: null,
  //     href: {
  //       en: '/',
  //       pl: '/katalog?category=gravel',
  //     },
  //   },
  //   {
  //     key: 'blog',
  //     imageUrl: null,
  //     href: {
  //       en: '/',
  //       pl: '/',
  //     },
  //   },
];
