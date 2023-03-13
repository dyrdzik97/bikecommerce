import MenuDesktop from '../MenuDesktop/MenuDesktop';
import MenuMobile from '../MenuMobile/MenuMobile';
import BrowserView from '../Views/BrowserView/BrowserView';
import MobileView from '../Views/MobileView/MobileView';

interface INavbarProps {
  onActivateDropdown: () => void;
  isDropdownActive: boolean;
}

const Navbar = ({
  onActivateDropdown,
  isDropdownActive,
}: INavbarProps): JSX.Element => {
  return (
    <nav className='navbar rounde fixed inset-x-0 top-0 z-50 border-b-2 bg-gray px-2 py-2 sm:px-4'>
      <div className='container mx-auto flex flex-wrap items-center justify-between'>
        <a href='#' className='flex items-center'>
          <img
            src='https://flowbite.com/docs/images/logo.svg'
            className='h-6 sm:h-9 mr-3'
            alt='Bikecommerce Logo'
          />
          <span className='self-center whitespace-nowrap text-xl font-semibold text-black'>
            Bikecommerce
          </span>
        </a>
        <div className='flex items-center md:order-2'>
          <MobileView>
            <MenuMobile
              isActive={isDropdownActive}
              onHideDropdown={onActivateDropdown}
            />
          </MobileView>
          <BrowserView>
            <MenuDesktop
              isActive={isDropdownActive}
              onHideDropdown={onActivateDropdown}
            />
          </BrowserView>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
