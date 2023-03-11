import Head from 'next/head';
import { SWRConfig } from 'swr';

import HomePage from '../modules/main/components/HomePage/HomePage';

const Home = (): JSX.Element => {
    return (
        <>
            <Head>
                <title>Bikecommerce - shop now!</title>
                <meta
                    name='description'
                    content='Shop with all sort of bikes'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <SWRConfig>
                <HomePage />
            </SWRConfig>
        </>
    );
};

export default Home;
