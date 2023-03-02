import Head from 'next/head';
import Image from 'next/image';

import Page from '../components/Page/PAge';

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Bikecommerce - shop now!</title>
        <meta name='description' content='Shop with all sort of bikes' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Page size='wide'>
        <Image
          src='https://images6.alphacoders.com/549/549198.jpg'
          alt={'hero-bg'}
          objectFit={'cover'}
          fill
        />
      </Page>
      <Page>
        <div className='bg-gray'>content of my super page</div>
      </Page>
      {/* <main className='layout mt-8 p-5'>
        <div className='grid grid-cols-2 place-content-center gap-5'>
          <div className='rounded-md bg-primary-900 p-2 font-primary'>
            Light font
          </div>
          <div className='bg-primary-900 p-2 font-secondary'>Regular font</div>
          <div className='bg-primary-900 p-2 font-tertiary font-bold'>
            Bold font
          </div>
          <div className='bg-primary-900 p-2'>
            <div className='grid grid-cols-2 place-content-center gap-3 [&>*]:rounded-lg [&>*]:bg-primary-500 [&>*]:p-5'>
              <h1>h1</h1>
              <h2>h2</h2>
              <h3>h3</h3>
              <h4>h4</h4>
            </div>
          </div>
        </div>
      </main> */}
    </>
  );
};

export default Home;
