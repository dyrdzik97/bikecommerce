import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Separator from '../../../ui/components/Separator/Separator';
import { IProductDTO } from '../../dto/productDTO';
import { getProductHref } from '../../mappers';

interface IOrderTileProps {
  orderId: string;
  paymentStatus: string;
  items: IProductDTO[];
}

const OrderTile = ({ orderId, paymentStatus, items }: IOrderTileProps) => {
  const { t } = useTranslation('thankyou');
  return (
    <ul className='bg-gray-100 w-100 text-gray-600 hover:text-gray-700 mt-3 rounded py-2 px-3 shadow-2xl '>
      <li className='w-100 flex items-center py-3'>
        <span>
          {t('orderNumber')} <span className='font-bold'>{orderId}</span>
        </span>
        <span className='ml-auto'>
          <span className='rounded py-1 px-2 text-sm'>
            Status: {paymentStatus}
          </span>
        </span>
      </li>
      <Separator className='my-0' />
      {items.map((item) => {
        const { promoPrice, price, currency } = item.price;

        return (
          <Link href={getProductHref(item.productName, item.id)} passHref>
            <li className='flex cursor-pointer items-center justify-between border-b p-2 py-3 py-2 hover:shadow'>
              <span>{item.productName}</span>
              <div className='flex flex-row items-center gap-2'>
                <span className='text-xs text-darkgray'>
                  {t('quantity')} {item.quantity}
                </span>
                <span className='divider-y ml-auto'>
                  {promoPrice ? promoPrice : price} {currency}
                </span>
              </div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default OrderTile;
