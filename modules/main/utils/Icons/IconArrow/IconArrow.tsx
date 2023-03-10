import classNames from 'classnames';

import { IIconOrientationProps, IIconProps } from '../../../../ui/models';

const IconArrow = ({
  width = 24,
  height = 24,
  fillColor = '#000',
  strokeColor = '#000',
  className,
}: IIconProps & IIconOrientationProps) => {
  const classes = classNames(className, 'ml-2 -mr-1 h-4 w-4');

  return (
    <svg
      className={classes}
      aria-hidden='true'
      fill={fillColor}
      viewBox='0 0 20 20'
      width={width}
      height={height}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        stroke={strokeColor}
        d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default IconArrow;
