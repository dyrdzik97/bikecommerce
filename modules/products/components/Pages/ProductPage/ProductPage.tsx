import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useCart } from '../../../../../context/CartContext';
import IconCart from '../../../../main/utils/Icons/IconCart/IconCart';
import Breadcrumbs from '../../../../ui/components/Breadcrumbs/Breadcrumbs';
import GenericButton from '../../../../ui/components/Buttons/GenericButton/GenericButton';
import BrowserView from '../../../../ui/components/Views/BrowserView/BrowserView';
import MobileView from '../../../../ui/components/Views/MobileView/MobileView';
import { IProductDTO } from '../../../dto/productDTO';
import CollapsedSection from '../../CollapsedSection/CollapsedSection';
import DeliveryInfo from '../../DeliveryInfo/DeliveryInfo';
import ProductPrice from '../../ProductPrice/ProductPrice';
import ProductRating from '../../ProductRating/ProductRating';
import ProductTitle from '../../ProductTitle/ProductTitle';
import SpecificationItem from '../../SpecificationItem/SpecificationItem';

interface IProductPageProps {
  product: IProductDTO;
}

const ProductPage = ({ product }: IProductPageProps): JSX.Element => {
  const { images, productName, price, productDetails } = product;
  const { t, i18n } = useTranslation(['product', 'validations']);
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  const { addToCart } = useCart();

  const specification = Object.entries(productDetails).map((item, index) => {
    return {
      title: item[0],
      value: item[1],
    };
  });

  const onAddToCart = async () => {
    try {
      addToCart(product);

      setIsAddingProduct(true);
    } catch (error) {
      toast(t('validations:somethingWentWrong'), {
        type: 'error',
        autoClose: 2000,
      });
    } finally {
      toast(t('product:productAddedToCart'), {
        type: 'success',
        autoClose: 2000,
      });
      setTimeout(() => setIsAddingProduct(false), 2000);
    }
  };

  return (
    <div
      style={{
        height: 'min-content',
        maxWidth: '1920px',
        paddingTop: '0 !important',
      }}
      className='mt-[20px] flex w-full'
      key={`product-${product.id}`}
    >
      <section style={{ height: 'min-content' }} className='w-full'>
        <section className='flex items-center justify-center sm:py-4'>
          <div className='max-w-screen-2xl  px-4'>
            <Breadcrumbs />
            <MobileView>
              <div className='flex justify-between gap-5'>
                <ProductTitle title={productName} />
                <ProductRating />
              </div>
            </MobileView>
            <div className='md:col-gap-12 md:col-gap-16 mt-8 grid grid-cols-1 gap-12 md:mt-12 md:grid-cols-2 lg:gap-16'>
              <div className='lg:col-span-3 lg:row-end-1'>
                <div className='lg:flex lg:items-start'>
                  <div className='lg:order-2 lg:ml-5'>
                    <div className='max-w-xl overflow-hidden rounded-lg'>
                      {images.map((imageUrl: string) => (
                        <div className='max-w-xl overflow-hidden rounded-lg'>
                          <img
                            className='h-full w-full max-w-full object-cover'
                            src={imageUrl}
                            alt=''
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className='sticky top-0 lg:col-span-2 lg:row-span-2 lg:row-end-2 lg:w-[416px]'
                style={{ height: 'min-content' }}
              >
                <BrowserView>
                  <ProductTitle title={productName} />
                  <ProductRating />
                </BrowserView>

                <div className='mt-5 flex flex-col items-start justify-between gap-5 space-y-4 py-4  sm:space-y-0'>
                  <ProductPrice size={'regular'} {...price} />
                  <GenericButton
                    label={t('addToCart')}
                    onClick={() => onAddToCart()}
                    isLoading={isAddingProduct}
                    filled
                    icon={isAddingProduct ? null : <IconCart />}
                  />
                </div>

                <DeliveryInfo />
                <CollapsedSection title={t('productDetails')} collapsed={true}>
                  <SpecificationItem items={specification} />
                </CollapsedSection>
                <CollapsedSection
                  title={t('productDescription')}
                  collapsed={true}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: product.productDescription,
                    }}
                  />
                </CollapsedSection>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProductPage;
