import dynamic from 'next/dynamic';
import { useAuth } from '../../../../context/AuthContext';
import { categories } from '../../../../utils/categories';
import ProductsCarousel from '../../../products/components/ProductsCarousel/ProductsCarousel';
import CategoryTile from '../../../ui/components/CategoryTile/CategoryTile';
import Page from '../Page/Page';

const HeroSection = dynamic(
  () => import('../../../ui/components/HeroSection/HeroSection'),
  {
    ssr: false,
  }
);

const HomePage = (): JSX.Element => {
  const { user } = useAuth();
  console.warn('rrr', user);

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
