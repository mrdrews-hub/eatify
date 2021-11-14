import './search.css'
class SearchApp extends HTMLElement {
  // set clickEvent(event) {
  //   this._clickEvent = event
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
    // this.querySelector('#searchSubmit').addEventListener('click', this._clickEvent)
  }

  get searchValue() {
    return this.querySelector('#searchInput').value
  }

  set searchValue(value) {
    this.querySelector('#searchInput').value = value
  }
}

customElements.define('search-app', SearchApp)