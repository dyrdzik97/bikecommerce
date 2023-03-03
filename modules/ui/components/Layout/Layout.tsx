import { FC, ReactNode } from 'react';
import styles from './Layout.module.scss';

interface ILayoutProps {
  append?: ReactNode;
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ append, children }) => {
  return (
    <div id={'layout'} className={styles.layout}>
      {children}
      {append && (
        <div className={'layout__append'}>
          <div id={'layout-append'} />
          {append}
        </div>
      )}
    </div>
  );
};

export default Layout;
