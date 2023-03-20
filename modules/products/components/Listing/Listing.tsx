import { FC, useCallback, useEffect } from 'react';

import { useRouter } from 'next/router';
import { useSize } from '../../../main/hooks/useSize';
import { useProducts } from '../../hooks/useProducts';
import ListingItem from './ListingItem/ListingItem';
import ListingTotalInfo from './ListingTotalInfo/ListingTotalInfo';

export const TRACKABLE_LISTING_ITEM_KEY = 'TRACKABLE_LISTING_ITEM';

export interface IListingProps {}

let trackableId: string | null = '';

const Listing: FC<IListingProps> = ({}) => {
  const router = useRouter();
  //   const isBackToTopVisible = useVisibilityOnScrollTrigger('bottom');
  const { items, isLoading } = useProducts();

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

  return (
    <div className={'flex flex-col items-center justify-center gap-10'}>
      {/* <ListingHeader tags={tags} vendor={vendor}> */}

      <ListingTotalInfo total={items.length} />
      <div className='grid grid-cols-4 gap-10'>
        {items.map((item, index) => (
          <ListingItem
            key={`${item.title}-${index}`}
            trackable={true}
            size={itemSize}
            trackableRefCallback={
              Number(trackableId) === Number(item.productId)
                ? onTrackableRefCallback
                : undefined
            }
            height={'480px'}
            {...item}
          />
        ))}
      </div>
      {/* {!isLoading && pagination.total > 0 && (
        <ListingPagination total={pagination.total} />
      )} */}
    </div>
  );
};

export default Listing;
