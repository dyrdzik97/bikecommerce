import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useRouter } from 'next/router';

interface IProductContextProviderProps {
  children: ReactNode;
}

const ProductContext = createContext({
  quantity: 0,
  setQuantity: (quantity: number) => {},
});

export const ProductContextProvider = ({
  children,
}: IProductContextProviderProps) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [router.asPath]);

  return (
    <ProductContext.Provider
      value={{
        quantity,
        setQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
