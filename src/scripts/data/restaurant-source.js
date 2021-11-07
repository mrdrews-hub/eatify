import API_ENDPOINT from '../global/api-endpoint'

class RestaurantSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.RestaurantList)
    const responseJSON = await response.json()
    return responseJSON.restaurants
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DetailRestaurant(id))
    const responseJSON = await response.json()
    return responseJSON.restaurant
  }
}

export default RestaurantSource