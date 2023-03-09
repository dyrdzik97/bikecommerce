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
        variant={'primary'}
        size={'small'}
        pill
        disabled={false}
      >
        {' '}
        primary small
      </Button>
      <Button
        type={'button'}
        variant={'primary'}
        size={'normal'}
        pill
        disabled={false}
      >
        {' '}
        primary normal
      </Button>
      <Button
        type={'button'}
        variant={'secondary'}
        size={'normal'}
        pill
        disabled={false}
      >
        {' '}
        secndary normal
      </Button>
      <Button
        type={'button'}
        variant={'secondary'}
        size={'large'}
        pill
        disabled={false}
      >
        {' '}
        secondary large
      </Button>
      <Button
        type={'button'}
        variant={'tertiary'}
        size={'small'}
        pill
        disabled={false}
      >
        {' '}
        tertiary small
      </Button>
      <Button
        type={'button'}
        variant={'tertiary'}
        size={'large'}
        pill
        disabled={false}
      >
        {' '}
        tertiary large
      </Button>
      <Button
        type={'button'}
        variant={'transparent'}
        size={'normal'}
        pill
        disabled={false}
      >
        {' '}
        transparent normal
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
