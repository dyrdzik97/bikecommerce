import { FC, memo } from 'react';

import Link from 'next/link';
import AddToCartButton from '../../../../ui/components/Buttons/AddToCartButton/AddToCartButton';
import { IPriceModel } from '../../../models';
import ProductPhoto from '../../ProductPhoto/ProductPhoto';
import ProductPrice from '../../ProductPrice/ProductPrice';
import ListingItemTitle from '../ListingItemTitle/ListingItemTitle';

export const TRACKABLE_LISTING_ITEM_KEY = 'TRACKABLE_LISTING_ITEM_KEY';

interface IListingItemProps {
  size?: 'small' | 'regular';
  productId: string;
  href?: string;
  mainImage?: string;
  title?: string;
  price?: IPriceModel;
  classification?: string[];
  hasFreeShipping?: boolean;
  hasFreeDelivery?: boolean;
  bestseller?: boolean;
  isSkeleton?: boolean;
  variants?: any; // IVariantsModel;
  height?: string;
  trackable?: boolean;
  trackableRefCallback?: (node: HTMLElement) => void;
}

//  productId, title, classification, hasFreeDelivery  = false, bestseller = false

// Optional<IListingItemProps> ??

const ListingItem: FC<IListingItemProps> = ({
  size = 'regular',
  height,
  productId,
  href = '',
  mainImage,
  title = '',
  price = {
    promoPrice: 0,
    price: 0,
  },
  hasFreeShipping = false,
  hasFreeDelivery = false,
  bestseller = false,
  isSkeleton = false,
  trackable,
  variants = [],
  trackableRefCallback,
}) => {
  const onClick = () => {
    if (trackable) {
      sessionStorage.setItem(TRACKABLE_LISTING_ITEM_KEY, productId);
    }
  };

  //   if (isSkeleton) {
  //     return <ListingItemSkeleton height={height} size={size} />;
  //   }

  //   const [hoverState, setHoverState] = useState('opacity-0 h-[0px]');

  return (
    <Link href={href} prefetch={false} legacyBehavior>
      <a
        href={href}
        ref={trackableRefCallback}
        onClick={onClick}
        className={`m-2 h-[${height}]`}
        // onMouseEnter={() => setHoverState('opacity-1 h-10')}
        // onMouseLeave={() => setHoverState('opacity-0 h-[0px]')}
      >
        <div className={`${size === 'regular' ? 'h-[380px]' : 'h-[480px]'}`}>
          <div className='card flex flex-col justify-center rounded-lg border-lightgray bg-white p-10 shadow-2xl transition duration-200 ease-in-out hover:border'>
            <div className='prod-img'>
              <ProductPhoto
                src={mainImage}
                alt={title}
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
                <p className='text-gray-900 text-2xl font-bold uppercase'>
                  <ListingItemTitle title={title} />
                </p>
              </div>
              <div className='text-gray-900 flex flex-row items-center justify-between md:flex-row'>
                <ProductPrice {...price} />
                <AddToCartButton onClick={() => {}} />
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default memo(ListingItem);
