import './card.css'
import './Card'
import '../notfound/notfound'
class CardContainer extends HTMLElement {
  set ListRestaurants(restaurants) {
    this._restaurants = restaurants
    this.render()
  }

  set Description(text) {
    this._description = text
  }

  render() {
    this.innerHTML = `
    <div class="container-description">
    ${this._description}
    </div>
    <div class="card-list">
    </div>
    `
    this._restaurants.forEach((restaurant) => {
      const restaurantCard = document.createElement('card-app')
      restaurantCard.restaurantsData = restaurant
      this.querySelector('.card-list').appendChild(restaurantCard)
    })
  }
}
customElements.define('card-container', CardContainer)