import { useState } from 'react';
import { useAuth } from '../../../../context/AuthContext';
import CartPreviewPanel from '../../../main/components/Panels/CartPreviewPanel/CartPreviewPanel';
import UserPreviewPanel from '../../../main/components/Panels/UserPreviewPanel/UserPreviewPanel';
import IconBasket from '../../../main/utils/Icons/IconBasket/IconBasket';
import IconUser from '../../../main/utils/Icons/IconUser/IconUser';

interface IMenuDesktoProps {}

const MenuDesktop = (): JSX.Element => {
  // values from cart context in future
  const itemsInCart = false;
  const itemsCount = 0;

  const [isOpenUserDrawer, setIsOpenUserDrawer] = useState(false);
  const [isOpenCartDrawer, setIsOpenCartDrawer] = useState(false);

  const { user, logout } = useAuth();

  return (
    <div className='flex gap-4'>
      <div
        onClick={() => setIsOpenCartDrawer(true)}
        className='relative cursor-pointer'
      >
        <IconBasket />
        {itemsInCart && (
          <p className='absolute top-0 right-0 flex h-[10px] w-[10px] items-center justify-center rounded-full bg-[#FFA500] p-2 text-[8px]'>
            {itemsCount}
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
