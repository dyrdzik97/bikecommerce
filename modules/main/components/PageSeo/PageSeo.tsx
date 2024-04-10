import Head from 'next/head';
import { useRouter } from 'next/router';

interface IPageSeoProps {
  title?: string | null;
}

const PageSeo = ({ title }: IPageSeoProps) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title ? `Bikecommerce - ${title}` : 'Bikecommerce'}</title>
      <link rel='shortcut icon' href='/images/favicon.ico' />
      <meta httpEquiv='content-type' content='text/html; charset=utf-8' />
      <meta property='og:locale' content={'pl-PL'} />
      <meta property='og:type' content='website' />
      <meta
        property='og:site_name'
        content={`Bikecommerce ${title ? `- ${title}` : ''}`}
      />
      <meta property='og:url' content={`${process.env.URL}${router.asPath}`} />
      <meta
        property='og:description'
        content={
          'Wyselekcjonowana kolekcja rowerów od szosowych po miejskie czeka na Ciebie właśnie w tym miejscu!'
        }
      />
      <meta
        property='og:image'
        content={'https://wallpaperaccess.com/full/1223017.jpg'}
      />
      <meta property='og:image:alt' content={'Alternative text'} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='800' />
      <meta property='og:image:type' content='image/jpg' />
      <meta
        property='twitter:title'
        content={`Bikecommerce  ${title ? `- ${title}` : ''}`}
      />
      <meta property='twitter:card' content='summary_large_image' />
      <meta
        property='twitter:description'
        content={
          'Wyselekcjonowana kolekcja rowerów od szosowych po miejskie czeka na Ciebie właśnie w tym miejscu!'
        }
      />
      <meta
        property='twitter:image'
        content={'https://wallpaperaccess.com/full/1223017.jpg'}
      />
      <meta property='twitter:image:width' content='1200' />
      <meta property='twitter:image:height' content='800' />
    </Head>
  );
};

export default PageSeo;
