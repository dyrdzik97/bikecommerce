import axios from 'axios';
import { productsMock } from '../mocks/products';

export const getProducts = async () => {
  const data = await axios
    .get('https://fakestoreapi.com/products?limit=10')
    .then((res) => res.data);

  console.warn(data);

  return productsMock;
};
