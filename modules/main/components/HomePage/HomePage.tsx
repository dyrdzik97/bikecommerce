import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { useAuth } from '../../../../context/AuthContext';
import { categories } from '../../../../utils/categories';

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
  const { user } = useAuth();

  const { t } = useTranslation('common');

  return (
    <>
      <HeroSection />
      <Page title='Our Offer' subtitle='Categories of bicycles'>
        <div className='grid gap-8 md:grid-cols-4'>
          {categories.map((category, index) => (
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
        title='Todays Bikes'
        subtitle='Check out what interesting we have here!'
      >
        <ProductsCarousel itemHeight='480px' />
      </Page>
    </>
  );
};

export default HomePage;
