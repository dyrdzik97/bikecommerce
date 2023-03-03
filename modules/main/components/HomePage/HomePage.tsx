import { categories } from '../../../../utils/categories';
import CategoryTile from '../../../ui/components/CategoryTile/CategoryTile';
import HeroSection from '../../../ui/components/HeroSection/HeroSection';
import Page from '../Page/Page';

const HomePage = (): JSX.Element => {
  return (
    <>
      <HeroSection />
      <Page
        title='Our Offer'
        subtitle='Collections of bikes'
        padding='md:p-20 p-10'
      >
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
    </>
  );
};

export default HomePage;
