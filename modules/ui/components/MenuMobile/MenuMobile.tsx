import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useCart } from '../../../../context/CartContext';
import IconBasket from '../../../main/utils/Icons/IconBasket/IconBasket';

interface IMenuMobileProps {
  isActive: boolean;
  onHideDropdown: () => void;
}

const MenuMobile = ({
  isActive = false,
  onHideDropdown,
}: IMenuMobileProps): JSX.Element => {
  const { items, itemsInCartCount } = useCart();
  const itemsInCart = items.length > 0;

  const router = useRouter();
  const { t } = useTranslation('routes');

  return (
    <div>
      <div className='flex'>
        <div
          className='text-gray-500 hover:bg-gray-100 text-gray-400 hover:bg-gray-700 relative z-10 ml-1 inline-flex items-center rounded-lg p-2 text-sm'
          onClick={(evt) => {
            evt.preventDefault();
            evt.stopPropagation();
            router.push(`/${t('checkout')}`);
          }}
        >
          <IconBasket width={25} height={25} />
          {itemsInCart && (
            <p className='absolute top-0 right-0 flex h-[10px] w-[10px] items-center justify-center rounded-full bg-[#FFA500] p-2 text-[8px]'>
              {itemsInCartCount}
            </p>
          )}
        </div>
        <button
          className='text-gray-500 hover:bg-gray-100 text-gray-400 hover:bg-gray-700 z-10 ml-1 inline-flex items-center rounded-lg p-2 text-sm'
          onClick={onHideDropdown}
        >
          {!isActive ? (
            <svg
              className='h-6 w-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          ) : (
            <svg
              className='h-6 w-6'
              fill='currentColor'
              stroke='currentColor'
              strokeWidth={1.5}
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`${
          isActive ? '' : 'hidden'
        } t-0 absolute left-0 m-0 h-screen w-screen items-center justify-between overflow-hidden bg-white p-0`}
        id='mobile-menu-2'
      >
        <ul className='bg-gray-50 bg-gray-800 mt-4 flex flex-col rounded-lg p-4'>
          <li>
            <a
              href='#'
              className='bg-blue-700 block rounded py-2 pl-3 pr-4 text-black text-black hover:underline '
              aria-current='page'
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#'
              className='text-gray-700 hover:bg-gray-100 text-gray-400 hover:bg-gray-700 block rounded py-2 pl-3 pr-4 hover:text-black hover:underline'
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#'
              className='text-gray-700 hover:bg-gray-100 text-gray-400 hover:bg-gray-700 block rounded py-2 pl-3 pr-4 hover:text-black hover:underline'
            >
              Services
            </a>
          </li>
          <li>
            <a
              href='#'
              className='text-gray-700 hover:bg-gray-100 text-gray-400 hover:bg-gray-700block rounded py-2 pl-3 pr-4 hover:text-black hover:underline'
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href='#'
              className='text-gray-700 hover:bg-gray-100  text-gray-400 hover:bg-gray-700 block rounded py-2 pl-3 pr-4 hover:text-black hover:underline'
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuMobile;
