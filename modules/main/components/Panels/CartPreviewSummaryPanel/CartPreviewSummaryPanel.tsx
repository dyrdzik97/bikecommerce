import { useTranslation } from 'next-i18next';
import GenericButton from '../../../../ui/components/Buttons/GenericButton/GenericButton';
import Separator from '../../../../ui/components/Separator/Separator';

interface ICartPreviewSummaryPanelProps {
  total: number;
  deliveryPrice?: number;
  onClick?: () => void;
  className?: string;
  onClickButtonLabel: string;
  buttonHref?: string;
  isLoading?: boolean;
  deliveryType?: string;
}

const CartPreviewSummaryPanel = ({
  total,
  deliveryPrice,
  onClick,
  className,
  onClickButtonLabel,
  buttonHref,
  isLoading,
  deliveryType,
}: ICartPreviewSummaryPanelProps): JSX.Element => {
  const { t } = useTranslation('cart');

  return (
    <div
      className={`absolute bottom-0 right-0 box-border flex w-full flex-col bg-[#fff] p-5 ${className}`}
    >
      <div className='flex flex-row justify-between text-darkgray'>
        {/* TODO add currency */}
        <p>
          {t('delivery')} {deliveryType && `: ${deliveryType}`}
        </p>
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
        label={onClickButtonLabel}
        size={'large'}
        filled
        linkButton={!!buttonHref && true}
        href={buttonHref}
        onClick={onClick}
        isLoading={isLoading}
        type='submit'
      />
      <Separator />
    </div>
  );
};

export default CartPreviewSummaryPanel;
