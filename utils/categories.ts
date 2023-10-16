import { useTranslation } from 'next-i18next';

interface ICategories {
  title: string;
  url: string;
  subtitle: string;
  imageSrc: string;
  buttonText: string;
}

export const categoryTiles = () => {
  const { t } = useTranslation('common');

  return [
    {
      title: 'Road',
      url: 'category/road',
      subtitle: t('roadTileInfo'),
      imageSrc:
        'https://images.immediate.co.uk/production/volatile/sites/21/2021/03/20210317_SB_5DSR_MG_4042-4cbecec.jpg?quality=90&resize=620%2C413',
      buttonText: t('roadTileButton'),
    },
    {
      title: 'Gravel',
      url: 'category/gravel',
      subtitle: t('gravelTileInfo'),
      imageSrc:
        'https://dqh479dn9vg99.cloudfront.net/wp-content/uploads/sites/9/2017/06/03190035/specialized_s-works_diverge_review_01.jpg',
      buttonText: t('gravelTileButton'),
    },
    {
      title: 'Cross',
      url: 'category/cross',
      subtitle: t('crossTileInfo'),
      imageSrc:
        'https://images.immediate.co.uk/production/volatile/sites/21/2021/12/2022-Giant-Trance-X-58bfe3a.jpg?quality=90&resize=620%2C413',
      buttonText: t('crossTileButton'),
    },
    {
      title: 'Street',
      url: 'category/city',
      subtitle: t('streetTileInfo'),
      imageSrc: 'https://pinupgirl.pl/img/products/26/25/1_max.jpg',
      buttonText: t('streetTileButton'),
    },
  ];
};
