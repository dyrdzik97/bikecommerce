import Breadcrumbs from '../../../../ui/components/Breadcrumbs/Breadcrumbs';
import { IProductDTO } from '../../../dto/productDTO';
import AddProductToCartButton from '../../Buttons/AddProductToCartButton/AddProductToCartButton';
import DeliveryInfo from '../../DeliveryInfo/DeliveryInfo';
import ProductPrice from '../../ProductPrice/ProductPrice';
import ProductRating from '../../ProductRating/ProductRating';
import ProductTitle from '../../ProductTitle/ProductTitle';

interface IProductPageProps {
  product: IProductDTO;
}

const ProductPage = ({ product }: IProductPageProps): JSX.Element => {
  const { images, productName, price } = product;

  return (
    <div
      style={{ height: 'min-content', maxWidth: '1920px' }}
      className='flex w-full'
    >
      <section style={{ height: 'min-content' }} className='w-full'>
        <section className='flex items-center justify-center py-12 sm:py-16'>
          <div className='max-w-screen-2xl  px-4'>
            <Breadcrumbs />
            <div className='md:col-gap-12 md:col-gap-16 mt-8 grid grid-cols-1 gap-12 md:mt-12 md:grid-cols-2 lg:gap-16'>
              <div className='lg:col-span-3 lg:row-end-1'>
                <div className='lg:flex lg:items-start'>
                  <div className='lg:order-2 lg:ml-5'>
                    <div className='max-w-xl overflow-hidden rounded-lg'>
                      {images.map((imageUrl: string) => (
                        <div className='max-w-xl overflow-hidden rounded-lg'>
                          <img
                            className='h-full w-full max-w-full object-cover'
                            src={imageUrl}
                            alt=''
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className='sticky top-0 w-[416px] lg:col-span-2 lg:row-span-2 lg:row-end-2'
                style={{ height: 'min-content' }}
              >
                <ProductTitle title={productName} />
                <ProductRating />

                <div className='mt-10 flex flex-col items-start justify-between gap-10 space-y-4 border-t border-b py-4  sm:space-y-0'>
                  <ProductPrice size={'regular'} {...price} />
                  <AddProductToCartButton />
                </div>

                <DeliveryInfo />
              </div>

              {/* details */}
              {/* <div className='lg:col-span-3'>
                <div className='border-gray-300 border-b'>
                  <nav className='flex gap-4'>
                    <a
                      href='#'
                      title=''
                      className='border-gray-900 text-gray-900 hover:border-gray-400 hover:text-gray-800 border-b-2 py-4 text-sm font-medium'
                    >
                      {' '}
                      Description{' '}
                    </a>

                    <a
                      href='#'
                      title=''
                      className='border-transparent text-gray-600 inline-flex items-center border-b-2 py-4 text-sm font-medium'
                    >
                      Reviews
                      <span className='bg-gray-500 text-gray-100 ml-2 block rounded-full px-2 py-px text-xs font-bold'>
                        {' '}
                        1,209{' '}
                      </span>
                    </a>
                  </nav>
                </div>

                <div className='mt-8 flow-root sm:mt-12'>
                  <h1 className='text-3xl font-bold'>Delivered To Your Door</h1>
                  <p className='mt-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia accusantium nesciunt fuga.
                  </p>
                  <h1 className='mt-8 text-3xl font-bold'>
                    From the Fine Farms of Brazil
                  </h1>
                  <p className='mt-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio numquam enim facere.
                  </p>
                  <p className='mt-4'>
                    Amet consectetur adipisicing elit. Optio numquam enim
                    facere. Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Dolore rerum nostrum eius facere, ad neque.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProductPage;
