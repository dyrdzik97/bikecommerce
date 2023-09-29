import GenericButton from '../Buttons/GenericButton/GenericButton';

interface IEmptyCartInfoProps {
  onClick: (value: boolean) => void;
}

const EmptyCartInfo = ({ onClick }: IEmptyCartInfoProps): JSX.Element => {
  return (
    <div className='align-center h-full flex w-full flex-col items-center justify-center gap-10'>
      <span className='text-2xl font-bold'>Twój kosz jest pusty</span>
      <GenericButton
        label='Buszuj!'
        href='/category'
        size='small'
        linkButton
        filled
        onClick={() => onClick(false)}
      />
    </div>
  );
};

export default EmptyCartInfo;
