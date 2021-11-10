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

      <img src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}" alt="gambar restoran"/>

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

      <div class="card-body">
      <p class="description"></p>
      </div>

      <div class="card-footer">
        <button class="btnFavorite"><i class="fas fa-heart"></i> Tambah ke Favorite</button>
      </div>
    </div>
    `

    const description = this._restaurant.description
    if (description.length > 30) {
      const Summary = description.split(' ').slice(1, 31)
      this.querySelector('.description').textContent = Summary.join(' ') + '...'
    }
  }
}
customElements.define('card-app', Card)