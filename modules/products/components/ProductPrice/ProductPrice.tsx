import { FC, useMemo } from 'react';

import classNames from 'classnames';
import { formatPrice } from '../../../../utils/formatters';

export interface IProductPriceProps {
  currency?: string | undefined;
  price: number | null;
  promoPrice?: number | null;
  negotiation?: boolean;
  size?: 'regular' | 'small';
}

const ProductPrice: FC<IProductPriceProps> = ({
  currency,
  price,
  promoPrice,
  negotiation,
  size = 'small',
}) => {
  const hasPromotion =
    Boolean(promoPrice !== null && promoPrice! > 0) && promoPrice !== price;

  const formattedPrice = useMemo(
    () => formatPrice(price || 0, currency),
    [price, currency]
  );

  const formattedPromoPrice = useMemo(
    () => formatPrice(promoPrice!, currency),
    [promoPrice, currency]
  );

  const classes = classNames('flex gap-1 flex-wrap', {
    'text-promo': hasPromotion,
    'text-base': size === 'small',
    'text-3xl': size === 'regular',
  });

  return (
    <div className={classes}>
      <span className={'product-price-badge__price whitespace-nowrap'}>
        {`${hasPromotion ? formattedPromoPrice : formattedPrice}`}
      </span>
      {(hasPromotion || negotiation) && (
        <div className={'product-price-badge__append'}>
          {hasPromotion && (
            <span
              className={
                'whitespace-nowrap text-xs text-lightgray line-through'
              }
            >
              {formattedPrice}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductPrice;
