import { useTranslation } from 'next-i18next';
import { useCart } from '../../../../../context/CartContext';
import ProductPreview from '../../../../products/components/ProductPreview/ProductPreview';
import Drawer from '../../../../ui/components/Drawer/Drawer';
import EmptyCartInfo from '../../../../ui/components/EmptyCartInfo/EmptyCartInfo';
import IconClose from '../../../utils/Icons/IconClose/IconClose';
import CartPreviewSummaryPanel from '../CartPreviewSummaryPanel/CartPreviewSummaryPanel';

interface ICartPreviewPanelProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const CartPreviewPanel = ({ isOpen, setIsOpen }: ICartPreviewPanelProps) => {
  const { items, totalPrice } = useCart();
  const { t } = useTranslation('cart');
  const { t: tRoutes } = useTranslation('routes');
  return (
    <Drawer
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      header={t('cart')}
      append={
        <IconClose
          onClick={() => {
            setIsOpen(false);
          }}
        />
      }
    >
      {items.length === 0 ? (
        <EmptyCartInfo onClick={() => setIsOpen(false)} />
      ) : (
        <div className='w-full'>
          {items.map((item) => {
            return <ProductPreview {...item} key={`key-${item.id}`} />;
          })}

          <CartPreviewSummaryPanel
            total={totalPrice}
            onClick={() => setIsOpen(false)}
            onClickButtonLabel={t('goToCheckout')}
            buttonHref={`/${tRoutes('checkout')}`}
          />
        </div>
      )}
    </Drawer>
  );
};

export default CartPreviewPanel;
