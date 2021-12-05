const searchRestaurantPresenter = {
  async init({ searchComponent, restaurantAPI }) {
    this._searchComponent = searchComponent
    this._restaurantSource = restaurantAPI

    this._renderRequest()
  },

  async _renderRequest() {
    if(await this._isRestaurantExist) {
      this._renderRestaurant()
    } else {
      this._renderNotFound()
    }
  },

  _listentoEventSearchbyUser(){
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
  },

  _renderRestaurant() {

  },

  _renderNotFound() {

  },

  _isRestaurantExist() {
    
  }
}

export default searchRestaurantPresenter