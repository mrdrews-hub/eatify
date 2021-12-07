import './search.css'
class SearchApp extends HTMLElement {
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