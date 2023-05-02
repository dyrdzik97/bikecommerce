interface ISeparatorProps {
  label?: string;
  className?: string;
}

const Separator = ({ label, className }: ISeparatorProps): JSX.Element => {
  return (
    <div
      className={`text-gray-400 my-3 grid grid-cols-3 items-center ${className}`}
    >
      <hr className='border-gray-400' />
      {label ? (
        <p className='text-center text-sm'>{label}</p>
      ) : (
        <hr className='border-gray-400' />
      )}

      <hr className='border-gray-400' />
    </div>
  );
};

export default Separator;
