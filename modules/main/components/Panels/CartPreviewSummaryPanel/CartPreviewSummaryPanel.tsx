import { useTranslation } from 'next-i18next';
import GenericButton from '../../../../ui/components/Buttons/GenericButton/GenericButton';
import Separator from '../../../../ui/components/Separator/Separator';

interface ICartPreviewSummaryPanelProps {
  total: number;
}

const CartPreviewSummaryPanel = ({
  total,
}: ICartPreviewSummaryPanelProps): JSX.Element => {
  const { t } = useTranslation('cart');

  return (
    <div className='fixed bottom-0 right-0 box-border flex w-full flex-col p-5'>
      <div className='flex flex-row justify-between text-darkgray'>
        <p>{t('shipping')}</p>
        <p>{t('calculatedInCheckout')}</p>
      </div>
      <Separator />
      <div className='flex flex-row justify-between'>
        <p>{t('summary')}</p>
        <p>{total} PLN</p>
        {/* TODO add currency */}
      </div>
      <Separator />
      <GenericButton label={t('goToCheckout')} size={'large'} filled />
      <Separator />
    </div>
  );
};

export default CartPreviewSummaryPanel;
