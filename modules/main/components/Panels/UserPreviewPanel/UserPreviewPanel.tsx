import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useAuth } from '../../../../../context/AuthContext';
import GenericButton from '../../../../ui/components/Buttons/GenericButton/GenericButton';
import Drawer from '../../../../ui/components/Drawer/Drawer';
import InfoText from '../../../../ui/components/InfoText/InfoText';
import IconClose from '../../../utils/Icons/IconClose/IconClose';
import IconLoading from '../../../utils/Icons/IconLoading/IconLoading';

interface IUserPreviewPanelProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const UserPreviewPanel = ({ isOpen, setIsOpen }: IUserPreviewPanelProps) => {
  const { user, logout, setLoading, loading } = useAuth();
  const router = useRouter();
  const { t } = useTranslation('auth');
  const { t: tRoutes } = useTranslation('routes');

  return (
    <Drawer
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      header={t('yourProfile')}
      append={
        <IconClose
          onClick={() => {
            setIsOpen(false);
          }}
        />
      }
    >
      <p>{user?.displayName}</p>
      <p>{user?.email}</p>
      <p>{user?.uid}</p>
      {loading && <IconLoading />}
      {user === null ? (
        <InfoText
          content={t('notLoggedInUserInfo')}
          hasButton
          buttonTitle={t('login')}
          onClick={() => {
            setLoading(true);
            setIsOpen(false);
            router.push(`/${tRoutes('login')}`);
            setLoading(false);
          }}
        />
      ) : (
        <GenericButton
          label={t('logout')}
          onClick={async () => {
            setLoading(true);
            setIsOpen(false);
            await logout();
            setLoading(false);
          }}
          className='absolute bottom-0 left-0'
        />
      )}
    </Drawer>
  );
};

export default UserPreviewPanel;
