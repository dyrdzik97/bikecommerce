import { useState } from 'react';
import IconChevron from '../../../main/utils/Icons/IconChevron/IconChevron';
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
  const [open, setOpen] = useState(false);
  const [flyer, setFlyer] = useState(false);
  const [flyerTwo, setFlyerTwo] = useState(false);
  return (
    <nav className='bg-gray-50 text-gray-500 body-font fixed top-0 z-50 w-full bg-[#fff] shadow-md'>
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
          <nav className='hidden space-x-10 md:flex'>
            <div className='relative'>
              <button
                type='button'
                className='
                   text-gray-500 group inline-flex items-center rounded-md bg-white p-2 text-base font-medium hover:bg-hoverbg focus:outline-none
                  '
                onClick={() => (setFlyer(!flyer), setFlyerTwo(false))}
              >
                <span>Rowery</span>
                <IconChevron
                  orientation={`${flyer ? 'up' : 'down'}`}
                  height={20}
                  width={20}
                  className='ml-2'
                />
                {/* <svg
                  className={
                    flyer === true
                      ? 'h-5 text-gray-400 group-hover:text-gray-500 ml-2 w-5 rotate-180 transform transition duration-200 ease-out'
                      : 'h-5 text-gray-400 group-hover:text-gray-500 ml-2 w-5 rotate-0 transform transition duration-200 ease-out'
                  }
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg> */}
              </button>
              <div
                onMouseLeave={() => setFlyer(false)}
                className={
                  flyer
                    ? ' absolute z-10 -ml-4 mt-3 block w-screen max-w-md translate-y-0 transform px-2 transition duration-200 ease-out sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2'
                    : ' absolute z-10 -ml-4 mt-3 hidden w-screen max-w-md translate-y-1 transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2'
                }
              >
                <div className='ring-opacity-5 overflow-hidden rounded-lg shadow-lg ring-1 ring-black'>
                  <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                    <a
                      href='#'
                      className='-m-3 flex items-start rounded-lg p-3 hover:bg-hoverbg'
                    >
                      {/* Heroicon name: outline/chart-bar */}
                      <svg
                        className='h-6 text-indigo-600 w-6 flex-shrink-0'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                        />
                      </svg>
                      <div className='ml-4'>
                        <p className='text-gray-900 text-base font-medium'>
                          Analytics
                        </p>
                        <p className='text-gray-500 mt-1 text-sm'>
                          Get a better understanding of where your traffic is
                          coming from.
                        </p>
                      </div>
                    </a>
                    <a
                      href='#'
                      className='-m-3 flex items-start rounded-lg p-3 hover:bg-hoverbg'
                    >
                      {/* Heroicon name: outline/cursor-click */}
                      <svg
                        className='h-6 text-indigo-600 w-6 flex-shrink-0'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
                        />
                      </svg>
                      <div className='ml-4'>
                        <p className='text-gray-900 text-base font-medium'>
                          Engagement
                        </p>
                        <p className='text-gray-500 mt-1 text-sm'>
                          Speak directly to your customers in a more meaningful
                          way.
                        </p>
                      </div>
                    </a>
                    <a
                      href='#'
                      className='-m-3 flex items-start rounded-lg p-3 hover:bg-hoverbg'
                    >
                      {/* Heroicon name: outline/shield-check */}
                      <svg
                        className='h-6 text-indigo-600 w-6 flex-shrink-0'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                        />
                      </svg>
                      <div className='ml-4'>
                        <p className='text-gray-900 text-base font-medium'>
                          Security
                        </p>
                        <p className='text-gray-500 mt-1 text-sm'>
                          Your customers' data will be safe and secure.
                        </p>
                      </div>
                    </a>
                    <a
                      href='#'
                      className='-m-3 flex items-start rounded-lg p-3 hover:bg-hoverbg'
                    >
                      {/* Heroicon name: outline/view-grid */}
                      <svg
                        className='h-6 text-indigo-600 w-6 flex-shrink-0'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
                        />
                      </svg>
                      <div className='ml-4'>
                        <p className='text-gray-900 text-base font-medium'>
                          Integrations
                        </p>
                        <p className='text-gray-500 mt-1 text-sm'>
                          Connect with third-party tools that you're already
                          using.
                        </p>
                      </div>
                    </a>
                    <a
                      href='#'
                      className='-m-3 flex items-start rounded-lg p-3 hover:bg-hoverbg'
                    >
                      {/* Heroicon name: outline/refresh */}
                      <svg
                        className='h-6 text-indigo-600 w-6 flex-shrink-0'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                        />
                      </svg>
                      <div className='ml-4'>
                        <p className='text-gray-900 text-base font-medium'>
                          Automations
                        </p>
                        <p className='text-gray-500 mt-1 text-sm'>
                          Build strategic funnels that will drive your customers
                          to convert
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='space-y-6 bg-tertiary-100 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'>
                    <div className='flow-root'>
                      <a
                        href='#'
                        className='text-gray-900 -m-3 flex items-center rounded-md p-3 text-base font-medium hover:bg-darkgray'
                      >
                        {/* Heroicon name: outline/play */}
                        <svg
                          className='h-6 text-gray-400 w-6 flex-shrink-0'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
                          />
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <span className='ml-3'>Watch Demo</span>
                      </a>
                    </div>
                    <div className='flow-root'>
                      <a
                        href='#'
                        className='text-gray-900 -m-3 flex items-center rounded-md p-3 text-base font-medium hover:bg-darkgray'
                      >
                        {/* Heroicon name: outline/phone */}
                        <svg
                          className='h-6 text-gray-400 w-6 flex-shrink-0'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                          />
                        </svg>
                        <span className='ml-3'>Contact Sales</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href='#'
              className='m-0 rounded-md p-2 text-base font-medium  hover:bg-hoverbg'
            >
              Pricing
            </a>
            <a
              href='#'
              className='text-gray-500 rounded-md p-2 text-base  font-medium hover:bg-hoverbg'
            >
              Docs
            </a>
            <div className='relative'>
              <button
                type='button'
                className='text-gray-500 group inline-flex items-center rounded-md bg-white p-2 text-base font-medium hover:bg-hoverbg focus:outline-none'
                onClick={() => (setFlyerTwo(!flyerTwo), setFlyer(false))}
              >
                <span>More</span>
                <IconChevron
                  orientation={`${flyerTwo ? 'up' : 'down'}`}
                  height={20}
                  width={20}
                  className='ml-2'
                />
              </button>
              <div
                onMouseLeave={() => setFlyerTwo(false)}
                className={
                  flyerTwo
                    ? ' absolute z-10 -ml-4 mt-3 block w-screen max-w-md translate-y-0 transform px-2 transition duration-200 ease-out sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2'
                    : ' absolute z-10 -ml-4 mt-3 hidden w-screen max-w-md translate-y-1 transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2'
                }
              >
                <div className='ring-opacity-5 overflow-hidden rounded-lg shadow-lg ring-1 ring-black'>
                  <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                    <a
                      href='#'
                      className='-m-3 flex items-start rounded-lg p-3 hover:bg-hoverbg'
                    >
                      <svg
                        className='h-6 text-indigo-600 w-6 flex-shrink-0'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
                        />
                      </svg>
                      <div className='ml-4'>
                        <p className='text-gray-900 text-base font-medium'>
                          Help Center
                        </p>
                        <p className='text-gray-500 mt-1 text-sm'>
                          Get all of your questions answered in our forums or
                          contact support.
                        </p>
                      </div>
                    </a>
                    <a
                      href='#'
                      className='-m-3 flex items-start rounded-lg p-3 hover:bg-hoverbg'
                    >
                      <svg
                        className='h-6 text-indigo-600 w-6 flex-shrink-0'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                        />
                      </svg>
                      <div className='ml-4'>
                        <p className='text-gray-900 text-base font-medium'>
                          Guides
                        </p>
                        <p className='text-gray-500 mt-1 text-sm'>
                          Learn how to maximize our platform to get the most out
                          of it.
                        </p>
                      </div>
                    </a>
                    <a
                      href='#'
                      className='-m-3 flex items-start rounded-lg p-3 hover:bg-hoverbg'
                    >
                      <svg
                        className='h-6 text-indigo-600 w-6 flex-shrink-0'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                        />
                      </svg>
                      <div className='ml-4'>
                        <p className='text-gray-900 text-base font-medium'>
                          Events
                        </p>
                        <p className='text-gray-500 mt-1 text-sm'>
                          See what meet-ups and other events we might be
                          planning near you.
                        </p>
                      </div>
                    </a>
                    <a
                      href='#'
                      className='-m-3 flex items-start rounded-lg p-3 hover:bg-hoverbg'
                    >
                      <svg
                        className='h-6 text-indigo-600 w-6 flex-shrink-0'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                        />
                      </svg>
                      <div className='ml-4'>
                        <p className='text-gray-900 text-base font-medium'>
                          Security
                        </p>
                        <p className='text-gray-500 mt-1 text-sm'>
                          Understand how we take your privacy seriously.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='bg-tertiary-100 px-5 py-5 sm:px-8 sm:py-8'>
                    <div>
                      <h3 className='text-sm font-medium uppercase tracking-wide text-white'>
                        Recent Posts
                      </h3>
                      <ul className='mt-4 space-y-4'>
                        <li className='truncate text-base'>
                          <a
                            href='#'
                            className='text-gray-900 hover:text-gray-700 font-medium'
                          >
                            Boost your conversion rate
                          </a>
                        </li>
                        <li className='truncate text-base'>
                          <a
                            href='#'
                            className='hover:text-gray-700 font-medium text-white'
                          >
                            How to use search engine optimization to drive
                            traffic to your site
                          </a>
                        </li>
                        <li className='truncate text-base'>
                          <a
                            href='#'
                            className='text-gray-900 hover:text-gray-700 font-medium'
                          >
                            Improve your customer experience
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='mt-5 text-sm'>
                      <a
                        href='#'
                        className='text-indigo-600 hover:text-indigo-500 font-medium'
                      >
                        {' '}
                        View all posts <span aria-hidden='true'>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
