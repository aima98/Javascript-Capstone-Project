import display from './display.js';
import fetch from './fetch.js';

const baseUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const displayDish = async () => {
  await fetch(baseUrl)
    .then((data) => display(data.results))
    .catch((err) => new Error(err));
};

export default displayDish;