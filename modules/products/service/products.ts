import axios from 'axios';

export const getProducts = async () => {
  const data = await axios
    .get('https://fakestoreapi.com/products?limit=10')
    .then((res) => res.data);

  return data;
};
