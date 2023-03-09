import Dropdown from '../Dropdown/Dropdown';

interface INavbarProps {
  onActivateDropdown: () => void;
  isDropdownActive: boolean;
}

const Navbar = ({
  onActivateDropdown,
  isDropdownActive,
}: INavbarProps): JSX.Element => {
  return (
    <nav className='navbar dark:bg-gray-900 border-gray-200 rounde fixed inset-x-0 top-0 top-0 z-50 border-b-2 bg-gray px-2 py-2.5 opacity-80 sm:px-4'>
      <div className='container mx-auto flex flex-wrap items-center justify-between'>
        <a href='#' className='flex items-center'>
          <img
            src='https://flowbite.com/docs/images/logo.svg'
            className='mr-3 h-6 sm:h-9'
            alt='Bikecommerce Logo'
          />
          <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-black'>
            Bikecommerce
          </span>
        </a>
        <div className='relative flex items-center md:order-2'>
          <button
            type='button'
            className='bg-gray-800 focus:ring-gray-300 dark:focus:ring-gray-600 mr-3 flex rounded-full text-sm focus:ring-4 md:mr-0'
            id='user-menu-button'
            aria-expanded='false'
            data-dropdown-toggle='user-dropdown'
            data-dropdown-placement='bottom'
            onClick={onActivateDropdown}
          >
            <span className='sr-only'>Open user menu</span>
            <img
              className='h-8 w-8 rounded-full'
              src='/docs/images/people/profile-picture-3.jpg'
              alt='user photo'
            />
          </button>
          <Dropdown
            isActive={isDropdownActive}
            onHideDropdown={onActivateDropdown}
          />
          <button
            data-collapse-toggle='mobile-menu-2'
            type='button'
            className='text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-1 inline-flex items-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 md:hidden'
            aria-controls='mobile-menu-2'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
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
          </button>
        </div>
        <div
          className='hidden w-full items-center justify-between md:order-1 md:flex md:w-auto'
          id='mobile-menu-2'
        >
          <ul className='border-gray-100 bg-gray-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 mt-4 flex flex-col rounded-lg border p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium'>
            <li>
              <a
                href='#'
                className='bg-blue-700 md:bg-transparent md:text-blue-700 block rounded py-2 pl-3 pr-4 text-black hover:underline dark:text-black md:p-0'
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 block rounded py-2 pl-3 pr-4 hover:underline dark:hover:text-black md:p-0 md:dark:hover:text-black'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 block rounded py-2 pl-3 pr-4 hover:underline dark:hover:text-black md:p-0 md:dark:hover:text-black'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 block rounded py-2 pl-3 pr-4 hover:underline dark:hover:text-black md:p-0 md:dark:hover:text-black'
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 block rounded py-2 pl-3 pr-4 hover:underline dark:hover:text-black md:p-0 md:dark:hover:text-black'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
