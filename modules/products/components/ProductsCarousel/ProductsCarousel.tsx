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
      if (itemsWidth / size < 250) {
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
    <div className='relative flex min-h-fit w-full justify-center md:p-10'>
      <BrowserView>
        <FloatingArrowButton left='0.5rem' top='50%' onClick={onPrevious} />
      </BrowserView>
      <Swiper
        ref={itemsRef}
        slidesPerView={slidesPerView}
        spaceBetween={isMobile ? 16 : 32}
        style={{ marginRight: '0 !important' }}
      >
        {items &&
          items.map((item, index) => {
            return (
              <SwiperSlide
                className='relative mr-0 p-2'
                key={index}
                style={{ height: '350px', width: '250px' }}
              >
                <ListingItem
                  size={isMobile ? 'small' : 'regular'}
                  height={'320px'}
                  {...item}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <BrowserView>
        <FloatingArrowButton right='0.5rem' top='50%' onClick={onNext} />
      </BrowserView>
    </div>
  );
};

export default ProductsCarousel;
