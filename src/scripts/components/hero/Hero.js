import './hero.css'
import '../Search/search-app'
class Hero extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  render() {
    this.innerHTML = /* html */`
    <div class="hero-container">
    
    <picture>
      <source media="(max-width: 600px)" srcset="/images/heros/hero-image-small.jpg">
      <source srcset="/images/heros/hero-image.webp" type="image/webp">
      <source srcset="/images/heros/hero-image-large.jpg">
      <img src="/images/heros/hero-image.jpg" alt="Hero" class="hero-image">
    </picture>
      <div class="hero-content">
          <h2 class="hero-title">Mau Makan Dimana Hari ini ?</h2>
          <p class="hero-subtitle">Cari dan Temukan Restoran Favoritmu disini</p>
          <search-app></search-app>
      </div>

    </div>
    `
  }
}
customElements.define('hero-app', Hero)