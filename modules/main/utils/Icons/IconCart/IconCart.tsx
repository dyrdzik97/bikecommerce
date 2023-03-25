import classNames from 'classnames';

import { IIconOrientationProps, IIconProps } from '../../../../ui/models';

const IconCart = ({
  width = 32,
  height = 32,
  fillColor = '#000',
  strokeColor = '#000',
  className,
}: IIconProps & IIconOrientationProps) => {
  const classes = classNames(className, 'ml-2 -mr-1 h-4 w-4');

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-5 mr-3 w-5 shrink-0'
      fill='none'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      stroke={'currentColor'}
      strokeWidth='2'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
      />
    </svg>
  );
};

export default IconCart;
