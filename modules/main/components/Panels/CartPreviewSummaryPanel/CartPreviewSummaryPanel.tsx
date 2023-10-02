import { useTranslation } from 'next-i18next';
import GenericButton from '../../../../ui/components/Buttons/GenericButton/GenericButton';
import Separator from '../../../../ui/components/Separator/Separator';

interface ICartPreviewSummaryPanelProps {
  total: number;
  deliveryPrice?: number;
  onClick?: () => void;
  className?: string;
}

const CartPreviewSummaryPanel = ({
  total,
  deliveryPrice,
  onClick,
  className,
}: ICartPreviewSummaryPanelProps): JSX.Element => {
  const { t } = useTranslation('cart');
  const { t: tRoutes } = useTranslation('routes');

  return (
    <div
      className={`absolute bottom-0 right-0 box-border flex w-full flex-col p-5 ${className}`}
    >
      <div className='flex flex-row justify-between text-darkgray'>
        {/* TODO add currency */}
        <p>{t('shipping')} </p>
        <p>
          {!deliveryPrice ? t('calculatedInCheckout') : `${deliveryPrice} PLN`}
        </p>
      </div>
      <Separator />
      <div className='flex flex-row justify-between'>
        <p>{t('summary')}</p>
        <p>{total} PLN</p>
        {/* TODO add currency */}
      </div>
      <Separator />
      <GenericButton
        label={t('goToCheckout')}
        size={'large'}
        filled
        linkButton
        href={`/${tRoutes('checkout')}`}
        onClick={onClick}
      />
      <Separator />
    </div>
  );
};

export default CartPreviewSummaryPanel;
