// initial breadcrumbs - beginning

const Breadcrumbs = (): JSX.Element => {
  return (
    <nav className='flex'>
      <ol role='list' className='flex items-center'>
        <li className='text-left'>
          <div className='-m-1'>
            <a
              href='#'
              className='text-gray-600 focus:text-gray-900 hover:text-gray-800 rounded-md p-1 text-sm font-medium focus:shadow'
            >
              {' '}
              Home{' '}
            </a>
          </div>
        </li>

        <li className='text-left'>
          <div className='flex items-center'>
            <span className='text-gray-400 mx-2'>/</span>
            <div className='-m-1'>
              <a
                href='#'
                className='text-gray-600 focus:text-gray-900 hover:text-gray-800 rounded-md p-1 text-sm font-medium focus:shadow'
              >
                {' '}
                Products{' '}
              </a>
            </div>
          </div>
        </li>

        <li className='text-left'>
          <div className='flex items-center'>
            <span className='text-gray-400 mx-2'>/</span>
            <div className='-m-1'>
              <a
                href='#'
                className='text-gray-600 focus:text-gray-900 hover:text-gray-800 rounded-md p-1 text-sm font-medium focus:shadow'
                aria-current='page'
              >
                {' '}
                Bikes{' '}
              </a>
            </div>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
