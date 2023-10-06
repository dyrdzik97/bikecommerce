import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useAuth } from '../../../../../context/AuthContext';

const UserPage = () => {
  const { t } = useTranslation('routes');
  const router = useRouter();
  const { user } = useAuth();

  console.warn(router.query, user);
  return (
    <div className='bg-gray-100'>
      <div className='bg-main-color w-full '>
        <div className='max-w-screen-xl mx-auto flex flex-col px-4 md:flex-row md:items-start md:justify-between md:px-6 lg:px-8'>
          <div className='flex flex-row items-start justify-between p-4'>
            <a
              href='#'
              className='focus:shadow-outline rounded-lg text-lg font-semibold  focus:outline-none'
            >
              User profile
            </a>
          </div>
        </div>
      </div>

      <div className='container mx-auto my-5 p-5'>
        <div className='no-wrap md:-mx-2 md:flex '>
          <div className='w-full md:mx-2 md:w-3/12'>
            <div className='border-green-400 gap-4 border-t-4 bg-white'>
              <div className='image'>
                <img
                  className='h-auto mx-auto w-full'
                  src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
                  alt=''
                />
              </div>
              <h1 className='text-gray-900 my-1 text-xl font-bold leading-8'>
                Jane Doe
              </h1>
              <h3 className='text-gray-600 font-lg text-semibold leading-6'>
                Owner at Her Company Inc.
              </h3>
              <p className='text-gray-500 hover:text-gray-600 text-sm leading-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
                non deserunt
              </p>
              <ul className='bg-gray-100 w-100 text-gray-600 hover:text-gray-700 mt-3 divide-y rounded py-2 px-3 shadow-2xl '>
                <li className='flex items-center py-3'>
                  <span>Status</span>
                  <span className='ml-auto'>
                    <span className='bg-green-500 rounded py-1 px-2 text-sm '>
                      Active
                    </span>
                  </span>
                </li>
                <li className='flex items-center py-3'>
                  <span>Member since</span>
                  <span className='ml-auto'>Nov 07, 2016</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='h-64 mx-2 mt-5 md:w-9/12'>
            <div className='rounded-md bg-white p-3 shadow-2xl'>
              <div className='text-gray-900 flex items-center space-x-2 font-semibold leading-8'>
                <span className='text-green-500'>
                  <svg
                    className='h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                    />
                  </svg>
                </span>
                <span className='tracking-wide'>About</span>
              </div>
              <div className='p-2'>orders</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
