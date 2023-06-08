import API_ENDPOINT from '../globals/api-endpoint';

class restoDbSource {
  static async getDataRestaurant() {
    const response = await fetch(API_ENDPOINT.getResto);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async detailRestoFood(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant.menus.foods;
  }

  static async detailRestoDrink(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant.menus.drinks;
  }

  static async customerReviews(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant.customerReviews;
  }
}
export default restoDbSource;
