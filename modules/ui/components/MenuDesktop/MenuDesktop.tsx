import Link from 'next/link';
import { useAuth } from '../../../../context/AuthContext';
import IconBasket from '../../../main/utils/Icons/IconBasket/IconBasket';
import IconUser from '../../../main/utils/Icons/IconUser/IconUser';

interface IMenuDesktoProps {}

const MenuDesktop = ({}: IMenuDesktoProps): JSX.Element => {
  // values from cart context in future
  const itemsInCart = false;
  const itemsCount = 0;

  const { user, logout } = useAuth();

  return (
    <div className='flex gap-4'>
      <Link href='/cart' className='relative'>
        <IconBasket />
        {itemsInCart && (
          <p className='absolute top-0 right-0 flex h-[10px] w-[10px] items-center justify-center rounded-full bg-[#FFA500] p-2 text-[8px]'>
            {itemsCount}
          </p>
        )}
      </Link>
      <Link href='/user' className='relative'>
        <IconUser />
        {user && (
          <p className='absolute top-0 right-0 flex h-[10px] w-[10px] items-center justify-center rounded-full bg-[#00FF00] p-2 text-[8px]'>
            &#x2713;
          </p>
        )}
      </Link>
    </div>
  );
};

export default MenuDesktop;
