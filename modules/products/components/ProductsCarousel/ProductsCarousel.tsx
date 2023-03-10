import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { useRef } from 'react';
import { Keyboard, Mousewheel, Navigation } from 'swiper';
import FloatingArrowButton from '../../../ui/components/FloatingArrowButton/FloatingArrowButton';
import { useProducts } from '../../hooks/useProducts';
import { getProductTiles } from '../../mappers';
import ListingItem from '../Listing/ListingItem/ListingItem';

interface IProductsCarouselProps {
  itemSize?: 'regular' | 'small';
  itemHeight: string;
}

const ProductsCarousel = ({
  itemSize = 'regular',
  itemHeight,
}: IProductsCarouselProps): JSX.Element => {
  const itemsRef = useRef(null);
  const data = useProducts();
  const productTiles = getProductTiles(data);

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

  // TODO - add mobile observer and handle swiper on mobile view vs browser view
  return (
    <div className='relative flex min-h-fit w-full items-center justify-center md:px-20'>
      <FloatingArrowButton left='0.5rem' onClick={onPrevious} />
      <Swiper
        ref={itemsRef}
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        centeredSlides={false}
        modules={[Navigation, Mousewheel, Keyboard]}
        loop
        className='flex items-center justify-center'
      >
        {productTiles.map((product: any, index) => (
          // TOOD type any fix
          <SwiperSlide className='relative'>
            <ListingItem
              key={index}
              href=''
              height={itemHeight}
              size={itemSize}
              imageUrl={product.mainImage}
              title={product.productName}
              {...product}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <FloatingArrowButton right='0.5rem' onClick={onNext} />
    </div>
  );
};

export default ProductsCarousel;
