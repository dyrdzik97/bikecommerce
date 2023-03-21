const VariantBadge = (): JSX.Element => {
  //   future improvements

  return (
    <>
      {/* header */}
      <h2 className='text-gray-900 mt-8 text-base'>Choose subscription</h2>
      <div className='mt-3 flex select-none flex-wrap items-center gap-1'>
        {/* collection of variants/options */}
        <label className=''>
          {/* core */}
          <input
            type='radio'
            name='subscription'
            value='4 Months'
            className='peer sr-only'
          />
          <p className='rounded-lg border border-black px-6 py-2 font-bold peer-checked:bg-black peer-checked:text-white'>
            4 Months
          </p>
          {/* description of badge */}
          <span className='mt-1 block text-center text-xs'>$80/mo</span>
        </label>
        <label className=''>
          <input
            type='radio'
            name='subscription'
            value='8 Months'
            className='peer sr-only'
            checked
          />
          <p className='rounded-lg border border-black px-6 py-2 font-bold peer-checked:bg-black peer-checked:text-white'>
            8 Months
          </p>
          <span className='mt-1 block text-center text-xs'>$60/mo</span>
        </label>
        <label className=''>
          <input
            type='radio'
            name='subscription'
            value='12 Months'
            className='peer sr-only'
          />
          <p className='rounded-lg border border-black px-6 py-2 font-bold peer-checked:bg-black peer-checked:text-white'>
            12 Months
          </p>
          <span className='mt-1 block text-center text-xs'>$40/mo</span>
        </label>
      </div>
    </>
  );
};

export default VariantBadge;
