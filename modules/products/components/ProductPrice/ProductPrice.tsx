import { FC, useMemo } from 'react';

import classNames from 'classnames';
import { formatPrice } from '../../../../utils/formatters';

export interface IPriceBadgeProps {
  currency?: string;
  price?: number;
  promoPrice?: number | null;
  negotiation?: boolean;
}

const ProductPrice: FC<IPriceBadgeProps> = ({
  currency,
  price,
  promoPrice,
  negotiation,
}) => {
  const hasPromotion =
    Boolean(promoPrice !== null || promoPrice > 0) && promoPrice !== price;

  const formattedPrice = useMemo(
    () => formatPrice(price, currency),
    [price, currency]
  );
  const formattedPromoPrice = useMemo(
    () => formatPrice(promoPrice, currency),
    [promoPrice, currency]
  );
  const classes = classNames('flex gap-2', {
    'text-promo': hasPromotion,
  });

  return (
    <div className={classes}>
      <span className={'product-price-badge__price'}>
        {`${hasPromotion ? formattedPromoPrice : formattedPrice}`}
      </span>
      {(hasPromotion || negotiation) && (
        <div className={'product-price-badge__append'}>
          {hasPromotion && (
            <span className={'text-xs text-lightgray line-through'}>
              {formattedPrice}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductPrice;
