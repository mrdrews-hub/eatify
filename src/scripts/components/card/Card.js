import CONFIG from '../../global/config'

class Card extends HTMLElement {
  set restaurantsData(restaurant) {
    this._restaurant = restaurant
    this.render()
  }

  render() {
    this.innerHTML = `
    <div class="card" tabindex=0>
      <div class="restoName">
      <h3><a href="/#/detail/${this._restaurant.id}">${this._restaurant.name}</a></h3>
      </div>

      <img src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}" alt="${this._restaurant.name}"/>

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