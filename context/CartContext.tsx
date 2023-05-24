import { createContext, ReactNode, useContext, useState } from 'react';

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
  items: IProductDTO[];
}

interface ICartContext {
  addToCart: (item: any) => void;
  items: IProductDTO[];
}

const CartContext = createContext({} as ICartContext);

// {} as

export const CartContextProvider = ({
  children,
}: ICartContextProviderProps) => {
  const [cartDetails, setCartDetails] = useState({}) as any;
  const [items, setCartItems] = useState<IProductDTO[]>([]);

  const addToCart = (item: IProductDTO) => {
    setCartDetails((prev: any) => ({
      ...prev,
      cartDetails: {
        items: [...items, item],
      },
    }));
    setCartItems((prev) => [...prev, item]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
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
