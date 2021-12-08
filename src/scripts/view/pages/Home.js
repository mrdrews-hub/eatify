import RestaurantSource from '../../data/restaurant-source'
import '../../components/card/CardContainer'
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
    <h2 class="menu-title">Daftar Restoran</h2>
    <card-container>
    </card-container>`
    const cardContainer = document.querySelector('card-container')
    const searchForm = document.querySelector('search-app')
    cardContainer.Description = 'Menampilkan Seluruh Restoran'
    cardContainer.ListRestaurants = restaurants
    searchForm.submitButton.addEventListener('click', async (el) => {
      el.preventDefault()
      if(!window.navigator.onLine){
        alert('Tidak dapat menulis review ketika offline')
      } else {
        if (searchForm.searchValue === '') {
          cardContainer.Description = 'Menampilkan Seluruh Restoran'
          cardContainer.ListRestaurants = restaurants
        } else {
          const SearchResult = await RestaurantSource.searchRestaurant(searchForm.searchValue)
          cardContainer.Description = `Menampilkan ${SearchResult.length} Restoran dengan kata kunci "${searchForm.searchValue}"`
          cardContainer.ListRestaurants = SearchResult
        }
        searchForm.searchValue = ''
      }
    })

    const skipLink = document.querySelector('.skip-link')
    skipLink.addEventListener('click', (el) => {
      document.getElementById('searchInput').focus()
    })
  }
}
export default Home
