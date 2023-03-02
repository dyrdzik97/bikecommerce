import type { AppProps } from 'next/app';
import DefaultLayout from '../components/DefaultLayout/DefaultLayout';
import '../styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
};

export default App;
