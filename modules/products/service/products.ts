import axios from 'axios';
import { getProductTiles } from '../mappers';
import { productsMock } from '../mocks/productsMock';

export const getProducts = async () => {
  const data = await axios
    .get('https://fakestoreapi.com/products?limit=10')
    .then((res) => res.data);

  return {
    items: getProductTiles(productsMock),
  };
};
