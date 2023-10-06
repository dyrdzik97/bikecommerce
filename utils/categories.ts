interface ICategories {
  title: string;
  url: string;
  subtitle: string;
  imageSrc: string;
  buttonText: string;
}

export const categories: ICategories[] = [
  {
    title: 'Road',
    url: '/category/road',
    subtitle: 'Road bikes from all types of racing',
    imageSrc: 'https://images6.alphacoders.com/549/549198.jpg',
    buttonText: 'Shop now!',
  },
  {
    title: 'Gravel',
    url: '/category/gravel',
    subtitle: 'Gravel bikes from all types of racing',
    imageSrc: 'https://images6.alphacoders.com/549/549198.jpg',
    buttonText: 'Shop now!',
  },
  {
    title: 'MTB',
    url: '/category/mtb',
    subtitle: 'Mountain bikes from all types of terrain',
    imageSrc: 'https://images6.alphacoders.com/549/549198.jpg',
    buttonText: 'Shop now!',
  },
  {
    title: 'Cross & Street',
    url: '/category/cross',
    subtitle: 'Universal bikes from all types of terrain',
    imageSrc: 'https://images6.alphacoders.com/549/549198.jpg',
    buttonText: 'Shop now!',
  },
];
