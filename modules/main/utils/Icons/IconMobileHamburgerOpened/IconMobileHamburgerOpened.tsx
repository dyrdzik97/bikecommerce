import { IIconOrientationProps, IIconProps } from '../../../../ui/models';

const IconMobileHamburgerOpened = ({
  width = 24,
  height = 24,
  fillColor = 'none',
  strokeColor = '#000',
  orientation = 'down',
  className,
  onClick,
}: IIconProps & IIconOrientationProps) => {
  return (
    <svg
      className='h-6 w-6'
      fill='currentColor'
      stroke='currentColor'
      strokeWidth={1.5}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  );
};

export default IconMobileHamburgerOpened;
