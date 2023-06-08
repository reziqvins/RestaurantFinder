import restoDbSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import {
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  RestoDrinksTemplate,
  RestoFoodsTemplate,
  RestoReviewTemplate,
} from '../template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';

const Restodetail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
      <div class="content-title">
              <h5>Food</h5>
            </div>
        <div id="food" class="section"></div>
        <div class="content-title">
        <h5>Drink</h5>
      </div>
      <div id="drink" class="section"></div>
        <div class="content-title">
                    <h5>Review</h5>
                  </div>
  <div id="review" class="section"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await restoDbSource.detailResto(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant);
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });

    const foods = await restoDbSource.detailRestoFood(url.id);
    const foodContainer = document.querySelector('#food');
    foods.forEach((food) => {
      foodContainer.innerHTML += RestoFoodsTemplate(food);
    });
    const drinks = await restoDbSource.detailRestoDrink(url.id);
    const drinkContainer = document.querySelector('#drink');
    drinks.forEach((drink) => {
      drinkContainer.innerHTML += RestoDrinksTemplate(drink);
    });
    const reviews = await restoDbSource.customerReviews(url.id);
    const reviewContainer = document.querySelector('#review');
    reviews.forEach((review) => {
      reviewContainer.innerHTML += RestoReviewTemplate(review);
    });
  },
};

export default Restodetail;
