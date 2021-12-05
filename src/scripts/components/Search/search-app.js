import './search.css'
class SearchApp extends HTMLElement {
  // set Search(query) {
  //   this._query = query

  //   this._attachEventHandlers()
  //   this.render()
  // }

  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML =
    `<div class="searchContainer">
      <form class="search-restaurant-form">
        <input type="search" id="searchInput" placeholder="Cari Restoran">
        <button type="submit" id="searchSubmit">Cari</button>
      </form>
    </div>`
  }

  // _attachEventHandlers(){
  //   this.submitButton.addEventListener('click', (el) => {
  //     el.preventDefault
  //     if (searhForm.searchValue === '') {
  //       cardContainer.ListRestaurants = restaurants
  //     } else {
  //       const SearchResult = await RestaurantSource.searchRestaurant(searhForm.searchValue)
  //       cardContainer.ListRestaurants = SearchResult
  //     }
  //     searhForm.searchValue = ''
  //   })
  // }

  get searchValue() {
    return this.querySelector('#searchInput').value
  }

  set searchValue(value) {
    this.querySelector('#searchInput').value = value
  }

  get submitButton() {
    return this.querySelector('#searchSubmit')
  }
}

customElements.define('search-app', SearchApp)