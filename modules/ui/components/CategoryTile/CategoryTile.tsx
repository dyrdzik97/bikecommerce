import { ICategoryTileProps } from '../../models';

const CategoryTile = ({
  imageSrc,
  title,
  url,
  subtitle,
  buttonText,
}: ICategoryTileProps): JSX.Element => {
  return (
    <div className='bg-white max-w-sm rounded-lg shadow transition-shadow hover:shadow-lg'>
      <a href={`/${url}`}>
        <img className='rounded-t-lg' src={imageSrc} alt='' />
      </a>
      <div className='p-5'>
        <div>
          <h5 className='text-gray-900 dark:text-white mb-2 text-2xl font-bold tracking-tight'>
            {title}
          </h5>
        </div>
        <p className='text-gray-700 dark:text-gray-400 mb-3 font-normal'>
          {subtitle}
        </p>
        <a
          href={`/${url}`}
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium focus:outline-none focus:ring-4'
        >
          {buttonText}
          <svg
            aria-hidden='true'
            className='ml-2 -mr-1 h-4 w-4'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CategoryTile;
