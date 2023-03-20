import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../services/firebaseConfig';
import { getProductTiles } from '../mappers';

export const getProducts = async () => {
  //   const data = await axios
  //     .get('https://fakestoreapi.com/products?limit=10')
  //     .then((res) => res.data);

  const data: any = await getDocs(collection(db, 'products')).then(
    (querySnapshot) => {
      return querySnapshot.docs.map((doc) => doc.data());
    }
  );

  return {
    items: getProductTiles(data),
  };
};
