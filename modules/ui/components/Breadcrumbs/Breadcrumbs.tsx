// initial breadcrumbs - beginning

import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumbs = (): JSX.Element => {
  const router = useRouter();
  const { t } = useTranslation('routes');

  const test = (router?.query?.product as string)?.match(
    /product\/([A-F\d-]+)\?/
  );

  console.warn(test);

  return (
    <nav className='flex'>
      <ol role='list' className='flex items-center'>
        <li className='text-left'>
          <div className='m-1'>
            <Link
              href='/'
              passHref
              className='text-gray-600 focus:text-gray-900 hover:text-gray-800 focus:shadow rounded-md p-1 text-sm font-medium'
            >
              {' '}
              home{' '}
            </Link>
          </div>
        </li>

        <li className='text-left'>
          <div className='flex items-center'>
            <span className='text-gray-400 mx-2'>/</span>
            <div className='m-1'>
              <Link
                href={`/${t('category')}`}
                className='text-gray-600 focus:text-gray-900 hover:text-gray-800 focus:shadow rounded-md p-1 text-sm font-medium'
              >
                {' '}
                {Object.keys(router.query)}{' '}
              </Link>
            </div>
          </div>
        </li>

        <li className='text-left'>
          <div className='flex items-center'>
            <span className='text-gray-400 mx-2'>/</span>
            <div className='m-1 h-[23px] overflow-hidden'>
              {' '}
              {/* TODO handle only name of product without ID */}
              {router.query.product}{' '}
            </div>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
