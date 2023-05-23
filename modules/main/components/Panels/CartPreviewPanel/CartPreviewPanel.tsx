import { useTranslation } from 'next-i18next';
import { useCart } from '../../../../../context/CartContext';
import Drawer from '../../../../ui/components/Drawer/Drawer';
import IconClose from '../../../utils/Icons/IconClose/IconClose';

interface ICartPreviewPanelProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const CartPreviewPanel = ({ isOpen, setIsOpen }: ICartPreviewPanelProps) => {
  const { items } = useCart();
  const { t } = useTranslation('cart');
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
      {JSON.stringify(items)}
    </Drawer>
  );
};

export default CartPreviewPanel;
