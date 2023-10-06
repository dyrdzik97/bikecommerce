import { createContext, ReactNode, useContext, useState } from 'react';

import { IProductDTO } from '../modules/products/dto/productDTO';
import { useAuth } from './AuthContext';

interface ICartContextProviderProps {
  children: ReactNode;
}

type quantityType = 'decrease' | 'increase';

export interface ICart {
  items: IProductDTO[];
}

interface ICartContext {
  addToCart: (item: IProductDTO) => void;
  removeFromCart: (item: IProductDTO) => void;
  items: IProductDTO[];
  itemsInCartCount: number;
  totalPrice: number;
  onChangeQuantityCart: (
    type: 'decrease' | 'increase',
    item: IProductDTO
  ) => void;
  deliveryPrice: number;
  setDeliveryPrice: (deliveryPrice: number) => void;
}

const CartContext = createContext({} as ICartContext);

export const CartContextProvider = ({
  children,
}: ICartContextProviderProps) => {
  const [cartDetails, setCartDetails] = useState({}) as any;
  const [items, setCartItems] = useState<IProductDTO[]>([]);
  const [deliveryPrice, setDelivery] = useState(0);
  const { user } = useAuth();

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

      localStorage.setItem(
        `cart-${item.id}`,
        JSON.stringify({
          user: JSON.stringify(user?.uid),
          items: JSON.stringify(items),
        })
      );
    }
  };

  const onChangeQuantityCart = (
    type: quantityType,
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

    return acc + itemPrice * item.quantity + deliveryPrice;
  }, 0);

  const removeFromCart = (item: IProductDTO): void => {
    const itemIndex = items.findIndex((el) => el.id === item.id);

    setCartItems(items.slice(0, itemIndex));
  };

  const setDeliveryPrice = (deliveryPrice: number) => {
    setDelivery(deliveryPrice);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        itemsInCartCount,
        totalPrice,
        onChangeQuantityCart,
        deliveryPrice,
        setDeliveryPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
