import { IIconOrientationProps, IIconProps } from '../../../../ui/models';

const IconClose = ({
  width = 24,
  height = 24,
  fillColor = 'none',
  strokeColor = '#000',
  className,
  onClick,
}: IIconProps & IIconOrientationProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
      className={`cursor-pointer duration-300 hover:scale-105 ${
        className ? className : ''
      }`}
    >
      <path
        d='M24 8L8 24'
        stroke='#1A1A1A'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8 8L24 24'
        stroke='#1A1A1A'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconClose;
