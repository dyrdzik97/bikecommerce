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
  //   cartId: string; // ...
  //   orderId: string;
  //   userId?: string; // ?
  //   status: 'processing' | 'paid' | 'deleted';
  items: IProductDTO[];
}

interface ICartContext {
  //   cartDetails: {},
  addToCart: (cartDetails: ICart) => void;
  addToCart2: (item: any) => void;
  setItems: (item: any) => void;
  items: IProductDTO[];
}

const CartContext = createContext({} as ICartContext);

// {} as

export const CartContextProvider = ({
  children,
}: ICartContextProviderProps) => {
  const router = useRouter();
  // TODO cartDetails do wywalenia
  const [cartDetails, setCartDetails] = useState({}) as any;
  const [items, setCartItems] = useState<IProductDTO[]>([]);

  const setItems = (item: IProductDTO) => {
    setCartItems((prev) => [...prev, item]);
  };

  const addToCart = (cartDetails: ICart) => {
    setCartDetails((prev: any) => ({
      ...prev,
      cartDetails: {
        ...cartDetails,
        items: [...cartDetails.items, ...items],
      },
    }));
    // setItems(cartDetails.items);
  };

  const addToCart2 = (item: IProductDTO) => {
    setCartDetails((prev: any) => ({
      ...prev,
      cartDetails: {
        items: [...items, item],
      },
    }));
    setCartItems((prev) => [...prev, item]);
    // setItems(cartDetails.items);
  };

  //   useEffect(() => {}, [router.asPath]);

  return (
    <CartContext.Provider
      value={{
        // cartDetails,
        items,
        addToCart,
        setItems,
        addToCart2,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

// pokazanie koszyka
// szczegóły użytkownika
// płatność
