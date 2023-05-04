import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from '../context/AuthContext';
import DefaultLayout from '../modules/ui/components/DefaultLayout/DefaultLayout';
import { setCurrentLocale } from '../utils/localeDetection';

import 'react-toastify/dist/ReactToastify.css';
import { CartContextProvider } from '../context/CartContext';
import '../styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  setCurrentLocale(router.locale);

  return (
    <AuthProvider>
      <CartContextProvider>
        <DefaultLayout>
          <Component {...pageProps} />
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
