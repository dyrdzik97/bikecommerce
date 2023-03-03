const HeroSection = (): JSX.Element => {
  return (
    <section className='bg-white dark:bg-gray-900 mt-10 h-screen w-full bg-[url("https://images6.alphacoders.com/549/549198.jpg")] bg-cover bg-center md:p-24'>
      <div className='mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
        <div className='place-self-center rounded-lg bg-primary-100 bg-opacity-60 p-16 lg:col-span-7'>
          <h1 className='dark:text-white mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl'>
            There are nine million bicycles in our shop!
          </h1>
          <p className='text-gray-500 dark:text-gray-400 mb-6 max-w-2xl font-light md:text-lg lg:mb-8 lg:text-xl'>
            From checkout to global sales tax compliance, companies around the
            world use bicycle to travel around the world to simplify your shape
            and life.
          </p>
          <a
            href='#'
            className='mr-3 inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium outline-0 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300'
          >
            Get started
            <svg
              className='ml-2 -mr-1 h-5 w-5'
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
          <a
            href='#'
            className='text-gray-900 border-gray-300 hover:bg-gray-100 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 inline-flex items-center justify-center rounded-lg border px-5 py-3 text-center text-base font-medium focus:ring-4'
          >
            Speak to Sales
          </a>
        </div>
        {/* <div className='hidden lg:col-span-5 lg:mt-0 lg:flex'>
            <img
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png'
              alt='mockup'
            />
          </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
