import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../services/firebaseConfig';
import { getProductTiles } from '../mappers';

export const getProducts = async (category?: string | string[] | undefined) => {
  const data: any = await getDocs(collection(db, 'products')).then(
    (querySnapshot) => {
      return querySnapshot.docs.map((doc) => doc.data());
    }
  );

  const results =
    category !== undefined
      ? getProductTiles(data).filter((item) =>
          item.categories.includes(category as string)
        )
      : getProductTiles(data);

  return {
    items: results,
  };
};
