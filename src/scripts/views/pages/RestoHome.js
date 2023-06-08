import RestaurantSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../template-creator';

const RestoHome = {
  async render() {
    return `
      <div class="content">
      <h2 class="list__Resto">List Restaurant</h2>
      <div id="restaurants" class="restaurants">
      </div>
    </div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getDataRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default RestoHome;
