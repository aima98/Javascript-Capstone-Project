import fetchLt from './fetch.js';

const displayList = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

  const category = await fetchLt(url);

  const cardContainer = document.querySelector('.container-cards');
  cardContainer.innerHTML = '';
  const cards = category.categories.map((data) => `
    <div class="card">
        <img src=${data.strCategoryThumb} alt="Dishes category">
        <div class="card-about">
            <p class="card-name">
               ${data.strCategory}
            </p>
            <div class="like">
                <i class="fa-regular fa-heart"></i>
                <span class="like-count">5 Likes</span>
            </div>
        </div>
        <div class="card-more">
            <button type="button" class="card-btn">Comments</button>
            <button type="button" class="card-btn">Reservations</button>
        </div>
    </div>`).join('');
  cardContainer.innerHTML = cards;
};

export default displayList;