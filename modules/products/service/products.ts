import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../services/firebaseConfig';
import { getProductTiles } from '../mappers';

enum Categories {
  gravel = 'gravel',
  city = 'city',
  road = 'road',
  cross = 'cross',
}

export const getProducts = async (category?: string | string[] | undefined) => {
  const data: any = await getDocs(collection(db, 'products')).then(
    (querySnapshot) => {
      return querySnapshot.docs.map((doc) => doc.data());
    }
  );

  // when query will be wrong - always will return all of products
  const results = Object.values(Categories).includes(category as Categories)
    ? getProductTiles(data).filter((item) =>
        item.categories.includes(category as string)
      )
    : getProductTiles(data);

  return {
    items: results,
  };
};
