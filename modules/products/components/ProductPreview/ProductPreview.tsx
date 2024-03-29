import Link from 'next/link';
import { useCart } from '../../../../context/CartContext';
import { getProductHref } from '../../mappers';
import QuantityButton from '../Buttons/QuantityButton/QuantityButton';
import RemoveProductButton from '../Buttons/RemoveProductButton/RemoveProductButton';
import ProductPhoto from '../ProductPhoto/ProductPhoto';
import ProductPrice from '../ProductPrice/ProductPrice';

interface IProductPreviewProps {
  id: string;
  productName: string;
  productDescription: string;
  productDetails: {
    frameSize: string; // 56
    drivetrain: string; // Shimano Dura Ace
    speed: string; // 52/32
    wheel: string; // 28'
    tyres: string; // Continental
    weight: string; // 25
  };
  price: {
    currency: string;
    price: number;
    promoPrice?: number | null;
    percentageDiscount?: number | null;
  };
  categories: string[];
  images: string[];
  mainImage: string;
  isBestseller: boolean;
  hasFreeDelivery?: boolean;
  quantity: number;
  availableQuantity?: number;
}

const ProductPreview = (item: IProductPreviewProps): JSX.Element => {
  const { onChangeQuantityCart, removeFromCart } = useCart();

  const { mainImage, productName, price, quantity, id } = item;
  const productHref = getProductHref(productName, id);

  return (
    <div
      className={`card flex min-h-[80px] w-full flex-row justify-between gap-5 border-b border-tertiary-100 p-5`}
    >
      <div className='card h-full flex flex-row gap-5'>
        <ProductPhoto
          className='h-[62px] w-[92px] rounded-xl'
          src={mainImage}
          alt={productName}
          padding={'p-1'}
        >
          <RemoveProductButton onClick={() => removeFromCart(item)} />
        </ProductPhoto>
        <Link href={productHref} className='flex flex-row gap-5'>
          <div className='text-gray-900 text-md font-bold uppercase'>
            {productName}
          </div>
        </Link>
      </div>
      <div className='h-full flex flex-col justify-start gap-3'>
        <div className='text-wrap flex flex-row gap-4'>
          <ProductPrice {...price} className='justify-end' />
        </div>
        <div className='text-gray-900 flex flex-row items-center justify-end '>
          <QuantityButton
            quantity={quantity}
            onIncrease={() => onChangeQuantityCart('increase', item)}
            onDecrease={() => onChangeQuantityCart('decrease', item)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
