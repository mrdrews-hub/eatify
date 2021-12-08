import CONFIG from '../../global/config'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
class Card extends HTMLElement {
  set restaurantsData(restaurant) {
    this._restaurant = restaurant
    this.render()
  }

  render() {
    this.innerHTML = /* html */`
    <div class="card" tabindex=0>
      <div class="restoName">
      <h3><a href="/#/detail/${this._restaurant.id}">${this._restaurant.name}</a></h3>
      </div>

      <img loading="lazy" data-src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}" alt="${this._restaurant.name}" class="lazyload"/>

      <div class="card-title">

        <div class="rating">
          <h4>Rating</h4>
          <b><i class="fas fa-star"></i> ${this._restaurant.rating}</b>
        </div>

        <div class="city">
          <h4>Kota</h4>
          <b>${this._restaurant.city}</b>
        </div>
        
      </div>

      <div class="card-body" aria-label="deskripsi restoran">
      <p class="description">${this._restaurant.description}</p>
      </div>
    </div>
    `
  }
}
customElements.define('card-app', Card)