import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const HeroSection = (): JSX.Element => {
  const { t } = useTranslation('routes');
  const { t: tCommon } = useTranslation('common');
  return (
    <section className='bg-gray-900 h-screen w-full bg-white bg-[url("https://wallpaperaccess.com/full/1223017.jpg")] bg-cover bg-top md:p-24'>
      <div className='max-w-screen-xl xl:gap-0 mx-auto grid px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16'>
        <div className='place-self-center rounded-lg bg-gray bg-opacity-60 p-16 lg:col-span-7'>
          <h1 className='xl:text-6xl mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl'>
            {tCommon('heroTitle')}
          </h1>
          <p className='text-gray-500 text-gray-400 mb-6 max-w-2xl font-light md:text-lg lg:mb-8 lg:text-xl'>
            {tCommon('heroSubTitle')}
          </p>
          <Link
            href={`/${t('category')}`}
            className='mr-3 inline-flex items-center justify-center rounded-lg bg-tertiary-300 px-5 py-3 text-center text-base font-medium text-white outline-0 hover:bg-tertiary-100'
          >
            {tCommon('heroButtonTitle')}
            <svg
              className='h-5 ml-2 -mr-1 w-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
