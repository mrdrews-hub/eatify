import CONFIG from '../../global/config'
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
          <h4>Makanan</h4>
        </div>
        <div class="drinks">
          <h4>Minuman</h4>
        </div>
      </div>

      <div class ="reviewContainer">
        <h3>Ulasan Pelanggan</h3>
        <div class="review">
          <p>17 Januari 2021</p>
          <p><span>Oleh: </span> Andre Saputra</p>
          <p><span>Ulasan: </span> Makanannya Enak banget</p>
        </div>
        <div class="review">
          <p>18 Januari 2021</p>
          <p><span>Oleh: </span> Indri Sapitri</p>
          <p><span>Ulasan: </span> Minumannya Enak banget</p>
        </div>
        <form class="form-review">
        <h3>Tulis Reviewmu</h3>
          <input type="text" class="inputReview" placeholder="Tulis Namamu" required>
          <textarea cols="30" class="inputReview" rows="4" placeholder="Ulasanmu.." required></textarea>
          <br>
          <button type="submit" class="btn-submit"><i class="fas fa-paper-plane"></i> Kirim</button>
        </form>
      </div>
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
      foodItem.innerHTML = `<i class="fas fa-utensils"></i> ${food.name}`
      foodsContainer.append(foodItem)
    })
    // Drinks
    const drinksContainer = this.querySelector('.drinks')
    this._detail.menus.drinks.forEach(drink => {
      const drinkItem = document.createElement('p')
      drinkItem.innerHTML = `<i class="fas fa-beer"></i> ${drink.name}`
      drinksContainer.append(drinkItem)
    })
  }
}
customElements.define('detail-app', Detail)