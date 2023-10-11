import Head from 'next/head';

interface IPageSeoProps {
  title: string;
}

const PageSeo = ({ title }: IPageSeoProps) => {
  return (
    <Head>
      <title>Bikecommerce - {title}</title>
    </Head>
  );
};

export default PageSeo;
