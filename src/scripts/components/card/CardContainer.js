import './card.css'
import './Card'
import '../notfound/notfound'
class CardContainer extends HTMLElement {
  set ListRestaurants(restaurants) {
    this._restaurants = restaurants
    this.checkContent()
  }

  checkContent() {
    if (this._restaurants.length === 0) {
      this.renderNotFound()
    } else {
      this.render()
    }
  }

  render() {
    this.innerHTML = `
    <div class="card-list">
    </div>
    `
    this._restaurants.forEach((restaurant) => {
      const restaurantCard = document.createElement('card-app')
      restaurantCard.restaurantsData = restaurant
      this.querySelector('.card-list').appendChild(restaurantCard)
    })
  }

  renderNotFound() {
    this.innerHTML = ''
    this.innerHTML += '<not-found></not-found>'
    // this.querySelector('#showAllRestaurant').addEventListener('click', () => {
    //   this.render()
    // })
  }
}
customElements.define('card-container', CardContainer)