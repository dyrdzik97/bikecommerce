import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { categoryTiles } from '../../../../utils/categories';
import { useBreakpoint } from '../../hooks/useBreakpoint';

const HeroSection = dynamic(
  () => import('../../../ui/components/HeroSection/HeroSection'),
  {
    ssr: false,
  }
);

const Page = dynamic(() => import('../LayoutPage/LayoutPage'), {
  ssr: false,
});

const CategoryTile = dynamic(
  () => import('../../../ui/components/CategoryTile/CategoryTile'),
  {
    ssr: false,
  }
);
const ProductsCarousel = dynamic(
  () =>
    import('../../../products/components/ProductsCarousel/ProductsCarousel'),
  {
    ssr: false,
  }
);

const HomePage = (): JSX.Element => {
  const { t } = useTranslation('common');
  const { isMobile } = useBreakpoint();

  return (
    <>
      <HeroSection />
      <Page
        title={`${t('ourOfferTitle')}`}
        subtitle={`${t('ourOfferSubTitle')}`}
      >
        <div className='grid gap-8 md:grid-cols-4'>
          {categoryTiles().map((category, index) => (
            <CategoryTile
              key={index}
              title={category.title}
              imageSrc={category.imageSrc}
              subtitle={category.subtitle}
              buttonText={category.buttonText}
              url={category.url}
            />
          ))}
        </div>
      </Page>
      <Page
        title={`${t('todaysBikesTitle')}`}
        subtitle={`${t('todaysBikesSubTitle')}`}
      >
        <div className='max-w-[1200px]'>
          <ProductsCarousel itemHeight={isMobile ? '355px' : '400px'} />
        </div>
      </Page>
    </>
  );
};

export default HomePage;
