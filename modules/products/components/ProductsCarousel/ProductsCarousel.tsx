import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import useResizeObserver from '@react-hook/resize-observer';
import { useMemo, useRef, useState } from 'react';
import { useBreakpoint } from '../../../main/hooks/useBreakpoint';
import FloatingArrowButton from '../../../ui/components/FloatingArrowButton/FloatingArrowButton';
import BrowserView from '../../../ui/components/Views/BrowserView/BrowserView';
import { useProducts } from '../../hooks/useProducts';
import ListingItem from '../Listing/ListingItem/ListingItem';

interface IProductsCarouselProps {
  itemSize?: 'regular' | 'small';
  itemHeight: string;
}

const ProductsCarousel = ({
  itemSize = 'regular',
  itemHeight,
}: IProductsCarouselProps): JSX.Element => {
  const itemsRef = useRef<null | any>(null);
  const { isMobile } = useBreakpoint();
  const [itemsWidth, setItemsWidth] = useState(0);
  const { items, isLoading } = useProducts();

  const updateItemsWidth = (width: number) => {
    setItemsWidth(width);
  };

  useResizeObserver(itemsRef, (entry) =>
    updateItemsWidth(entry.contentRect.width)
  );

  const onNext = () => {
    if (!itemsRef.current) {
      return;
    }

    itemsRef.current.swiper.slideNext();
  };

  const onPrevious = () => {
    if (!itemsRef.current) {
      return;
    }

    itemsRef.current.swiper.slidePrev();
  };

  const slidesPerView = useMemo(() => {
    if (isMobile) {
      return 1.2;
    }
    const minItems = Math.min(4, items.length);
    const current = minItems;

    const calculateItemsNumber = (size: number): number => {
      if (itemsWidth / size < 268) {
        return calculateItemsNumber(size - 1);
      }

      return size;
    };

    if (itemsWidth) {
      return calculateItemsNumber(current);
    }

    return minItems;
  }, [isMobile, items, itemsWidth]);

  return (
    <div className='relative flex min-h-fit w-full items-center justify-center md:p-20'>
      <BrowserView>
        <FloatingArrowButton left='0.5rem' onClick={onPrevious} />
      </BrowserView>
      <Swiper
        ref={itemsRef}
        slidesPerView={slidesPerView}
        spaceBetween={isMobile ? 16 : 32}
        loop
        className='p-20'
      >
        {items &&
          items.map((item, index) => {
            return (
              <SwiperSlide
                className='relative'
                key={index}
                style={{ height: '480px' }}
              >
                <ListingItem
                  productId={`${item.productName}-${index}`}
                  size={isMobile ? 'small' : 'regular'}
                  height={'480px'}
                  {...item}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <BrowserView>
        <FloatingArrowButton right='0.5rem' onClick={onNext} />
      </BrowserView>
    </div>
  );
};

export default ProductsCarousel;
