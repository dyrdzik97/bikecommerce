import IconLoading from '../../../main/utils/Icons/IconLoading/IconLoading';

const PageLoader = (): JSX.Element => {
  return (
    <div className='flex h-[500px] items-center justify-center'>
      <IconLoading />
    </div>
  );
};

export default PageLoader;
