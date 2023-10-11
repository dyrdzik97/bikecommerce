import { IProductDTO } from '../modules/products/dto/productDTO';

const stripe = require('stripe')(process.env.STRIPE_SECRET_API_KEY);

const pageURL = 'https://bikecommerce-git-main-dyrdzik97.vercel.app/pl';

const useToStripePayment = async (
  orderId: string,
  items: IProductDTO[]
): Promise<{ url: string }> => {
  return await stripe.checkout.sessions.create({
    payment_method_types: ['card', 'blik'],
    line_items: items.map((item: IProductDTO) => ({
      price_data: {
        currency: item.price.currency,
        product_data: {
          name: item.productName,
        },
        unit_amount:
          100 *
          (item.price.promoPrice ? item.price.promoPrice : item.price.price),
      },
      quantity: item.quantity,
    })),
    mode: 'payment',
    success_url: `${pageURL}/thank-you?order=${orderId}&status=success`,
    cancel_url: `${pageURL}/thank-you?order=${orderId}&status=fail`,
  });
};

export default useToStripePayment;
