import './FavoriteButton.css'
class FavoriteButton extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  set attribute(value) {
    this._attribute = value
    this.render()
  }

  render() {
    this.innerHTML = `
    <button class="btnLove"><i class="fa-solid fa-heart"></i></button>
    `
    this.querySelector('.btnLove').classList.add(this._attribute)
  }
}

customElements.define('favorite-button', FavoriteButton)