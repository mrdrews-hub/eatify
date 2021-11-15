import '../../components/card/CardContainer'
import favoriteRestaurantIdb from '../../data/favoriteResaturant-idb'
class Favorite {
  static async render() {
    return `
      <div id="content">
      <h2 class="menu-title">Daftar Restoran Favorite Kamu</h2>
        <card-container>
        </card-container>
      </div>
    `
  }

  static async afterRender() {
    const favoriteRestaurants = await favoriteRestaurantIdb.getAllRestaurant()
    const content = document.querySelector('#content')
    console.log(favoriteRestaurants.length)
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
  }
}
export default Favorite