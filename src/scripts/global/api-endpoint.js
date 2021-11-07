import CONFIG from './config'

const API_ENDPOINT = {
  RestaurantList: `${CONFIG.BASE_URL}list`,
  DetailRestaurant: (id) => `${CONFIG.BASE_URL}detail/${id}`
}

export default API_ENDPOINT