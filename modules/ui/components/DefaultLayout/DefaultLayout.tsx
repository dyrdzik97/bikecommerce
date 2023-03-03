import { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Navbar from '../Navbar/Navbar';

interface IDefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: IDefaultLayoutProps): JSX.Element => {
  return (
    <Layout>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </Layout>
  );
};

export default DefaultLayout;
