import './hero.css'
import '../Search/search-app'
class Hero extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  render() {
    this.innerHTML = `
    <div class="hero-img">
      <div class="content-wrapper">
          <h2 class="hero-title">Mau Makan Dimana Hari ini ?</h2>
          <p class="hero-subtitle">Cari dan Temukan Restoran <span class="highlight">Favoritmu</span> disini</p>
          <search-app></search-app>
      </div>
    </div>
    `
  }
}
customElements.define('hero-app', Hero)