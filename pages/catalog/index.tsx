import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Page from '../../modules/main/components/Page/Page';

const Listing = dynamic(
  () => import('../../modules/products/components/Listing/Listing'),
  {
    ssr: false,
  }
);

const Catalog = (): JSX.Element => {
  const router = useRouter();

  return (
    <Page title='Bikes listing'>
      {/* TODO add breadcrumbs */}
      <Listing />
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async ({}) => {
  return {
    props: {},
    revalidate: 1800,
  };
};

export default Catalog;
