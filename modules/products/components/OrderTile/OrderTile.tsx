import { useTranslation } from 'next-i18next';
import Link from 'next/link';
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
    <ul className='bg-gray-100 w-100 text-gray-600 hover:text-gray-700 shadow-2xl mt-3 rounded px-2'>
      <li className='w-100 mb-5 flex items-center'>
        <span>
          {t('orderNumber')} <span className='font-bold'>{orderId}</span>
        </span>
        <span className='ml-auto'>
          <span className='rounded text-sm'>Status: {paymentStatus}</span>
        </span>
      </li>
      {items.map((item) => {
        const { promoPrice, price, currency } = item.price;

        return (
          <Link
            href={getProductHref(item.productName, item.id)}
            passHref
            key={item.id}
          >
            <li className='hover:shadow flex cursor-pointer items-center justify-between p-2 py-3 px-2 shadow-custom'>
              <span>{item.productName}</span>
              <div className='flex flex-row items-center gap-5'>
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
