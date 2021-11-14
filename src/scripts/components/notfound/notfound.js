import RestaurantSource from '../../data/restaurant-source'
import '../card/CardContainer'
import './notfound.css'

class NotFound extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML =
    `<div class="image-notFound-container">
      <div class="NotFound-text">
        <h4>Oops...Konten Tidak Ditemukan</h4><br>
         <button id="showAllRestaurant">Tampilkan Kembali Restaurant</button>
      </div>
      <div class="image-notFound">
        <img src="/images/NotFound.png" alt="">
      </div>
    </div>
    `

    this.querySelector('#showAllRestaurant').addEventListener('click', async () => {
      const restaurants = await RestaurantSource.listRestaurant()
      const cardContainer = document.querySelector('card-container')
      cardContainer.ListRestaurants = restaurants
    })
  }
}
customElements.define('not-found', NotFound)