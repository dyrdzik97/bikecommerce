import { createContext, ReactNode, useContext, useState } from 'react';

import { useRouter } from 'next/router';
import { IProductDTO } from '../modules/products/dto/productDTO';

interface ICartContextProviderProps {
  children: ReactNode;
}

// cart: {
//     cartId: 0,
//     userId: 0,
//     orderId, 0,
//     status: 'processing' | 'paid' | 'deleted'
//     items: IItem[],
// }

export interface ICart {
  cartId: string;
  orderId: string;
  userId?: string;
  status: 'processing' | 'paid' | 'deleted';
  items: IProductDTO[];
}

const CartContext = createContext({
  cartDetails: {},
  addToCart: (cartDetails: ICart) => {},
  setItems: (item: any) => {},
  items: [],
});

export const CartContextProvider = ({
  children,
}: ICartContextProviderProps) => {
  const router = useRouter();
  const [cartDetails, setCartDetails] = useState({}) as any;
  const [items, setCartItems] = useState([]) as any[];

  const setItems = (item: any): any => {
    setCartItems((prev: any) => [...prev, item]);
  };

  const addToCart = (cartDetails: ICart) => {
    console.warn('in', cartDetails);

    setCartDetails((prev: any) => ({
      ...prev,
      cartDetails: {
        ...cartDetails,
        items: [...cartDetails.items, ...items],
      },
      //   cartDetails: {
      //     items: items,
      //   },
    }));
  };
  console.warn({ cartDetails, items });

  //   useEffect(() => {}, [router.asPath]);

  return (
    <CartContext.Provider
      value={{
        cartDetails,
        items,
        addToCart,
        setItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
