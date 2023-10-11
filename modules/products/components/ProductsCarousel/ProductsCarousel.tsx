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

  useResizeObserver(itemsRef, (entry) => {
    return updateItemsWidth(entry.contentRect.width);
  });

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
      return 1.5;
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
    <div className='relative flex w-full items-center justify-center justify-center md:px-10 md:py-5'>
      <BrowserView>
        <FloatingArrowButton left='0.5rem' top='50%' onClick={onPrevious} />
      </BrowserView>
      <Swiper
        ref={itemsRef}
        slidesPerView={slidesPerView}
        spaceBetween={isMobile ? 16 : 32}
        style={{
          maxWidth: '100vw',
          justifyItems: 'center',
          marginRight: '0 !important',
        }}
      >
        {items &&
          items.map((item, index) => {
            return (
              <SwiperSlide
                className='child:bg-[#000] relative m-0 mr-0 flex h-[290px] justify-center p-2'
                key={index}
                style={{
                  //   height: '300px',
                  width: '320px',
                  //   marginRight: '0 !important',
                }}
              >
                <ListingItem
                  size={isMobile ? 'small' : 'regular'}
                  height={'290px'}
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
