import IconClose from '../../../../main/utils/Icons/IconClose/IconClose';

interface IRemoveProductButtonProps {
  onClick: (value: unknown) => void;
}

const RemoveProductButton = ({
  onClick,
}: IRemoveProductButtonProps): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className='absolute right-[-5px] top-[-5px] z-10 flex h-[18px] w-[18px] items-center justify-center rounded-full border border-tertiary-100 bg-white'
    >
      <IconClose />
    </div>
  );
};

export default RemoveProductButton;
