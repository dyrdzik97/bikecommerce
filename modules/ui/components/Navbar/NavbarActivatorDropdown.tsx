import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { CURRENT_LOCALE } from '../../../../utils/localeDetection';

import classNames from 'classnames';
import IconChevron from '../../../main/utils/Icons/IconChevron/IconChevron';
import { getLanguageCodes } from '../../defaults/languages';

export interface INavBarDropdownActivatorProps {
  item: IChild;
  index: string | number;
}
export interface IChild {
  href: {
    [key: string]: string;
  };
  key: string;
  subText: string;
  imageUrl?: string;
  children: IChild[];
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

  if (!item.children || item.children.length === 0) {
    return (
      <Link
        key={`${index}-${item.key}`}
        href={`${item.href[interfaceCode]}`}
        locale={router.locale}
        className={
          'text-gray-500 group inline-flex items-center rounded-md bg-white p-2 text-base font-medium hover:bg-hoverbg focus:outline-none'
        }
        shallow
      >
        {t(item.key)}
      </Link>
    );
  }

  return (
    <div className='relative' key={`${index}-${item.key}`}>
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

      {item.children && item.children.length !== 0 && (
        <div
          onMouseLeave={() => setFlyer(false)}
          className={classNames(
            'absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2',
            flyer
              ? 'block translate-y-0 transition duration-200 ease-out '
              : 'hidden translate-y-1'
          )}
        >
          <div className='overflow-hidden rounded-lg shadow-lg'>
            <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
              {item.children.map((child: IChild, itemIndex: number) => (
                <Link
                  legacyBehavior
                  key={`${child.key}-${itemIndex}`}
                  href={`/${tRoutes('category')}/${child.href[interfaceCode]}`}
                  locale={router.locale}
                  className='flex items-start rounded-lg p-3 hover:bg-hoverbg'
                  passHref
                >
                  <a>
                    <div className='ml-4'>
                      <p className='text-gray-900 text-base font-medium'>
                        {t(child.key)}
                      </p>
                      <p className='text-gray-500 mt-1 text-sm'>
                        {t(child.subText)}
                      </p>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarActivatorDropdown;
