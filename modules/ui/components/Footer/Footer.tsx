import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useBreakpoint } from '../../../main/hooks/useBreakpoint';

const telephoneNumber: string = '+48 123 456 899';
const mail: string = 'bikecommerce@gmail.com';

const Footer = (): JSX.Element => {
  const { t } = useTranslation('footer');
  const { t: tRoutes } = useTranslation('routes');
  const { t: tNav } = useTranslation('nav');
  const { isMobile } = useBreakpoint();

  return (
    <footer
      className='mt-10 bg-[#edeef4] bg-gray bg-gray md:mt-20 md:px-36'
      id='footer'
    >
      <div className='grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4'>
        <div>
          <h2 className='text-gray-500 text-gray-400 mb-6 text-sm font-semibold uppercase'>
            {t('ourShop')}
          </h2>
          <ul className='text-gray-500 text-gray-400'>
            <li className='mb-4'>
              <Link href='#' className=' hover:underline'></Link>
            </li>
            <li className='mb-4'>
              <Link
                href={`/${tRoutes('category')}`}
                className='hover:underline'
              >
                {t('allProducts')}
              </Link>
            </li>
            <li className='mb-4'>
              <Link
                href={`/${tRoutes('userProfile')}`}
                className='hover:underline'
              >
                {t('myProfile')}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className='text-gray-500 text-gray-400 mb-6 text-sm font-semibold uppercase'>
            {tNav('bikes')}
          </h2>
          <ul className='text-gray-500 text-gray-400'>
            <li className='mb-4'>
              <Link
                href={`/${tRoutes('category')}/${t('road')}`}
                className='hover:underline'
              >
                {tNav('road')}
              </Link>
            </li>
            <li className='mb-4'>
              <Link
                href={`/${tRoutes('category')}/${t('gravel')}`}
                className='hover:underline'
              >
                {tNav('gravel')}
              </Link>
            </li>
            <li className='mb-4'>
              <Link
                href={`/${tRoutes('category')}/${t('cross')}`}
                className='hover:underline'
              >
                {tNav('cross')}
              </Link>
            </li>
            <li className='mb-4'>
              <Link
                href={`/${tRoutes('category')}/${t('city')}`}
                className='hover:underline'
              >
                {tNav('city')}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='text-gray-500 text-gray-400 mb-6 text-sm font-semibold uppercase'>
            {t('contact')}
          </h2>
          <ul className='text-gray-500 text-gray-400'>
            <li className='mb-4'>
              <p>Bikecommerce co.</p>
            </li>
            <li className='mb-4'>
              <Link href='mailto:bikecommerce@gmail.com' className='underline'>
                {mail}
              </Link>
            </li>
            <li className='mb-4'>
              <Link href='tel:+48123456899' className='underline'>
                {telephoneNumber}
              </Link>
            </li>
            <li className='mb-4'>
              <Link
                // add correct location in future
                href='http://maps.google.com/?q=1200 Pennsylvania Ave SE, Washington, District of Columbia, 20003'
                target='_blank'
                className='hover:underline'
              >
                Localed in Poland 🇵🇱
              </Link>
            </li>
          </ul>
        </div>
        {!isMobile && (
          <div className='relative block'>
            <Image
              alt='footer-img'
              src='https://wallpaperaccess.com/full/4447020.jpg'
              fill
              sizes='100%'
              className='rounded-2xl'
            />
          </div>
        )}
      </div>
      <div className='bg-gray-100 bg-gray-700 px-4 py-6 md:flex md:items-center md:justify-between'>
        <span className='text-gray-500 text-gray-300 text-sm sm:text-center'>
          © 2023{' '}
          <Link href='https://github.com/dyrdzik97/bikecommerce'>
            Bikecommerce
          </Link>
          . All Rights Reserved.
        </span>
        <div className='mt-4 flex space-x-6 sm:justify-center md:mt-0'>
          <Link
            href='https://github.com/dyrdzik97/bikecommerce'
            className='text-gray-400 hover:text-gray-900 hover:text-black'
          >
            <svg
              className='h-5 w-5'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                clipRule='evenodd'
              />
            </svg>
            <span className='sr-only'>GitHub account</span>
          </Link>
          <Link
            href='https://www.linkedin.com/in/adam-dyrda-6780b0185/'
            className='text-gray-400 hover:text-gray-900 hover:text-black'
          >
            <svg
              className='h-5 w-5'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
                clipRule='evenodd'
              />
            </svg>
            <span className='sr-only'>Dribbble account</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
