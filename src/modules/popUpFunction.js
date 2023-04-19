/* eslint-disable no-unused-vars */
import fetch from './fetch.js';

const popUp = document.querySelector('.pop__up');
popUp.innerHTML = '';
const popUpButton = document.querySelector('.close__btn');
const home = document.querySelector('.home');

popUp.classList.add('close');
popUpButton.classList.add('close');

const popUpFunction = (commentButton) => {
  commentButton.forEach((element) => {
    element.addEventListener('click', (e) => {
      const dishId = e.target.id;
      const getName = () => {
        fetch('https://themealdb.com/api/json/v1/1/categories.php/}').then(
          (data) => {
            const popUpItems = `<div class="pop__up__img">
            <img src="${data.strCategoryThumb}" alt="Dishes category />
            </div>
            <div class="pop__up__title">
            <h2>${data.strCategory}</h2>
            </div> `;
            popUp.innerHTML = popUpItems;
          },
        );
      };
      getName();
      home.classList.add('close');
      popUp.classList.remove('close');
      popUpButton.classList.remove('close');
    });
    popUpButton.addEventListener('click', () => {
      home.classList.remove('close');
      popUp.classList.add('close');
      popUpButton.classList.add('close');
    });
  });
};
export default popUpFunction;