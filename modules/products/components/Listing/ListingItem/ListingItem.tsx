import { FC, memo } from 'react';

import Link from 'next/link';
import { IPriceModel, IVariantsModel } from '../../../models';
import ProductPhoto from '../../ProductPhoto/ProductPhoto';
import ListingItemTitle from '../ListingItemTitle/ListingItemTitle';

export const TRACKABLE_LISTING_ITEM_KEY = 'TRACKABLE_LISTING_ITEM_KEY';

interface IListingItemProps {
  size?: 'small' | 'regular';
  productId: string;
  href: string;
  imageUrl: string;
  title: string;
  price: IPriceModel;
  classification: string[];
  hasFreeShipping: boolean;
  hasFreeDelivery: boolean;
  bestseller: boolean;
  isSkeleton?: boolean;
  variants?: IVariantsModel;
  height?: string;
  trackable?: boolean;
  trackableRefCallback?: (node: HTMLElement) => void;
}

const ListingItem: FC<IListingItemProps> = ({
  size = 'regular',
  height,
  productId,
  classification,
  href,
  imageUrl,
  title,
  price,
  hasFreeShipping,
  hasFreeDelivery,
  bestseller,
  isSkeleton = false,
  trackable,
  variants = [],
  trackableRefCallback,
}) => {
  const productPrice = price?.promoPrice || price?.regularPrice;

  const onClick = () => {
    if (trackable) {
      sessionStorage.setItem(TRACKABLE_LISTING_ITEM_KEY, productId);
    }
  };

  if (isSkeleton) {
    return null; // <ListingItemSkeleton height={height} size={size} />;
  }

  return (
    <Link href={href} prefetch={false} legacyBehavior>
      <a
        style={{
          height,
        }}
        className={`rounded-lg border border-tertiary-100 bg-primary-100 shadow transition-shadow hover:shadow-lg ${
          size === 'regular' ? 'h-80' : 'h-96'
        }`}
        href={href}
        ref={trackableRefCallback}
        onClick={onClick}
        class='group'
      >
        {/* {Boolean(price.percentageDiscount) && (
          <CampaignBadge
            floating={{
              top: '1rem',
              right: '1rem',
            }}
            label={`-${price.promoPercentage}%`}
          />
        )} */}
        <ProductPhoto
          src={imageUrl}
          alt={title}
          padding={size === 'small' ? 'p-1' : 'p-1-5'}
        />
        <div className=''>
          <div
            className={
              'group-hover:opacity-1 h-0 bg-gray opacity-0 transition-all transition will-change-transform group-hover:h-10 motion-reduce:transition-none motion-reduce:hover:transform-none'
            }
          >
            <p>like button</p>
            <p>add to cart</p>
            {/* <ProductLikeButton
              size={size === 'small' ? 'tiny' : 'small'}
              productId={productId}
              gaEvent={gaEvent}
              fab={true}
            />
            <AddProductToCartFab
              productId={productId}
              vendorId={vendor.id}
              name={title}
              price={productPrice}
              currency={price.currency}
              quantity={1}
            /> */}
          </div>
          {/* <ProductBrandLink
            size={'small'}
            vendor={vendor}
            classification={classification}
          /> */}
          <ListingItemTitle title={title} />
          <div className={'listing-item__price'}>
            {/* <ProductPriceBadge size={'small'} {...price} /> */}
            {productPrice}
            {/* {(hasFreeShipping || isFreeDeliveryPromotion) &&
              !hasFreeDelivery && (
                <ProductFreeDeliveryBadge {...freeDeliveryBadge} />
              )}
            {(hasFreeShipping || isFreeDeliveryPromotion) &&
              hasFreeDelivery && (
                <ProductFreeDeliveryBadge {...freeDeliveryBadge} />
              )}
            {!hasFreeShipping &&
              !isFreeDeliveryPromotion &&
              hasFreeDelivery &&
              MOV_FREE_DELIVERY_PRICE < price.price && (
                <ProductFreeDeliveryBadge {...freeDeliveryBadge} />
              )} */}
          </div>
          {/* {variants.length > 0 && (
            <div className={'listing-item__variants'}>
              <ListingItemVariants variants={variants} />
            </div>
          )} */}
        </div>
      </a>
    </Link>
  );
};

export default memo(ListingItem);
