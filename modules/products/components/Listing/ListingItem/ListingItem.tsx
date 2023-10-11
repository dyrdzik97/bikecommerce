import { FC, memo, useState } from 'react';

import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useCart } from '../../../../../context/CartContext';
import AddToCartButton from '../../../../ui/components/Buttons/AddToCartButton/AddToCartButton';
import { IProductDTO } from '../../../dto/productDTO';
import { IPriceModel } from '../../../models';
import ProductPhoto from '../../ProductPhoto/ProductPhoto';
import ProductPrice from '../../ProductPrice/ProductPrice';
import ListingItemSkeleton from '../ListingItemSkeleton/ListingItemSkeleton';
import ListingItemTitle from '../ListingItemTitle/ListingItemTitle';

export const TRACKABLE_LISTING_ITEM_KEY = 'TRACKABLE_LISTING_ITEM_KEY';

interface IListingItemProps {
  size?: 'small' | 'regular';
  id: string;
  href?: string;
  mainImage?: string;
  productName?: string;
  price: IPriceModel;
  classification?: string[];
  hasFreeDelivery?: boolean;
  bestseller?: boolean;
  isSkeleton?: boolean;
  // TODO add variants in the future
  variants?: any; // IVariantsModel;
  height?: string;
  trackable?: boolean;
  trackableRefCallback?: (node: HTMLElement) => void;
}

const ListingItem: FC<IListingItemProps> = ({
  size = 'regular',
  height,
  id,
  href = '',
  mainImage,
  productName = '',
  price = {
    promoPrice: null,
    price: null,
  },
  hasFreeDelivery = false,
  bestseller = false,
  isSkeleton = false,
  trackable,
  // add variants in future
  variants = [],
  trackableRefCallback,
}) => {
  const { addToCart } = useCart();
  const { t, i18n } = useTranslation(['validations']);
  const [loading, setLoading] = useState(false);
  const onClick = () => {
    if (trackable) {
      sessionStorage.setItem(TRACKABLE_LISTING_ITEM_KEY, id);
    }
  };

  const item = {
    id,
    productName,
    price,
    mainImage,
    hasFreeDelivery,
  };

  const onAddToCart = () => {
    setLoading(true);
    addToCart(item as IProductDTO);

    setTimeout(() => {
      setLoading(false);
    }, 200);
    toast(t('productAddedToCart'), {
      type: 'success',
      autoClose: 2000,
    });
  };

  if (isSkeleton) {
    return <ListingItemSkeleton height={height} size={size} />;
  }

  return (
    <Link
      ref={trackableRefCallback as undefined}
      href={href}
      prefetch={false}
      onClick={onClick}
    >
      <div>
        <div
          className={`${
            height ? `min-h-[${height}]` : 'min-h-[350px]'
          } card md:shadow-none flex flex-col justify-start rounded-lg bg-white shadow-custom transition duration-200 ease-in-out hover:shadow-custom md:hover:scale-105`}
        >
          <div className='prod-img'>
            <ProductPhoto
              src={mainImage}
              alt={productName}
              style={{
                minHeight: '215px',
                height: '215px',
                objectFit: 'cover',
              }}
            />
          </div>
          <div className='flex flex-col p-5'>
            <div>
              {/* add variants in future */}
              {/* {variants.length !== 0 && <ColorVariants items={variants.color} />} */}
            </div>
            <div className='prod-title'>
              <div className='text-gray-900 text-2xl font-bold uppercase'>
                <ListingItemTitle title={productName} />
              </div>
            </div>
            <div className='text-gray-900 flex flex-row items-center justify-between md:flex-row'>
              <ProductPrice {...price} />
              <AddToCartButton onClick={onAddToCart} isLoading={loading} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(ListingItem);
