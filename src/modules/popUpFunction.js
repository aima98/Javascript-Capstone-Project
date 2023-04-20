import fetchLt from './fetch.js';

const popUp = document.querySelector('.pop__up');
popUp.innerHTML = '';
const popUpButton = document.querySelector('.close__btn');
const home = document.querySelector('.home');

popUp.classList.add('close');
popUpButton.classList.add('close');

const popUpFunction = (commentButton) => {
  commentButton.forEach((element) => {
    element.addEventListener('click', (e) => {
      const foodId = e.target.id;
      const getName = () => {
        fetchLt(`https://themealdb.com/api/json/v1/1/categories.php/${foodId}`).then(
          (data) => {
            const popUpItems = `<div class="pop__up__img">
            <img src="${data.strCategoryThumb}"/>
            </div>
            <div class="pop__up__title">
            <h2>${data.strCategory}</h2>
            <p>${data.strCategoryDescription}</p>
            </div> 
            `;
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