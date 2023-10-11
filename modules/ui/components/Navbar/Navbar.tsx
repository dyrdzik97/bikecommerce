import Link from 'next/link';
import { CATEGORY_TREE } from '../../defaults/nav';
import MenuDesktop from '../MenuDesktop/MenuDesktop';
import MenuMobile from '../MenuMobile/MenuMobile';
import BrowserView from '../Views/BrowserView/BrowserView';
import MobileView from '../Views/MobileView/MobileView';
import NavbarActivatorDropdown from './NavbarActivatorDropdown';

interface INavbarProps {
  onActivateDropdown: () => void;
  isDropdownActive: boolean;
}

const Navbar = ({
  onActivateDropdown,
  isDropdownActive,
}: INavbarProps): JSX.Element => {
  return (
    <nav className='text-gray-100 body-font shadow-md fixed top-0 z-50 w-full bg-[#fefcfe]'>
      <div className='container mx-auto flex items-center justify-between py-2 px-5'>
        <Link href='/' passHref className='flex items-center'>
          <img
            src='/Pictogrammers-Material-Bike-fast.svg'
            className='sm:h-9 mr-3 h-[30px]'
            alt='Bikecommerce Logo'
          />
          <span className='self-center whitespace-nowrap text-xl font-semibold text-black'>
            Bikecommerce
          </span>
        </Link>
        <div className='flex items-center gap-8'>
          <nav className='hidden space-x-10 md:flex'>
            {CATEGORY_TREE.map((item, index) => {
              return (
                <NavbarActivatorDropdown
                  key={`${item.key}-${index}`}
                  index={index.toString()}
                  item={item}
                />
              );
            })}
          </nav>
        </div>
        <div className='flex items-center md:order-2'>
          <MobileView>
            <MenuMobile
              isActive={isDropdownActive}
              onHideDropdown={onActivateDropdown}
            />
          </MobileView>
          <BrowserView>
            <MenuDesktop />
          </BrowserView>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
