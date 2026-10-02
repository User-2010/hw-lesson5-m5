import burgerImg from '../img/burger.png';
import fishImg from '../img/fish.png';
import pancakeImg from '../img/pancake.png';
import salatImg from '../img/salat.png';

export const recipesList = [
  {
    id: 1,
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    time: '30 Min',
    category: 'Snack',
    image: burgerImg,
    isFavorite: true,
  },
  {
    id: 2,
    title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
    time: '30 Min',
    category: 'Fish',
    image: fishImg,
    isFavorite: false,
  },
  {
    id: 3,
    title: 'Strawberry Oatmeal Pancake with Honey Syrup',
    time: '30 Min',
    category: 'Breakfast',
    image: pancakeImg,
    isFavorite: false,
  },
  {
    id: 4,
    title: 'Fresh and Healthy Salad with Mayonnaise',
    time: '30 Min',
    category: 'Healthy',
    image: salatImg,
    isFavorite: false,
  },
];