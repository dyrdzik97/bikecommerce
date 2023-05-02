import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { CURRENT_LOCALE } from '../../../../utils/localeDetection';

import IconChevron from '../../../main/utils/Icons/IconChevron/IconChevron';
import { getLanguageCodes } from '../../defaults/languages';

export interface INavBarDropdownActivatorProps {
  item: any;
  index: string;
}

const NavbarActivatorDropdown: FC<INavBarDropdownActivatorProps> = ({
  item,
  index,
}) => {
  const router = useRouter();
  const { t } = useTranslation('nav');
  const { t: tRoutes } = useTranslation('routes');
  const [flyer, setFlyer] = useState(false);
  const { interfaceCode } = getLanguageCodes(CURRENT_LOCALE);

  return (
    <div className='relative' key={`${index}-${item.key}`}>
      {item.children && item.children.length !== 0 ? (
        <button
          type='button'
          className='
                   text-gray-500 group inline-flex items-center rounded-md bg-white p-2 text-base font-medium hover:bg-hoverbg focus:outline-none
                  '
          onClick={() => setFlyer((prev) => !prev)}
        >
          <span>{t(item.key)}</span>
          <IconChevron
            orientation={`${flyer ? 'up' : 'down'}`}
            height={20}
            width={20}
            className='ml-2'
          />
        </button>
      ) : (
        // linki do poprawy
        <Link
          key={`${index}-${item.key}`}
          href={`${item.href[interfaceCode]}`}
          locale={router.locale}
          className={
            'text-gray-500 group inline-flex items-center rounded-md bg-white p-2 text-base font-medium hover:bg-hoverbg focus:outline-none'
          }
        >
          {t(item.key)}
        </Link>
      )}

      {item.children && item.children.length !== 0 && (
        <div
          onMouseLeave={() => setFlyer(false)}
          className={
            flyer
              ? ' absolute z-10 -ml-4 mt-3 block w-screen max-w-md translate-y-0 transform px-2 transition duration-200 ease-out sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2'
              : ' absolute z-10 -ml-4 mt-3 hidden w-screen max-w-md translate-y-1 transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2'
          }
        >
          <div className='overflow-hidden rounded-lg shadow-lg'>
            <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
              {item.children.map((child: any, itemIndex: number) => (
                // problem z linkami, nie odswieza sie po zmianie url, a jak juz to cala apka reload robi
                <Link
                  key={itemIndex}
                  href={`[catalog]${child.href[interfaceCode]}`}
                  as={`${tRoutes('catalog')}${child.href[interfaceCode]}`}
                  locale={router.locale}
                  className='-m-3 flex items-start rounded-lg p-3 hover:bg-hoverbg'
                >
                  <div className='ml-4'>
                    <p className='text-gray-900 text-base font-medium'>
                      {t(child.key)}
                    </p>
                    <p className='text-gray-500 mt-1 text-sm'>
                      {t(child.subText)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            {/* BOTTOM section of additional socials */}
            {/* <div className='space-y-6 bg-tertiary-100 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'>
              <div className='flow-root'>
                <a
                  href='#'
                  className='text-gray-900 -m-3 flex items-center rounded-md p-3 text-base font-medium hover:bg-darkgray'
                >
                  <svg
                    className='h-6 text-gray-400 w-6 flex-shrink-0'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span className='ml-3'>Watch Demo</span>
                </a>
              </div>
              <div className='flow-root'>
                <a
                  href='#'
                  className='text-gray-900 -m-3 flex items-center rounded-md p-3 text-base font-medium hover:bg-darkgray'
                >
                  <svg
                    className='h-6 text-gray-400 w-6 flex-shrink-0'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                  </svg>
                  <span className='ml-3'>Contact Sales</span>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarActivatorDropdown;
