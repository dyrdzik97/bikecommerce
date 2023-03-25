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
    <nav className='bg-gray-50 text-gray-500 body-font fixed top-0 z-50 mb-4 w-full bg-[#fff] shadow-md'>
      <div className='container mx-auto flex items-center justify-between py-7 px-5'>
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
        <div className='flex items-center gap-8'>
          {/* add here navbaritem with link */}
          <p>Products</p>
          <p>Categories</p>
          <p>Brands</p>
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
