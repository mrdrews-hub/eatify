import RestaurantSource from '../../data/restaurant-source'
import '../../components/card/CardContainer'
import '../../components/card/Card'
class Home {
  static async render() {
    return `
    <hero-app></hero-app>
    <div id="content">

    </div>
    `
  }

  static async afterRender() {
    const content = document.querySelector('#content')
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
      const SearchResult = await RestaurantSource.searchRestaurant(searhForm.searchValue)
      cardContainer.ListRestaurants = SearchResult
      searhForm.searchValue = ''
    })
  }
}
export default Home
