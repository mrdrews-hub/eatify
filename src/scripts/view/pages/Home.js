import RestaurantSource from '../../data/restaurant-source'
import '../../components/card/CardContainer'
import '../../components/card/Card'
class Home {
  static async render() {
    return `
    <hero-app></hero-app>
    <div id="content">
      <div class="menu-title">
        <h2 tabindex="0">Daftar Restoran</h2>
      </div>
      <card-container>
      </card-container>
    </div>
    `
  }

  static async afterRender() {
    const cardContainer = document.querySelector('card-container')
    const searhForm = document.querySelector('search-app')
    const searchSubmit = searhForm.querySelector('#searchSubmit')

    const restaurants = await RestaurantSource.listRestaurant()
    cardContainer.ListRestaurants = restaurants

    searchSubmit.addEventListener('click', async (el) => {
      el.preventDefault()
      const SearchResult = await RestaurantSource.searchRestaurant(searhForm.searchValue)
      cardContainer.ListRestaurants = SearchResult
      searhForm.searchValue = ''
    })
  }
}
export default Home
