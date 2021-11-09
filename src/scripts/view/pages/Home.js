import RestaurantSource from '../../data/restaurant-source'
import '../../components/card/CardContainer'
import '../../components/card/Card'
class Home {
  static async render() {
    return `
    <hero-app></hero-app>
        <div class="menu-title">
          <h2 tabindex="0">Daftar Restoran</h2>
        </div>
        <card-container>
        </card-container>
    `
  }

  static async afterRender() {
    const restaurant = await RestaurantSource.listRestaurant()
    const cardContainer = document.querySelector('.card-list')
    restaurant.forEach((el) => {
      const restaurantCard = document.createElement('card-app')
      restaurantCard.restaurantsData = el
      cardContainer.appendChild(restaurantCard)
    })
  }
}
export default Home