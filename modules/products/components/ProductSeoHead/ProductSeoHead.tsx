import { FC } from 'react';

import Head from 'next/head';
import { useProductSeo } from '../../../main/hooks/useProductSeo';

const ProductSeoHead: FC = () => {
  const seo = useProductSeo();

  console.warn({ seo });

  return (
    <Head>
      <title>{`${seo.name} - ${seo.category} - yestersen`}</title>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0'
      />
      <meta name='description' content={seo.description} />
      <meta property='og:title' content={seo.name} />
      <meta property='og:type' content='product' />
      <meta property='og:url' content={''} />
      <meta property='og:description' content={seo.ogDescription} />
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
