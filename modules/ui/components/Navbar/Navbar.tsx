const Navbar = ({}): JSX.Element => {
  // manipulowac hiddenem przez swoje funkcje onclick
  return (
    <nav className='dark:bg-gray-900 border-gray-200 rounde fixed inset-x-0 top-0 top-0 z-50 border-b-2 bg-gray px-2 py-2.5 opacity-80 sm:px-4'>
      <div className='container mx-auto flex flex-wrap items-center justify-between'>
        <a href='#' className='flex items-center'>
          <img
            src='https://flowbite.com/docs/images/logo.svg'
            className='mr-3 h-6 sm:h-9'
            alt='Bikecommerce Logo'
          />
          <span className='dark:text-white self-center whitespace-nowrap text-xl font-semibold'>
            Bikecommerce
          </span>
        </a>
        <div className='flex items-center md:order-2'>
          <button
            type='button'
            className='bg-gray-800 focus:ring-gray-300 dark:focus:ring-gray-600 mr-3 flex rounded-full text-sm focus:ring-4 md:mr-0'
            id='user-menu-button'
            aria-expanded='false'
            data-dropdown-toggle='user-dropdown'
            data-dropdown-placement='bottom'
          >
            <span className='sr-only'>Open user menu</span>
            <img
              className='h-8 w-8 rounded-full'
              src='/docs/images/people/profile-picture-3.jpg'
              alt='user photo'
            />
          </button>
          {/* <!-- Dropdown menu --> */}
          <div
            className='bg-white divide-gray-100 dark:bg-gray-700 dark:divide-gray-600 z-50 my-4 hidden list-none divide-y rounded-lg text-base shadow'
            id='user-dropdown'
          >
            <div className='px-4 py-3'>
              <span className='text-gray-900 dark:text-white block text-sm'>
                Bonnie Green
              </span>
              <span className='text-gray-500 dark:text-gray-400 block truncate text-sm font-medium'>
                name@flowbite.com
              </span>
            </div>
            <ul className='py-2' aria-labelledby='user-menu-button'>
              <li>
                <a
                  href='#'
                  className='text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white block px-4 py-2 text-sm'
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white block px-4 py-2 text-sm'
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white block px-4 py-2 text-sm'
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white block px-4 py-2 text-sm'
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
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
                clip-rule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        <div
          className='hidden w-full items-center justify-between md:order-1 md:flex md:w-auto'
          id='mobile-menu-2'
        >
          <ul className='border-gray-100 bg-gray-50 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 mt-4 flex flex-col rounded-lg border p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:text-sm md:font-medium'>
            <li>
              <a
                href='#'
                className='text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white block rounded py-2 pl-3 pr-4 hover:underline md:p-0'
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 block rounded py-2 pl-3 pr-4 hover:underline md:p-0'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 block rounded py-2 pl-3 pr-4 hover:underline md:p-0'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 block rounded py-2 pl-3 pr-4 hover:underline md:p-0'
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 block rounded py-2 pl-3 pr-4 hover:underline md:p-0'
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
