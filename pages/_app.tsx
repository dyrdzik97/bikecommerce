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

  return (
    <AuthProvider>
      <CartContextProvider>
        <PageSeo />
        <DefaultLayout>
          <Component {...pageProps} router={router.asPath} />
          <ToastContainer
            position='bottom-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
          />
        </DefaultLayout>
      </CartContextProvider>
    </AuthProvider>
  );
};

export default appWithTranslation(App);
