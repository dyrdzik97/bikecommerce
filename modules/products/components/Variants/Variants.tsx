// handle this component after creating logic of mapping all types of variants

const Variants = () => {
  return (
    <ul className='flex flex-row items-center justify-center'>
      <li className='mr-4 last:mr-0'>
        <span className='border-gray-500 block rounded-full border-2 p-1 transition duration-300 ease-in'>
          <a
            href='#blue'
            className='h-6 bg-blue-900 block w-6 rounded-full'
          ></a>
        </span>
      </li>
      <li className='mr-4 last:mr-0'>
        <span className='hover:border-gray-500 block rounded-full border-2 border-white p-1 transition duration-300 ease-in'>
          <a
            href='#yellow'
            className='h-6 bg-yellow-500 block w-6 rounded-full'
          ></a>
        </span>
      </li>
      <li className='mr-4 last:mr-0'>
        <span className='hover:border-gray-500 block rounded-full border-2 border-white p-1 transition duration-300 ease-in'>
          <a href='#red' className='h-6 bg-red-500 block w-6 rounded-full'></a>
        </span>
      </li>
      <li className='mr-4 last:mr-0'>
        <span className='hover:border-gray-500 block rounded-full border-2 border-white p-1 transition duration-300 ease-in'>
          <a
            href='#green'
            className='h-6 bg-green-500 block w-6 rounded-full'
          ></a>
        </span>
      </li>
    </ul>
  );
};

export default Variants;
