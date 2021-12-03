import RestaurantSource from '../../data/restaurant-source'
import '../../components/card/CardContainer'
import '../../components/card/Card'
import '../../components/loader/loader'
class Home {
  static async render() {
    return `
    <hero-app></hero-app>
    <div id="mainContent">
    </div>
    `
  }

  static async afterRender() {
    const content = document.querySelector('#mainContent')
    content.innerHTML = '<loading-bar></loading-bar>'
    const restaurants = await RestaurantSource.listRestaurant()
    content.innerHTML = `
    <div class="menu-title">
      <h2 tabindex="0">Daftar Restoran</h2>
    </div>
    <card-container>
    </card-container>`
    const cardContainer = document.querySelector('card-container')
    const searhForm = document.querySelector('search-app')
    const searchSubmit = searhForm.querySelector('#searchSubmit')
    cardContainer.ListRestaurants = restaurants

    searchSubmit.addEventListener('click', async (el) => {
      el.preventDefault()
      if (searhForm.searchValue === '') {
        cardContainer.ListRestaurants = restaurants
      } else {
        const SearchResult = await RestaurantSource.searchRestaurant(searhForm.searchValue)
        cardContainer.ListRestaurants = SearchResult
      }
      searhForm.searchValue = ''
    })

    const skipLink = document.querySelector('.skip-link')
    skipLink.addEventListener('click', (el) => {
      document.getElementById('searchInput').focus()
    })
  }
}
export default Home
