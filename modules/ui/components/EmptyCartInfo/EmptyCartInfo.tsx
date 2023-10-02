import { useTranslation } from 'next-i18next';
import GenericButton from '../Buttons/GenericButton/GenericButton';

interface IEmptyCartInfoProps {
  onClick?: (value?: boolean) => void;
}

const EmptyCartInfo = ({ onClick }: IEmptyCartInfoProps): JSX.Element => {
  const { t } = useTranslation('routes');
  const { t: tCart } = useTranslation('cart');

  return (
    <div className='align-center h-full m-10 flex w-full flex-col items-center justify-center gap-10'>
      <span className='text-2xl font-bold'>{tCart('emptyCart')}</span>
      <GenericButton
        label={tCart('search')}
        href={`/${t('category')}`}
        size='small'
        linkButton
        filled
        onClick={onClick}
      />
    </div>
  );
};

export default EmptyCartInfo;
