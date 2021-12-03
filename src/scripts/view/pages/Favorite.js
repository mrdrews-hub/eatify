import '../../components/card/CardContainer'
import favoriteRestaurantIdb from '../../data/favoriteResaturant-idb'
class Favorite {
  static async render() {
    return `
      <div id="content" tabindex="0">
      <h2 class="menu-title">Daftar Restoran Favorite Kamu</h2>
        <card-container>
        </card-container>
      </div>
    `
  }

  static async afterRender() {
    const favoriteRestaurants = await favoriteRestaurantIdb.getAllRestaurant()
    const content = document.querySelector('#content')
    if (favoriteRestaurants.length === 0) {
      content.innerHTML = `
      <div class="favorite-null">
        <h2 class="menu-title">Restoran Favoritmu Masih Kosong</h2>
        <img src="/images/31.png" alt="" class="imageFavorite-kosong">
      </div>
      `
    } else {
      const cardContainer = document.querySelector('card-container')
      cardContainer.ListRestaurants = favoriteRestaurants
    }

    const skipLink = document.querySelector('.skip-link')
    skipLink.addEventListener('click', (el) => {
      content.focus()
    })
  }
}
export default Favorite