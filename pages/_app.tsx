import type { AppProps } from 'next/app';
import { AuthProvider } from '../context/AuthContext';
import DefaultLayout from '../modules/ui/components/DefaultLayout/DefaultLayout';
import '../styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </AuthProvider>
  );
};

export default App;
