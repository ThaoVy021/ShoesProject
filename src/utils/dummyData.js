export const dataPersonal = [
  {
    id: '1',
    name: 'Starbuck coffee',
    time: '9:02 AM',
    date: '22/02/2022',
    amount: 1200000,
    billCode: 'MKG3-HK1K-OP2A-9XDE',
  },
  {
    id: '2',
    name: 'Lottery.com',
    time: '10:09 AM',
    date: '22/02/2022',
    amount: 1200000,
    billCode: 'MKG3-HK1K-OP2A-9XDE',
  },
  {
    id: '3',
    name: 'Lottery.com',
    time: '3:01 PM',
    date: '22/02/2022',
    amount: 1200000,
    billCode: 'MKG3-HK1K-OP2A-9XDE',
  },
  {
    id: '4',
    name: 'Starbuck coffee',
    time: '9:00 AM',
    date: '22/02/2022',
    amount: 502000,
    billCode: 'MKG3-HK1K-OP2A-9XDE',
  },
];

export const dataGetAllCategory = [
  {
    id: 'ADIDAS',
    category: 'ADIDAS',
    categoryParent:
      '[{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    categoryChild: '[]',
    deleted: false,
    productList: '[1,2,3,4,5,6,7,8]',
    alias: 'adidas',
  },
  {
    id: 'MEN',
    category: 'MEN',
    categoryParent: '[]',
    categoryChild:
      '[{"id":"NIKE","category":"NIKE"},{"id":"ADIDAS","category":"ADIDAS"},{"id":"VANS_CONVERSE","category":"VANS CONVERSE"}]',
    deleted: false,
    productList: '[2,4,6,8,10,12,14,16,18,19]',
    alias: 'men',
  },
  {
    id: 'NIKE',
    category: 'NIKE',
    categoryParent:
      '[{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    categoryChild: '[]',
    deleted: false,
    productList: '[9,10,11,12,13,14,15,16]',
    alias: 'nike',
  },
  {
    id: 'VANS_CONVERSE',
    category: 'VANS CONVERSE',
    categoryParent:
      '[{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    categoryChild: '[]',
    deleted: false,
    productList: '[17,18,19]',
    alias: 'vans-converse',
  },
  {
    id: 'WOMEN',
    category: 'WOMEN',
    categoryParent: '[]',
    categoryChild:
      '[{"id":"NIKE","category":"NIKE"},{"id":"ADIDAS","category":"ADIDAS"},{"id":"VANS_CONVERSE","category":"VANS CONVERSE"}]',
    deleted: false,
    productList: '[1,3,5,7,9,10,11,13,15,17,18,19]',
    alias: 'women',
  },
];

export const dataProduct = [
  {
    id: 1,
    name: 'Adidas Prophere',
    alias: 'adidas-prophere',
    price: 350,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: '[36,37,38,39,40,41,42]',
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 995,
    deleted: false,
    categories:
      '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[2,3,5]',
    feature: true,
    image: 'http://svcy3.myclass.vn/images/adidas-prophere.png',
  },
  {
    id: 2,
    name: 'Adidas Prophere Black White',
    alias: 'adidas-prophere-black-white',
    price: 450,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: '[36,37,38,39,40,41,42]',
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 990,
    deleted: false,
    categories:
      '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[1,4,6]',
    feature: false,
    image: 'http://svcy3.myclass.vn/images/adidas-prophere-black-white.png',
  },
  {
    id: 3,
    name: 'Adidas Prophere Customize',
    alias: 'adidas-prophere-customize',
    price: 375,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: '[36,37,38,39,40,41,42]',
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 415,
    deleted: false,
    categories:
      '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[4,5,7]',
    feature: true,
    image: 'http://svcy3.myclass.vn/images/adidas-prophere-customize.png',
  },
  {
    id: 4,
    name: 'Adidas Super Star Red',
    alias: 'adidas-super-star-red',
    price: 465,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: '[36,37,38,39,40,41,42]',
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 542,
    deleted: false,
    categories:
      '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[7,8,6]',
    feature: false,
    image: 'http://svcy3.myclass.vn/images/adidas-super-star-red.png',
  },
  {
    id: 5,
    name: 'Adidas Swift Run',
    alias: 'adidas-swift-run',
    price: 550,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: '[36,37,38,39,40,41,42]',
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 674,
    deleted: false,
    categories:
      '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[2,3,8]',
    feature: true,
    image: 'http://svcy3.myclass.vn/images/adidas-swift-run.png',
  },
  {
    id: 6,
    name: 'Adidas Tenisky Super Star',
    alias: 'adidas-tenisky-super-star',
    price: 250,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: '[36,37,38,39,40,41,42]',
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 456,
    deleted: false,
    categories:
      '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[4,2,3]',
    feature: false,
    image: 'http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png',
  },
  {
    id: 7,
    name: 'Adidas Ultraboost 4',
    alias: 'adidas-ultraboost-4',
    price: 450,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: '[36,37,38,39,40,41,42]',
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 854,
    deleted: false,
    categories:
      '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[8,2,1]',
    feature: true,
    image: 'http://svcy3.myclass.vn/images/adidas-ultraboost-4.png',
  },
  {
    id: 8,
    name: 'Adidas Yeezy 350',
    alias: 'adidas-yeezy-350',
    price: 750,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: '[36,37,38,39,40,41,42]',
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 524,
    deleted: false,
    categories:
      '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[1,4,6]',
    feature: false,
    image: 'http://svcy3.myclass.vn/images/adidas-yeezy-350.png',
  },
  {
    id: 9,
    name: 'Nike Adapt BB',
    alias: 'nike-adapt-bb',
    price: 630,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    size: '[36,37,38,39,40,41,42]',
    shortDescription: 'Paul George is the rare high-percentage shooter',
    quantity: 599,
    deleted: false,
    categories:
      '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[10,11,13]',
    feature: true,
    image: 'http://svcy3.myclass.vn/images/nike-adapt-bb.png',
  },
  {
    id: 10,
    name: 'Nike Air Max 97',
    alias: 'nike-air-max-97',
    price: 650,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    size: '[36,37,38,39,40,41,42]',
    shortDescription: 'Paul George is the rare high-percentage shooter',
    quantity: 984,
    deleted: false,
    categories:
      '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[9,14,15]',
    feature: false,
    image: 'http://svcy3.myclass.vn/images/nike-air-max-97.png',
  },
  {
    id: 11,
    name: 'Nike Air Max 97 Blue',
    alias: 'nike-air-max-97-blue',
    price: 450,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    size: '[36,37,38,39,40,41,42]',
    shortDescription: 'Paul George is the rare high-percentage shooter',
    quantity: 875,
    deleted: false,
    categories:
      '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[10,12,17]',
    feature: true,
    image: 'http://svcy3.myclass.vn/images/nike-air-max-97-blue.png',
  },
  {
    id: 12,
    name: 'Nike Air Max 270 React',
    alias: 'nike-air-max-270-react',
    price: 750,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    size: '[36,37,38,39,40,41,42]',
    shortDescription: 'Paul George is the rare high-percentage shooter',
    quantity: 445,
    deleted: false,
    categories:
      '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[11,9,15,16]',
    feature: false,
    image: 'http://svcy3.myclass.vn/images/nike-air-max-270-react.png',
  },
  {
    id: 13,
    name: 'Nike Flyknit',
    alias: 'nike-flyknit',
    price: 350,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    size: '[36,37,38,39,40,41,42]',
    shortDescription: 'Paul George is the rare high-percentage shooter',
    quantity: 367,
    deleted: false,
    categories:
      '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[12,14,17,11]',
    feature: true,
    image: 'http://svcy3.myclass.vn/images/nike-flyknit.png',
  },
  {
    id: 14,
    name: 'Nike React Element',
    alias: 'nike-react-element',
    price: 480,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    size: '[36,37,38,39,40,41,42]',
    shortDescription: 'Paul George is the rare high-percentage shooter',
    quantity: 589,
    deleted: false,
    categories:
      '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[16,15,13]',
    feature: false,
    image: 'http://svcy3.myclass.vn/images/nike-react-element.png',
  },
  {
    id: 15,
    name: 'Nike Shox TL',
    alias: 'nike-shox-tl',
    price: 990,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    size: '[36,37,38,39,40,41,42]',
    shortDescription: 'Paul George is the rare high-percentage shooter',
    quantity: 456,
    deleted: false,
    categories:
      '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[16,14,12]',
    feature: true,
    image: 'http://svcy3.myclass.vn/images/nike-shox-tl.png',
  },
  {
    id: 16,
    name: 'Nike SP Dunk',
    alias: 'nike-sp-dunk',
    price: 450,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    size: '[36,37,38,39,40,41,42]',
    shortDescription: 'Paul George is the rare high-percentage shooter',
    quantity: 582,
    deleted: false,
    categories:
      '[{"id":"NIKE","category":"NIKE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[15,14,13]',
    feature: false,
    image: 'http://svcy3.myclass.vn/images/nike-sp-dunk.png',
  },
  {
    id: 17,
    name: 'Van Old School',
    alias: 'van-old-school',
    price: 150,
    description:
      'The Vans Coastal Classic Slip-On features sturdy low profile canvas and textile uppers, padded collars, elastic side accents, and signature rubber waffle outsoles.\r\n',
    size: '[36,37,38,39,40,41,42]',
    shortDescription:
      '\r\nThe Vans Coastal Classic Slip-On features sturdy low profile canvas and textile uppers',
    quantity: 654,
    deleted: false,
    categories:
      '[{"id":"VANS_CONVERSE","category":"VANS CONVERSE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[18,19,1,2,3]',
    feature: true,
    image: 'http://svcy3.myclass.vn/images/van-old-school.png',
  },
  {
    id: 18,
    name: 'Vans black black',
    alias: 'vans-black-black',
    price: 100,
    description:
      'The Vans Coastal Classic Slip-On features sturdy low profile canvas and textile uppers, padded collars, elastic side accents, and signature rubber waffle outsoles.\r\n',
    size: '[36,37,38,39,40,41,42]',
    shortDescription:
      '\r\nThe Vans Coastal Classic Slip-On features sturdy low profile canvas and textile uppers',
    quantity: 985,
    deleted: false,
    categories:
      '[{"id":"VANS_CONVERSE","category":"VANS CONVERSE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[19,17,4,5,6]',
    feature: false,
    image: 'http://svcy3.myclass.vn/images/vans-black-black.png',
  },
  {
    id: 19,
    name: 'Converse Chuck Taylor',
    alias: 'converse-chuck-taylor',
    price: 125,
    description:
      'The Vans Coastal Classic Slip-On features sturdy low profile canvas and textile uppers, padded collars, elastic side accents, and signature rubber waffle outsoles.\r\n',
    size: '[36,37,38,39,40,41,42]',
    shortDescription:
      '\r\nThe Vans Coastal Classic Slip-On features sturdy low profile canvas and textile uppers',
    quantity: 756,
    deleted: false,
    categories:
      '[{"id":"VANS_CONVERSE","category":"VANS CONVERSE"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[18,17,8,9,10]',
    feature: true,
    image: 'http://svcy3.myclass.vn/images/converse-chuck-taylor.png',
  },
];

export const dataGetAllUser = [
  {
    id: '1',
    name: 'Nguyen Van A',
    rank: 'Diamond',
    accumulatedScore: '100',
    email: 'nguyenvana@gmail.com',
    numberPhone: '0917171717',
    address: '123 phan văn hớn, q12',
  },
  {
    id: '2',
    name: 'Tran Thi B',
    rank: 'Sliver',
    accumulatedScore: '100',
    email: 'nguyenthib@gmail.com',
    numberPhone: '0917171727',
    address: '123 phan văn hớn, q1',
  },
];

export default {
  dataPersonal,
  dataGetAllCategory,
  dataProduct,
  dataGetAllUser,
};
