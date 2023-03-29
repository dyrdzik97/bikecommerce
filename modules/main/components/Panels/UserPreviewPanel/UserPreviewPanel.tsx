import Drawer from '../../../../ui/components/Drawer/Drawer';

interface IUserPreviewPanelProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const UserPreviewPanel = ({ isOpen, setIsOpen }: IUserPreviewPanelProps) => {
  return (
    <Drawer isOpen={isOpen} setIsOpen={setIsOpen} header='Your profile'>
      children
    </Drawer>
  );
};

export default UserPreviewPanel;
