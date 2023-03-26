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
    // <header className='container mx-auto flex items-center justify-between px-4 py-6'>
    //   <a href='/' className='text-xl font-bold text-white'>
    //     Pipe
    //   </a>
    //   <nav>
    //     <ul className='flex items-center justify-center font-semibold'>
    //       <li className='group relative'>
    //         <button
    //           className='cursor-pointer px-5 py-5 hover:opacity-50'
    //           onMouseOver={() => console.warn('on')}
    //           onMouseLeave={() => console.warn('leave')}
    //         >
    //           Products
    //         </button>
    //         <div className='invisible absolute top-0 -left-48 z-50 min-w-[560px] translate-y-0 transform opacity-0 transition duration-500 ease-in-out group-hover:visible group-hover:translate-y-5 group-hover:transform group-hover:opacity-100'>
    //           <div className='relative top-6 w-full rounded-xl bg-white p-6 shadow-xl'>
    //             <div className='h-10 absolute top-0 z-0 w-10 translate-x-0 rotate-45 transform rounded-sm bg-white transition-transform duration-500 ease-in-out group-hover:translate-x-[12rem]'></div>

    //             <div className='relative z-10'>
    //               <div className='grid grid-cols-2 gap-6'>
    //                 <div>
    //                   <p className='text-gray-500 text-[13px] font-medium uppercase tracking-wider'>
    //                     The Suite
    //                   </p>
    //                   <ul className='mt-3 text-[15px]'>
    //                     <li>
    //                       <a
    //                         href='#'
    //                         className='hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 text-gray-800 hover:text-indigo-600 -mx-2 block rounded-lg p-2 font-semibold transition duration-300 ease-in-out hover:bg-gradient-to-br'
    //                       >
    //                         Course Editor
    //                         <p className='text-gray-500 font-normal'>
    //                           All-in-one editor
    //                         </p>
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <a
    //                         href='#'
    //                         className='hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 text-gray-800 hover:text-indigo-600 -mx-2 block rounded-lg p-2 font-semibold transition duration-300 ease-in-out hover:bg-gradient-to-br'
    //                       >
    //                         Accept payments
    //                         <p className='text-gray-500 font-normal'>
    //                           Pre-build payments page
    //                         </p>
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <a
    //                         href='#'
    //                         className='hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 text-gray-800 hover:text-indigo-600 -mx-2 block rounded-lg p-2 font-semibold transition duration-300 ease-in-out hover:bg-gradient-to-br'
    //                       >
    //                         Closed Captioning
    //                         <p className='text-gray-500 font-normal'>
    //                           Use AI to generate captions
    //                         </p>
    //                       </a>
    //                     </li>
    //                   </ul>
    //                 </div>
    //                 <div>
    //                   <p className='text-gray-500 text-[13px] font-medium uppercase tracking-wider'>
    //                     Extensions
    //                   </p>
    //                   <ul className='mt-3 text-[15px]'>
    //                     <li>
    //                       <a
    //                         href='#'
    //                         className='hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 text-gray-800 hover:text-indigo-600 -mx-2 block rounded-lg p-2 font-semibold transition duration-300 ease-in-out hover:bg-gradient-to-br'
    //                       >
    //                         Plugins
    //                         <p className='text-gray-500 font-normal'>
    //                           Tweak existing functionality
    //                         </p>
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <a
    //                         href='#'
    //                         className='hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 text-gray-800 hover:text-indigo-600 -mx-2 block rounded-lg p-2 font-semibold transition duration-300 ease-in-out hover:bg-gradient-to-br'
    //                       >
    //                         Batch uploads
    //                         <p className='text-gray-500 font-normal'>
    //                           Get your time back
    //                         </p>
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <a
    //                         href='#'
    //                         className='hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 text-gray-800 hover:text-indigo-600 -mx-2 block rounded-lg p-2 font-semibold transition duration-300 ease-in-out hover:bg-gradient-to-br'
    //                       >
    //                         Social sharing
    //                         <p className='text-gray-500 font-normal'>
    //                           Generate content for socials
    //                         </p>
    //                       </a>
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </li>
    //       <li className='group relative px-3 py-2'>
    //         <button className='cursor-pointer hover:opacity-50'>
    //           Solutions
    //         </button>
    //         <div className='invisible absolute top-0 -left-2 z-50 min-w-[260px] translate-y-0 transform opacity-0 transition duration-500 ease-in-out group-hover:visible group-hover:translate-y-5 group-hover:transform group-hover:opacity-100'>
    //           <div className='relative top-6 w-full rounded-xl bg-white p-6 shadow-xl'>
    //             <div className='h-10 absolute top-0 z-0 w-10 -translate-x-4 rotate-45 transform rounded-sm bg-white transition-transform duration-500 ease-in-out group-hover:translate-x-3'></div>
    //             <div className='relative z-10'>
    //               <p className='text-gray-500 text-[13px] font-medium uppercase tracking-wider'>
    //                 Use cases
    //               </p>
    //               <ul className='mt-3 text-[15px]'>
    //                 <li>
    //                   <a
    //                     href='#'
    //                     className='bg-transparent text-transparent from-indigo-400 to-pink-700 via-blue-500 hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 block bg-gradient-to-br bg-clip-text py-1 font-semibold'
    //                   >
    //                     Creators
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a
    //                     href='#'
    //                     className='bg-transparent text-transparent from-indigo-400 to-pink-700 via-blue-500 hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 block bg-gradient-to-br bg-clip-text py-1 font-semibold'
    //                   >
    //                     Streamers
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a
    //                     href='#'
    //                     className='bg-transparent text-transparent from-indigo-400 to-pink-700 via-blue-500 hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 block bg-gradient-to-br bg-clip-text py-1 font-semibold'
    //                   >
    //                     Influence
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a
    //                     href='#'
    //                     className='bg-transparent text-transparent from-indigo-400 to-pink-700 via-blue-500 hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 block bg-gradient-to-br bg-clip-text py-1 font-semibold'
    //                   >
    //                     Programming
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a
    //                     href='#'
    //                     className='bg-transparent text-transparent from-indigo-400 to-pink-700 via-blue-500 hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 block bg-gradient-to-br bg-clip-text py-1 font-semibold'
    //                   >
    //                     Design
    //                   </a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </li>
    //       <li className='group relative px-3 py-2'>
    //         <button className='cursor-pointer hover:opacity-50'>
    //           Developers
    //         </button>
    //         <div className='invisible absolute top-0 -left-48 z-50 min-w-[560px] translate-y-0 transform opacity-0 transition duration-500 ease-in-out group-hover:visible group-hover:translate-y-5 group-hover:transform group-hover:opacity-100'>
    //           <div className='relative top-6 w-full rounded-xl bg-white p-6 shadow-xl'>
    //             <div className='h-10 absolute top-0 z-0 w-10 translate-x-0 rotate-45 transform rounded-sm bg-white transition-transform duration-500 ease-in-out group-hover:translate-x-[12.65rem]'></div>

    //             <div className='relative z-10'>
    //               <a
    //                 href='#'
    //                 className='hover:from-indigo-50 hover:to-pink-50 text-gray-800 hover:text-indigo-600 -mx-2 block rounded-lg p-2 font-semibold transition duration-300 ease-in-out hover:bg-gradient-to-br'
    //               >
    //                 Documentation
    //                 <p className='text-gray-500 font-normal'>
    //                   Start integrating in no time
    //                 </p>
    //               </a>
    //               <div className='mt-6 grid grid-cols-2 gap-6'>
    //                 <div>
    //                   <p className='text-gray-500 text-[13px] font-medium uppercase tracking-wider'>
    //                     Get started
    //                   </p>
    //                   <ul className='mt-3 text-[15px]'>
    //                     <li>
    //                       <a
    //                         href='#'
    //                         className='text-gray-600 hover:text-gray-800 block py-1 font-normal'
    //                       >
    //                         Libraries and SDKs
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <a
    //                         href='#'
    //                         className='text-gray-600 hover:text-gray-800 block py-1 font-normal'
    //                       >
    //                         Plugins
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <a
    //                         href='#'
    //                         className='text-gray-600 hover:text-gray-800 block py-1 font-normal'
    //                       >
    //                         Code samples
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <a
    //                         href='#'
    //                         className='text-gray-600 hover:text-gray-800 block py-1 font-normal'
    //                       >
    //                         Tutorials
    //                       </a>
    //                     </li>
    //                   </ul>
    //                 </div>
    //                 <div>
    //                   <p className='text-gray-500 text-[13px] font-medium uppercase tracking-wider'>
    //                     Guides
    //                   </p>
    //                   <ul className='mt-3 text-[15px]'>
    //                     <li>
    //                       <a
    //                         href='#'
    //                         className='text-gray-600 hover:text-gray-800 block py-1 font-normal'
    //                       >
    //                         Accept online payments
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <a
    //                         href='#'
    //                         className='text-gray-600 hover:text-gray-800 block py-1 font-normal'
    //                       >
    //                         Editing video like a pro
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <a
    //                         href='#'
    //                         className='text-gray-600 hover:text-gray-800 block py-1 font-normal'
    //                       >
    //                         Automation techniques
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <a
    //                         href='#'
    //                         className='text-gray-600 hover:text-gray-800 block py-1 font-normal'
    //                       >
    //                         Create stunning effects
    //                       </a>
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </li>
    //       <li className='group relative px-3 py-2'>
    //         <button className='cursor-pointer hover:opacity-50'>
    //           Resources
    //         </button>
    //         <div className='invisible absolute top-0 -left-2 z-50 min-w-[200px] translate-y-0 transform opacity-0 transition duration-500 ease-in-out group-hover:visible group-hover:translate-y-5 group-hover:transform group-hover:opacity-100'>
    //           <div className='relative top-6 w-full rounded-xl bg-white p-6 shadow-xl'>
    //             <div className='h-10 absolute top-0 z-0 w-10 -translate-x-4 rotate-45 transform rounded-sm bg-white transition-transform duration-500 ease-in-out group-hover:translate-x-3'></div>
    //             <div className='relative z-10'>
    //               <ul className='text-[15px]'>
    //                 <li>
    //                   <a
    //                     href='#'
    //                     className='text-gray-600 hover:text-gray-800 block py-1 font-normal'
    //                   >
    //                     Get Support
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a
    //                     href='#'
    //                     className='text-gray-600 hover:text-gray-800 block py-1 font-normal'
    //                   >
    //                     Blog
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a
    //                     href='#'
    //                     className='text-gray-600 hover:text-gray-800 block py-1 font-normal'
    //                   >
    //                     Case Studies
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a
    //                     href='#'
    //                     className='text-gray-600 hover:text-gray-800 block py-1 font-normal'
    //                   >
    //                     Guides
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a
    //                     href='#'
    //                     className='text-gray-600 hover:text-gray-800 block py-1 font-normal'
    //                   >
    //                     News &amp; Events
    //                   </a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </li>
    //       <li className='group relative px-3 py-2'>
    //         <a href='#' className='cursor-pointer hover:opacity-50'>
    //           Pricing
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
};

export default Navbar;
