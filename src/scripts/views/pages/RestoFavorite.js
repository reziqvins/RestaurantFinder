import favoriteRestaurant from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../template-creator';

const RestoFavorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="list__Resto">Your Favorite Restaurant</h2>
        <div id="restaurants" class="restaurants">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await favoriteRestaurant.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML += '<p class="restaurant-not__found">Tidak ada restaurant untuk ditampilkan</p>';
    }
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default RestoFavorite;
