import Drawer from '../../../../ui/components/Drawer/Drawer';

interface ICartPreviewPanelProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const CartPreviewPanel = ({ isOpen, setIsOpen }: ICartPreviewPanelProps) => {
  return (
    <Drawer isOpen={isOpen} setIsOpen={setIsOpen} header='Cart preview'>
      children
    </Drawer>
  );
};

export default CartPreviewPanel;
