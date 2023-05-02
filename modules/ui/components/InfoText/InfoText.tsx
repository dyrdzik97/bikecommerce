import GenericButton from '../Buttons/GenericButton/GenericButton';

interface IInfoTextProps {
  content: string;
  hasButton?: boolean;
  buttonTitle: string;
  onClick: () => void;
}

const InfoText = ({
  content,
  hasButton = false,
  buttonTitle,
  onClick,
}: IInfoTextProps) => {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <span className='text-center'>{content}</span>
      {hasButton && (
        <GenericButton label={buttonTitle} onClick={() => onClick()} />
      )}
    </div>
  );
};

export default InfoText;
