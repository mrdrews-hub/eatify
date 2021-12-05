import './FavoriteButton.css'
class FavoriteButton extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  set attribute(attribute) {
    this._attribute = attribute
    this.render()
  }

  set label(label) {
    this._label = label
    this.render()
  }

  render() {
    this.innerHTML = `
    <button class="btnLove" tabindex="0"><i class="fa-solid fa-heart"></i></button>
    `
    this.querySelector('.btnLove').classList.add(this._attribute)
    this.querySelector('.btnLove').setAttribute('aria-label',this._label)
  }
}

customElements.define('favorite-button', FavoriteButton)