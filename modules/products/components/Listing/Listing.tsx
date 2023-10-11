import { FC, useCallback, useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { useSize } from '../../../main/hooks/useSize';
import { useProducts } from '../../hooks/useProducts';
import ScrollToTopButton from '../Buttons/ScrollToTopButton/ScrollToTopButton';
import ListingHeader from './ListingHeader/ListingHeader';
import ListingItem from './ListingItem/ListingItem';
import ListingTotalInfo from './ListingTotalInfo/ListingTotalInfo';

export const TRACKABLE_LISTING_ITEM_KEY = 'TRACKABLE_LISTING_ITEM';

export interface IListingProps {}

let trackableId: string | null = '';
const listingPlaceholderHeight: string = '380px';

const Listing: FC<IListingProps> = ({}) => {
  const router = useRouter();
  const categoryPath = router.query.category;
  const [showButton, setShowButton] = useState(false);
  const { items, isLoading } = useProducts(categoryPath);

  const itemSize = useSize();

  useEffect(() => {
    router.beforePopState(() => {
      trackableId = sessionStorage.getItem(TRACKABLE_LISTING_ITEM_KEY);

      sessionStorage.removeItem(TRACKABLE_LISTING_ITEM_KEY);

      return true;
    });
  }, []);

  const onTrackableRefCallback = useCallback((node: HTMLElement) => {
    if (node && trackableId) {
      const { top, height } = node.getBoundingClientRect();

      window.scrollTo(0, top + height - window.innerHeight / 2);

      trackableId = '';

      sessionStorage.removeItem(TRACKABLE_LISTING_ITEM_KEY);
    }
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    showButton &&
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
  };

  return (
    <div className={'flex flex-col items-center justify-center gap-5'}>
      <ListingHeader />
      <ListingTotalInfo total={isLoading ? '...' : items.length.toString()} />
      <div className='grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-4'>
        {items.map((item, index) => (
          <ListingItem
            key={`${item.productName}-${index}`}
            trackable={true}
            size={itemSize}
            trackableRefCallback={
              Number(trackableId) === Number(item.id)
                ? onTrackableRefCallback
                : undefined
            }
            height={listingPlaceholderHeight}
            {...item}
          />
        ))}
      </div>
      <ScrollToTopButton onClick={scrollToTop} showButton={showButton} />
    </div>
  );
};

export default Listing;
