const DeliveryInfo = (): JSX.Element => {
  return (
    <ul className='mt-8 space-y-2'>
      <li className='text-gray-600 flex items-center text-left text-sm font-medium'>
        <svg
          className='h-5 text-gray-500 mr-2 block w-5 align-middle'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            className=''
          ></path>
        </svg>
        Free shipping worldwide
      </li>

      <li className='text-gray-600 flex items-center text-left text-sm font-medium'>
        <svg
          className='h-5 text-gray-500 mr-2 block w-5 align-middle'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
            className=''
          ></path>
        </svg>
        Cancel Anytime
      </li>
    </ul>
  );
};

export default DeliveryInfo;
