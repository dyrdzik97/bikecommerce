import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../services/firebaseConfig';
import { getProductTiles, isProductBelongsToGivenCategory } from '../mappers';

// wyciągnac do góry i na listingu sprawdzac -> potem dostepne katergorie jestli query złe

export const getProductsFromDatabase = async (
  category?: string | string[] | undefined
) => {
  const data: any = await getDocs(collection(db, 'products')).then(
    (querySnapshot) => {
      return querySnapshot.docs.map((doc) => doc.data());
    }
  );

  // when query will be wrong - always will return all of products
  // dodac na UI ze query jest zle i wyswietlamy wszystkie produkty i np dostepne kategorie
  const results = isProductBelongsToGivenCategory(category)
    ? getProductTiles(data).filter((item) =>
        item.categories.includes(category as string)
      )
    : getProductTiles(data);

  return {
    items: results,
  };
};
