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

  static async searchRestaurant(keyword) {
    const response = await fetch(API_ENDPOINT.SearchRestaurant(keyword))
    const responseJSON = await response.json()
    return responseJSON.restaurants
  }

  static async POSTreview(data) {
    const response = await fetch(API_ENDPOINT.reviewRestaurant, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return response.json()
  }
}

export default RestaurantSource