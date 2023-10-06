import { IIconOrientationProps, IIconProps } from '../../../../ui/models';

const IconSuccess = ({
  width = 24,
  height = 24,
  fillColor = '#32CD32',
  strokeColor = '#000',
  className,
}: IIconProps & IIconOrientationProps) => {
  return (
    <svg
      viewBox='0 0 24 24'
      className={`h-${height} mx-auto my-6 w-${width} text-[${fillColor}]`}
    >
      <path
        fill={fillColor}
        d='M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z'
      ></path>
    </svg>
  );
};

export default IconSuccess;
