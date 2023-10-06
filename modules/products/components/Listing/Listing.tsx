import { FC, useCallback, useEffect } from 'react';

import { useRouter } from 'next/router';
import { useSize } from '../../../main/hooks/useSize';
import { useProducts } from '../../hooks/useProducts';
import { IProductTile } from '../../models';
import ListingHeader from './ListingHeader/ListingHeader';
import ListingItem from './ListingItem/ListingItem';
import ListingTotalInfo from './ListingTotalInfo/ListingTotalInfo';

export const TRACKABLE_LISTING_ITEM_KEY = 'TRACKABLE_LISTING_ITEM';

export interface IListingProps {}

let trackableId: string | null = '';

const Listing: FC<IListingProps> = ({}) => {
  const router = useRouter();
  const categoryPath = router.query.category;

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

  return (
    <div className={'flex flex-col items-center justify-center gap-10'}>
      <ListingHeader />
      <ListingTotalInfo total={isLoading ? '...' : items.length.toString()} />
      <div className='grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-10'>
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
            height={'480px'}
            {...item}
            // TODO to refactor, or all item or only few props
            item={item as IProductTile}
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
