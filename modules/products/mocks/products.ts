import { IProductDTO } from '../dto/productDTO';

export const products: IProductDTO[] = [
    {
        productName: 'Trek Madone',
        productDescription: `Trek Emonda to zaawansowana linia wielokrotnie nagradzanych profesjonalnych rowerów szosowych. 
        Najnowszy model Trek Emonda SL 5 Disc 2021 cechuje się zrównoważoną geometrią, która pozwoli Ci jednocześnie rozwijać zawrotne prędkości i zachować pełną kontrolę w każdych warunkach. 
        Rama w rowerze szosowym Trek Emonda SL 5 Disc 2021 została stworzona z ultralekkiego włókna węglowego. Zwężana główka ramy obniża masę przy jednoczesnym zwiększeniu wytrzymałości i sztywności.
        Warto też wspomnieć o wewnętrznym prowadzeniu linek. Aerodynamiczne kształty rur sprawiają, że Trek Emonda SL 5 Disc 2021 jest teraz szybsza niż kiedykolwiek. 
        Czas przejść poziom wyżej w kolarstwie szosowym! Klasowy osprzęt Shimano 105 działa płynnie i precyzyjnie. 11-biegowy napęd oraz hydrauliczne hamulce tarczowe flat mount oznaczają pełną kontrolę niezależnie od warunków.`,
        productDetails: {
            frameSize: '56',
            drivetrain: 'Shimano 105',
            speed: '52/28',
            wheel: '28',
            tyres: 'Bontrager Speed',
            weight: '8',
        },
        regularPrice: 8000,
        promoPrice: null,
        percentageDiscount: null,
        categories: ['Road'],
        images: [
            'https://sprint-rowery.pl/media/catalog/product/cache/2cf98570d9f614fe7b8ae8291728e2d9/r/o/rower-szosowy-trek-emonda-sl-5-disc-2021-srebrny_1_.webp',
            'https://sprint-rowery.pl/media/catalog/product/cache/2cf98570d9f614fe7b8ae8291728e2d9/r/o/rower-szosowy-trek-emonda-sl-5-disc-2021-granat_1_.webp',
            'https://trek.scene7.com/is/image/TrekBicycleProducts/FXSport5Carbon_22_35786_B_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440',
        ],
        isBestseller: false,
        hasFreeShipping: false,
        variants: {
            colors: ['blue', 'red', 'green'],
        },
    },
    {
        productName: 'Specialized XS',
        productDescription: `Trek Emonda to zaawansowana linia wielokrotnie nagradzanych profesjonalnych rowerów szosowych. 
        Najnowszy model Trek Emonda SL 5 Disc 2021 cechuje się zrównoważoną geometrią, która pozwoli Ci jednocześnie rozwijać zawrotne prędkości i zachować pełną kontrolę w każdych warunkach. 
        Rama w rowerze szosowym Trek Emonda SL 5 Disc 2021 została stworzona z ultralekkiego włókna węglowego. Zwężana główka ramy obniża masę przy jednoczesnym zwiększeniu wytrzymałości i sztywności.
        Warto też wspomnieć o wewnętrznym prowadzeniu linek. Aerodynamiczne kształty rur sprawiają, że Trek Emonda SL 5 Disc 2021 jest teraz szybsza niż kiedykolwiek. 
        Czas przejść poziom wyżej w kolarstwie szosowym! Klasowy osprzęt Shimano 105 działa płynnie i precyzyjnie. 11-biegowy napęd oraz hydrauliczne hamulce tarczowe flat mount oznaczają pełną kontrolę niezależnie od warunków.`,
        productDetails: {
            frameSize: '52',
            drivetrain: 'Shimano Dura Ace',
            speed: '52/38/28',
            wheel: '28',
            tyres: 'Continental',
            weight: '10',
        },
        regularPrice: 10000,
        promoPrice: 7500,
        percentageDiscount: 25,
        categories: ['Road', 'Gravel'],
        images: [
            'https://sprint-rowery.pl/media/catalog/product/cache/2cf98570d9f614fe7b8ae8291728e2d9/r/o/rower-szosowy-trek-emonda-sl-5-disc-2021-srebrny_1_.webp',
            'https://sprint-rowery.pl/media/catalog/product/cache/2cf98570d9f614fe7b8ae8291728e2d9/r/o/rower-szosowy-trek-emonda-sl-5-disc-2021-granat_1_.webp',
            'https://trek.scene7.com/is/image/TrekBicycleProducts/FXSport5Carbon_22_35786_B_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440',
        ],
        isBestseller: true,
        hasFreeShipping: false,
        variants: {
            colors: ['blue', 'red', 'green'],
        },
    },
];
