import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCart } from '../../../../context/CartContext';
import IconBasket from '../../../main/utils/Icons/IconBasket/IconBasket';
import IconMobileHamburgerClosed from '../../../main/utils/Icons/IconMobileHamburgerClosed/IconMobileHamburgerClosed';
import IconMobileHamburgerOpened from '../../../main/utils/Icons/IconMobileHamburgerOpened/IconMobileHamburgerOpened';

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
  const { t: tNav } = useTranslation('nav');

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
            <IconMobileHamburgerClosed />
          ) : (
            <IconMobileHamburgerOpened />
          )}
        </button>
      </div>
      <div
        className={`${
          isActive ? '' : 'hidden'
        } t-0 absolute left-0 m-0 flex h-screen w-screen flex-col items-start gap-5 overflow-hidden bg-white p-5`}
        id='mobile-menu-2'
      >
        <Link onClick={() => onHideDropdown()} href={`/${t('category')}`}>
          {tNav('bikes')}
        </Link>
        <Link
          onClick={() => onHideDropdown()}
          href={`/${t('category')}/gravel`}
        >
          {tNav('gravel')}
        </Link>
        <Link onClick={() => onHideDropdown()} href={`/${t('category')}/road`}>
          {tNav('road')}
        </Link>
        <Link onClick={() => onHideDropdown()} href={`/${t('category')}/city`}>
          {tNav('city')}
        </Link>
        <Link onClick={() => onHideDropdown()} href={`/${t('category')}/cross`}>
          {tNav('cross')}
        </Link>
        <Link onClick={() => onHideDropdown()} href={`/${t('userProfile')}`}>
          {tNav('account')}
        </Link>
      </div>
    </div>
  );
};

export default MenuMobile;
