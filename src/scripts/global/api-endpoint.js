import CONFIG from './config'

const API_ENDPOINT = {
  RestaurantList: `${CONFIG.BASE_URL}list`,
  DetailRestaurant: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SearchRestaurant: (keyword) => `${CONFIG.BASE_URL}search?q=${keyword}`,
  reviewRestaurant: `${CONFIG.BASE_URL}review`
}

export default API_ENDPOINT