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
  itemsInCartCount: number;
  totalPrice: number;
  onChangeQuantityCart: (
    type: 'decrease' | 'increase',
    item: IProductDTO
  ) => void;
  onRemoveFromCart: (item: IProductDTO) => void;
}

const CartContext = createContext({} as ICartContext);

// {} as

export const CartContextProvider = ({
  children,
}: ICartContextProviderProps) => {
  const [cartDetails, setCartDetails] = useState({}) as any;
  const [items, setCartItems] = useState<IProductDTO[]>([]);

  const isItemInCart = (item: IProductDTO) => {
    return (
      items.find((availableItem) => {
        return availableItem.id === item.id;
      }) || false
    );
  };

  const addToCart = (item: IProductDTO) => {
    if (isItemInCart(item)) {
      setCartItems(
        items.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...item, quantity: 1 }]);
    }
  };

  const onChangeQuantityCart = (
    type: 'decrease' | 'increase',
    item: IProductDTO
  ): void => {
    setCartItems(
      items.map((cartItem) =>
        cartItem.id === item.id
          ? {
              ...cartItem,
              quantity:
                type === 'increase'
                  ? cartItem.quantity + 1
                  : cartItem.quantity - 1,
            }
          : cartItem
      )
    );
  };

  const itemsInCartCount = items
    .map((item) => item.quantity)
    .reduce((acc, curr) => acc + curr, 0);

  const totalPrice = items.reduce((acc, item) => {
    const { price, promoPrice } = item.price;
    const itemPrice: number =
      promoPrice !== null ? (promoPrice as number) : (price as number);

    return acc + itemPrice * item.quantity;
  }, 0);

  const onRemoveFromCart = (item: IProductDTO): void => {
    const itemIndex = items.findIndex((el) => el.id === item.id);

    setCartItems(items.slice(0, itemIndex));
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        itemsInCartCount,
        totalPrice,
        onChangeQuantityCart,
        onRemoveFromCart,
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
