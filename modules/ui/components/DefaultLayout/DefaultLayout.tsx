import dynamic from 'next/dynamic';
import { ReactNode, useEffect, useState } from 'react';

const Navbar = dynamic(() => import('../Navbar/Navbar'), {
  ssr: false,
});

const Layout = dynamic(() => import('../Layout/Layout'), {
  ssr: false,
});

const Footer = dynamic(() => import('../Footer/Footer'), {
  ssr: false,
});

const Main = dynamic(() => import('../Main/Main'), {
  ssr: false,
});

interface IDefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: IDefaultLayoutProps): JSX.Element => {
  const [isDropdownActive, setDropdownIsActive] = useState(false);

  useEffect(() => {
    if (isDropdownActive) {
      window.addEventListener('click', onClickOutside);
    } else {
      window.removeEventListener('click', onClickOutside);
    }

    return () => {
      window.removeEventListener('click', onClickOutside);
    };
  }, [isDropdownActive]);

  const onClickOutside = (event: MouseEvent) => {
    const section = document.documentElement.querySelector('.navbar');

    if (section && section.contains(event.target as Node)) {
      return;
    }

    const dropdown = document.documentElement.querySelector('.navbar');

    if (dropdown && !dropdown.contains(event.target as Node)) {
      setDropdownIsActive(false);
    }
  };

  const onActivateDropdown = () => {
    setDropdownIsActive((prev) => !prev);
  };

  return (
    <Layout>
      <Navbar
        isDropdownActive={isDropdownActive}
        onActivateDropdown={onActivateDropdown}
      />
      <Main>{children}</Main>
      <Footer />
    </Layout>
  );
};

export default DefaultLayout;
