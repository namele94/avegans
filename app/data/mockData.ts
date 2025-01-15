import {Product, Filter} from '../types';

export const products: Product[] = [
  {
    id: '10',
    name: 'Semolina cake with cherry jam',
    image: 'https://www.gurmanluk.com/wp-content/uploads/2021/01/monte.png',
    price: 29,
    oldPrice: 35,
    calories: '282 Kcal',
    weight: '224 g',
    category: 'Breakfast',
    description:
      'A soft semolina cake served with a tangy cherry jam, perfect for dessert lovers.',
  },
  {
    id: '11',
    name: 'Grilled chicken with vegetables',
    image:
      'https://avatars.mds.yandex.net/i?id=b08eb365230e1b8d76d34c5e87d2ff17_l-8183963-images-thumbs&n=13',
    price: 35,
    oldPrice: 40,
    calories: '320 Kcal',
    weight: '300 g',
    category: 'Lunch',
    description:
      'Juicy grilled chicken paired with fresh, colorful vegetables for a hearty meal.',
  },
  {
    id: '12',
    name: 'Pasta with tomato sauce',
    image:
      'https://moreprodukt.info/wp-content/uploads/2019/11/spagetti_i_tunets.zxj0t.png',
    price: 25,
    oldPrice: 30,
    calories: '250 Kcal',
    weight: '200 g',
    category: 'Dinner',
    description:
      'Classic Italian pasta in a rich tomato sauce, garnished with fresh basil.',
  },
  {
    id: '13',
    name: 'Salmon with herbs',
    image:
      'https://cdn.shopify.com/s/files/1/1537/4819/files/Screen_Shot_2020-10-06_at_8.24.11_PM.png?v=1601987409',
    price: 45,
    oldPrice: 50,
    calories: '280 Kcal',
    weight: '250 g',
    category: 'Lunch',
    description:
      'Freshly grilled salmon fillet with a blend of aromatic herbs for a light, nutritious meal.',
  },
  {
    id: '14',
    name: 'Cheesecake with strawberries',
    image:
      'https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/sites/2/2019/05/07142008/homeubuntureleasesrelease_20190505071537webappmu-pluginsfoody-white-labeltmp1557228007-jZEExr.png',
    price: 20,
    oldPrice: 25,
    calories: '360 Kcal',
    weight: '150 g',
    category: 'Breakfast',
    description:
      'A creamy cheesecake topped with fresh strawberries and drizzled with sweet berry sauce.',
  },
  {
    id: '15',
    name: 'Chocolate cake',
    image:
      'https://i.pinimg.com/736x/f9/dc/b0/f9dcb008a61b996656c5e8037f82be56.jpg',
    price: 18,
    oldPrice: 22,
    calories: '420 Kcal',
    weight: '200 g',
    category: 'Breakfast',
    description:
      'Rich and decadent chocolate cake layered with smooth chocolate frosting.',
  },
  {
    id: '16',
    name: 'Vegetable salad with feta',
    image:
      'https://as2.ftcdn.net/jpg/00/77/86/97/500_F_77869700_TntgBRb2cCrUheOFsLCU7TrOMWTkZmat.jpg',
    price: 19,
    oldPrice: 25,
    calories: '200 Kcal',
    weight: '180 g',
    category: 'Lunch',
    description:
      'A fresh vegetable salad with feta cheese, perfect for a light and healthy meal.',
  },
  {
    id: '17',
    name: 'Beef steak with fries',
    image:
      'https://t4.ftcdn.net/jpg/01/17/85/73/360_F_117857361_79u6JFB5H2frAzuolUgU1TJojgexu59s.jpg',
    price: 40,
    oldPrice: 45,
    calories: '500 Kcal',
    weight: '350 g',
    category: 'Dinner',
    description:
      'Juicy grilled beef steak served with crispy golden fries for a satisfying meal.',
  },
  {
    id: '18',
    name: 'Fruit platter',
    image:
      'https://i.pinimg.com/736x/a0/6e/60/a06e60d662a3be27fc19948f2c98d497--fruit-platters-game-night.jpg',
    price: 22,
    oldPrice: 28,
    calories: '180 Kcal',
    weight: '300 g',
    category: 'Breakfast',
    description:
      'A colorful assortment of fresh fruits, perfect for a refreshing snack or dessert.',
  },
  {
    id: '19',
    name: 'Avocado toast',
    image:
      'https://avatars.mds.yandex.net/i?id=7af392fb031e9fb47acbcecb613a89f7_l-10636447-images-thumbs&n=13',
    price: 15,
    oldPrice: 20,
    calories: '210 Kcal',
    weight: '180 g',
    category: 'Breakfast',
    description:
      'Crunchy toast topped with creamy avocado and seasoned with spices for a quick snack.',
  },
  {
    id: '20',
    name: 'Vegetable soup',
    image:
      'https://i.pinimg.com/736x/e4/15/58/e4155835a3598c01567e5386d12a1352--veggie-soup-vegetable-soups.jpg',
    price: 12,
    oldPrice: 15,
    calories: '120 Kcal',
    weight: '250 g',
    category: 'Lunch',
    description:
      'Warm vegetable soup made with fresh seasonal vegetables, perfect for a comforting meal.',
  },
  {
    id: '21',
    name: 'Greek Salad',
    image:
      'https://www.chefmarket.ru/blog/wp-content/uploads/2018/07/grecheskiy-salat-1-e1686047817994.jpg',
    price: 19,
    oldPrice: 23,
    calories: '220 Kcal',
    weight: '200 g',
    category: 'Lunch',
    description:
      'A classic Greek salad with fresh vegetables, feta cheese, and olives, dressed with olive oil.',
  },
  {
    id: '22',
    name: 'Grilled Shrimp Skewers',
    image:
      'https://i.pinimg.com/736x/3a/6d/f4/3a6df4d2096380fc54465396c1f7fe17.jpg',
    price: 30,
    oldPrice: 35,
    calories: '190 Kcal',
    weight: '250 g',
    category: 'Dinner',
    description:
      'Tender shrimp skewers grilled to perfection, served with a side of tangy dipping sauce.',
  },
  {
    id: '23',
    name: 'Chicken Caesar Salad',
    image:
      'https://www.chefmarket.ru/blog/wp-content/uploads/2019/08/caesar-salad-e1565347162946.jpg',
    price: 24,
    oldPrice: 28,
    calories: '280 Kcal',
    weight: '230 g',
    category: 'Lunch',
    description:
      'Crisp romaine lettuce topped with grilled chicken, parmesan, and Caesar dressing.',
  },
  {
    id: '24',
    name: 'Roasted Salmon',
    image:
      'https://i.pinimg.com/originals/9d/98/73/9d9873840e1503b56a4446f56e975cb2.jpg',
    price: 45,
    oldPrice: 50,
    calories: '310 Kcal',
    weight: '300 g',
    category: 'Dinner',
    description:
      'Succulent roasted salmon with a crispy skin, served with seasonal vegetables.',
  },
  {
    id: '25',
    name: 'Tuna Poke Bowl',
    image:
      'https://i.pinimg.com/736x/74/d7/8a/74d78a6cb30598d950048aa090eb6c34.jpg',
    price: 35,
    oldPrice: 40,
    calories: '350 Kcal',
    weight: '280 g',
    category: 'Lunch',
    description:
      'Fresh tuna poke bowl with rice, seaweed, and a medley of colorful vegetables.',
  },
  {
    id: '26',
    name: 'Vegetable Stir Fry',
    image:
      'https://thumbs.dreamstime.com/b/stir-fry-vegetables-wok-stir-fry-vegetables-wok-healthy-vegan-food-low-calorie-dish-112976451.jpg',
    price: 25,
    oldPrice: 29,
    calories: '180 Kcal',
    weight: '300 g',
    category: 'Dinner',
    description:
      'A medley of stir-fried vegetables seasoned with soy sauce and garlic.',
  },
  {
    id: '27',
    name: 'Spaghetti Carbonara',
    image:
      'https://i.pinimg.com/736x/bc/46/12/bc4612e97975eccecf83eeebf6d5336f.jpg',
    price: 28,
    oldPrice: 32,
    calories: '420 Kcal',
    weight: '250 g',
    category: 'Dinner',
    description:
      'Classic spaghetti carbonara with a creamy sauce, pancetta, and parmesan.',
  },
  {
    id: '28',
    name: 'Chocolate Mousse',
    image:
      'https://i.pinimg.com/736x/8a/64/99/8a649936603cea0ef93cbadb5f28f882.jpg',
    price: 15,
    oldPrice: 18,
    calories: '320 Kcal',
    weight: '150 g',
    category: 'Breakfast',
    description:
      'Velvety chocolate mousse topped with whipped cream for a sweet finish.',
  },
  {
    id: '29',
    name: 'Pumpkin Soup',
    image:
      'https://i.pinimg.com/originals/05/79/bc/0579bcbf7ea114203409c38b46ee63ea.jpg',
    price: 12,
    oldPrice: 15,
    calories: '110 Kcal',
    weight: '220 g',
    category: 'Lunch',
    description:
      'Creamy pumpkin soup made with roasted pumpkin and a touch of nutmeg.',
  },
  {
    id: '30',
    name: 'Iced Latte',
    image:
      'https://imageproxy.wolt.com/menu/menu-images/5e731f4692cbb00109f4acd0/879f0f8a-e66a-11ec-a653-ae151ebcbd20_ultimate_iced_latte_coffee_recipe_xs.jpeg',
    price: 12,
    oldPrice: 15,
    calories: '120 Kcal',
    weight: '300 ml',
    category: 'Breakfast',
    description:
      'Refreshing iced latte made with freshly brewed espresso and cold milk.',
  },
  {
    id: '31',
    name: 'Fresh Orange Juice',
    image:
      'https://scanformenu.ru/compiled/uploads/item_images/cb5bec4adeb2ed62ceaf5e48aef4a606_crope.png',
    price: 10,
    oldPrice: 13,
    calories: '80 Kcal',
    weight: '250 ml',
    category: 'Breakfast',
    description:
      'Freshly squeezed orange juice, packed with vitamins for a healthy boost.',
  },
  {
    id: '32',
    name: 'Strawberry Smoothie',
    image:
      'https://avatars.mds.yandex.net/i?id=37a4a4b553ceb98a119ab89ef0ec23f3_l-9311909-images-thumbs&n=13',
    price: 15,
    oldPrice: 18,
    calories: '150 Kcal',
    weight: '350 ml',
    category: 'Breakfast',
    description:
      'Creamy strawberry smoothie made with fresh strawberries and yogurt.',
  },
  {
    id: '33',
    name: 'Mojito',
    image: 'https://www.wsetglobal.com/media/15145/1086x672-mojito.png',
    price: 18,
    oldPrice: 22,
    calories: '100 Kcal',
    weight: '300 ml',
    category: 'Breakfast',
    description:
      'Classic mojito cocktail with fresh mint, lime, and sparkling water.',
  },
  {
    id: '34',
    name: 'Cheese Nachos',
    image:
      'https://avatars.mds.yandex.net/i?id=ddb3e03164e43fe06f789e3bdfa317ddf4cf297d013676c6-12569867-images-thumbs&n=13',
    price: 15,
    oldPrice: 20,
    calories: '300 Kcal',
    weight: '150 g',
    category: 'Lunch',
    description:
      'Crispy tortilla chips topped with melted cheese and served with salsa.',
  },
  {
    id: '35',
    name: 'Popcorn with Butter',
    image:
      'https://avatars.mds.yandex.net/i?id=173063bcca50b7528777adcbe354d5cd_l-9167418-images-thumbs&n=13',
    price: 10,
    oldPrice: 13,
    calories: '150 Kcal',
    weight: '100 g',
    category: 'Lunch',
    description:
      'Light and fluffy popcorn with a drizzle of butter for a savory snack.',
  },
];

export const filterData: Filter[] = [
  {
    id: 1,
    name: 'Dinner',
  },
  {
    id: 2,
    name: 'Lunch',
  },
  {
    id: 3,
    name: 'Breakfast',
  },
];
