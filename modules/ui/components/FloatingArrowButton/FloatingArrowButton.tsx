import { MouseEventHandler } from 'react';
import IconChevron from '../../../main/utils/Icons/IconChevron/IconChevron';

interface IFloatingArrowButtonProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

const FloatingArrowButton = ({
  left,
  right,
  top,
  bottom,
  onClick,
}: IFloatingArrowButtonProps) => {
  return (
    <button
      className={'top-50 shadow-md absolute rounded-full bg-white'}
      style={{
        left,
        right,
        top,
        bottom,
      }}
      onClick={onClick}
    >
      <IconChevron orientation={left ? 'left' : 'right'} />
    </button>
  );
};

export default FloatingArrowButton;
