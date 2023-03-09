import { categories } from '../../../../utils/categories';
import Button from '../../../ui/components/Buttons/Button/Button';
import CategoryTile from '../../../ui/components/CategoryTile/CategoryTile';
import HeroSection from '../../../ui/components/HeroSection/HeroSection';
import Page from '../Page/Page';

const HomePage = (): JSX.Element => {
  return (
    <>
      <HeroSection />
      <Button
        type={'button'}
        // className={'bg-primary-500'}
        variant={'primary'}
        size={'small'}
        pill
        disabled={false}
      >
        {' '}
        sadskdmaslkdmlk
      </Button>
      <Button
        type={'button'}
        // className={'bg-primary-500'}
        variant={'secondary'}
        size={'normal'}
        pill
        disabled={false}
      >
        {' '}
        sadskdmaslkdmlk
      </Button>
      <Button
        type={'button'}
        // className={'bg-primary-500'}
        variant={'secondary'}
        size={'large'}
        pill
        disabled={false}
      >
        {' '}
        sadskdmaslkdmlk
      </Button>
      <Button
        type={'button'}
        className={'bg-primary-500'}
        variant={'primary'}
        size={'small'}
        pill
        disabled={false}
      >
        {' '}
        sadskdmaslkdmlk
      </Button>
      {/* <Button size='large' bgColor={'primary-200'} textColor={'dark'} /> */}
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
