import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '../context/AuthContext';
import { CartContextProvider } from '../context/CartContext';
import PageSeo from '../modules/main/components/PageSeo/PageSeo';
import DefaultLayout from '../modules/ui/components/DefaultLayout/DefaultLayout';
import '../styles/global.css';
import { setCurrentLocale } from '../utils/localeDetection';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  setCurrentLocale(router.locale);

  const isMainPage: boolean = router.asPath === '/';

  return (
    <AuthProvider>
      <CartContextProvider>
        {isMainPage && <PageSeo />}
        <DefaultLayout>
          <Component {...pageProps} router={router.asPath} />
          <ToastContainer
            position='bottom-right'
            autoClose={5000}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
            style={{ maxWidth: '90vw' }}
          />
        </DefaultLayout>
      </CartContextProvider>
    </AuthProvider>
  );
};

export default appWithTranslation(App);
