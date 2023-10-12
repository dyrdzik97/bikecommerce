import { FC } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useProductSeo } from '../../../main/hooks/useProductSeo';

const ProductSeoHead: FC = () => {
  const seo = useProductSeo();
  const router = useRouter();

  return (
    <Head>
      <title>{`${seo.name} - ${seo.category} - bikecommerce`}</title>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0'
      />
      <meta name='description' content={seo.description} />
      <meta property='og:title' content={seo.name} />
      <meta property='og:locale' content={'pl-PL'} />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content={`Bikecommerce - ${seo.name}`} />
      <meta property='og:url' content={`${process.env.URL}${router.asPath}`} />
      <meta property='og:description' content={seo.ogDescription} />
      <meta
        property='og:image'
        content={'https://og-examples.vercel.sh/api/static'}
      />
      <meta property='og:image:alt' content={'Alternative text'} />
      <meta property='og:image:width' content='400' />
      <meta property='og:image:height' content='400' />
      <meta property='twitter:title' content={seo.name} />
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:description' content={seo.ogDescription} />
      <meta property='twitter:image' content={seo.photosUrls} />
      <meta property='twitter:image:width' content='400' />
      <meta property='twitter:image:height' content='400' />
      <script type='application/ld+json'>
        {`{
                    "@context": "https://schema.org/",
                    "@type": "Product",
                    "name": "${seo.name}",
                    "image": [${seo.photosUrls}],
                    "description": "${seo.ogDescription}",
                    "sku": "${seo.id}",
                    "mpn": "${seo.id}",
                    "offers": {
                        "@type": "Offer",
                        "url": "${seo.offerUrl}",
                        "priceCurrency": "${seo.currency}",
                        "price": ${seo.price},
                        "itemCondition": "${seo.itemCondition}",
                        "availability": "${seo.availability}",
                        "seller": {
                            "@type": "Organization",
                            "name": "Bikecommerce"
                        }
                    }
                }`}
      </script>
    </Head>
  );
};

export default ProductSeoHead;
