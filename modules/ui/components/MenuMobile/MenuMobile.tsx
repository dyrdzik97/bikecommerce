interface IMenuMobileProps {
  isActive: boolean;
  onHideDropdown: () => void;
}

const MenuMobile = ({
  isActive = false,
  onHideDropdown,
}: IMenuMobileProps): JSX.Element => {
  return (
    <div>
      <div>
        <button
          data-collapse-toggle='mobile-menu-2'
          type='button'
          className='text-gray-500 hover:bg-gray-100 text-gray-400 hover:bg-gray-700 z-10 ml-1 inline-flex items-center rounded-lg p-2 text-sm'
          aria-controls='mobile-menu-2'
          aria-expanded='false'
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
