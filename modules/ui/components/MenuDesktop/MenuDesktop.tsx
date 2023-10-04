import { useState } from 'react';
import { useAuth } from '../../../../context/AuthContext';
import { useCart } from '../../../../context/CartContext';
import CartPreviewPanel from '../../../main/components/Panels/CartPreviewPanel/CartPreviewPanel';
import UserPreviewPanel from '../../../main/components/Panels/UserPreviewPanel/UserPreviewPanel';
import IconBasket from '../../../main/utils/Icons/IconBasket/IconBasket';
import IconUser from '../../../main/utils/Icons/IconUser/IconUser';
import LangSwitcher from '../LangSwitcher/LangSwitcher';

interface IMenuDesktoProps {}

const MenuDesktop = (): JSX.Element => {
  const { items, itemsInCartCount } = useCart();
  const itemsInCart = items.length > 0;

  const [isOpenUserDrawer, setIsOpenUserDrawer] = useState(false);
  const [isOpenCartDrawer, setIsOpenCartDrawer] = useState(false);

  const { user } = useAuth();

  return (
    <div className='flex items-center gap-4'>
      <div
        onClick={() => setIsOpenCartDrawer(true)}
        className='relative cursor-pointer'
      >
        <IconBasket />
        {itemsInCart && (
          <p className='absolute top-0 right-0 flex h-[10px] w-[10px] items-center justify-center rounded-full bg-[#FFA500] p-2 text-[8px]'>
            {itemsInCartCount}
          </p>
        )}
      </div>
      <div
        onClick={() => setIsOpenUserDrawer(true)}
        className='relative cursor-pointer'
      >
        <IconUser />
        {user && (
          <p className='absolute top-0 right-0 flex h-[10px] w-[10px] items-center justify-center rounded-full bg-[#00FF00] p-2 text-[8px]'>
            &#x2713;
          </p>
        )}
      </div>
      <LangSwitcher />
      <CartPreviewPanel
        isOpen={isOpenCartDrawer}
        setIsOpen={setIsOpenCartDrawer}
      />
      <UserPreviewPanel
        isOpen={isOpenUserDrawer}
        setIsOpen={setIsOpenUserDrawer}
      />
    </div>
  );
};

export default MenuDesktop;
