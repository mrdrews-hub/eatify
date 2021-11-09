import CONFIG from '../../global/config'
import '../review/Review'
import '../form/review-form'
import './detail.css'
class Detail extends HTMLElement {
  set detail(restaurant) {
    this._detail = restaurant
    this.render()
  }

  render() {
    this.innerHTML = `
    <div class="detail">

    <img src="${CONFIG.BASE_IMAGE_URL + this._detail.pictureId}" alt="gambar restoran">
      
      <div class="detail-header">

        <div class="name">
          <h2>${this._detail.name}</h2>
        </div>

        <div class="cityText">
          <p><i class="fa-solid fa-location-dot"></i> ${this._detail.city}, ${this._detail.address}</p>
        </div>

        <div class="rating">
          <b><i class="fas fa-star"></i> ${this._detail.rating}</b>
        </div>

        <div class="badge-wrapper"></div>

        <button class="btnLove loved"><i class="fa-solid fa-heart"></i></button>

      </div>
      
      <div class="detail-description">
      <h3>Deskripsi</h3>
        <p>${this._detail.description}</p>
      </div>
      
      <div class="detail-menu">
      <div class="menu">
        <h3>Menu</h3>
        <hr>
      </div>
        <div class="foods">
          <h4 class="foods-title">Makanan</h4>
        </div>
        <div class="drinks">
          <h4 class="drinks-title">Minuman</h4>
        </div>
      </div>

      <review-app></review-app>
      <review-form></review-form>
    </div>
    `

    /* Create Badge Categories */
    const badgeContainer = this.querySelector('.badge-wrapper')
    this._detail.categories.forEach(categori => {
      const badge = document.createElement('div')
      badge.setAttribute('class', 'badge')
      badge.textContent = categori.name
      badgeContainer.append(badge)
    })

    /* Create Menu */
    // Foods
    const foodsContainer = this.querySelector('.foods')
    this._detail.menus.foods.forEach(food => {
      const foodItem = document.createElement('p')
      foodItem.setAttribute('class', 'foods-item')
      foodItem.innerHTML = `<b><i class="fas fa-utensils"></i> ${food.name}</b>`
      foodsContainer.append(foodItem)
    })
    // Drinks
    const drinksContainer = this.querySelector('.drinks')
    this._detail.menus.drinks.forEach(drink => {
      const drinkItem = document.createElement('p')
      drinkItem.setAttribute('class', 'drinks-item')
      drinkItem.innerHTML = `<b><i class="fas fa-beer"></i> ${drink.name}</b>`
      drinksContainer.append(drinkItem)
    })

    /* Customer Reviews */
    const reviewApp = this.querySelector('review-app')
    this._detail.customerReviews.forEach(review => {
      const reviewItem = document.createElement('review-item')
      reviewItem.reviews = review
      reviewApp.append(reviewItem)
    })
  }
}
customElements.define('detail-app', Detail)