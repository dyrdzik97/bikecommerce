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
            } card md:shadow-none flex flex-col justify-start rounded-lg bg-white shadow-custom transition duration-200 ease-in-out hover:shadow-custom md:hover:scale-105`}
          >
            <div className='prod-img'>
              <ProductPhoto src={mainImage} alt={productName} />
            </div>
            <div className='flex flex-col px-5 pt-5'>
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
      </a>
    </Link>
    // <div className='border-gray-100 group my-10 flex w-full max-w-xs flex-col rounded-lg border bg-white shadow-md'>
    //   <a className='h-60 relative flex rounded-lg' href='#'>
    //     <img
    //       className='h-full peer  top-0 right-0 w-full object-cover'
    //       src={mainImage}
    //       alt='product image'
    //     />
    //     <img
    //       className='h-full top-0-right-96 peer w-full overflow-hidden rounded-lg object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0'
    //       src={mainImage}
    //       alt='product image'
    //     />
    //     <div className='absolute  bottom-0 mb-4 flex w-full justify-center space-x-4'>
    //       <div className='h-3 bg-gray-200 w-3 rounded-full border-2 border-white'></div>
    //       <div className='h-3 bg-gray-200 w-3 rounded-full border-2 border-white'></div>
    //       <div className='h-3 bg-gray-200 w-3 rounded-full border-2 border-white'></div>
    //     </div>

    //     <span className='absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white'>
    //       39% OFF
    //     </span>
    //   </a>
    //   <div className='mt-4 px-5 pb-5'>
    //     <a href='#'>
    //       <h5 className='text-slate-900 text-xl tracking-tight'>
    //         Nike Air MX Super 2500 - Red
    //       </h5>
    //     </a>
    //     <div className='mt-2 mb-5 flex items-center justify-between'>
    //       <p>
    //         <span className='text-slate-900 text-3xl font-bold'>$449</span>
    //         <span className='text-slate-900 text-sm line-through'>$699</span>
    //       </p>
    //     </div>
    //     <a
    //       href='#'
    //       className='hover:bg-gray-700 focus:ring-blue-300 flex items-center justify-center rounded-md bg-tertiary-300 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4'
    //     >
    //       <svg
    //         xmlns='http://www.w3.org/2000/svg'
    //         className='h-6 mr-2 w-6'
    //         fill='none'
    //         viewBox='0 0 24 24'
    //         stroke='currentColor'
    //         stroke-width='2'
    //       >
    //         <path
    //           stroke-linecap='round'
    //           stroke-linejoin='round'
    //           d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
    //         />
    //       </svg>
    //       Add to cart
    //     </a>
    //   </div>
    // </div>
  );
};

export default memo(ListingItem);
