import { IProductDTO } from '../modules/products/dto/productDTO';

const stripe = require('stripe')(process.env.STRIPE_SECRET_API_KEY);

const useToStripePayment = async (
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
    // TODO handle backing to app to thank you page
    success_url: 'https://localhost:3000/pl' + '/thank-you?success',
    cancel_url: 'https://localhost:3000/pl' + '/thank-you?fail',
  });
};

export default useToStripePayment;