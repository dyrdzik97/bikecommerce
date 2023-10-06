import { FC, memo, useState } from 'react';

import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useCart } from '../../../../../context/CartContext';
import AddToCartButton from '../../../../ui/components/Buttons/AddToCartButton/AddToCartButton';
import { IProductDTO } from '../../../dto/productDTO';
import { IPriceModel, IProductTile } from '../../../models';
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
  item: IProductDTO | IProductTile;
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
  variants = [],
  trackableRefCallback,
  // optional to refactor
  item,
}) => {
  const { addToCart } = useCart();
  const { t, i18n } = useTranslation(['validations']);
  const [loading, setLoading] = useState(false);
  const onClick = () => {
    if (trackable) {
      sessionStorage.setItem(TRACKABLE_LISTING_ITEM_KEY, id);
    }
  };

  const onAddToCart = () => {
    setLoading(true);
    addToCart(item as IProductDTO);

    setTimeout(() => {
      setLoading(false);
    }, 200);
    toast(t('product:productAddedToCart'), {
      type: 'success',
      autoClose: 2000,
    });
  };

  if (isSkeleton) {
    return <ListingItemSkeleton height={height} size={size} />;
  }

  return (
    <Link href={href} prefetch={false} legacyBehavior>
      <a href={href} ref={trackableRefCallback as undefined} onClick={onClick}>
        <div>
          <div
            className={`${
              size === 'regular' ? 'h-[350px]' : 'h-[350px]'
            } card flex flex-col justify-center rounded-lg border-white bg-white p-10 shadow-2xl transition duration-200 ease-in-out md:hover:scale-105`}
          >
            <div className='prod-img'>
              <ProductPhoto
                src={mainImage}
                alt={productName}
                padding={size === 'small' ? 'p-1' : 'p-1-5'}
              />
            </div>
            <div className='prod-info grid gap-3'>
              {/* variants */}
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
                {/* <ProductPrice {...price} /> */}
                <ProductPrice price={price.price} />
                <AddToCartButton onClick={onAddToCart} isLoading={loading} />
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default memo(ListingItem);
